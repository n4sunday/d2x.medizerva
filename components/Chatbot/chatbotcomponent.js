import React, { Component } from 'react';
import Pusher from 'pusher-js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userMessage: '',
            conversation: [],
        };
    }
    componentDidMount() {
        const pusher = new Pusher('f1c69857418afbff36c5', {
            cluster: 'ap1',
            encrypted: true,
        });

        const channel = pusher.subscribe('bot');
        channel.bind('bot-response', data => {
            const msg = {
                text: data.message,
                user: 'ai',
            };
            this.setState({
                conversation: [...this.state.conversation, msg],
            });
        });
    }

    handleChange = event => {
        this.setState({ userMessage: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (!this.state.userMessage.trim()) return;

        const msg = {
            text: this.state.userMessage,
            user: 'human',
        };

        this.setState({
            conversation: [...this.state.conversation, msg],
        });

        fetch('http://d2x.medizerva.com:5000/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: this.state.userMessage,
            }),
        });

        this.setState({ userMessage: '' });
    };

    render() {
        const ChatBubble = (text, i, className) => {
            console.log('text:', text);
            console.log('I:', i);
            console.log('className:', className);
            if (className == 'human')
                return (
                    <div key={`${className}-${i}`} className={`${className} message right`}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" />
                        <div className="bubble">
                            {text}
                            <div class="corner"></div>                    
                        </div>
                        {/* <span className="chat-content">{text}</span> */}
                    </div>
                );
            else if (className == 'ai')
                return (
                    <div key={`${className}-${i}`} className={`${className} message`}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" />
                        <div className="bubble">
                            {text}
                            <div class="corner"></div>
                        </div>
                    </div>
                );
        };

        const chat = this.state.conversation.map((e, index) =>
            ChatBubble(e.text, index, e.user)
        );

        return (
            <div id="chatbox">
                <label>d2x medizerva</label>
                <div id="chat-messages" scrolling="yes">
                    {chat}
                </div>

                <div id="sendmessage">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={this.state.userMessage}
                            onInput={this.handleChange}
                            autoFocus
                            placeholder="พิมพ์ข้อความ"
                        />
                    </form>
                    
                    <button id="send"></button>
                </div>
            </div>

        );
    }
}

export default App;