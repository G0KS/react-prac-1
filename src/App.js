import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetupPage from "./pages/NewMeetupPage";
import FavoritesPage from "./pages/FavoritesPage";
import MainNavbar from "./layouts/MainNavbar";

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route exact path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  );
}

export default App;
