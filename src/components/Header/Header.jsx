import React from "react";
import * as S from "./Header.style";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTheme,
  setLightTheme,
  setDarkTheme,
} from "../../redux/Theme/themeSlice";
function Header() {
  let currTheme = useSelector(selectTheme);
  const dispatch = useDispatch();
  return (
    <S.HeaderWrapper>
      <S.Block>
        <S.BlockItem>Home</S.BlockItem>
        <S.BlockItem>
          My Books
          <S.SubBlock>
            <S.SubBlockItem>Favorites</S.SubBlockItem>
            <S.SubBlockItem>Account</S.SubBlockItem>
            <S.SubBlockItem>Privacy</S.SubBlockItem>
          </S.SubBlock>
        </S.BlockItem>
        <S.BlockItem>
          My Profile
          <S.SubBlock>
            <S.SubBlockItem>Favorites</S.SubBlockItem>
            <S.SubBlockItem>Account</S.SubBlockItem>
            <S.SubBlockItem>Privacy</S.SubBlockItem>
          </S.SubBlock>
        </S.BlockItem>
        <S.BlockItem>
          <S.CheckBoxWrapper>
            <S.CheckBox
              id="checkbox"
              type="checkbox"
              onClick={() => {
                if (currTheme) {
                  dispatch(setDarkTheme());
                } else {
                  dispatch(setLightTheme());
                }
              }}
            />
            <S.CheckBoxLabel htmlFor="checkbox" />
          </S.CheckBoxWrapper>
        </S.BlockItem>
      </S.Block>
    </S.HeaderWrapper>
  );
}

export default Header;
