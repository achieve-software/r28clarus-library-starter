import React from "react";
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledInput } from "./Login.style";


const Login = ({setCurrentUSer}) => {
  const handleSubmit=(e)=> {
e.preventdefault();
setCurrentUSer("anthony")



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