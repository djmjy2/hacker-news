# hacker-news
자바스크립트와 타입스크립트 사용해보기

2021.09.18
믹스인 기능을 타입스크립트 공식문서에서 applyApiMixins 을 가져왔는데 아직 이해가 안된다

2021.09.19
뷰 클래스 구조로 변경하니 NEW_URL불러오는 과정이 자꾸 에러가난다.. 인수가 0 개가 필요한데 1개를 불러온다... 뭘까

아무래도 어제 해본 믹스인 기능에서 뭐가 문제가 있는듯 싶어 과감히 롤백해보니까 정상작동된다. 믹스인은 좀더 이해가 필요할듯 하다

2021.09.20
파일 나눠놓으니까 뭔가 프로젝트 같아 보인다

2021.09.21 
스프레드 오퍼레이터 ... (배열병합)을 사용했다
다른 오퍼레이터도 더 알아볼것

'Store' 형식의 인수는 'NewsStore' 형식의 매개 변수에 할당될 수 없습니다 'Store' 형식에 'NewsStore' 형식의 nextpage, prevpage 속성이 없습니다.
이건 뭐가문제일까... 
-> 대소문자... nextpage > nextPage, prevpage > prevPage 하아...

2021.09.25
async await 를 사용하여 동기코드같은 구조지만 비동기로 동작하게끔
!!Promise 에 대해 조금 더 공부하여 확실히 이해하기!!

2021.09.26
JS로 코드짜고 TS로 포팅하고 클래스 구조화하고 하다보니 좀 신기하다 전 직장에서 개발자들 보며 뭔가 프로같은 느낌이다 싶었는데 내가 그런모습을 조금이나마 갖게되니 재밌기도 하다 이제 이것 짜면서 느낀것들 복습할것들 다시 돌아보고 더 공부해볼 내용들도 다시 챙겨봐야겠다