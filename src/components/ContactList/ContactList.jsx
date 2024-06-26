import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => {
	return (
		<ul className={styles.contactList}>
			{contacts.map((contact) => (
				<Contact key={contact.id} contact={contact} />
			))}
		</ul>
	);
};

export default ContactList;
