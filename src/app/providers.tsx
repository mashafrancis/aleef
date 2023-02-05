'use client';

import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function Providers({ children }: Props) {
	return <SessionProvider>{children}</SessionProvider>;
}
