import PropTypes from 'prop-types';
// ./는 현재폴더를 의미하고
// ../는 상위폴더를 의미한다
// 객체에 있는 값을 사용하려면 점(.) 연사자를 쓴다. -> props.fav
// ES6 구조 분해 할당을 사용하면 props를 좀 더 편리한 방법으로 사용할수있다.


function Food({name, picture, rating}) {

    return (<div>
        <h2>I like {name}</h2>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name}/>
    </div>
    );
}

const foodILike = [
    {
        id: 1,
        name: 'Kimchi',
        image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        rating: 5,
    },
    {
        id: 2,
        name: 'Samgyeopsal',
        image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        rating: 4.9,
    },
    {
        id: 3,
        name: 'Bibimbab',
        image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        rating: 4.2,
    },
    {
        id: 4,
        name: 'Doncasu',
        image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        rating: 2.9,
    },
    {
        id: 5,
        name: 'Kimbap',
        image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        rating: 3,
    },
];

const renderFood = dish => <Food name={dish.name} picture={dish.image} rating={dish.rating} /> //화살표 함수로 작성한 renderFood();

// key props는 컴포넌트에 직접 전달되지 않는다

function App() {
  // return <div className="App" />;

  return (
      <div>
          {foodILike.map(dish => (
              <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
          ))}
      </div>
  )
}

Food.propTypes = {

    // .isRequired 는 꼭 필요하다는 뜻
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
}
export default App;
