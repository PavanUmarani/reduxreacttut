// import User from './User';
import HomeContainer from './Containers/HomeContainer'
import HeaderContainer from './Containers/HeaderContainer';
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <h1>App Component</h1> */}
     {/* <User data={{name:"pavan"}}/> */}
     <HeaderContainer/>
     <HomeContainer/>
    </div>
  );
}

export default App;
