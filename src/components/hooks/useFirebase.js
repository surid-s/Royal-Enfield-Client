import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from "firebase/auth"
import { useEffect, useState } from "react"
import initializeAuthentication from "../firebase/firebase.init"

initializeAuthentication()

const useFirebase = () => {
  const [user, setUsers] = useState({})
  const [email, setEmail] = useState({})
  const [password, setPassword] = useState({})
  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()

  // // //  Google SignIn // // //
  const singInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUsers(result.user)
      })
  }

  // // //  creating user with email and password // // //
  const SingUpUserWithEmailPassword = () => {
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      setUsers(result.user)
    })
  }

  // // //  user's State change observer's function // //
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user)
      } else {
        setUsers({})
      }
    })
    return () => unsubscribe
  }, [])

  // // // Sign Out // // //
  const logOut = () => {
    signOut(auth).then(() => { })
  }

  return {
    user,
    singInUsingGoogle,
    logOut,
    SingUpUserWithEmailPassword
  }
}

export default useFirebase
