import Header from '../components/Header'
import HelpQandA from '../components/help/helpQandA'
import History from '../components/help/history'
import ChatbotPopup from '../components/Chatbot/ChatbotPopup'
import Conclusion from '../components/help/conclusion'
import { connect } from 'react-redux'
import React, { Component } from 'react'

class help extends Component {
    renderHelpQandA() {
        if(this.props.selectStatus == true)
        return (
            <div className='container-fluid mt-5 pt-5' id='help'>
                <div className='row '>
                    <div className='col-xs-12 col-sm-12 col-md-3 col-xl-4'>
                        Help Popular
                </div>

                    <div className='col-xs-12 col-sm-8 col-md-6 col-xl-4'>
                        <HelpQandA />
                    </div>

                    <div className='col-xs-12 col-sm-4 col-md-3 col-xl-4'>
                        <History />
                    </div>
                </div>
            </div>
        )
        else if(this.props.selectStatus == false)
        return (
            <Conclusion />
        )
    }

    render() {
        return (
            <div><Header t='barB' c='barB'/>
                {this.renderHelpQandA()}
                <ChatbotPopup />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        selectStatus: state.main
    }
}
export default connect(mapStateToProps)(help)
