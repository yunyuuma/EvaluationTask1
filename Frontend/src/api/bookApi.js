const BASE_URL = "http://localhost:8080/api/books";

export async function fetchBooks() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("書籍一覧の取得に失敗しました。");
  return await res.json();
}

export async function fetchBook(janCd) {
  const res = await fetch(`${BASE_URL}/${janCd}`);
  if (!res.ok) throw new Error("書籍情報の取得に失敗しました。");
  return await res.json();
}

export async function updateBook(janCd, data) {
  const res = await fetch(`${BASE_URL}/${janCd}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("書籍情報の更新に失敗しました。");
  return await res.json();
}