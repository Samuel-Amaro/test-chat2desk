import { Suspense } from 'react';
import styles from './page.module.css';
import List from '@/components/List';

export default function Home() {
	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<h1 className={styles.title}>Teste Chat2Desk</h1>
			</header>
			<main className={styles.main}>
				<Suspense fallback={<p className={styles.load}>Loading...</p>}>
					<List />
				</Suspense>
			</main>
		</div>
	);
}
