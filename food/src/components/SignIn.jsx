

import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";


const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;
const TextButton = styled.div`
  width: 100%;
  text-align: end;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SignIn=()=>{
    return <Container>SignIn
        <div>
            <Title>Welcome to app</Title>
            <Span>Please login withyour detials first</Span>
        </div>
        <div style={{display:"flex",gap:"20px",flexDirection:"column"}}>
            <TextInput label="Email Adress" 
            placeholder="enter your email adress"/>

<TextInput label="Passwords" 

            placeholder="enter your password"/>
            <TextButton>Forgot password</TextButton>
            <Button text="Sign In"/>

        </div>
    </Container>;
}

export default SignIn;