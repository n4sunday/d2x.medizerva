import hours24 from '../../img/home/hours24.svg'
import diagnose from '../../img/home/diagnose.svg'
import pills from '../../img/home/pills.svg'
import hospital from '../../img/home/hospital.svg'

const service = () => (
    <div className='servicecomponent'>
        <div className="jumbotron">
            <div id='service' className='container'>
                <div className='row'>

                    <div id='service-name' className='col-sm-12 col-md-12 col-lg-3'>
                        <h2>บริการของเรา</h2>
                    </div>


                    <div id='' className='col-sm-12 col-md-12 col-lg-9'>

                        <div className='row'>
                            <div id='service-content' className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                                <div className='pl-1 pr-1 pt-1 pb-1'>
                                    <div className='box'>
                                        <img src={hours24} width='100px' alt="Cinque Terre" />
                                        <p>บริการช่วยเหลือ 24 ชั่วโมง</p>
                                    </div>
                                </div>
                            </div>

                            <div id='service-content' className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                                <div className='pl-1 pr-1 pt-1 pb-1'>
                                    <div className='box'>
                                        <img src={diagnose} width='100px' alt="Cinque Terre" />
                                        <p>วินิจฉัยอาการออนไลน์</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div id='service-content' className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                                <div className='pl-1 pr-1 pt-1 pb-1'>
                                    <div className='box'>
                                        <img src={pills} width='100px' alt="Cinque Terre" />
                                        <p>บริการจัดส่งยารักษา</p>
                                    </div>
                                </div>
                            </div>

                            <div id='service-content' className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                                <div className='pl-1 pr-1 pt-1 pb-1'>
                                    <div className='box'>
                                        <img src={hospital} width='100px' alt="Cinque Terre" />
                                        <p>ค้นหาโรงพยาบาลใกล้เคียง</p>
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
export default service

/**/