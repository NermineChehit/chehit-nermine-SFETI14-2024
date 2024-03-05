import React, { Component } from 'react';
import Design from './Design';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '', 
            messages: [], 
        };
    }

    
    handleMessageChange = (event) => {
        this.setState({ message: event.target.value });
    };

   
    handleSendMessage = () => {
        
        const newMessage = {
            text: this.state.message,
            timestamp: new Date().toLocaleString(), 
        };

        this.setState((prevState) => ({
            messages: [...prevState.messages, newMessage],
            message: '', 
        }));
    };

    render() {
        return (
            <Design>
                <div style={{ height: '300px', width: '500px', overflowY: 'scroll' }}>
                    
                    <ul>
                        {this.state.messages.map((msg, index) => (
                            <li key={index}>
                                <strong>{msg.timestamp}:</strong> {msg.text}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div style={{ width: '80%', height: '50px', margin: '20px auto' }}>
                       
                        <textarea
                            value={this.state.message}
                            onChange={this.handleMessageChange}
                            placeholder="Saisissez votre message..."
                            rows={3}
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>
                <div>
                    
                    <button
                        onClick={this.handleSendMessage}
                        type="button"
                        className="btn btn-outline-warning btn-lg"
                        style={{
                            backgroundColor: 'orange',
                            color: 'white',
                            marginTop: '30px',
                            width: '10%',
                            marginLeft: '45%',
                            marginRight: 'auto',
                        }}
                    >
                        Envoyer
                    </button>

                </div>
            </Design>
        );
    }
}

export default Message;
