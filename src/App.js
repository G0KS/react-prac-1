import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetupPage from "./pages/NewMeetupPage";
import FavoritesPage from "./pages/FavoritesPage";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
