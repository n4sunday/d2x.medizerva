import React from 'react'
import Layout from '../components/Layout'
import Home from './home'
import ChatbotPopup from '../components/Chatbot/ChatbotPopup'
const Index = () => (
    <div className='d2x'>
        <Layout>
            <Home />
        </Layout>
        <ChatbotPopup />
    </div>
)
export default Index