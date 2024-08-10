// src/api/FetchDataComponent.js
import { useEffect } from 'react';
import { fetchGet } from './fetchData';

function FetchDataComponent({ onDataFetch }) {
  useEffect(() => {
    // 처음 렌더링 될 때 fetchGet 함수를 호출
    fetchGet()
      .then((data) => {
        onDataFetch(data); // 데이터를 부모 컴포넌트로 전달
      })
      .catch((error) => {
        console.error('Get 요청 에러:', error);
      });

    // 의존성 배열은 onDataFetch
    // onDataFetch 함수가 변경되면, useEffect가 다시 실행되어 데이터를 다시 가져올 것
  }, [onDataFetch]);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
}

export default FetchDataComponent;
