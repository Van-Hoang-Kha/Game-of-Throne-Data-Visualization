import { createContext, Fragment } from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import ReactHowler from "react-howler";
import ThemeProvider from "./components/ThemeProvider";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Persona from "./pages/Persona/Persona";
import Relationship from "./pages/Relationship/Relationship";

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
        <Route path="/personality" component={Persona} />
        <Route path="/relationship" component={Relationship} />
      </Switch>
    </Fragment>
  );
};

export default App;
