/**
 * background scripts란 background page에서 동작하는 코드입니다.
 * background page는 chrome:// 프로토콜로 시작하는 익스텐션 고유의 웹 페이지입니다.
 * 다른 웹 사이트와 다르게 background page는 설정에 따라 다르겠지만 일반적으로 크롬을 아예 종료하기 전까지 계속 살아있습니다.
 * 모든 웹 페이지처럼 background page는 고유의 HTML, CSS, Javascript를 가지며(실제로 볼 일은 없겠지만),
 * 로컬 스토리지, 세션 스토리지도 있고, 브라우저 쿠키에도 접근할 수 있습니다.
 * 그 중 가장 큰 특징은 Cross-origin XMLHttpReqeust가 가능하다는 점입니다.
 * 쉽게 말하면 권한(permission)을 추가했다면 외부 API를 마음껏 호출할 수 있습니다.
 */
