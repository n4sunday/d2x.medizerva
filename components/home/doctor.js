import doctor1 from '../../img/doctor/doctor1.jpg'
import doctor2 from '../../img/doctor/doctor2.jpg'
import doctor3 from '../../img/doctor/doctor3.jpg'
import doctor4 from '../../img/doctor/doctor4.jpg'

const doctor = () => (
    <div className='doctorcomponent'>
        <div className="jumbotron x">
            <div id='' className='container'>
                <div className='row'>

                    <div id='doctor-name' className='col-sm-12 col-md-6 col-lg-12'>
                        <h2>พบแพทย์ของเรา</h2>
                    </div>

                    <div className='col-sm-12 col-md-12 col-lg-12 pt-4'>

                        <div className='row'>
                            <div className='col-xs-12 col-sm-6 col-md-3 col-lg-3 pt-3'>
                                <div className='border pl-1 pr-1 pt-1 pb-1'>
                                    <div className='team_doctor '>
                                        <img src={doctor1} />
                                        <h4 className='pl-4 pt-4'>Jessica Wally</h4>
                                        <p className='pl-4'>Doctor</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xs-12 col-sm-6 col-md-3 col-lg-3 pt-3'>
                                <div className='border pl-1 pr-1 pt-1 pb-1'>
                                    <div className='team_doctor'>
                                        <img src={doctor2} />
                                        <h4 className='pl-4 pt-4'>Iai Donas</h4>
                                        <p className='pl-4'>Doctor</p>
                                    </div>
                                </div>
                            </div>


                            <div className='col-xs-12 col-sm-6 col-md-3 col-lg-3 pt-3'>
                                <div className='border pl-1 pr-1 pt-1 pb-1'>
                                    <div className='team_doctor'>
                                        <img src={doctor3} />
                                        <h4 className='pl-4 pt-4'>Amanda Denyl</h4>
                                        <p className='pl-4'>Doctor</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xs-12 col-sm-6 col-md-3 col-lg-3 pt-3'>
                                <div className='border pl-1 pr-1 pt-1 pb-1'>
                                    <div className='team_doctor'>
                                        <img src={doctor4} />
                                        <h4 className='pl-4 pt-4'>Jason Davis</h4>
                                        <p className='pl-4'>Doctor</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>

)
export default doctor

/**/