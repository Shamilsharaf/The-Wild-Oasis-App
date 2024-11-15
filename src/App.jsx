import styled from "styled-components";
import GlobalStyles from "./styles/GolbalStyles";
import Heading from "./ui/Heading";
import Button from "./ui/Button";
import Input from "./ui/Input";

const StyledApp = styled.div`
    background-color: orangered;
    padding: 20px;
    `;

function App() {
  return (
    <>
    <GlobalStyles />
  <StyledApp>
    <Heading>The Wild Oasis</Heading>
    <Button onClick={() => alert("Check in")}>Check in </Button>
    <Button onClick={() => alert("Check out")}>Check out </Button>

    <Input type='number' placeholder="Number of guests" />
    <Input type='number' placeholder="Number of guests" />
    </StyledApp>
    </>
  );
}

export default App;
