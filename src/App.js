import HomePageContainer from "./Container/HomePageContainer"
import PlayersContainer from "./Container/PlayersContainer"
import GameSetupContainer from "./Container/GameSetupContainer"
import GamePlayContainer from "./Container/GamePlayContainer"
import EndOfGameContainer from "./Container/EndOfGameContainer"
// import './App.css';

function App() {
  return (
    <div className="App">
      <HomePageContainer />
      <PlayersContainer />
      <GameSetupContainer />
      <GamePlayContainer />
      <EndOfGameContainer />
    </div>
  );
}

export default App
