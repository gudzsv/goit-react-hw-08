import './App.css';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<>
			<h1>Phone book</h1>
			<ContactForm />
			<SearchBox />
			<ContactList />
		</>
	);
}

export default App;
