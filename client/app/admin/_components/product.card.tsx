'use client';
import { Badge } from '@/components/ui/badge';
import { IProduct } from '@/types';
import Image from 'next/image';
import React from 'react';
import NoSSR from '@/lib/ssr';
import { Separator } from '@/components/ui/separator';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useProduct } from '@/hooks/use-product';

interface Props {
	product: Partial<IProduct>;
}

const ProductCard = ({ product }: Props) => {
	const { setOpen } = useProduct();

	const onEdit = () => {
		setOpen(true);
	};
	return (
		<div className={'border relative flex justify-between flex-col'}>
			<div className='bg-secondary relative '>
				<Image
					src={product.image!}
					alt={product.title!}
					width={300}
					height={300}
					className='object-cover'
				/>
				<Badge className='absolute top-0 left-0'>{product.category}</Badge>
			</div>
			<div className='p-2'>
				<div className='flex justify-between items-center text-sm'>
					<h1 className='font-bold'>{product.title}</h1>
					<NoSSR>
						<p className='font-medium'>{formatPrice(product.price!)}</p>
					</NoSSR>
				</div>
				<p className='text-xs text-muted-foreground leading-4'>
					{product.description}
				</p>
				<Separator className='my-2' />
			</div>
			<div className='grid grid-cols-2 gap-2 px-2 pb-2'>
				<Button variant={'secondary'} onClick={onEdit}>
					Edit
				</Button>
				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button variant={'outline'}>Delete</Button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
							<AlertDialogDescription>
								This action cannot be undone. This will permanently delete your
								account and remove your data from our servers.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Cancel</AlertDialogCancel>
							<AlertDialogAction>Continue</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</div>
		</div>
	);
};

export default ProductCard;
