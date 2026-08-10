import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { CaseStudy } from "./pages/CaseStudy";
import { Home } from "./pages/Home";
import { Presentations } from "./pages/Presentations";
import { WorkIndex } from "./pages/WorkIndex";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<WorkIndex />} />
          <Route path="work/:slug" element={<CaseStudy />} />
          <Route path="presentations" element={<Presentations />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
