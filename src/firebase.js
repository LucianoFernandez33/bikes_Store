import firebase from 'firebase/app';
import 'firebase/firestore';

//variable app donde inicializo mi app de firebase con el objeto de toda la data que tengo que darle

const app = firebase.initializeApp({
  appId: process.env.REACT_APP_APP_ID,
  apiKey: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
})

// creo una funcion que retorna app de arrriba
export const getFirebase = () => app; 
// creo una funcion donde llama a firebase.firestore   dandole de consumir mi app
export const getFiresTore = () =>firebase.firestore(app); 