'use client';

import { updateOrder } from '@/actions/admin.action';
import { Button } from '@/components/ui/button';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { orderSteps } from '@/constants';
import useAction from '@/hooks/use-action';
import { toast } from '@/hooks/use-toast';
import { IOrder } from '@/types';
import { EllipsisVertical } from 'lucide-react';
import { FC, useState } from 'react';

interface Props {
	order: IOrder;
}
const OrderActions: FC<Props> = ({ order }) => {
	const [open, setOpen] = useState(false);
	const { isLoading, onError, setIsLoading } = useAction();

	const onUpdateStatus = async (status: string) => {
		setIsLoading(true);
		const res = await updateOrder({ id: order._id, status });
		if (res?.serverError || res?.validationErrors || !res?.data) {
			return onError('Something went wrong');
		}
		if (res.data.failure) {
			return onError(res.data.failure);
		}
		toast({ description: 'Order updated successfully' });
		setIsLoading(false);
		setOpen(false);
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button size={'icon'} className='size-6' variant={'outline'}>
					<EllipsisVertical />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-40 p-1' side='right'>
				<div className='flex flex-col space-y-0'>
					{orderSteps.map(step => (
						<Button
							key={step.value}
							size='sm'
							className='justify-start'
							disabled={isLoading || order.status === step.value}
							onClick={() => onUpdateStatus(step.value)}
						>
							{step.label}
						</Button>
					))}
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default OrderActions;
