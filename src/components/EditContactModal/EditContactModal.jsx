import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ImCancelCircle } from 'react-icons/im';
import { FaRegSave } from 'react-icons/fa';
import { useHotkeys } from 'react-hotkeys-hook';

import styles from './EditContactModal.module.css';

import { selectContacts } from '../../redux/contacts/selectors';

const ContactSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, `The "Name" is too Short!`)
		.max(50, `The "Name" is too Long!`)
		.required('The "Name" is Required field!'),
	number: Yup.string()
		.min(3, `The "Number" is too Short!`)
		.max(50, `The "Number" is too Long!`)
		.required('The "Number" is Required field!'),
});

const EditContactModal = ({ handleUpdateContact, handleCloseModal, id }) => {
	const contacts = useSelector(selectContacts);

	const contact = useMemo(
		() => contacts.find((contact) => contact.id === id),
		[contacts, id]
	);

	const [initialValues, setInitialValues] = useState({
		name: '',
		number: '',
	});

	useEffect(() => {
		if (contact) {
			setInitialValues({
				name: contact ? contact.name : '',
				number: contact ? contact.number : '',
			});
		}
	}, [contact]);

	const handleSubmit = (values, actions) => {
		handleUpdateContact({ id, ...values });

		actions.setSubmitting(false);
		actions.resetForm();
	};

	useHotkeys('esc', () => handleCloseModal());

	return (
		<div className={styles.modalOverlay}>
			<Formik
				enableReinitialize
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={ContactSchema}
			>
				{({ isSubmitting, values, handleReset, handleChange }) => (
					<div>
						<Form className={styles.formContact}>
							<label className={styles.formLabel} htmlFor='name'>
								Name
							</label>
							<div className={styles.formInputWrapper}>
								<Field
									className={styles.formInput}
									type='text'
									name='name'
									value={values.name}
									placeholder='Enter FirstName and LastName'
									id='name'
									onChange={handleChange}
								/>
								<ErrorMessage
									className={styles.formErrorMessage}
									name='name'
									component='div'
								/>
							</div>

							<label className={styles.formLabel} htmlFor='number'>
								Number
							</label>
							<div className={styles.formInputWrapper}>
								<Field
									className={styles.formInput}
									type='tel'
									name='number'
									value={values.number}
									placeholder='Phone format: XXX-XXX-XXXX'
									id='number'
									onChange={handleChange}
								/>
								<ErrorMessage
									className={styles.formErrorMessage}
									name='number'
									component='div'
								/>
							</div>
							<div className={styles.btnWrapper}>
								<button
									className={styles.formButton}
									type='submit'
									disabled={isSubmitting}
								>
									<FaRegSave />
									<span>Save</span>
								</button>
								<button
									className={styles.formButton}
									type='button'
									onClick={() => {
										handleReset();
										handleCloseModal();
									}}
								>
									<ImCancelCircle />
									<span>Cancel</span>
								</button>
							</div>
						</Form>
					</div>
				)}
			</Formik>
		</div>
	);
};

export default EditContactModal;
