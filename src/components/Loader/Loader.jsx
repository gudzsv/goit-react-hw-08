import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
	return (
		<div className={styles.loader}>
			<ThreeDots
				visible={true}
				height='40'
				width='40'
				color='#d84315'
				radius='9'
				ariaLabel='three-dots-loading'
				wrapperStyle={{}}
				wrapperClass=''
			/>
		</div>
	);
};

export default Loader;
