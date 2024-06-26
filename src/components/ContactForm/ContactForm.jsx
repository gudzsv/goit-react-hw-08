import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { IoIosPersonAdd } from 'react-icons/io';
import toast from 'react-hot-toast';

import styles from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/operations';

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

const initialValues = {
	name: '',
	number: '',
};

const ContactForm = () => {
	const nameFieldId = useId();

	const numberFieldId = useId();

	const dispatch = useDispatch();

	const handleSubmit = (values, actions) => {
		dispatch(addContact(values))
			.unwrap()
			.then((result) => {
				toast.success(`Contact ${values.name} Successfully added!`);
				console.log('result: ', result);

				actions.setSubmitting(false);
				actions.resetForm();
			})
			.catch((error) => {
				toast.error('Failed to add contact');

				actions.setSubmitting(false);
			});
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={ContactSchema}
		>
			{({ isSubmitting }) => (
				<Form className={styles.formContact}>
					<label className={styles.formLabel} htmlFor={nameFieldId}>
						Name
					</label>
					<div className={styles.formInputWrapper}>
						<Field
							className={styles.formInput}
							type='text'
							name='name'
							placeholder='Enter FirstName and LastName'
							id={nameFieldId}
						/>
						<ErrorMessage
							className={styles.formErrorMessage}
							name='name'
							component='div'
						/>
					</div>

					<label className={styles.formLabel} htmlFor={numberFieldId}>
						Number
					</label>
					<div className={styles.formInputWrapper}>
						<Field
							className={styles.formInput}
							type='tel'
							inputMode='tel'
							name='number'
							placeholder='Phone format: XXX-XXX-XXXX'
							id={numberFieldId}
						/>
						<ErrorMessage
							className={styles.formErrorMessage}
							name='number'
							component='div'
						/>
					</div>

					<button
						className={styles.formButton}
						type='submit'
						disabled={isSubmitting}
					>
						<IoIosPersonAdd />
						<span>Add</span>
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default ContactForm;
