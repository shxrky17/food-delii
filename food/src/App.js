import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import Authentication from "./pages/Authentication";
import Favourites from "./pages/Favourites";
import Cart from "./pages/Cart";
import FoodDetails from "./pages/FoodDetails"
import FoodListing from "./pages/FoodListing"


// New component for the footer

// Styled container for app content
const Container = styled.div`
`;

function App() {
  const [openAuth, setOpenAuth] = useState(false); // Define the state here
  
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          <Navbar setOpenAuth={setOpenAuth} openAuth={openAuth} /> {/* Pass the props here */}
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" exact element={<Favourites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dishes/:id" element={<FoodDetails />} />
            <Route path="/dishes" element={<FoodListing />} />
          </Routes>

          {openAuth && (
            <Authentication setOpenAuth={setOpenAuth} openAuth={openAuth} />
          )}
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
