import React, { PureComponent } from 'react';
import Chatbotcomponent from './chatbotcomponent'
import { connect } from 'react-redux'
import { store } from '../../pages/_app'
import { callSetChatbox } from '../../redux/actions/'

class ChatbotPopup extends PureComponent {
    renderChatbot() {
        if (this.props.chatState == true)
            return (
                <Chatbotcomponent />
            )
        else
            return (
                <div id='bt-popup' className='block' onClick={() => store.dispatch(callSetChatbox(!this.props.chatState))} >
                    คุยกับผู้ช่วย
                </div>
            )
    }
    render() {
        return (
            <>

                {this.renderChatbot()}

            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        chatState: state.chatbox,
    }
}
export default connect(mapStateToProps)(ChatbotPopup)
// rounded-0