let total = 0;

const qnaList = [
    {
      q: '1. 이병찬의 나이는? 5점(★)',
      img: '#',
      a: [
        { answer: 'a. 2002년생', score: 5 },
        { answer: 'b. 2004년생', score: 0 },
        { answer: 'c. 2007년생', score: 0 },
        { answer: 'd. 2001년생', score: 0 },
      ]
    },
    {
      q: '2. 이병찬이 나온 군대는? 15점(★★★)',
      a: [
        { answer: 'a. 공군 32사단', score: 0 },
        { answer: 'b. 해군 37사단 ', score: 0 },
        { answer: 'c. 육군 12사단', score: 10 },
        { answer: 'd. 사회복무요원(공익)', score: 0 },
      ]
    },
    {
      q: '3. 이병찬이 사는 곳은? 5점(★)',
      a: [
        { answer: 'a. 대구 달서구', score: 0 },
        { answer: 'b. 서울 강동구', score: 0 },
        { answer: 'c. 창원 성산구', score: 0 },
        { answer: 'd. 부산 북구', score: 5 },
      ]
    },
    {
      q: '4. 이병찬의 전공은? 5점(★)',
      a: [
        { answer: 'a. 컴퓨터공학과', score: 0 },
        { answer: 'b. IT응용공학과', score: 5 },
        { answer: 'c. 기계공학과', score: 0 },
        { answer: 'd. 댄스스포츠과', score: 0 },
      ]
    },
    {
      q: '5. 이병찬이 좋아하지 않는 음식을 고르시오. 10점(★★★★)',
      a: [
        { answer: 'a. 연어초밥', score: 0 },
        { answer: 'b. 대게', score: 10 },
        { answer: 'c. 파스타', score: 0 },
        { answer: 'd. 마라탕', score: 0 },
      ]
    },
  
    {
      q: '6. 이병찬의 MBTI를 맞추시오 10점(니가 마음대로 생각하는 MBTI말고)(★★★★)',
      a: [
        { answer: 'a. ESTP', score: 0 },
        { answer: 'b. INTJ', score: 0 },
        { answer: 'c. INTP', score: 0 },
        { answer: 'd. ENFJ', score: 10 },
      ]
    },
    {
      q: '7. 이병찬이 가장 좋아하는 아이돌은? 15점(★★★)',
      a: [
        { answer: 'a. 아이브의 장원영', score: 0 },
        { answer: 'b. 르세라핌의 김채원', score: 10 },
        { answer: 'c. 뉴진스의 하니', score: 0 },
        { answer: 'd. 아일릿의 민주', score: 0 },
      ]
    },
    {
      q: '8. 이병찬이 전혀 할 줄 모르는 스포츠는? 15점(★★★★)',
      a: [
        { answer: 'a. 수영', score: 0 },
        { answer: 'b. 스노우보드', score: 0 },
        { answer: 'c. 태권도', score: 15 },
        { answer: 'd. 테니스', score: 0 },
      ]
    },
    {
      q: '9. 이병찬의 주량은? 10점(★★★)',
      a: [
        { answer: 'a. 소주 1병', score: 10 },
        { answer: 'b. 소주 4잔', score: 0 },
        { answer: 'c. 소주 2병', score: 0 },
        { answer: 'd. 소주 4병', score: 0 },
      ]
    },
    {
      q: '10. 다음 중 거짓말은? 10점(★★★★★) ',
      a: [
        { answer: 'a. 난 번지점프를 해본적이 있다.', score: 0 },
        { answer: 'b. 난 갓난아기때 돼지였다.', score: 0 },
        { answer: 'c. 중3때 키가 143cm이다.', score: 0 },
        { answer: 'd. 어렸을 때 미술학원을 다녔다.', score: 10 },
      ]
    },
    {
      q: '11. 이병찬이 키우는 강아지의 종은? 10점(★★★) ',
      a: [
        { answer: 'a. 골든 리트리버', score: 0 },
        { answer: 'b. 늑대', score: 0 },
        { answer: 'c. 포메라니안', score: 0 },
        { answer: 'd. 카바리에 킹 찰스 스파니엘', score: 10 },
      ]
    },
    {
      q: '12. 다음 중 이병찬이 소지하고 있는 물건은? 10점(★★★)',
      a: [
        { answer: 'a. 45구경 리볼버', score: 0 },
        { answer: 'b. 마체테', score: 0 },
        { answer: 'c. 손흥민싸인 야구공', score: 0 },
        { answer: 'd. 공포탄', score: 10 },
      ]
    }
  ];
  

  const infoList = [
    {
      name: 'A+학점',
      desc: '나의 모든것을 알고있는 미친놈! 너는 그냥 미친놈! 무섭다 너',
      r_img: '#'
    },
    {
      name: 'A0',
      desc: '오 엄청난 나의 진정한 친구. 넌 나랑 뒤질때까지 만나야한다. 도망갈 생각하지마라.',
      r_img: '#'
    },
    {
      name: 'B+',
      desc: '오호 이 정도면 진정한 내친구 좋다 좋아 이대로만 가자 개 라스가',
      r_img: '#'
    },
    {
      name: 'B0',
      desc: '흠 비제로면 재수강하기도 애매하고 냅두기도 애매하고 그런 그저 애매한 친구 ㄷㄷ; 공부좀해라',
      r_img: '#'
    },
    {
      name: 'C+',
      desc: '개 서운한 부분. 나랑 좀 더 놀어야 함. 아님 그냥 관심이 없는건가 개 서운삼뽕스크류바;',
      r_img: '#'
    },
    {
      name: 'C0',
      desc: '아니 이건 개너무하네 걍 다 찍은 거 아님? 진짜 모르는 거면 디앰으로 1ㄷ1 상담신청 ㄱ',
      r_img: '#'
    },
    {
      name: 'D+',
      desc: '아니 이거 정신나갔네 걍 모르는 사람이노 이 사람은',
      r_img: '#'
    },
    {
      name: 'D0',
      desc: '진짜 너는 안되겠다 병초리좀 맞자. ',
      r_img: '#'
    },
    {
      name: 'F',
      desc: 'ㅋㅋㅋㅋㅋㅋㅋ 걍 넌 나가라 재수강 할 생각도 하지마소 덕천역에서 야차룰로 1ㄷ1 ㄱㄱ (물론 내가 안싸움)',
      r_img: '#'
    },
  ]