// [설치순서]
// 1.yarn add prop-types


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