import React from 'react';

const Main = () => {
  return (
    <div className="bg-gray-300 flex min-h-screen justify-center">
      <div className="w-full max-w-[400px] bg-white overflow-x-hidden">
        <div className="py-9 bg-[#151515] rounded-bl-3xl">
          <header className="flex justify-center text-white py-6">
            캐릭터 기반 웹툰 추천 서비스
          </header>
          <main className="flex flex-col items-center">
            <div
              className="h-72 w-72 mt-16 pm-10"
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
              <div
                className="flex h-20  items-center bg-[#F3DADA] rounded-l-full rounded-r-3xl"
                // style={{
                //   borderTopLeftRadius: '9999px',
                //   borderBottomLeftRadius: '9999px',
                //   borderTopRightRadius: '20px',
                //   borderBottomRightRadius: '20px',
                // }}
              >
                <div
                  className="w-32 h-20 rounded-full"
                  style={{
                    backgroundImage: `url('/assets/choice1.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <p className="text-sm px-4 rounded-r-3xl font-semibold">
                  "당신을 매료시킬
                  <br /> 여자 주인공을 선택하세요."
                </p>
              </div>
              <div className="flex h-20 rounded-r-full items-center bg-[#DDDEF6]">
                <p className="text-sm px-4 font-semibold">
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
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Main;
