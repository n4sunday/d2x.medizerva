import React, { Component } from 'react'
import { render } from 'react-dom'
import topdisease from '../../img/disease/disease-top.jpg'
import Link from 'next/link'

class Topdisease extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleSlidesOnly" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img id='disease-img' className="d-block" src={topdisease}  alt="..." />
                            <div className="carousel-caption d-none d-md-block d-flex justify-content-center align-items-center">
                                <div id='disease-content-img' className="d-flex justify-content-center align-items-center" >
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Topdisease