import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.primary.main};
`;

export const SubBlock = styled.div`
  position: absolute;
  top: 35px;
  display: flex;
  flex-direction: column;
  width: inherit;
  padding: inherit;
  color: blue;
  background-color: grey;
`;
export const SubBlockItem = styled.div`
  padding: 10px;
  :hover {
    background-color: white;
  }
`;

export const Block = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
`;
export const BlockItem = styled.div`
  position: relative;
  width: fit-content;
  padding: 0 10px;
  color: ${(props) => props.theme.colors.textPrimary.main};
  cursor: pointer;
  ${SubBlock} {
    display: none;
  }
  :hover {
    ${SubBlock} {
      display: flex;
    }
  }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
