import firebase from 'firebase/app'
import 'firebaseui/dist/firebaseui.css'

export let uiPromise

const configure = () => {
  const config = {
    apiKey: 'AIzaSyDDJfVU-AJALZwHY2f5p5Yir_xXFjAqShI',
    authDomain: 'kelvin-pay.firebaseapp.com',
    databaseURL: 'https://kelvin-pay.firebaseio.com',
    projectId: 'kelvin-pay',
    storageBucket: 'kelvin-pay.appspot.com',
    messagingSenderId: '997497859425'
  }
  firebase.initializeApp(config)

  uiPromise = import('firebaseui').then(firebaseui => {
    // Initialize the FirebaseUI Widget using Firebase.
    return new firebaseui.auth.AuthUI(firebase.auth())
    // The start method will wait until the DOM is loaded.
  })
}

if (typeof window !== 'undefined') configure()
