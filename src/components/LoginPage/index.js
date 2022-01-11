import { Page, Input, Form, ButtonEnter, TextButton, StyledLink, LogoDriven } from "../styleds/styleds.js";
import UserContext from "../Contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLoginRequest } from "../../tools/Server"
import Loader from "react-loader-spinner";


export default function LoginPage(){
    const { setUserData } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    useEffect (() => {
        if (localStorage.getItem("userInfo") !== null){

            //navigate("/hoje")
        }
        // eslint-disable-next-line
    }, [])

    function login(e){
        e.preventDefault();
        setIsLoading(true);
        const infos = {
            email,
            password
        }

        postLoginRequest(infos)
            .then(response => {
                setUserData(response.data)
                localStorage.setItem("userInfo", JSON.stringify(response.data))
                //navigate('/hoje')
            })
            .catch(error => {
                if (error.response.status === 422 || error.response.status === 401) {
                    alert("Dados Invalidos");
                    return;
                }
                alert(error);
            })
            .finally(() => setIsLoading(false));

    }  


    return (
        <Page> 
            <LogoDriven/>
            <Form onSubmit={login}>
                <Input
                    placeholder="email"
                    type="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    disabled={isLoading}
                />
                <Input
                    placeholder="senha"
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    disabled={isLoading}
                />
            <ButtonEnter type="submit" disabled={isLoading}> 
            {!isLoading ? "Entrar" : <Loader type="ThreeDots" color="#FFF" height={50} width={80} />} 
            </ButtonEnter>
            </Form>
            <StyledLink to="/cadastro">
                <TextButton fontsize="14px" underline={true}>
                Não tem uma conta? Cadastre-se!
                </TextButton>
            </StyledLink>
        </Page>
    )

}
