import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBook, updateBook } from "../api/bookApi";

function BookEditPage() {
  const { janCd } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    isbnCd: "",
    bookNm: "",
    bookKana: "",
    price: "",
    issueDate: "",
  });

  useEffect(() => {
    fetchBook(janCd)
      .then((book) => {
        setForm({
          isbnCd: book.isbnCd || "",
          bookNm: book.bookNm || "",
          bookKana: book.bookKana || "",
          price: book.price ?? "",
          issueDate: book.issueDate || "",
        });
      })
      .catch((e) => alert(e.message));
  }, [janCd]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateBook(janCd, {
      ...form,
      price: form.price === "" ? null : Number(form.price),
    });

    alert("更新しました。");
    navigate("/books");
  };

  return (
    <div className="container">
      <h1>書籍編集</h1>

      <form onSubmit={handleSubmit} className="form">
        <label>JANコード</label>
        <input value={janCd} disabled />

        <label>ISBNコード</label>
        <input name="isbnCd" value={form.isbnCd} onChange={handleChange} />

        <label>書籍名称</label>
        <input name="bookNm" value={form.bookNm} onChange={handleChange} />

        <label>書籍名称カナ</label>
        <input name="bookKana" value={form.bookKana} onChange={handleChange} />

        <label>価格</label>
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
        />

        <label>発行日</label>
        <input
          name="issueDate"
          type="date"
          value={form.issueDate}
          onChange={handleChange}
        />

        <div className="button-area">
          <button type="submit">更新</button>
          <button type="button" onClick={() => navigate("/books")}>
            戻る
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookEditPage;