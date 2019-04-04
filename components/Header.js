import logo_img from '../img/Logo_td2x.png'
import Link from 'next/link'
import dynamic from 'next/dynamic'
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


export default class Example extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }
    toggle() { this.setState({ isOpen: !this.state.isOpen }) }
    render() {
        return (
            <div>
                <Navbar className="navbar navbar-expand-lg fixed-top" id='bar' dark>
                    <Link href="/"><img id='logo_img' src={logo_img} ></img></Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav id='linkbar' className="ml-auto" navbar>
                            <NavItem><Link href="/"><a className="nav-item nav-link active px-3">หน้าหลัก</a></Link></NavItem>
                            <NavItem><Link href="/help"><a className="nav-item nav-link  px-3">ถามหมอ</a></Link></NavItem>
                            <NavItem><Link href="/"><a className="nav-item nav-link  px-3">ชื้อยา</a></Link></NavItem>
                            <NavItem><Link href="/disease"><a className="nav-item nav-link  px-3">โรคระบบย่อยอาหาร</a></Link></NavItem>
                            <NavItem><Link href="/"><a className="nav-item nav-link  px-3">ติดต่อเรา</a></Link></NavItem>
                            {/* <NavItem><Link href="/dev"><a className="nav-item nav-link  px-3">DevMode</a></Link></NavItem> */}
                            <UncontrolledDropdown nav inNavbar >
                                <div id='toggledrop'>
                                    <DropdownToggle nav caret >จัดการบัญชีผู้ใช้</DropdownToggle>
                                    <div id='drop'>
                                        <DropdownMenu >
                                            <DropdownItem ><Link href="/"><a>ข้อมูลผู้ใช้</a></Link></DropdownItem>
                                            <DropdownItem ><Link href="/login"><a>ลงชื่อเข้าใช้</a></Link></DropdownItem>
                                            <DropdownItem ><Link href="/"><a>สมัครสมาชิก</a></Link></DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>
                                                <Link href="/"><a>ออกจากระบบ</a></Link>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>

            </div>
        );
    }
}
// const Header = () => (
//     <div>
//         <nav className="navbar navbar-expand-lg fixed-top" id='bar'>
//             <Link href="/"><img id='logo_img' src={logo_img} ></img></Link>

//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
//                 aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                 <div id='linkbar' className="navbar-nav px-md-5 ml-auto">
//                     <Link href="/"><a className="nav-item nav-link active px-4">หน้าหลัก<span className="sr-only">(current)</span></a></Link>
//                     <Link href="/help"><a className="nav-item nav-link  px-4">ถามหมอ<span className="sr-only">(current)</span></a></Link>
//                     <Link href="/"><a className="nav-item nav-link  px-4">ชื้อยา<span className="sr-only">(current)</span></a></Link>
//                     <Link href="/"><a className="nav-item nav-link  px-4">ติดต่อเรา<span className="sr-only">(current)</span></a></Link>
//                     <Link href="/"><a className="nav-item nav-link  px-4">สมัครสมาชิก<span className="sr-only">(current)</span></a></Link>
//                     <Link href="/login"><a className="nav-item nav-link  px-4">ลงชื่อเข้าใช้<span className="sr-only">(current)</span></a></Link>
//                 </div>
//             </div>
//         </nav>

//         {/* <div className='container-fluid' id='bar'>
//             <div className='row'>
//                 <div className='col-xs-12 col-sm-1 col-md-3 col-lg-6'>
//                     <Link href="/"><img id='logo_img' src={logo_img} ></img></Link>
//                 </div>
//                 <div className='col-xs-12 col-sm-11 col-md-9 col-lg-6'>
//                     <ul id='topbar'>
//                         <Link href="/">
//                             <li><a>หน้าหลัก</a></li>
//                         </Link>
//                         <Link href="/help">
//                             <li><a>ถามหมอ</a></li>
//                         </Link>
//                         <Link href="/">
//                             <li><a>ชื้อยา</a></li>
//                         </Link>
//                         <Link href="/">
//                             <li><a>ติดต่อเรา</a></li>
//                         </Link>
//                         <Link href="/">
//                             <li><a>สมัครสมาชิก</a></li>
//                         </Link>
//                         <Link href="/login">
//                             <li><a>ลงชื่อเข้าใช้</a></li>
//                         </Link>

//                     </ul>

//                 </div>
//             </div> 
//     </div>*/}

//     </div >
// )
// export default Header

