import Header from '../components/Header'
import React, { Component } from 'react'
import ChatbotPopup from '../components/Chatbot/ChatbotPopup'
import Disease from '../components/Disease'
import Topdisease from '../components/Disease/topdisease'

const disease = () => (
	<div>
		<Header t="barT" c="barB" />
		<Topdisease />
		<Disease />
		<ChatbotPopup />
		
	</div>
)
export default disease;
