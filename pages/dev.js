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
var x ='bar'
var y ='bar2'
class App extends React.Component {
	state = {
		isTop: true
	};

	componentDidMount() {
		document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 200;
      console.log("window.scrollY=========================",window.scrollY);
      
			if (isTop !== this.state.isTop) {
				this.setState({ isTop });
			}
		});
	}
	render() {
		return (
			<div>
				<Navbar className="navbar navbar-expand-lg fixed-top" id={this.state.isTop ? x : y} dark>
					<Link className="test" href="/">
						<img id="logo_img" src={logo_img} />
					</Link>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav id="linkbar" className="ml-auto" navbar>
							<NavItem>
								<Link href="/">
									<a className="nav-item nav-link active px-3">หน้าหลัก</a>
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				<div style={{ height: '100vh', backgroundColor: 'green' }}></div>
				<div style={{ height: '100vh', backgroundColor: 'red' }}></div>
        <div style={{ height: '100vh', backgroundColor: 'yellow' }}></div>
			</div>
		);
	}
}
{
}

export default App;
