import { useHotkeys } from 'react-hotkeys-hook';
import styles from './DeleteContactModal.module.css';

const DeleteContactModal = ({ contact, handleDelete, handleCancel }) => {
	useHotkeys('esc', () => handleCancel());

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modal}>
				<p>
					Are you sure you want to delete contact: <b>{contact.name}</b> ?
				</p>
				<div className={styles.btnWrapper}>
					<button
						onClick={handleDelete}
						className={styles.deleteBtn}
						type='button'
						aria-label='delete button'
					>
						Delete
					</button>
					<button
						onClick={handleCancel}
						className={styles.cancelBtn}
						type='button'
						aria-label='cancel button'
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteContactModal;
