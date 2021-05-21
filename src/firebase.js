import firebase from 'firebase/app';
import 'firebase/firestore';

//variable app donde inicializo mi app de firebase con el objeto de toda la data que tengo que darle

const app = firebase.initializeApp({
    apiKey: "AIzaSyDE5YH1keEuQDDTr3MfdXc4iezlDApl8YI",
    authDomain: "ecommerce-bikestore.firebaseapp.com",
    projectId: "ecommerce-bikestore",
    storageBucket: "ecommerce-bikestore.appspot.com",
    messagingSenderId: "386061758734",
    appId: "1:386061758734:web:0ecfa37db89959abeae75f"
})

// creo una funcion que retorna app de arrriba
export const getFirebase = () => app; 
// creo una funcion donde llama a firebase.firestore   dandole de consumir mi app
export const getFiresTore = () =>firebase.firestore(app); 