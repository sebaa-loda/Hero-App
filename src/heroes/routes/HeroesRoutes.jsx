import { Routes, Route, Navigate } from "react-router-dom";
import { Marvel,DC,Hero,SearchPage } from "../pages";
import { Navbar } from "../../ui";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
      <Routes>
        <Route path="marvel" element={<Marvel />} />
        <Route path="dc" element={<DC />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:id" element={<Hero />} />

        <Route path="/" element={<Navigate to="Marvel" />} />
      </Routes>
      </div>
    </>
  );
};
