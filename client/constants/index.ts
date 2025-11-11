import {
	Banknote,
	Barcode,
	Heart,
	Settings2,
	Shuffle,
	User,
} from 'lucide-react';

export const categories = [
	'All',
	'Shoes',
	'T-Shirts',
	'Clothes',
	'Books',
	'Accessories',
	'Universal',
];

export const dashboardSidebar = [
	{ name: 'Personal Information', route: '/dashboard', icon: User },
	{ name: 'Orders', route: '/dashboard/orders', icon: Shuffle },
	{ name: 'Payments', route: '/dashboard/payments', icon: Banknote },
	{ name: 'Watch list', route: '/dashboard/watch-list', icon: Heart },
	{ name: 'Settings', route: '/dashboard/settings', icon: Settings2 },
];

export const adminSidebar = [
	{ name: 'Customers', icon: User, route: '/admin' },
	{ name: 'Products', icon: Barcode, route: '/admin/products' },
	{ name: 'Orders', icon: Shuffle, route: '/admin/orders' },
	{ name: 'Payments', icon: Banknote, route: '/admin/payments' },
];

export const TransactionState = {
	Paid: 2,
	Pending: 1,
	PendingCanceled: -1,
	PaidCanceled: -2,
};

export const orderSteps = [
	{ label: '1. Confirm order', value: 'Order confirmed' },
	{ label: '2. Start delivery', value: 'Order started to delivery' },
	{ label: '3. Delivery in progress', value: 'Delivery in progress' },
	{ label: '4. Complete delivery', value: 'Delivery completed' },
	{ label: '5. Mark as delivered', value: 'Order delivered' },
];
