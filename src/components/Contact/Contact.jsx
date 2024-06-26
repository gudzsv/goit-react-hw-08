import { IoIosContact } from 'react-icons/io';
import { MdPhoneInTalk } from 'react-icons/md';

import { AiOutlineUserDelete } from 'react-icons/ai';
import { LiaUserEditSolid } from 'react-icons/lia';

import styles from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import EditContactModal from '../EditContactModal/EditContactModal';
import DeleteContactModal from '../DeleteContactModal/DeleteContactModal';
import { useEffect, useRef, useState } from 'react';

const Contact = ({ contact }) => {
	const bodyRef = useRef(document.body);
	const dispatch = useDispatch();

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	useEffect(() => {
		const body = bodyRef.current;
		isEditModalOpen
			? body.classList.add('disable-scroll')
			: body.classList.remove('disable-scroll');

		return () => {
			body.classList.remove('disable-scroll');
		};
	}, [isEditModalOpen]);

	const handleDelete = () => {
		handleCloseDeleteModal();
		dispatch(deleteContact(contact.id));
	};

	const handleUpdateContact = (modifiedContact) => {
		handleCloseEditModal();
		dispatch(updateContact(modifiedContact));
	};

	const handleOpenEditNodal = () => setIsEditModalOpen(true);

	const handleCloseEditModal = () => setIsEditModalOpen(false);

	const handleOpenDeleteNodal = () => setIsDeleteModalOpen(true);

	const handleCloseDeleteModal = () => setIsDeleteModalOpen(false);

	return (
		<>
			<li className={styles.contactItem}>
				<div>
					<div className={styles.contactContext}>
						<IoIosContact />
						<span>{contact.name}</span>
					</div>
					<div className={styles.contactContext}>
						<MdPhoneInTalk />
						<a href={`tel: ` + contact.number}>{contact.number}</a>
					</div>
				</div>
				<div className={styles.btnWrapper}>
					<button
						onClick={handleOpenEditNodal}
						type='button'
						aria-label='edit button'
					>
						<LiaUserEditSolid color='#5c9beb' />
					</button>
					<button
						onClick={handleOpenDeleteNodal}
						type='button'
						aria-label='delete button'
					>
						<AiOutlineUserDelete color='tomato' />
					</button>
				</div>
			</li>

			{isEditModalOpen && (
				<EditContactModal
					handleCloseModal={handleCloseEditModal}
					handleUpdateContact={handleUpdateContact}
					id={contact.id}
				/>
			)}
			{isDeleteModalOpen && (
				<DeleteContactModal
					contact={contact}
					handleDelete={handleDelete}
					handleCancel={handleCloseDeleteModal}
				/>
			)}
		</>
	);
};

export default Contact;
