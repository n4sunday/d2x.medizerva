import React from 'react'
import Layout from '../components/Layout'
import Home from './home'
import ChatbotPopup from '../components/Chatbot/ChatbotPopup'
const Index = () => (
    <div >
        <Layout>
            <Home />
        </Layout>
        <ChatbotPopup />
    </div>
)
export default Index