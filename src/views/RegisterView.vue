<template>
  <h1>Create an account (v2)</h1>
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
    <label for="InputPassword1" class="form-label">Password</label>
    <p><input type="password" class="form-control" v-model="password" /></p>
  </div>
  <div class="mb-3">
    <button class="btn btn-primary" @click="register">Submit</button>
    <button class="btn btn-primary" @click="signInWithGoogle">Sign In With Google</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { useRouter } from 'vue-router' // import router
const email = ref('')
const password = ref('')
const router = useRouter() // get a reference to our vue router

const register = () => {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email.value, password.value) // need .value because ref()
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      console.log('Successfully registered:', user.email)
      router.push('/feed') // redirect to the feed
    })
    .catch((error) => {
      console.log(error.code)
      alert(error.message)
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
