import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import Sidebar from "./Sidebar";
import Header from "./Header";
=======
import Header from "./Header";
import Sidebar from "./Sidebar";
>>>>>>> Final-a6d1522
import styled from "styled-components";

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
<<<<<<< HEAD
`;
=======
`
>>>>>>> Final-a6d1522

const Main = styled.main`
    background-color: var(--color-grey-50);
    padding: 4rem 4.8rem 6.4rem;
<<<<<<< HEAD
=======
    overflow: scroll;
`;

const Container = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
>>>>>>> Final-a6d1522
`;

function AppLayout() {
    return (
        <StyledAppLayout>
            <Header />
            <Sidebar />
            <Main>
<<<<<<< HEAD
                <Outlet />
=======
                <Container>
                    <Outlet />
                </Container>
>>>>>>> Final-a6d1522
            </Main>
        </StyledAppLayout>
    );
}

<<<<<<< HEAD
export default AppLayout;
=======
export default AppLayout;
>>>>>>> Final-a6d1522
