// [설치순서]
// 1. yarn add axios


// https://yts.torrentbay.to/api yts API
// https://yts.torrentbay.to/api/v2/list_movies.json yts API


// github.com/serranoarevalo/yts-proxy 노마드코더영화API
// https://yts-proxy.now.sh/movie_details.json
// + list_movies.json 노마드코더영화API
// + movie_details.json 디테일 리스트

// yts api 주소에서 앞에 https://yts-proxy.now.sh/ 변경하고 뒤에는 동일시 사용가능

// 크롬 웹 스토어 JSON Viewer 확장 도구 설치하기
// 100. yarn add prop-types


// ./는 현재폴더를 의미하고
// ../는 상위폴더를 의미한다
// 객체에 있는 값을 사용하려면 점(.) 연사자를 쓴다. -> props.fav
// ES6 구조 분해 할당을 사용하면 props를 좀 더 편리한 방법으로 사용할수있다.
// .isRequired 는 꼭 필요하다는 뜻
// key props는 컴포넌트에 직접 전달되지 않는다

// [생명주기 함수]
// constructor(): 1번으로 실행 ->
// render():2번으로 실행 ->
// componentDidMount(): 컴포넌트가 처음 화면에 그려지면 실행 ->
// componentDidUpdate(): 화면이 업데이트 되면 실행
// componentWillUnmount(): 컴포넌트가 죽을때 실행