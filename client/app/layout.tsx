import { ChildProps } from '@/types';
import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/shared/navbar';
import SessionProvider from '@/components/providers/session.provider';
import NextTopLoader from 'nextjs-toploader';

const montserrat = Montserrat({
	weight: ['400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Seleor e-commerce',
	description: 'An e-commerce website built with Next.js and Tailwind CSS',
	icons: {
		icon: '/favicon.png',
	},
};

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en'>
			<body className={`${montserrat.className} antialiased`}>
				<SessionProvider>
					<Navbar />
					<main className='container max-w-6xl mt-24'>{children}</main>
					<Toaster />
					<NextTopLoader showSpinner={false} />
				</SessionProvider>
			</body>
		</html>
	);
}

// bug fixed
