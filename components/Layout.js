import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect } from 'react';

const Layout = (props) => {
	return (
		<div>
			<Header t="barT" c="barB" />
			{props.children}
			<Footer />
		</div>
	);
};
export default Layout;
