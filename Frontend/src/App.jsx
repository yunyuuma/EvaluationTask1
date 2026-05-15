import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BookListPage from "./pages/BookListPage";
import BookEditPage from "./pages/BookEditPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books" element={<BookListPage />} />
        <Route path="/books/:janCd/edit" element={<BookEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;