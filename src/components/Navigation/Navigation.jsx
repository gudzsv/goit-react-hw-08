import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import styles from './Navigation.module.css';

export const Navigation = () => {
	const { isLoggedIn } = useSelector(selectIsLoggedIn);

	return (
		<nav>
			<NavLink className={styles.link} to='/'>
				Home
			</NavLink>
			{isLoggedIn && (
				<NavLink className={styles.link} to='/contacts'>
					Contacts
				</NavLink>
			)}
		</nav>
	);
};

export default Navigation;
