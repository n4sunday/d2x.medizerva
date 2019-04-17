import React, { Component } from 'react'
import LoginBG from './../img/access/login.jpg'
import Link from 'next/link';

const loginStyle = {
    backgroundImage: `url(${LoginBG})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    //filter: 'brightness(50%)',
    height: '100vh ',
}
const profile = {
    height: '250px',
}

class login extends Component {
    render() {
        return (
            <div className='container-fluid' style={loginStyle}>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-xs-12 col-lg-12 pl-0 pr-0 '>
                        <div className='login'>
                        <Link href="/"><h1>T-D2X</h1></Link>
                            <input type="username" className="form-control mt-2" placeholder="Username" />
                            <input type="password" className="form-control mt-2" placeholder="Password" />
                            <div className='btLoging mt-2'>เข้าสู่ระบบ</div>
                            <div className='btFacebook mt-2 '>Facebook</div>
                            <div className='btGoogle mt-2'>Google</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default login
