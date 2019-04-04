import Header from '../components/Header'
import React, { Component } from 'react'
import ChatbotPopup from '../components/Chatbot/ChatbotPopup'
import Disease from '../components/Disease'
class disease extends Component {
    render() {
        return (
            <div><Header />

                <div className='mt-5'>
                    <Disease />
                </div>
                <ChatbotPopup />
            </div>
        )
    }
}
export default disease
