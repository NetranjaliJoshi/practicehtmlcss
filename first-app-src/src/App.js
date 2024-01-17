import FunctionComp from "./Componets/FunctionComp";
import "./App.css";
import MyFcComp from "./Componets/MyFcComp";
import Classcomp from "./Componets/Classcomp";
import MyClassComp from "./Componets/MyClassComp";
import MyStateComp from "./Componets/MyStateComp";
import HoverComp from "./Componets/HoverComp";
import UpdateStateComp from "./Componets/UpdateStateComp";
import RenderComp from "./Componets/RenderComp";
import MyImagesComp from "./Componets/MyImagesComp";
import MyCssComp from "./Componets/MyCssComp";
import ChildComp from "./Componets/ChildComp";
import ParentComp from "./Componets/ParentComp";
import ToggleImages from "./task/ToggleImages";
import ChangingImages from "./task/ChangingImages";
import ClickCounterComp from "./task/ClickCounterComp";
import HoverCounterComp from "./task/HoverCounterComp";
import RenderPropsComp from "./Componets/RenderPropsComp";
import ChangeColorComp from "./task/ChangeColorComp";
import DisplayComp from "./task/DisplayComp";
import FavColor from "./Componets/FavColor";
import UserForm from "./Componets/UserForm";
import UseComp from "./Componets/UseComp";
import ErrorBoundry from "./Componets/ErrorBoundry";
import LifeCycleComp from "./Componets/LifeCycleComp";
import MyRoutingComp from "./Componets/MyRoutingComp";
import DashboardComp from "./CRUD/DashboardComp";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <FunctionComp myname="netranjali joshi" post="dev" /> */}
      {/* <MyFcComp
        fname="Netrabjali"
        lname="Joshi"
        company="Infoway"
        gender="Female"
        age="23"
      ></MyFcComp> */}
      {/* <div>
        =========================================================================
      </div>
      <Classcomp myname="netra" post="MEAN stack dev"></Classcomp>
      <div>
        =========================================================================
      </div>

      <MyClassComp post="devloper" myname="netranjali"></MyClassComp>
      <div>
        =========================================================================
      </div>

      <MyStateComp></MyStateComp>
      <div>
        =========================================================================
      </div> */}

      {/* <HoverComp></HoverComp> */}

      {/* <div>
        =========================================================================
      </div>

      <UpdateStateComp></UpdateStateComp>

      <div>
        =========================================================================
      </div>

      <RenderComp></RenderComp> */}

      {/* <MyImagesComp></MyImagesComp>

      <div>
        +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      </div>
      <MyCssComp></MyCssComp>

      <ParentComp></ParentComp> */}

      {/* <ToggleImages></ToggleImages>
      <ChangingImages></ChangingImages>
      <ClickCounterComp></ClickCounterComp>
      <HoverCounterComp></HoverCounterComp> */}
      {/* <RenderPropsComp
        render={(isLogin) => {
          return isLogin ? "Netranjali" : "User";
        }}
      ></RenderPropsComp> */}

      {/* <RenderPropsComp
        render={(count, incrementCount) => {
          return (
            <ClickCounterComp
              count={count}
              incrementCount={incrementCount}
            ></ClickCounterComp>
          );
        }}
      ></RenderPropsComp>

      <RenderPropsComp
        render={(count, incrementCount) => {
          return (
            <HoverCounterComp
              count={count}
              incrementCount={incrementCount}
            ></HoverCounterComp>
          );
        }}
      ></RenderPropsComp>

      <ChangeColorComp></ChangeColorComp>
      <DisplayComp></DisplayComp>
      <FavColor></FavColor> */}
      {/* <UserForm></UserForm> */}
      {/* <ErrorBoundry>
        <UseComp uname="Admin"></UseComp>
      </ErrorBoundry>
      <ErrorBoundry>
        <UseComp uname="Netra"></UseComp>
      </ErrorBoundry>
      <ErrorBoundry>
        <UseComp uname="Aditi"></UseComp>
      </ErrorBoundry>
      <ErrorBoundry>
        <UseComp uname="Rhutu"></UseComp>
      </ErrorBoundry> */}
      {/* <LifeCycleComp mycolor="green"></LifeCycleComp> */}
      <MyRoutingComp></MyRoutingComp>
    </div>
  );
}

export default App;
