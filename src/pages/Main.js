import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const [choice, setChoice] = React.useState('');

  const onChoiceChange = (choice) => {
    setChoice(choice);
    navigate('/SelectPage1/*');
  };

  return (
    <div className="bg-gray-300 flex min-h-screen justify-center">
      <style>
        {`
          @keyframes pulse-scale {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.15);
            }
          }

          .pulse-animation {
            animation: pulse-scale 1.5s infinite ease-in-out;
          }
        `}
      </style>
      <div className="w-full max-w-[400px] bg-white overflow-x-hidden">
        <div className="py-9 bg-[#151515]">
          <header className="flex justify-center text-white py-6">
            캐릭터 기반 웹툰 추천 서비스
          </header>
          <main className="flex flex-col items-center">
            <div
              className="h-72 w-72 mt-16 pm-10 pulse-animation"
              style={{
                backgroundImage: `url('/assets/logo.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="flex flex-col items-center text-white gap-7 mt-10 my-24">
              <div>“소개팅처럼 간편하게,</div>
              <div>나만의 주인공을 만나고</div>
              <div>당신에게 꼭 맞는 웹툰을 발견하세요!”</div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <button
                className="transform transition duration-200 ease-in-out hover:scale-105 active:scale-95"
                onClick={() => onChoiceChange('female')}
              >
                <div className="flex h-20 items-center bg-[#F3DADA] rounded-l-[60px] rounded-r-[10px] transition duration-300 ease-in-out hover:shadow-lg hover:border-t-4 hover:border-r-4 hover:border-b-4 hover:border-[#E0B1B1] active:bg-[#E0B1B1]">
                  <div
                    className="w-32 h-20 rounded-full"
                    style={{
                      backgroundImage: `url('/assets/choice1.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  <p className="text-sm px-4 rounded-r-3xl font-semibold text-left">
                    "당신을 매료시킬
                    <br /> 여자 주인공을 선택하세요."
                  </p>
                </div>
              </button>
              <button
                className="transform transition duration-300 ease-in-out hover:scale-105 active:scale-95"
                onClick={() => onChoiceChange('male')}
              >
                <div className="flex h-20 rounded-r-[60px] items-center bg-[#DDDEF6] rounded-l-[10px] transition duration-300 ease-in-out hover:shadow-lg hover:border-t-4 hover:border-l-4 hover:border-b-4 hover:border-[#9A9DF3] active:bg-[#9A9DF3]">
                  <p className="text-sm px-4 font-semibold text-left">
                    "당신을 매료시킬
                    <br /> 남자 주인공을 선택하세요."
                  </p>
                  <div
                    className="w-32 h-20 rounded-full"
                    style={{
                      backgroundImage: `url('/assets/choice2.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                </div>
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Main;
