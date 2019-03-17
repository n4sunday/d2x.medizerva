import docter from '../img/doctor_man.svg'
import people_no from '../img/people_no.svg'
import people_yes from '../img/people_yes.svg'

const helpQandA = () => (
    <div>
        <div className='container-fluid' id='doctor'>
            <div className='row'>
                <div id='question' className='col-xs-3 col-sm-2 col-md-3 col-lg-2'>
                    <img src={docter} width='60px' alt="Cinque Terre" />
                </div>
                <div id='question' className='col-xs-9 col-sm-10 col-md-9 col-lg-10'>
                    <p id='question'>คุณมีอาการอย่างไรบ้าง?</p>
                </div>
            </div>
        </div>

        <div className='container-fluid' id='doctor'>
            <div className='row'>
                <div id='answer' className='col-xs-9 col-sm-10 col-md-9 col-lg-10'>
                    <p>ปกติ</p>
                </div>
                <div id='answer' className='col-xs-3 col-sm-2 col-md-3 col-lg-2'>
                    <img className='yes' src={people_yes} width='60px' alt="Cinque Terre" />
                </div>
            </div>
        </div>

        <div className='container-fluid' id='doctor'>
            <div className='row'>
                <div id='answer' className='col-xs-9 col-sm-10 col-md-9 col-lg-10'>
                    <p>ไม่ปกติ</p>
                </div>
                <div id='answer' className='col-xs-3 col-sm-2 col-md-3 col-lg-2'>
                    <img className='no' src={people_no} width='60px' alt="Cinque Terre" />
                </div>
            </div>
        </div>

    </div>
)
export default helpQandA