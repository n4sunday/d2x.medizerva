import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	Dropdown,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

import Header from '../components/Header';
import React from 'react';
import { render } from 'react-dom';
import logo_img from '../img/Logo_td2x.png';
import Link from 'next/link';
import { Progress } from 'reactstrap'
class App extends React.Component {
	
	render() {
		return (
			<div>
				<Progress animated color='primary' value="100" />
			</div>
		);
	}
}
{
}

export default App;
