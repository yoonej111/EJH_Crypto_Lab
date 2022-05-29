import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="companyname">
                        EJH Crypto Labs
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features" className="menu">
                                Home
                            </Nav.Link>
                            <Nav.Link href="#pricing" className="menu">
                                Member
                            </Nav.Link>
                            <Nav.Link href="#pricing" className="menu">
                                Project
                            </Nav.Link>
                            <NavDropdown
                                title="Dropdown"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div id="main">메인화면</div>
            <div id="member">Members</div>
            <div id="project">Project</div>
            <footer>Copyright by EJH Crypto labs@2022</footer>
        </div>
    );
}

export default App;
