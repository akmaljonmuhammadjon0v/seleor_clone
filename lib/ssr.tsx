import dynamic from 'next/dynamic';
import React, { ReactNode } from 'react';

interface NoSSRProps {
	children: ReactNode;
}

const NoSSR = ({ children }: NoSSRProps) => (
	<React.Fragment>{children}</React.Fragment>
);

export default dynamic(() => Promise.resolve(NoSSR), { ssr: false });
