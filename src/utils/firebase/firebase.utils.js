// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCJtU82rPX7BYbvLWILAHW-Tr1Crz15IvU',
  authDomain: 'eshop-react-ts.firebaseapp.com',
  projectId: 'eshop-react-ts',
  storageBucket: 'eshop-react-ts.appspot.com',
  messagingSenderId: '1009668220470',
  appId: '1:1009668220470:web:8d0efe59d7bfda1ef15a97',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};
