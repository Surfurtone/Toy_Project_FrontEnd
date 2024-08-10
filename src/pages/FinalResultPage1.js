import React from 'react';

const FinalResultPage1 = () => {
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
            src="/assets/SelectPage1/Character1.png"
            alt="Character1"
            className="w-89"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
          <div className='flex flex-row absolute text-white bottom-[7.5rem] left-5 gap-x-[0.3rem]'>
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
          </div>
        {/* Character 설명 끝 */}
        </div>
        {/* Button 시작 */}
        <div>
          <div className="flex flex-row mt-[3rem] gap-[0.8rem]">
            <button className="text-[1.125rem] rounded-full bg-white py-[0.7rem] px-[1.5rem]">
              다른 주인공 만나러 가기 💖
            </button>
            <button className="text-[1.125rem] text-white  rounded-full py-[0.7rem] px-[0.75rem] bg-[#FCC729]">
              웹툰 ➡️
            </button>
          </div>
          <div className="text-[1.05rem] text-[#A1A1A1] border-2 rounded-full p-3 mt-[1.5rem] mb-[3rem] relative">
              주인공에게 하고 싶은 말을 입력하세요 
            <img
              src="/assets/FinalResultPage1/RightArrow.png"
              alt="RightArrow"
              className="w-[1.125rem] right-3  bottom-3.5 absolute"
              />
          </div>
        </div>
        {/* Button 끝 */}
      </div>
    </div>
  );
};

export default FinalResultPage1;
