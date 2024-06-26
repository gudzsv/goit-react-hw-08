import { BiSolidErrorAlt } from 'react-icons/bi';
import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
	return (
		<div className={styles.errorContainer}>
			<BiSolidErrorAlt className={styles.errorIcon} />
			<p className={styles.errorText}>
				Something went wrong, please reload you page!
			</p>
		</div>
	);
};

export default ErrorMessage;
