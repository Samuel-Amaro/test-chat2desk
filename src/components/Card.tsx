import { getLettersCase } from '@/lib/utils';
import styles from './card.module.css';
import Link from 'next/link';

export default function Card({
	data
}: {
	data: {
		name: string;
		email: string;
		avatar?: string;
		id: number;
	};
}) {
	return (
		<Link
			href={`/contacts/${data.id}`}
			aria-label={`Go to contact details ${data.name}`}
			rel="next"
			title={`Go to contact details ${data.name}`}
			className={styles.card}
		>
			{data.avatar ? (
				// eslint-disable-next-line @next/next/no-img-element
				<img src={data.avatar} alt={`image profile ${data.name}`} className={styles.img} />
			) : (
				<span className={styles.img}>{getLettersCase(data.name)}</span>
			)}
			<h2 className={styles.name}>{data.name}</h2>
			<h3 className={styles.email}>{data.email}</h3>
		</Link>
	);
}
