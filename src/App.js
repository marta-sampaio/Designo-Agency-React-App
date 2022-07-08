import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes.js';
import { Home, WebDesign, AppDesign, GraphicDesign, About, Locations, Contact, NotFound } from './pages';
import { Header, Footer } from './components';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/';



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path={routes.Home} element={<Home />} />
          <Route path={routes.WebDesign} element={<WebDesign />} />
          <Route path={routes.AppDesign} element={<AppDesign />} />
          <Route path={routes.GraphicDesign} element={<GraphicDesign />} />
          <Route path={routes.About} element={<About />} />
          <Route path={routes.Locations} element={<Locations />} />
          <Route path={routes.Contact} element={<Contact />} />
          <Route path={routes.NotFound} element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
