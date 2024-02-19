"use client";
import React, { useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Chat() {
    const [message, setMessage] = useState('');

    const spline = useRef();

    function onLoad(splineApp: any) {
        // save the app in a ref for later use
        spline.current = splineApp;
    }
    function triggerAnimation() {
        spline.current.emitEvent("keyUp", "Aviral");
    }

    function triggerAnimation2() {
        spline.current.emitEvent("keyDown", "Aviral");
    }
    function triggerAnimation3() {
        spline.current.emitEvent("keyDown", "Aviral");
    }
    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = async () => {
        // Add your logic to send the message
        console.log('Sending message:', message);
        // Clear the message input after sending
        setMessage('');
        triggerAnimation2();
        // Construct the form data
        const characterResponsePayload = new FormData();
        characterResponsePayload.append('userText', message);
        characterResponsePayload.append('charID', '1b872d18-cf30-11ee-962b-42010a40000f'); // Your character ID
        characterResponsePayload.append('sessionID', "a414850ab1cdcbee1e62440bde337ae8");
        characterResponsePayload.append('voiceResponse', 'True');

        // API endpoint
        const characterResponseUrl = "https://api.convai.com/character/getResponse";

        // Make API call
        try {
            const response = await fetch(characterResponseUrl, {
                method: 'POST',
                headers: {
                    'CONVAI-API-KEY': 'b099f390cc31069c047e743cf9f1f908', // Your API key
                },
                body: characterResponsePayload,
            });
            const data = await response.json();
            console.log('API Response:', data);

            // Check if audio data is present in the response
            if (data.audio) {
                // Convert base64 audio to Blob
                const audioBlob = base64ToBlob(data.audio, 'audio/wav');
                // Create audio element
                const audio = new Audio(URL.createObjectURL(audioBlob));
                // Play audio
                audio.play();
                triggerAnimation();
                setTimeout(() => {
                    triggerAnimation3();
                }, 10000);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };




    // Function to convert base64 to Blob
    const base64ToBlob = (base64: string, mimeType: string) => {
        const binaryString = window.atob(base64);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return new Blob([bytes.buffer], { type: mimeType });
    };

    return (
        <div className="h-screen flex flex-col">
            {/* Spline scene */}
            <div className='justify-center flex mb-3'>
                <div className="w-4/5 h-full flex justify-center items-center bg-black">
                    <Spline scene="https://prod.spline.design/IZ-V9IBRVzCWqCR0/scene.splinecode"
                        onLoad={onLoad}
                    />
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
