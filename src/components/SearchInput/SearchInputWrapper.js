import styled from "styled-components";
import { screen } from "~/Style";
const SearchInputWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 40px;

  border: 1px solid  #fda727;
  border-radius: 2px;
  display:flex;
  .remove-btn,.dropdown-btn{
    position: absolute;
    top: 0;
    right: 56px;
    bottom: 0;
    padding-top: 4px;
    width: 27px;
    background: white;
    border: none;
    cursor: pointer;
    &:focus{
      outline: none;
    }
  }  
  @media screen and (max-width: ${screen.small}) {
  width: 100%;
  .remove-btn,.dropdown-btn{
    right:48px;
    }
  }
`;
export default SearchInputWrapper;
