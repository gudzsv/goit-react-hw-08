import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

import styles from './AppBar.module.css';

const AppBar = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	return (
		<header className={styles.header}>
			<Navigation />
			{isLoggedIn ? <UserMenu /> : <AuthNav />}
		</header>
	);
};

export default AppBar;
