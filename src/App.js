import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes.js';
import { Home, WebDesign, AppDesign, GraphicDesign, About, Locations, Contact, NotFound } from './pages';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
