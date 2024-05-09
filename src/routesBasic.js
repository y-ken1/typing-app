import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import TopPage from "./pages/TopPage";
import TypingPage from "./pages/TypingPage";

const routesBasic = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<TopPage />} />
      <Route path="/typing" element={<TypingPage />} />
    </>
  )
);

export default routesBasic;
