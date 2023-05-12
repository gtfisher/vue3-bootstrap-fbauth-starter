<template>
  <h1>Login to Your Account</h1>
  <div class="mb-3">
    <label for="InputEmail" class="form-label">Email address</label>
    <input
      type="email"
      class="form-control"
      id="InputEmail"
      v-model="email"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="InputPassword" class="form-label">Password</label>
    <input type="password" class="form-control" id="InputPassword" v-model="password" />
  </div>
  <p v-if="errMsg">{{ errMsg }}</p>
  <div class="input-group mb-3"></div>
  <button class="btn btn-primary mr-1" @click="signIn">Sign In</button>
  <button class="btn btn-primary border-start" @click="signInWithGoogle">
    Sign In With Google
  </button>
  <div class="input-group mb-3"></div>
  <div class="mb-3">
    <label>No account?</label>
    <RouterLink class="link-primary" to="/register">You can register here</RouterLink>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { useRouter } from 'vue-router' // import router
const email = ref('')
const password = ref('')
const errMsg = ref() // ERROR MESSAGE
const router = useRouter() // get a reference to our vue router
const signIn = () => {
  // we also renamed this method
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value) // THIS LINE CHANGED
    .then((userCredential) => {
      console.log('Successfully logged in:', userCredential.user.email)
      router.push('/feed') // redirect to the feed
    })
    .catch((error) => {
      console.log(error.code)
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid email'
          break
        case 'auth/user-not-found':
          errMsg.value = 'No account with that email was found'
          break
        case 'auth/wrong-password':
          errMsg.value = 'Incorrect password'
          break
        default:
          errMsg.value = 'Email or password was incorrect'
          break
      }
    })
}
const signInWithGoogle = () => {
  console.log('sign in with google')
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user)
      router.push('/feed')
    })
    .catch((error) => {
      console.log('error on sign-in:', error)
    })
}
</script>
