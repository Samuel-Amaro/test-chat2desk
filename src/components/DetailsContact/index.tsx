import { Contact } from '@/types';
import styles from './contact.module.css';
import { getLettersCase } from '@/lib/utils';

async function getContact(id: number) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

	if (!response.ok) {
		return 'Error in fetch datas';
	}

	return (await response.json()) as Contact;
}

export default async function DetailsContact({ id }: { id: number }) {
	const result = await getContact(id);

	if (typeof result === 'string') {
		return (
			<div className={styles.warning}>
				<h2 className={styles.heading}>Ops...</h2>
				<p className={styles.text}>There was an error loading contacts, please try again later</p>
			</div>
		);
	}

	return (
		<>
			<span className={styles.img}>{getLettersCase(result.name)}</span>
			<div className={styles.container}>
				<table className={styles.table}>
					<caption className={styles.caption}>Details from contact {result.name}</caption>
					<tbody className={styles.tbody}>
						<tr className={styles.tr}>
							<th className={`${styles.cell} ${styles.th}`}>Name</th>
							<td className={styles.cell}>{result.name}</td>
						</tr>
						<tr className={styles.tr}>
							<th className={`${styles.cell} ${styles.th}`} scope="row">
								Username
							</th>
							<td className={styles.cell}>{result.username}</td>
						</tr>
						<tr className={styles.tr}>
							<th className={`${styles.cell} ${styles.th}`} scope="row">
								Email
							</th>
							<td className={styles.cell}>{result.email}</td>
						</tr>
						<tr className={styles.tr}>
							<th className={`${styles.cell} ${styles.th}`} scope="row">
								Address
							</th>
							<td className={styles.cell}>
								<address>
									{result.address.street}
									<br />
									{result.address.suite}
									<br />
									{result.address.city}
								</address>
							</td>
						</tr>
						<tr className={styles.tr}>
							<th className={`${styles.cell} ${styles.th}`} scope="row">
								Phone
							</th>
							<td className={styles.cell}>{result.phone}</td>
						</tr>
						<tr className={styles.tr}>
							<th className={`${styles.cell} ${styles.th}`} scope="row">
								Website
							</th>
							<td className={styles.cell}>
								<a
									href={result.website}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Website from ${result.name}`}
								>
									{result.website}
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}
