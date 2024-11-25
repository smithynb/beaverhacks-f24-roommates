import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Roommate interactions
export const addRoommate = async (name) => {
  try {
    const docRef = await addDoc(collection(db, "roommates"), { name });
    console.log("Roommate added with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding roommate: ", e);
  }
};

export const getRoommates = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "roommates"));
    const roommates = [];
    querySnapshot.forEach((doc) => {
      roommates.push({ id: doc.id, ...doc.data() });
    });
    return roommates;
  } catch (e) {
    console.error("Error fetching roommates: ", e);
    return [];
  }
};

// To-do list interactions
export const addTodo = async (roommateId, todo) => {
  try {
    const docRef = await addDoc(collection(db, "roommates", roommateId, "todos"), todo);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getTodos = async (roommateId) => {
  try {
    const querySnapshot = await getDocs(collection(db, "roommates", roommateId, "todos"));
    const todos = [];
    querySnapshot.forEach((doc) => {
      todos.push({ id: doc.id, ...doc.data() });
    });
    return todos;
  } catch (e) {
    console.error("Error fetching todos: ", e);
    return [];
  }
};

export const deleteTodo = async (roommateId, id) => {
  try {
    await deleteDoc(doc(db, "roommates", roommateId, "todos", id));
  } catch (e) {
    console.error("Error deleting todo: ", e);
  }
};

// Delete roommate function
export const deleteRoommate = async (roommateId) => {
  try {
    await deleteDoc(doc(db, "roommates", roommateId));
    console.log("Roommate deleted with ID: ", roommateId);
  } catch (e) {
    console.error("Error deleting roommate: ", e);
  }
};