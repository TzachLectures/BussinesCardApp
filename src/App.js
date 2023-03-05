import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Cards from "./cards/components/Cards";
import CardPage from "./cards/pages/CardPage";
import Layout from "./layout/Layout";
import AboutPage from "./pages/AboutPage";
import Router from "./routes/Router";
import FatherComponent from "./sandbox/propTypes/FatherComponent";
import Counter from "./sandbox/stateHook/Counter";
import MyDetails from "./sandbox/stateHook/MyDetails";
import Todo from "./sandbox/stateHook/Todo";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

function App() {
  // const theme = createTheme({
  //   palette: {
  //     mode: "dark",
  //   },
  // });
  return (
    <div>
      <BrowserRouter>
        {/* <MuiThemeProvider theme={theme}> */}
        <Layout>
          <Router />
        </Layout>
        {/* </MuiThemeProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
