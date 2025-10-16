import { Button } from '@/components/ui/button';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { EllipsisVertical } from 'lucide-react';

const OrderActions = () => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button size={'icon'} className='size-6' variant={'outline'}>
					<EllipsisVertical />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-40 p-1' side='right'>
				<div className='flex flex-col space-y-0'>
					<Button size={'sm'} className='justify-start text-xs'>
						1. Confirm order
					</Button>
					<Button size={'sm'} className='justify-start text-xs'>
						2. Start delivery
					</Button>
					<Button size={'sm'} className='justify-start text-xs'>
						3. Delivery in progress
					</Button>
					<Button size={'sm'} className='justify-start text-xs'>
						4. Complete delivery
					</Button>
					<Button size={'sm'} className='justify-start text-xs'>
						5. Mark as delivered
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default OrderActions;
