import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const booksCollectionRef = collection(db, "books");

// Function to add predefined books
export const addPredefinedBooks = async () => {
  const predefinedBooks = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      ISBN: 9780061120084,
    },
    { title: "1984", author: "George Orwell", ISBN: 9780451524935 },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      ISBN: 9780141439518,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      ISBN: 9780743273565,
    },
    { title: "Catch-22", author: "Joseph Heller", ISBN: 9780684833392 },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      ISBN: 9780316769488,
    },
    { title: "Moby-Dick", author: "Herman Melville", ISBN: 9780142437247 },
    {
      title: "Interpreter of Maladies",
      author: "Jhumpa Lahiri",
      ISBN: 9780395927205,
    },
    { title: "Dubliners", author: "James Joyce", ISBN: 9780486268705 },
    {
      title: "The Things They Carried",
      author: "Tim O'Brien",
      ISBN: 9780618706419,
    },
    { title: "Nine Stories", author: "J.D. Salinger", ISBN: 9780316767729 },
    {
      title: "The Complete Stories",
      author: "Flannery O'Connor",
      ISBN: 9780374515362,
    },
    {
      title: "Collected Stories",
      author: "Raymond Carver",
      ISBN: 9780679722311,
    },
    {
      title: "The Illustrated Man",
      author: "Ray Bradbury",
      ISBN: 9780553274491,
    },
    {
      title: "Treasure Island",
      author: "Robert Louis Stevenson",
      ISBN: 9780486275567,
    },
    {
      title: "The Adventures of Huckleberry Finn",
      author: "Mark Twain",
      ISBN: 9780486280615,
    },
    {
      title: "Around the World in Eighty Days",
      author: "Jules Verne",
      ISBN: 9780140449068,
    },
    { title: "Jurassic Park", author: "Michael Crichton", ISBN: 9780345538987 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", ISBN: 9780547928227 },
    { title: "Robinson Crusoe", author: "Daniel Defoe", ISBN: 9780486277271 },
    {
      title: "The Count of Monte Cristo",
      author: "Alexandre Dumas",
      ISBN: 9780140449266,
    },
  ];

  try {
    for (const book of predefinedBooks) {
      await addDoc(booksCollectionRef, {
        ...book,
        deleted: false, // Initialize the deleted field to false
      });
    }
    console.log("Predefined books added successfully!");
  } catch (error) {
    console.error("Error adding predefined books: ", error);
  }
};
