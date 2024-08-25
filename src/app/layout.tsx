import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '../styles/index.css';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
	title: 'Teste Chat2Desk',
	description: 'Teste tecnico para empresa vaga Front-End Developer na Chat2Desk'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
