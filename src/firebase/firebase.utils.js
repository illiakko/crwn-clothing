import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyAJ4sj8Zx_VkBR8qhCbla9JFkkrSKzwUzw",
    authDomain: "crwn-db-f5d92.firebaseapp.com",
    projectId: "crwn-db-f5d92",
    storageBucket: "crwn-db-f5d92.appspot.com",
    messagingSenderId: "575161162731",
    appId: "1:575161162731:web:30a1278bbec0724406d7ae",
    measurementId: "G-Z0ZWPYM7ZZ"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase