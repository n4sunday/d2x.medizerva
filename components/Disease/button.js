import dynamic from 'next/dynamic'
import React, { Component } from 'react'
import ButtomDisease from './button'
import { callSetContents } from '../../redux/actions/'
import { connect } from 'react-redux'
import { store } from '../../pages/_app'
class button extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-12" onClick={() => store.dispatch(callSetContents(this.props.status))}> 
                < div id="disease-content" className="border mt-1 pl-1 pr-1 pt-1 pb-1" >
                    <div className="row">
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2 d-flex justify-content-center align-items-center">
                            <img src={this.props.img} width="45px" />
                        </div>
                        <div className="col-xs-6 col-sm-9 col-md-9 col-lg-10">
                            <h5 className="pt-2 pl-2 pb-2 ">{this.props.name}</h5>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default button