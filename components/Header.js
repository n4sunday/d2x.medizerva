import logo_img from '../img/Logo_td2x.png'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Header = () => (
    <div>

        <div className='container-fluid' id='bar'>
            <div className='row'>
                <div className='col-xs-12 col-sm-1 col-md-3 col-lg-6'>
                    <Link href="/"><img id='logo_img' src={logo_img} ></img></Link>
                </div>
                <div className='col-xs-12 col-sm-11 col-md-9 col-lg-6'>
                    <ul id='topbar'>
                        <Link href="/">
                            <li><a>หน้าหลัก</a></li>
                        </Link>
                        <Link href="/help">
                            <li><a>ถามหมอ</a></li>
                        </Link>
                        <Link href="/">
                            <li><a>ชื้อยา</a></li>
                        </Link>
                        <Link href="/">
                            <li><a>ติดต่อเรา</a></li>
                        </Link>
                        <Link href="/">
                            <li><a>สมัครสมาชิก</a></li>
                        </Link>
                        <Link href="/login">
                            <li><a>ลงชื่อเข้าใช้</a></li>
                        </Link>
                        
                    </ul>

                </div>
            </div>
        </div>

    </div>
)
export default Header

