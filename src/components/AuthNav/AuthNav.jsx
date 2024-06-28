import { NavLink } from 'react-router-dom';

import styles from './AuthNav.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
	return clsx(styles.link, isActive && styles.active);
};

const AuthNav = () => {
	return (
		<div>
			<NavLink className={buildLinkClass} to='/register'>
				Register
			</NavLink>
			<NavLink className={buildLinkClass} to='/login'>
				Log In
			</NavLink>
		</div>
	);
};

export default AuthNav;
