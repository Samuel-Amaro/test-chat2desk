'use client';

import Link from 'next/link';
import styles from './page.module.css';

export default function Error({
	error,
	reset
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h2 className={styles.head}>Something went wrong!</h2>
				<div className={styles.buttons}>
					<button className={styles.button} onClick={() => reset()}>
						Try again
					</button>
					<Link href="/" className={styles.button}>
						Home
					</Link>
				</div>
			</div>
		</div>
	);
}
