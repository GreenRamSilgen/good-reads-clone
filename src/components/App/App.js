import { Route } from "react-router-dom";
import Header from "../Header";
import "./App.css";
import * as S from "./App.style";

function App() {
  return (
    <S.AppWrapper>
      <Header />
      <Route path="/home" />
      <Route path="/mybooks" />
      <Route path="/myprofile" />
    </S.AppWrapper>
  );
}

export default App;
