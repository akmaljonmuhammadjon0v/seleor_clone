'use client';

import { ChildProps } from '@/types';
import { SessionProvider as Session } from 'next-auth/react';
import { FC, Suspense } from 'react';
import NoSSR from 'react-no-ssr';

const SessionProvider: FC<ChildProps> = ({ children }) => {
	return (
		<NoSSR>
			<Session>
				<Suspense>{children}</Suspense>
			</Session>
		</NoSSR>
	);
};

export default SessionProvider;
