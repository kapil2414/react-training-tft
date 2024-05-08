import { Routes, Route } from "react-router-dom"
import { PAGE_ROUTES } from "./utils/constants";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import UserProfile from "./pages/github/UserProfile";
import WeatherData from "./pages/weather/WeatherData";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={PAGE_ROUTES.HOME} element={<Home />} />
        <Route path={PAGE_ROUTES.LOGIN} element={<Login />} />
        <Route path={PAGE_ROUTES.WEATHER} element={<WeatherData />} />
        <Route path={PAGE_ROUTES.ABOUT} element={<About />} />
        <Route path={PAGE_ROUTES.GITHUBPROFILE} element={<UserProfile />} />
        <Route path={PAGE_ROUTES.FORM } element={<Form />}/>
      </Routes>
    </>

  );
}

export default App;
