import "./App.css";
import CardBussinesComponent from "./cards/components/card/CardBussinesComponent";
import Cards from "./cards/components/Cards";
import PageHeader from "./components/PageHeader";
import ButtonComponent from "./sandbox/data-display/ButtonComponent";
import CardComponent from "./sandbox/data-display/CardComponent";
import StackComponent from "./sandbox/data-display/StackComponent";
import TypographyComponent from "./sandbox/data-display/TypographyComponent";
import FatherComponentEvent from "./sandbox/Events/FatherComponentEvent";
import OnClickEvent from "./sandbox/Events/OnClickEvent";
import LoopComponent from "./sandbox/loops/LoopComponent";
import ObjectPropParent from "./sandbox/props/ObjectPropParent";
import StringPropParent from "./sandbox/props/StringPropParent";

function App() {
  return (
    <div className="App">
      <Cards />
      <FatherComponentEvent />
    </div>
  );
}

export default App;
