import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import {
	selectError,
	selectFilteredContacts,
	selectLoading,
} from '../../redux/contacts/selectors';
import ContactList from '../../components/ContactList/ContactList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

import styles from './ContactsPage.module.css';
import Loader from '../../components/Loader/Loader';

const ContactsPage = () => {
	// const contacts = useSelector(selectContacts);
	const dispatch = useDispatch();
	const loading = useSelector(selectLoading);
	const error = useSelector(selectError);
	const contacts = useSelector(selectFilteredContacts);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<div className={styles.wrapper}>
			<ContactForm />
			<div>
				<SearchBox />
				{loading && <Loader />}
				{error && <ErrorMessage />}
				{contacts.length > 0 && <ContactList contacts={contacts} />}
			</div>
		</div>
	);
};

export default ContactsPage;
