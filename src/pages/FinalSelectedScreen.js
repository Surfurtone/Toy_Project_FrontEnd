import React from 'react';
import ChoiceBox from '../components/ChoiceBox';

// import ch_ex1 from '/assets/ch_example1.png';

const PageC = () => {
  const exampleObj = [
    {
      id: 1,
      img: '/assets/ch_example1.png',
      characterName: '성진우',
      characterAge: 25,
      content: '...벌레가 말을 다 하네?',
    },
    {
      id: 2,
      img: '/assets/ch_example2.png',
      characterName: '김재형',
      characterAge: 26,
      content: '집에 가고 싶다...',
    },
    {
      id: 3,
      img: '/assets/ch_example3.png',
      characterName: '권혁원',
      characterAge: 28,
      content: '...일어나라',
    },
    {
      id: 3,
      img: '/assets/ch_example3.png',
      characterName: '권혁원',
      characterAge: 28,
      content: '...일어나라',
    },
    {
      id: 3,
      img: '/assets/ch_example3.png',
      characterName: '권혁원',
      characterAge: 28,
      content: '...일어나라',
    },
    {
      id: 3,
      img: '/assets/ch_example3.png',
      characterName: '권혁원',
      characterAge: 28,
      content: '...일어나라',
    },
  ];

  return (
    <div className="bg-gray-300 flex min-h-screen justify-center">
      <div className="w-full max-w-[400px] bg-white overflow-x-hidden">
        <div className="pt-5 pb-12 bg-[#151515]">
          <header className="flex justify-center items-center pb-5">
            <img
              src="/assets/SelectPage1/Logo.png"
              alt="Example"
              className="h-auto"
            />
          </header>
          <main className="px-3.5 h-[710px] overflow-y-scroll overflow-auto no-scrollbar">
            <div className="flex flex-col gap-y-4">
              {exampleObj.map((item) => (
                <ChoiceBox
                  key={item.id}
                  img={item.img}
                  characterName={item.characterName}
                  characterAge={item.characterAge}
                  content={item.content}
                />
              ))}
            </div>
          </main>
          <footer className="pt-12 flex justify-center">
            <div className="bg-white w-4/5 py-2 rounded-2xl font-bold text-center cursor-pointer">
              내 운명은 누구일까? 💕
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PageC;
