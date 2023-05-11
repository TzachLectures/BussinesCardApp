import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CardPage from "../cards/pages/CardPage";
import EditCardPage from "../cards/pages/EditCardPage";
import FavCards from "../cards/pages/FavCards";
import MyCards from "../cards/pages/MyCards";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import MyCounter from "../sandbox/class/customHook/MyCounter";
import ShowAlert from "../sandbox/class/customHook/ShowAlert";
import MyData from "../sandbox/class/memorization/MyData";
import ShowData from "../sandbox/class/memorization/ShowData";
import ChangeColor from "../sandbox/class/stateTasks/ChangeColor";
import ChangeStyle from "../sandbox/class/stateTasks/ChangeStyle";
import Father from "../sandbox/context/Father";
import Countries from "../sandbox/effectHook/Countries";
import Effect from "../sandbox/effectHook/Effect";
import FirstEffect from "../sandbox/effectHook/FirstEffect";
import MyForm from "../sandbox/forms/MyForm";
import MyForm2 from "../sandbox/forms/MyForm2";
import TestForm from "../sandbox/forms/TestForm";
import CallBackHook from "../sandbox/memoryHooks/CallBackHook";
import Memo from "../sandbox/memoryHooks/Memo";
import Counter2 from "../sandbox/render/Counter2";
import Get2Countries from "../sandbox/render/Get2Countries";
import RenderComponent from "../sandbox/render/RenderComponent";
import SandBox from "../sandbox/SandBox";
import Counter from "../sandbox/stateHook/Counter";
import MyDetails from "../sandbox/stateHook/MyDetails";
import Password from "../sandbox/stateHook/Password";
import Todo from "../sandbox/stateHook/Todo";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import ROUTES from "./routesModel";
import Profile from "../users/pages/Profile";
import Map from "../sandbox/map/Map";
import MapPage from "../sandbox/map/MapPage";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardPage />} />
      <Route path={ROUTES.CARDS} element={<CardPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavCards />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCards />} />
      <Route path={ROUTES.USER_PROFILE} element={<Profile />} />
      <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="counter" element={<Counter />} />
        <Route path="mydetails" element={<MyDetails />} />
        <Route path="password" element={<Password />} />
        <Route path="todo" element={<Todo />} />
        <Route path="firsteffect" element={<FirstEffect />} />
        <Route path="countries" element={<Countries />} />
        <Route path="effect" element={<Effect />} />
        <Route path="render" element={<Get2Countries />} />
      </Route>
      <Route path="test" element={<MyForm />} />
      <Route path="form" element={<TestForm />} />
      <Route path="map" element={<MapPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
