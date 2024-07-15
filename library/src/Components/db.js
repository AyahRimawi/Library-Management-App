import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { addPredefinedBooks } from "./storeData"; 
import Books from "./Books"; 


export const Db = () => {
  // Get books states
  const [booksList, setBooksList] = useState([]);
  // Add new books states
  const [newBooksTitle, setNewBooksTitle] = useState("");
  const [newISBN, setNewISBN] = useState(0);
  const [newAuthor, setNewAuthor] = useState("");
  // Update books states
  const [updatedTitle, setUpdatedTitle] = useState("");

  const booksCollectionRef = collection(db, "books");

  // Get books async
  const getBooksList = async () => {
    try {
      const data = await getDocs(booksCollectionRef);
      const filteredData = data.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .filter((book) => !book.deleted); // Exclude books marked as deleted

      setBooksList(filteredData);
      console.log(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBooksList();
  }, []);

  // Add new books async
  const onSubmitBooks = async () => {
    try {
      await addDoc(booksCollectionRef, {
        title: newBooksTitle,
        ISBN: newISBN,
        author: newAuthor,
        deleted: false, // Initialize the deleted field to false
      });
      getBooksList();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete books async
  const deleteBooks = async (id) => {
    const booksDoc = doc(db, "books", id);
    try {
      await updateDoc(booksDoc, { deleted: true }); // Soft delete by setting deleted to true
      const updatedList = booksList.filter((book) => book.id !== id);
      setBooksList(updatedList);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  // Update books async
  const updateBooksTitle = async (id) => {
    const booksDoc = doc(db, "books", id);
    try {
      if (!updatedTitle) {
        throw new Error("Title cannot be empty");
      }

      await updateDoc(booksDoc, { title: updatedTitle });
      const updatedList = booksList.map((book) =>
        book.id === id ? { ...book, title: updatedTitle } : book
      );
      setBooksList(updatedList);
      setUpdatedTitle("");
      document.getElementById("titleInput").value = "";
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };


  return (
    <>
      {/* Add new books */}
      <div>
        <input
          placeholder="Book title..."
          onChange={(e) => setNewBooksTitle(e.target.value)}
        />
        <input
          placeholder="ISBN..."
          type="number"
          onChange={(e) => setNewISBN(Number(e.target.value))}
        />
        <input
          placeholder="Book Author..."
          onChange={(e) => setNewAuthor(e.target.value)} // Changed from e.target.checked to e.target.value
        />
        <button onClick={onSubmitBooks}>Submit Book</button>
      </div>

      {/* Add predefined books */}
      <div>
        {/* <button onClick={addPredefinedBooks}>Add Predefined Books</button> */}
      </div>

      {/* Get books */}
      {booksList.map((book) => (
        <div key={book.id}>
          <Books
            key={book.id}
            title={book.title}
            author={book.author}
            isbn={book.ISBN}
          />

          {/* <h1>{book.title}</h1>
          <p>Author: {book.author}</p>
          <p>ISBN: {book.ISBN}</p> */}
          {/* Delete books */}
          <button onClick={() => deleteBooks(book.id)}>Delete Book</button>
          {/* Update books */}
          <input
            id="titleInput"
            placeholder="New title..."
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <button
            onClick={() => updateBooksTitle(book.id)}
            disabled={!updatedTitle}
          >
            Update Title
          </button>
        </div>
      ))}
    </>
  );
};
