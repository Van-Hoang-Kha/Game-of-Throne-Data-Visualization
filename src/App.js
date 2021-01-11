import {
  lazy,
  Suspense,
  useEffect,
  createContext,
  useReducer,
  Fragment,
} from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import ReactHowler from "react-howler";
import { Transition, TransitionGroup } from "react-transition-group";
import classNames from "classnames";
import { Helmet } from "react-helmet";
import { useLocalStorage } from "hooks";
import ThemeProvider from "./components/ThemeProvider";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Personality from "./pages/Personality";

export const AppContext = createContext();

const App = () => {
  return (
    <AppContext.Provider>
      <ThemeProvider themeId="light">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Fragment>
      <ReactHowler
        src={["/music/mhysa.mp3"]}
        playing={true}
        volume={0.5}
        loop={false}
        autoplay={true}
        preload={true}
      />
      <Navbar location={location} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/#personality" component={Personality} />
      </Switch>
    </Fragment>
  );
};

export default App;
