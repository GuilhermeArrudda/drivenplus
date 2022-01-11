import styled from "styled-components";
import { Link } from "react-router-dom";
import  Logo  from "../../assets/Logo.svg";

const Page = styled.article`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000000;
    padding: 70px 0;
    overflow-y: scroll;
`;

const Input = styled.input`
    width: 299px;
    height: 52px;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    padding: 0 11px;
    color: #7E7E7E;
    margin-bottom: 6px;
    font-size: 20px;
    line-height: 25px;
    &::placeholder{
        font-size: 20px;
        line-height: 25px;
        font-family: 'Roboto', sans-serif;
        color: #DBDBDB;
    }
    &:hover{
        filter: brightness(0.9);
    }
    &:disabled{
        background-color: #F2F2F2;
        color: #AFAFAF;
    }
    &:focus{
        outline: none;
    }
`;

const Form = styled.form`
    width: 303px;
`;

const ButtonEnter = styled.button`
    font-family: 'Roboto', sans-serif;
    background-color: #FF4791;
    color: #FFF;
    width: 299px;
    height: 52px;
    margin-bottom: 25px;
    border-radius: 5px;
    border: none;
    font-size: 21px;
    &:disabled{
        opacity: 0.4;
    }
    &:hover {
        filter: brightness(0.9);
    } 
`;

const TextButton = styled.span`
    color: #FFFFFF;
    font-size: ${props => props.fontsize};
    text-decoration: ${props => props.underline ? "underline" : "none"};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    &:hover {
        filter: brightness(0.9);
    } 
    &:focus, &:visited, &:link, &:active {
    text-decoration: none;
}
`;

const LogoDriven = styled.div`
    margin: 134px 0 100px 0;
    width: 299px;
    height: 49px;
    background: url(${Logo});
`;

export {
    Page,
    Input,
    Form,
    ButtonEnter,
    TextButton,
    StyledLink,
    LogoDriven,
}