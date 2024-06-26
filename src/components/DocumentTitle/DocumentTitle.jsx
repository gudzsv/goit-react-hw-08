import { Helmet, HelmetProvider } from 'react-helmet-async';

const DocumentTitle = ({ children }) => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>{children}</title>
			</Helmet>
		</HelmetProvider>
	);
};

export default DocumentTitle;
