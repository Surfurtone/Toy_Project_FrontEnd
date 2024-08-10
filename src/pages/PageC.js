import React from 'react';
import { useState } from 'react';

const PageC = () => {
  const [messages, setMessages] = useState([
    { text: '안녕 이음아, 오늘 하루는 어떻더냐?', isUser: true },
    { text: '안녕하세요 혁원 어르신, 오늘은 참 맑아요', isUser: false },
    {
      text: '허허, 고놈 참 말 이쁘게 하는구나. 어디 바둑은 잘하냐?',
      isUser: true,
    },
    {
      text: '저는 바둑을 그렇게 잘하는 것 같지는 않아요. 다만 혁원 어르신께서 바둑을 좋아하신다면 저는 꼭 한 수 배우고 싶은 마음이에요.',
      isUser: false,
    },
  ]);

  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');
  };

  return (
    <div className=" bg-red-100 flex flex-col justify-between p-4">
      <div className="flex justify-center items-center bg-white rounded-full w-16 h-8 mx-auto mb-4">
        오늘
      </div>

      {/* 사용자 채팅 */}
      <div className="flex flex-col gap-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl max-w-[70%] ${
              message.isUser
                ? 'bg-white self-end text-right'
                : 'bg-yellow-400 self-start text-left'
            }`}
          >
            <div className="text-sm font-semibold">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-4 bg-gray-800 p-2 rounded-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="주인공에게 하고 싶은 말을 입력하세요"
          className="bg-transparent flex-grow text-white outline-none px-2"
        />
        <button
          onClick={handleSend}
          className="bg-yellow-500 text-black p-2 rounded-full ml-2"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default PageC;
