import { Route } from "react-router-dom";
import Header from "../Header";
import "./App.css";
import * as S from "./App.style";
import Theme from "../../styles/theme";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/Theme/themeSlice";

function App() {
  const currTheme = useSelector(selectTheme);
  return (
    <Theme lightOn={currTheme}>
      <S.AppWrapper>
        <Header />
        <Route path="/home" />
        <Route path="/mybooks" />
        <Route path="/myprofile" />
      </S.AppWrapper>
    </Theme>
  );
}

export default App;
