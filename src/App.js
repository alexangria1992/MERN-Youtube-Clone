import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>
          <h1>test</h1>
          <h1>test</h1>
        </Wrapper>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  background-color: lightsalmon;
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div``;

export default App;
