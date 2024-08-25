import { Contact } from '@/types';
import styles from './list.module.css';
import Card from './Card';

async function getContacts() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');

	if (!response.ok) {
		return 'Error in fetch datas'
	}

	return (await response.json()) as Contact[];
}

export default async function List() {
	const result = await getContacts();

  if(typeof result === "string") {
    return (
      <div className={styles.warning}>
        <h2 className={styles.heading}>Ops...</h2>
        <p className={styles.text}>There was an error loading contacts, please try again later</p>
      </div>
    )
  }

	return (
		<ul className={styles.list}>
			{result.map((contact) => (
				<li key={contact.id}>
					<Card data={contact} />
				</li>
			))}
		</ul>
	);
}
