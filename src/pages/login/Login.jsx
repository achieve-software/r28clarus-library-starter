import React from "react";
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledInput } from "./Login.style";
import { useNavigate } from "react-router-dom";


const Login = ({setCurrentUSer}) => {
  const navigate =useNavigate()

  const handleSubmit=(e)=> {
e.preventdefault();
setCurrentUSer("anthony")
sessionStorage.setItem("user", "anthony");
navigate(-1)


  }
  return (
    <LoginContainer>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <Header>Login Here</Header>
          <StyledInput type="text" placeholder="Username" />
          <StyledInput type="password" placeholder="Password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};export default Login;