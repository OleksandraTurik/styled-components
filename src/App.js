import "./App.css";
import CurrentDay from "./components/CurrentDay";
import MainForecast from "./components/Forecast/MainForecast";

function App() {
  return (
    <div className="App">
      <CurrentDay />
      <MainForecast />
    </div>
  );
}

export default App;
