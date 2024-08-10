import React, { useEffect, useState } from 'react';

const SelectPage1 = () => {
  const [value, setValue] = useState({});

  useEffect(() => {
    fetch('https://26e1-117-110-136-19.ngrok-free.app/api/webtoon/male/', {
      method: 'POST',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setValue(json);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    console.log(value); // value가 업데이트될 때마다 로그
  }, [value]);

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
          <img
            src="/assets/SelectPage1/Character1.png"
            alt="Character1"
            className="w-89"
          />
          <div className="flex flex-row absolute text-white bottom-[7.5rem] left-5 gap-x-[0.3rem]">
            <p className="text-[2rem]">성진우</p>
            <p className="pt-5 text-[1rem]">25</p>
          </div>
          <div className="absolute text-white  bottom-[6rem] left-[1.6rem] text-[1.4rem]">
            &quot;...일어나라&quot;
          </div>
          <div className="flex flex-row justify-between ">
            <div className="absolute text-white bottom-[4rem] left-[1.5rem] text-[1rem] rounded-md py-[0.01rem] px-[0.5rem] bg-[#FCC729]">
              #상남자
            </div>
            <div className="absolute text-white bottom-[4rem] left-[6.2rem] text-[1rem] rounded-md py-[0.01rem] px-[0.5rem] bg-[#FCC729]">
              #초능력자
            </div>
            <div className="absolute text-white bottom-[4rem] left-[11.7rem] text-[1rem] rounded-md py-[0.01rem] px-[0.5rem] bg-[#FCC729]">
              #쿨내
            </div>
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
        <div className="my-[3rem] rounded-md py-[0.5rem] px-[6rem] bg-white">
          다른 주인공 만나러 가기 💖
        </div>
        {/* Button 끝 */}
      </div>
    </div>
  );
};

export default SelectPage1;
