import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
	return (
		<div className={styles.loader}>
			<ThreeDots
				visible={true}
				height='80'
				width='80'
				color='#646cff'
				radius='9'
				ariaLabel='three-dots-loading'
				wrapperStyle={{}}
				wrapperClass=''
			/>
		</div>
	);
};

export default Loader;
