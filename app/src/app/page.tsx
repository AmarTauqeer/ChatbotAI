'use client';

import { useChat } from '@ai-sdk/react';
import { FaUserCircle } from "react-icons/fa";
import { GiArtificialHive } from "react-icons/gi";

export default function Page() {
  const { messages, input, handleSubmit, handleInputChange, status } =
    useChat();

  return (
    <main className='fixed h-full w-full flex justify-center items-center'>
      <div className='container h-full w-full flex flex-col py-8'>
        <div className='flex justify-center items-center text-2xl font-semibold'>
          <h2 className='text-center'>OpenAI Implementation Using NextJS</h2>
        </div>
        <div className='flex-1 overflow-y-auto  m-2'>
          {messages.map(message => (
            <div key={message.id}>
              <div className='mt-2'>
              
              {message.parts.map((part, index) => {
                switch (part.type) {
                  case 'text':
                    return <div className='flex flex-row' key={index}>
                      <span className='pr-2'><strong>{message.role=='user'?<FaUserCircle size={25} />:<GiArtificialHive size={25} />}</strong></span>
                      <span className='text-justify' key={index}>{part.text}</span></div>;
                }
              })}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className='mt-auto relative'>
          <input
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
            disabled={status !== 'ready'}
            className='px-4 py-3 border rounded-3xl w-full text-lg'
          />
        </form>
      </div>
    </main>
  );
}