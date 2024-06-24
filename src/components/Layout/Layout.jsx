import { Suspense } from 'react';
import styles from './Layout.module.css';
import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<AppBar />
			<Suspense fallback={null}>{children}</Suspense>
		</div>
	);
};

export default Layout;
