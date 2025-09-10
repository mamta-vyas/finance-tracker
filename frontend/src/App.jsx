import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/:id/edit" element={<Edit />} />
        <Route path="/:id/delete" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
