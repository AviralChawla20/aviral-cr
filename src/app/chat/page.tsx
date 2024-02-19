"use client";
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Chat() {
    const [message, setMessage] = useState('');

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        // Add your logic to send the message
        console.log('Sending message:', message);
        // Clear the message input after sending
        setMessage('');
    };

    return (
        <div className="h-screen flex flex-col">
            {/* Spline scene */}
            <div className='justify-center flex mb-3'>
                <div className="w-4/5 h-full flex justify-center items-center bg-black">

                    <Spline scene="https://prod.spline.design/yRqFaY2i1AkuTRS0/scene.splinecode" />
                </div>
            </div>


            {/* Input box and send button */}
            <div className="w-full px-4 py-2 bg-black flex justify-center items-center">
                <input
                    type="text"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Type your message..."
                    className="w-96 p-2 mr-2 border border-gray-400 rounded text-black"
                />
                <button onClick={handleSendMessage} className="btn text-white">Send</button>
            </div>
        </div>
    );
}
