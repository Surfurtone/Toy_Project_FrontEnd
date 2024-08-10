import React, { useState } from 'react';

const SelectPage1 = () => {
  const [character, setCharacter] = useState({
    name: '성진우',
    age: 25,
    quote: '...일어나라',
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
          <img src={character.image} alt="Character" className="w-89" />
          <div className="flex flex-row absolute text-white bottom-[7.5rem] left-5 gap-x-[0.3rem]">
            <p className="text-[2rem]">{character.name}</p>
            <p className="pt-5 text-[1rem]">{character.age}</p>
          </div>
          <div className="absolute text-white bottom-[6rem] left-[1.6rem] text-[1.4rem]">
            "{character.quote}"
          </div>
          <div className="flex flex-row justify-between">
            {character.tags.map((tag, index) => (
              <div
                key={index}
                className="absolute text-white bottom-[4rem] left-[1.5rem] text-[1rem] rounded-md py-[0.01rem] px-[0.5rem] bg-[#FCC729]"
                style={{ left: `${1.5 + index * 4.7}rem` }}
              >
                {tag}
              </div>
            ))}
          </div>
          {/* Character 설명 끝 */}
          {/* 별점 시작 */}
          <img
            src="/assets/SelectPage1/Heart.png"
            alt="Heart"
            className="absolute w-80 bottom-[0.4rem] left-[1.7rem]"
          />
          {/* 별점 끝 */}
        </div>

        {/* Button 시작 */}
        <div
          className="my-[3rem] rounded-md py-[0.5rem] px-[6rem] bg-white cursor-pointer"
          onClick={handleNextCharacter}
        >
          다른 주인공 만나러 가기 💖
        </div>
        {/* Button 끝 */}
      </div>
    </div>
  );
};

export default SelectPage1;
