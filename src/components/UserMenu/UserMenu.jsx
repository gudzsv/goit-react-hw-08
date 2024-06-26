import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { CiLogout } from 'react-icons/ci';

import styles from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	const handleLogOut = () => dispatch(logOut());

	return (
		<div className={styles.wrapper}>
			{user && <p className={styles.username}>Welcome, {user.name}</p>}
			<button className={styles.btn} type='button' onClick={handleLogOut}>
				<CiLogout />
				<span>LogOut</span>
			</button>
		</div>
	);
};

export default UserMenu;
