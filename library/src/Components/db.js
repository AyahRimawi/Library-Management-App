import { useEffect, useState } from "react";
import { db } from "../config/firebase";

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

//-------------------------------------------------------

export const Db = () => {
  //get books States
  const [booksList, setBooksList] = useState([]);

  //add New books States
  const [newBooksTitle, setNewBooksTitle] = useState("");
  const [newISBN, setNewISBN] = useState(0);
  const [newAuthor, setNewAuthor] = useState("");

  //updated books States
  const [updatedTitle, setUpdatedTitle] = useState("");

  const booksCollectionRef = collection(db, "books");
  // console.log(booksCollectionRef);

  //-------------------------------------------------------
  //get books async

  const getBooksList = async () => {
    //read the data from database
    //set the books list
    try {
      const data = await getDocs(booksCollectionRef);
      const filterredData = data.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .filter((book) => !book.deleted); // Exclude books marked as deleted

      setBooksList(filterredData);
      console.log(filterredData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBooksList();
  }, []);
  //----------------------------------------------------
  //add New books async

  const onSubmitbooks = async () => {
    try {
      await addDoc(booksCollectionRef, {
        title: newBooksTitle,
        ISBN: newISBN,
        author: newAuthor,
        deleted: false, // Initialize the deleted field to false

        // userId: auth?.currentUser?.uid,
      });
      getBooksList();
    } catch (err) {
      console.error(err);
    }
  };
  //-------------------------------------------------------

  // Delete books async
  const deleteBooks = async (id) => {
    const booksDoc = doc(db, "books", id);
    // console.log(booksDoc);
    try {
      await updateDoc(booksDoc, { deleted: true }); // Soft delete by setting `deleted` to true

      // await deleteDoc(booksDoc);
      // Update booksList state immediately after deleting the document
      const updatedList = booksList.filter((books) => books.id !== id);
      setBooksList(updatedList);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  // const deleteBooks = async (id) => {
  //   const booksDoc = doc(db, "books", id);
  //   await deleteDoc(booksDoc);
  // };

  //-------------------------------------------------------
  //update books async

  const updatebooksTitle = async (id) => {
    const booksDoc = doc(db, "books", id);
    try {
      if (!updatedTitle) {
        throw new Error("Title cannot be empty");
      }

      await updateDoc(booksDoc, { title: updatedTitle });

      // Update booksList state immediately after updating the document
      const updatedList = booksList.map((books) =>
        books.id === id ? { ...books, title: updatedTitle } : books
      );
      setBooksList(updatedList);

      // Clear updatedTitle after updating
      setUpdatedTitle("");
      document.getElementById("titleInput").value = "";
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  // const updatebooksTitle = async (id) => {
  //   const booksDoc = doc(db, "books", id);
  //   await updateDoc(booksDoc, { title: updatedTitle });
  // };

  //-------------------------------------------------------

  return (
    <>
      {/* add New books */}
      <div>
        <input
          placeholder="books title..."
          onChange={(e) => setNewBooksTitle(e.target.value)}
        />
        <input
          placeholder="ISBN..."
          type="number"
          onChange={(e) => setNewISBN(Number(e.target.value))}
        />
        <input
          placeholder="books Author..."
          onChange={(e) => setNewAuthor(e.target.checked)}
        />
        <button onClick={onSubmitbooks}> Submit books</button>
      </div>
      {/* //------------------------------------------------------- */}

      {/* get books */}
      {booksList.map((books) => (
        <div key={books.id}>
          <h1>{books.title}</h1>
          <p> Author: {books.author}</p>

          <p> ISBN: {books.ISBN}</p>
          {/* //------------------------------------------------------- */}
          {/* //Delete books */}
          <button onClick={() => deleteBooks(books.id)}> Delete books</button>
          {/* <button onClick={deleteBooks(books.id)}> Delete books</button> هاي خطأ بتعمل حذف بدون نقر ع الزر والسبب يعود لوجود uniqe parameter */}
          {/* //------------------------------------------------------- */}
          {/* //update books */}
          <input
            id="titleInput"
            placeholder="new title..."
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          {/* <button onClick={() => updatebooksTitle(books.id)}>
            {" "}
            Update Title
          </button> */}
          <button
            onClick={() => updatebooksTitle(books.id)}
            disabled={!updatedTitle}
          >
            Update Title
          </button>
        </div>
      ))}
    </>
  );
};
