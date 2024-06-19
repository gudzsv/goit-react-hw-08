import { useId } from 'react';
import styles from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
	const searchId = useId();
	const dispatch = useDispatch();
	const value = useSelector(selectNameFilter);

	const onFilter = (e) => dispatch(changeFilter(e.target.value));

	return (
		<div className={styles.searchContainer}>
			<label className={styles.searchLabel} htmlFor={searchId}>
				Find contacts by name
			</label>
			<input
				onChange={onFilter}
				className={styles.searchInput}
				id={searchId}
				type='search'
				inputMode='search'
				value={value}
			/>
		</div>
	);
};

export default SearchBox;
