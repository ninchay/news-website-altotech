import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ArticlePage from './pages/ArticlePage';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/searchResult" element={<SearchPage />} />
    <Route path="/article" element={<ArticlePage />} />
  </Routes>
</Router>
  );
}

export default App;
