import { Suspense } from 'react';
import styles from './page.module.css';
import DetailsContact from '@/components/DetailsContact';
import Link from 'next/link';

export default function Page({ params }: { params: { id: number } }) {
	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<Link href="/" aria-label="Back Home" title="Back Home" className={styles.back}>
					Back Home
				</Link>
			</header>
			<Suspense fallback={<p className={styles.load}>Loading...</p>}>
				<DetailsContact id={params.id} />
			</Suspense>
		</div>
	);
}
