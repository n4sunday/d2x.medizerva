import Header from '../components/Header'
import ChatbotPopup from '../components/Chatbot/ChatbotPopup'
import React, { Component } from 'react'
import axios from 'axios'
const apiurl = 'http://localhost/'
class login extends Component {

    getLogin = () => {
        const response = axios.get(apiurl)
        const apiData = response.data
        console.log('API DATA', apiData);
    }

    render() {
        return (
            <div><Header />

                <div className='boxlogin'>
                    <div id='login' className='container-fluid' >

                        <div className='row'>


                            <div id='loginContent' className='col-xs-12 col-sm-12 col-md-6 offset-md-3 col-xl-4 offset-md-4'>
                                <h1>ลงชื่อเข้าใช้</h1>
                                <input className="form-control" type="text" placeholder='email' readonly />
                                <input className="form-control" type="password" placeholder='password' readonly />
                                <button id='btlogin' className="btn btn-primary btn-block">เข้าสู่ระบบ</button>
                                <button id='facebooklogin' className="btn btn-primary btn-block" onClick={this.getLogin}>Facebook</button>
                            </div>
                            <div
                                class="fb-like mt-5 pt-5"
                                data-share="true"
                                data-width="450"
                                data-show-faces="true">
                            </div>

                        </div>
                    </div>
                </div>
                <ChatbotPopup />
            </div>
        )
    }
}
export default login
