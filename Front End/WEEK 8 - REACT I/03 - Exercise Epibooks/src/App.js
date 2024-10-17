import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/navbar';
import MyFooter from './components/footer';
import MyBanner from './components/banner';
import AllTheBooks from './components/allTheBooks';


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyBanner imgUrl="https://i.pinimg.com/originals/e4/55/b7/e455b785fdf0d7277c57ca090b6c9f15.jpg" imgAlt="banner" />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
