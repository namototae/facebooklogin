import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBMiqNNTUIlI7n8fKl-mqBW7s3IgVgbVd4",
    authDomain: "my-first-react-app-349a9.firebaseapp.com",
    databaseURL: "https://my-first-react-app-349a9.firebaseio.com",
    projectId: "my-first-react-app-349a9",
    storageBucket: "my-first-react-app-349a9.appspot.com",
    messagingSenderId: "540799648562"
  };

const auth = firebase.auth
const provider = new firebase.auth.FacebookAuthProvider()

function init () {
    return firebase.initializeApp(config);
}

async function login () {
    const result = await auth().signInWithPopup(provider)
    return result
}

export {
    init,
    login
}