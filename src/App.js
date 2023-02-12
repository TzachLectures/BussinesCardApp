import "./App.css";
import Cards from "./cards/components/Cards";
import CardPage from "./cards/pages/CardPage";
import AboutPage from "./pages/AboutPage";
import FatherComponent from "./sandbox/propTypes/FatherComponent";
import Counter from "./sandbox/stateHook/Counter";
import MyDetails from "./sandbox/stateHook/MyDetails";

function App() {
  return (
    <div className="App">
      <MyDetails />
    </div>
  );
}

export default App;
