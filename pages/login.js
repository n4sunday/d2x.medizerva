import Header from '../components/Header'
import ChatbotPopup from '../components/Chatbot/ChatbotPopup'
const home = () => (
    <div><Header />

        <div className='boxlogin'>
            <div id='login' className='container-fluid' >

                <div className='row'>
                 

                    <div id='loginContent' className='col-xs-12 col-sm-12 col-md-6 offset-md-3 col-xl-4 offset-md-4'>
                        <h1>ลงชื่อเข้าใช้</h1>
                        <input className="form-control" type="text" placeholder='email' readonly />
                        <input className="form-control" type="password" placeholder='password' readonly />
                        <button id='btlogin' className="btn btn-info btn-block">เข้าสู่ระบบ</button>
                        <button id='facebooklogin' className="btn btn-primary btn-block">Facebook</button>
                    </div>

            
                </div>
            </div>
        </div>
        <ChatbotPopup />
    </div>
)
export default home