import Header from '../components/Header'
const home = () => (
    <div><Header />
        <div className='boxlogin'>
            <div id='login' className='container-fluid' >

                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-3 col-xl-4'>
                         
                </div>

                    <div id='loginContent' className='col-xs-12 col-sm-12 col-md-6 col-xl-4'>
                        <h1>ลงชื่อเข้าใช้</h1>
                        <input class="form-control" type="text" placeholder='email' readonly/>
                        <input class="form-control" type="password" placeholder='password' readonly/>
                        <button id='btlogin' class="btn btn-info btn-block">เข้าสู่ระบบ</button>
                        <button id='facebooklogin' class="btn btn-primary btn-block">Facebook</button>
                    </div>

                    <div className='col-xs-12 col-sm-12 col-md-3 col-xl-4'>
                         
                </div>
                </div>
            </div>
        </div>
    </div>
)
export default home