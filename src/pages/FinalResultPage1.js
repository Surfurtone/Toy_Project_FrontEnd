import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FinalResultPage1 = () => {
  const navigate = useNavigate();
  const [choice, setChoice] = React.useState('');
  const [inputText, setInputText] = useState('');

  const onChoiceChange = (choice) => {
    setChoice(choice);
    navigate('/FinalScreen');
  };

  const [character, setCharacter] = useState({
    name: '성진우',
    age: 25,
    quote: '이봐... 날 선택해 준건 고마운데... 그래도 널 아직 신뢰하는건 아니야',
    tags: ['#상남자', '#초능력자', '#쿨내'],
    image: '/assets/SelectPage1/Character1.png',
  });

  const handleNextCharacter = () => {
    // 다음 캐릭터 정보로 업데이트 (예시)
    setCharacter({
      name: '다른 캐릭터',
      age: 30,
      quote: '새로운 명언',
      tags: ['#새로운태그1', '#새로운태그2', '#새로운태그3'],
      image: '/assets/SelectPage1/Character2.png',
    });
  };

  const handleSendClick = () => {
    // 입력된 텍스트를 처리하고 페이지를 이동
    onChoiceChange(inputText);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center max-w-[400px] w-full bg-black">
        {/* Header 시작 */}
        <header className="">
          <img
              src="/assets/SelectPage1/Logo.png"
              alt="Logo"
              className="w-32 my-7"
          />
        </header>
        {/* Header 끝 */}
        {/* Character 설명 시작 */}
        <div className="relative">
          {/* Gradient 배경 추가 */}
        <div className="relative">
          <img
            src={character.image}
            alt="Character1"
            className="w-89"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
          {/* <div className='flex flex-row absolute text-white bottom-[7.5rem] left-5 gap-x-[0.3rem]'>
            <p className="text-[2rem]">
              성진우
            </p>
            <p className="pt-5 text-[1rem]">
              25
            </p>
          </div>
          <div className="absolute text-white bottom-[3.3rem] left-[1.6rem] text-[1.4rem] mx-[1rem]">
          &quot;이봐... 날 선택해 준건 고마운데...
          그래도 널 아직 신뢰하는건 아니야&quot;
          </div>
          <div className="flex flex-row justify-between ">
          <div className="absolute text-white bottom-[1rem] left-[1.5rem] text-[1rem] rounded-full py-[0.01rem] px-[0.5rem] bg-[#FCC729]">#상남자</div>
          <div className="absolute text-white bottom-[1rem] left-[6.2rem] text-[1rem] rounded-full py-[0.01rem] px-[0.5rem] bg-[#FCC729]">#초능력자</div>
          <div className="absolute text-white bottom-[1rem] left-[11.7rem] text-[1rem] rounded-full py-[0.01rem] px-[0.5rem] bg-[#FCC729]">#쿨내</div>
          </div> */}
          <div className="flex flex-row absolute text-white bottom-[7.5rem] left-5 gap-x-[0.3rem]">
            <p className="text-[2rem]">{character.name}</p>
            <p className="pt-5 text-[1rem]">{character.age}</p>
          </div>
          <div className="absolute text-white bottom-[3.5rem] left-[1.6rem] text-[1.4rem]">
            "{character.quote}"
          </div>
          <div className="flex flex-row justify-between">
            {character.tags.map((tag, index) => (
              <div
                key={index}
                className="absolute text-white bottom-[2rem] left-[1.5rem] text-[1rem] rounded-full py-[0.01rem] px-[0.5rem] bg-[#FCC729]"
                style={{ left: `${1.5 + index * 4.7}rem` }}
              >
                {tag}
              </div>
            ))}
          </div>
        {/* Character 설명 끝 */}
        </div>
        {/* Button 시작 */}
        <div>
          <div className="flex flex-row mt-[3rem] gap-[0.8rem]">
            <button className="text-[1.125rem] rounded-full bg-white py-[0.7rem] px-[1.5rem] transform transition duration-200 ease-in-out hover:scale-105 active:scale-9"
            onClick={handleNextCharacter}>
              다른 주인공 만나러 가기 💖
            </button>
            <button className="text-[1.125rem] text-white rounded-full py-[0.7rem] px-[0.75rem] bg-[#FCC729] transform transition duration-200 ease-in-out hover:scale-105 active:scale-9">
              웹툰 ➡️
            </button>
          </div>
          <div className="text-[1.05rem] text-[#A1A1A1] border-2 rounded-full p-3 mt-[1.5rem] mb-[3rem] relative">
          <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="주인공에게 하고 싶은 말을 입력하세요"
              className="w-full bg-transparent border-none outline-none text-[#A1A1A1]"
            />
            <img
              src="/assets/FinalResultPage1/RightArrow.png"
              alt="RightArrow"
              className="w-[1.125rem] right-3  bottom-3.5 absolute transform transition duration-200 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"
              onClick={() => onChoiceChange('Send')}
              />
          </div>
        </div>
        {/* Button 끝 */}
      </div>
    </div>
  );
};

export default FinalResultPage1;
