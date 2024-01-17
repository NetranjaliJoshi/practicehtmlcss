import logo from "./logo.svg";
import "./App.css";
import ChangeColor from "./Components/ChangeColor";
import ClickCounter from "./Components/ClickCounter";
import HOC from "./Components/MainHOC";
import CompHoc from "./Components/CompHoc";
import RouterComp from "./CURD/RouteComp";

function App() {
  return (
    <div className="App">
      <ChangeColor />
      <ClickCounter />
      <CompHoc />
      <HOC />
      <RouterComp></RouterComp>
    </div>
  );
}

export default App;
