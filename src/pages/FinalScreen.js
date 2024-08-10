import React, { useState, useEffect, useRef } from 'react';

const FinalScreen = () => {
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
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="bg-gray-300 flex min-h-screen justify-center">
      <div className="max-w-[400px] bg-slate-100">
        <div className="px-[14px] py-[20px] flex flex-col gap-4 justify-between bg-black">
          {/* 헤더 바 */}
          <div className="flex justify-center text-white relative">
            <div className="text-[25px] font-bold">성진우</div>
            <div className="absolute left-[10px] z-10 text-xl">{'<'}</div>
          </div>

          <div className="bg-black text-white text-[12px] text-center">
            캐릭터챗이 답변하는 내용은 AI 기술을 통해 생성되었습니다. <br />
            실제 캐릭터가 하는 말과 차이가 있거나 일부 부정확할 수 있습니다.
          </div>

          <div
            className="rounded-md h-[222px]"
            style={{
              backgroundImage: `url('/assets/Chat_Image_1.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="flex flex-col justify-between p-4">
            <div className="flex justify-center items-center bg-white rounded-full w-16 h-8 mx-auto mb-4">
              오늘
            </div>

            {/* 채팅 */}
            <div className="flex flex-col h-[380px] gap-3 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-xl max-w-[70%] ${
                    message.isUser
                      ? 'bg-white self-end text-right'
                      : 'bg-yellow-400 self-start text-left'
                  }`}
                >
                  <div className="text-sm font-semibold">{message.text}</div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* 채팅 입력창 */}
          <div className="flex items-center bg-gray-800 px-2 py-2 rounded-full">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="주인공에게 하고 싶은 말을 입력하세요"
              className="bg-transparent flex-grow text-white outline-none px-2"
            />
            <button
              onClick={handleSend}
              className="text-black p-1 rounded-full mr-1 h-[24px] w-[24px]"
              style={{
                backgroundImage: `url('/assets/TextSend.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalScreen;
