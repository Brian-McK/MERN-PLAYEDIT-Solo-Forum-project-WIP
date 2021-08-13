import './App.css';
import Header from './Components/Header/Header';
import TrendingPosts from './Components/TrendingPosts/TrendingPosts';
import MainSection from './Components/MainSection/MainSection';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TrendingPosts></TrendingPosts>
      <MainSection></MainSection>
    </div>
  );
}

export default App;
