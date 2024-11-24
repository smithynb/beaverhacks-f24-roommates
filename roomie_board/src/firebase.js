import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "roomieboard.firebasestorage.app",
  messagingSenderId: "376622126162",
  appId: "1:376622126162:web:6e906fba25d588776b7b8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// todo list interactions
export const addTodo = async (todo) => {
  try {
    const docRef = await addDoc(collection(db, "todos"), todo);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getTodos = async () => {
  const querySnapshot = await getDocs(collection(db, "todos"));
  const todos = [];
  querySnapshot.forEach((doc) => {
    todos.push({ id: doc.id, ...doc.data() });
  });
  return todos;
};

export const deleteTodo = async (id) => {
  await deleteDoc(doc(db, "todos", id));
};