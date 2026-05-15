import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchBooks } from "../api/bookApi";

function BookListPage() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks()
      .then(setBooks)
      .catch((e) => alert(e.message));
  }, []);

  return (
    <div className="container">
      <h1>書籍一覧</h1>

      <table>
        <thead>
          <tr>
            <th>JANコード</th>
            <th>ISBNコード</th>
            <th>書籍名称</th>
            <th>書籍名称カナ</th>
            <th>価格</th>
            <th>発行日</th>
            <th>編集</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.janCd}>
              <td>{book.janCd}</td>
              <td>{book.isbnCd}</td>
              <td>{book.bookNm}</td>
              <td>{book.bookKana}</td>
              <td>{book.price}</td>
              <td>{book.issueDate}</td>
              <td>
                <button onClick={() => navigate(`/books/${book.janCd}/edit`)}>
                  編集
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookListPage;