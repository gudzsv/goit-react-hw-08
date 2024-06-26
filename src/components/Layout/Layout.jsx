import { Suspense } from 'react';
import styles from './Layout.module.css';
import AppBar from '../AppBar/AppBar';
// import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
	return (
		<div>

			<AppBar className={styles.barContainer} />
			<main className={styles.pageContainer}>
				<Suspense fallback={null}>{children}</Suspense>
			</main>
		</div>
	);
};

export default Layout;
