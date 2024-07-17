// import { useEffect, useState } from "react";
// import { db } from "../config/firebase";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";

// export const Db = () => {
//   // Get books states
//   const [booksList, setBooksList] = useState([]);
//   // Add new books states
//   const [newBooksTitle, setNewBooksTitle] = useState("");
//   const [newISBN, setNewISBN] = useState(0);
//   const [newAuthor, setNewAuthor] = useState("");
//   // Update books states
//   const [updatedTitle, setUpdatedTitle] = useState("");

//   const booksCollectionRef = collection(db, "books");

//   // Get books async
//   const getBooksList = async () => {
//     try {
//       const data = await getDocs(booksCollectionRef);
//       const filteredData = data.docs
//         .map((doc) => ({
//           ...doc.data(),
//           id: doc.id,
//         }))
//         .filter((book) => !book.deleted); // Exclude books marked as deleted

//       setBooksList(filteredData);
//       console.log(filteredData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getBooksList();
//   }, []);

//   // Add new books async
//   const onSubmitBooks = async () => {
//     try {
//       await addDoc(booksCollectionRef, {
//         title: newBooksTitle,
//         ISBN: newISBN,
//         author: newAuthor,
//         deleted: false, // Initialize the deleted field to false
//       });
//       getBooksList();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Delete books async
//   const deleteBooks = async (id) => {
//     const booksDoc = doc(db, "books", id);
//     try {
//       await updateDoc(booksDoc, { deleted: true }); // Soft delete by setting deleted to true
//       const updatedList = booksList.filter((book) => book.id !== id);
//       setBooksList(updatedList);
//     } catch (error) {
//       console.error("Error deleting document: ", error);
//     }
//   };

//   // Update books async
//   const updateBooksTitle = async (id) => {
//     const booksDoc = doc(db, "books", id);
//     try {
//       if (!updatedTitle) {
//         throw new Error("Title cannot be empty");
//       }

//       await updateDoc(booksDoc, { title: updatedTitle });
//       const updatedList = booksList.map((book) =>
//         book.id === id ? { ...book, title: updatedTitle } : book
//       );
//       setBooksList(updatedList);
//       setUpdatedTitle("");
//       document.getElementById("titleInput").value = "";
//     } catch (error) {
//       console.error("Error updating document: ", error);
//     }
//   };

//   // Function to add predefined books
//   const addPredefinedBooks = async () => {
//     const predefinedBooks = [
//       {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         ISBN: 9780061120084,
//       },
//       { title: "1984", author: "George Orwell", ISBN: 9780451524935 },
//       {
//         title: "Pride and Prejudice",
//         author: "Jane Austen",
//         ISBN: 9780141439518,
//       },
//       {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         ISBN: 9780743273565,
//       },
//       { title: "Catch-22", author: "Joseph Heller", ISBN: 9780684833392 },
//       {
//         title: "The Catcher in the Rye",
//         author: "J.D. Salinger",
//         ISBN: 9780316769488,
//       },
//       { title: "Moby-Dick", author: "Herman Melville", ISBN: 9780142437247 },
//       {
//         title: "Interpreter of Maladies",
//         author: "Jhumpa Lahiri",
//         ISBN: 9780395927205,
//       },
//       { title: "Dubliners", author: "James Joyce", ISBN: 9780486268705 },
//       {
//         title: "The Things They Carried",
//         author: "Tim O'Brien",
//         ISBN: 9780618706419,
//       },
//       { title: "Nine Stories", author: "J.D. Salinger", ISBN: 9780316767729 },
//       {
//         title: "The Complete Stories",
//         author: "Flannery O'Connor",
//         ISBN: 9780374515362,
//       },
//       {
//         title: "Collected Stories",
//         author: "Raymond Carver",
//         ISBN: 9780679722311,
//       },
//       {
//         title: "The Illustrated Man",
//         author: "Ray Bradbury",
//         ISBN: 9780553274491,
//       },
//       {
//         title: "Treasure Island",
//         author: "Robert Louis Stevenson",
//         ISBN: 9780486275567,
//       },
//       {
//         title: "The Adventures of Huckleberry Finn",
//         author: "Mark Twain",
//         ISBN: 9780486280615,
//       },
//       {
//         title: "Around the World in Eighty Days",
//         author: "Jules Verne",
//         ISBN: 9780140449068,
//       },
//       {
//         title: "Jurassic Park",
//         author: "Michael Crichton",
//         ISBN: 9780345538987,
//       },
//       { title: "The Hobbit", author: "J.R.R. Tolkien", ISBN: 9780547928227 },
//       { title: "Robinson Crusoe", author: "Daniel Defoe", ISBN: 9780486277271 },
//       {
//         title: "The Count of Monte Cristo",
//         author: "Alexandre Dumas",
//         ISBN: 9780140449266,
//       },
//     ];

//     try {
//       for (const book of predefinedBooks) {
//         await addDoc(booksCollectionRef, {
//           ...book,
//           deleted: false, // Initialize the deleted field to false
//         });
//       }
//       console.log("Predefined books added successfully!");
//     } catch (error) {
//       console.error("Error adding predefined books: ", error);
//     }
//   };

//   return (
//     <>
//       {/* Add new books */}
//       <div>
//         <input
//           placeholder="Book title..."
//           onChange={(e) => setNewBooksTitle(e.target.value)}
//         />
//         <input
//           placeholder="ISBN..."
//           type="number"
//           onChange={(e) => setNewISBN(Number(e.target.value))}
//         />
//         <input
//           placeholder="Book Author..."
//           onChange={(e) => setNewAuthor(e.target.value)} // Changed from e.target.checked to e.target.value
//         />
//         <button onClick={onSubmitBooks}>Submit Book</button>
//       </div>

//       {/* Add predefined books */}
//       <div>
//         <button onClick={addPredefinedBooks}>Add Predefined Books</button>
//       </div>

//       {/* Get books */}
//       {booksList.map((book) => (
//         <div key={book.id}>
//           <h1>{book.title}</h1>
//           <p>Author: {book.author}</p>
//           <p>ISBN: {book.ISBN}</p>
//           {/* Delete books */}
//           <button onClick={() => deleteBooks(book.id)}>Delete Book</button>
//           {/* Update books */}
//           <input
//             id="titleInput"
//             placeholder="New title..."
//             onChange={(e) => setUpdatedTitle(e.target.value)}
//           />
//           <button
//             onClick={() => updateBooksTitle(book.id)}
//             disabled={!updatedTitle}
//           >
//             Update Title
//           </button>
//         </div>
//       ))}
//     </>
//   );
// };







import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import axios from "axios";

export const Db = () => {
  const [booksList, setBooksList] = useState([]);
  const [newBooksTitle, setNewBooksTitle] = useState("");
  const [newISBN, setNewISBN] = useState(0);
  const [newAuthor, setNewAuthor] = useState("");
  const [updatedTitle, setUpdatedTitle] = useState("");

  // Function to fetch books from Firebase Realtime Database
  const getBooksList = async () => {
    try {
      const response = await axios.get(
        "https://booking-cfef3-default-rtdb.firebaseio.com/books.json"
      );

      const data = response.data;

      if (!data) {
        setBooksList([]);
        return;
      }

      const booksArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));

      const filteredData = booksArray.filter((book) => !book.deleted);

      setBooksList(filteredData);
      console.log(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  // Initial fetch of books on component mount
  useEffect(() => {
    getBooksList();
  }, []);

  // Function to add new book to Firebase Realtime Database
  const onSubmitBooks = async () => {
    try {
      const response = await axios.post(
        "https://booking-cfef3-default-rtdb.firebaseio.com/books.json",
        {
          title: newBooksTitle,
          ISBN: newISBN,
          author: newAuthor,
          deleted: false,
        }
      );

      console.log(response.data); // Check the response on success
      getBooksList(); // Refresh the books list after adding new book
    } catch (error) {
      console.error(error);
    }
  };

  // Function to delete a book from Firebase Realtime Database
  const deleteBooks = async (id) => {
    try {
      await axios.put(
        `https://booking-cfef3-default-rtdb.firebaseio.com/books/${id}.json`,
        { deleted: true }
      );

      // تحديث booksList لاستبعاد الكتاب المحذوف
      setBooksList((prevBooksList) =>
        prevBooksList.filter((book) => book.id !== id)
      );
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  // Function to update book title in Firebase Realtime Database
  const updateBooksTitle = async (id) => {
    try {
      if (!updatedTitle) {
        throw new Error("Title cannot be empty");
      }

      await axios.put(
        `https://booking-cfef3-default-rtdb.firebaseio.com/books/${id}.json`,
        { title: updatedTitle }
      );

      const updatedList = booksList.map((book) =>
        book.id === id ? { ...book, title: updatedTitle } : book
      );

      setBooksList(updatedList);
      setUpdatedTitle(""); // Clear the updatedTitle state
      document.getElementById("titleInput").value = ""; // Clear input field
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <>
      {/* Form to add new books */}
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
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button onClick={onSubmitBooks}>Submit Book</button>
      </div>

      {/* Display existing books */}
      {booksList.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>ISBN: {book.ISBN}</p>
          {/* Button to delete book */}
          <button onClick={() => deleteBooks(book.id)}>Delete Book</button>
          {/* Input to update book title */}
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

