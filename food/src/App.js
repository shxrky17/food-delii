import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// New component for the footer

// Styled container for app content
const Container = styled.div`
`;



function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          <Navbar />
          
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Add more routes as necessary */}
            </Routes>
          
          
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
