export default function Books({ id, title, author, isbn,children }) {
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <div
              class="card mb-4"
              style={{ width: "18rem", border: "1px solid black" }}
            >
              <div class="card-header">{id}</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">{title}</li>
                <li class="list-group-item">{author}</li>
                <li class="list-group-item">{isbn}</li>
                <li class="list-group-item">{children}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// import { useState } from "react";

// export default function Books() {
//   const [books, setBooks] = useState([
//     {
//       id: 1,
//       title: "مقدمة ابن خلدون",
//       author: "ابن خلدون",
//       isbn: "1289499030",
//     },
//   ]);

//   return (
//     <>
//       {books.map((book) => (
//         <div className="book" key={book.id}>
//           <p>Title: {book.title}</p>
//           <p>ID: {book.id}</p>
//           <p>Author: {book.author}</p>
//           <p>ISBN: {book.isbn}</p>
//         </div>
//       ))}
//     </>
//   );
// }
