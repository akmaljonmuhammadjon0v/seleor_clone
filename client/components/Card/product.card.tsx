'use client';
import { IProduct } from '@/types';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { formatPrice } from '@/lib/utils';
import NoSSR from '@/lib/ssr';
interface Props {
	product: Partial<IProduct>;
}

const ProductCard = ({ product }: Props) => {
	const router = useRouter();

	return (
		<div
			onClick={() => router.push(`/product/${product._id}`)}
			className='cursor-pointer'
		>
			<div className='bg-secondary relative group'>
				<Image
					src={product.image!}
					alt={product.title!}
					width={300}
					height={300}
					className='object-cover'
				/>
				<div className='absolute right-0 top-0 z-50 opacity-0 group-hover:opacity-100 transition-all'>
					<Button size={'icon'} className='m-2'>
						<Heart />
					</Button>
				</div>
			</div>
			<div className='flex justify-between items-center mt-2 text-sm'>
				<h1 className='font-bold line-clamp-1'>{product.title}</h1>
				<NoSSR>
					<p className=''>{formatPrice(product.price!)}</p>
				</NoSSR>
			</div>
		</div>
	);
};

export default ProductCard;
