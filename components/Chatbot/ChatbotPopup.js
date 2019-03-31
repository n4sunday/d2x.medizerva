import React, { Component } from 'react';
import Chatbotcomponent from './chatbotcomponent'

class ChatbotPopup extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    renderChatbot() {
        if (this.state.isToggleOn == false)
            return (
                <Chatbotcomponent />
            )
    }

    render() {
        return (
            <div>
                <div id='bt-popup' className='block'>
                    {this.renderChatbot()}
                    <button onClick={this.handleClick} className='bt-click btn btn-primary btn-block rounded-0' type="button" >คุยกับผู้ช่วย</button>
                </div>

            </div>
        );
    }
}

export default ChatbotPopup
// rounded-0