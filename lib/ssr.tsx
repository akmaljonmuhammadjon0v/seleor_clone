import dynamic from 'next/dynamic';
import React, { ReactNode } from 'react';

interface NoSsrProps {
	children: ReactNode;
}

const NoSSR = ({ children }: NoSsrProps) => (
	<React.Fragment>{children}</React.Fragment>
);

export default dynamic(() => Promise.resolve(NoSSR), { ssr: false });
