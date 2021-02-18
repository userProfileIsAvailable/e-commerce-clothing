import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyA9SEUHrW8g_3MadAn8nI-Gy97-ncaTpCc',
	authDomain: 'crown-ecommerce-a74fe.firebaseapp.com',
	projectId: 'crown-ecommerce-a74fe',
	storageBucket: 'crown-ecommerce-a74fe.appspot.com',
	messagingSenderId: '655302452432',
	appId: '1:655302452432:web:1ea3a526df6d34f38a2ad5',
	measurementId: 'G-PDG993R1H9',
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;