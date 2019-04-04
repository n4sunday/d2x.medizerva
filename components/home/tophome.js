import React, { Component } from 'react'
import { render } from 'react-dom'
import Typed from 'react-typed'

import home_img from '../../img/Home02.jpg'
import home_img1 from '../../img/Home01.jpg'
import Link from 'next/link'

class Tophome extends Component {
    render() {
        return (
            <div>
                {/* <Typed
                    strings={['สวัสดีชาวโลก']}
                    typeSpeed={40}
                />
                <br />

                <Typed
                    strings={[
                        'สวัสดีชาวโลก',
                        'วันนี้วันอะไร',
                        'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text" />
                </Typed> */}

                <div id="carouselExampleSlidesOnly" className="carousel slide mt-5" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img id='home_img' src={home_img} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <div id='content-img' className="d-flex justify-content-center align-items-center" >
                                    <section >
                                        <h1 className="display-4 font-weigth-bold ">
                                            <Typed
                                                strings={[
                                                    'ให้คำปรึกษาวินิจฉัยอาการ',
                                                    'บริการ 24 ชั่วโมง',
                                                    'T-D2X',
                                                    'Tummy Diarrhea Delivery Express',
                                                    'บริการเพื่อคุณ'
                                                ]}
                                                typeSpeed={40}                                                
                                            />
                                        </h1>
                                        <Link href="/help"><button type="button" className="btn btn-outline-light rounded-0 text-uppercase font-weigth-bold btn-lg animated heartBeat slow">ถามหมอ</button></Link>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Tophome