import Helmet from 'react-helmet';

const DocumentTitle = ({ children }) => {
	return (
		<Helmet>
			<title>{children}</title>
		</Helmet>
	);
};

export default DocumentTitle;
