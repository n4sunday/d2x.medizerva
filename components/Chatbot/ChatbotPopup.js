import React, { PureComponent } from 'react';
import Chatbotcomponent from './chatbotcomponent'

class ChatbotPopup extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
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
                <div id='bt-popup' className='block' onClick={this.handleClick} >
                    
                   คุยกับผู้ช่วย
                </div>
                {this.renderChatbot()}

            </div>
        );
    }
}

export default ChatbotPopup
// rounded-0