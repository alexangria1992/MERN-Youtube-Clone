import React from "react";
import styled from "styled-components";

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>To Continue to AlexTube</SubTitle>
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Sign In</Button>
        <Title>or</Title>
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

const Container = styled.div`
  /* background-color: red; */
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 50px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;
export default SignIn;
