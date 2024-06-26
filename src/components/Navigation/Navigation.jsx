import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { FcHome } from 'react-icons/fc';
import { FcContacts } from 'react-icons/fc';
import styles from './Navigation.module.css';

export const Navigation = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<nav className={styles.nav}>
			<NavLink className={styles.link} to='/'>
				<FcHome />
				<span>Home</span>
			</NavLink>
			{isLoggedIn && (
				<NavLink className={styles.link} to='/contacts'>
					<FcContacts />
					<span>Contacts</span>
				</NavLink>
			)}
		</nav>
	);
};

export default Navigation;
