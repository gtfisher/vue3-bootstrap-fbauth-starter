A6NIB-1555914860-1JBOG 30°

<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="@/assets/bootstrap-logo.svg"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Bootstrap Vue
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
            <RouterLink class="nav-link" to="/about">About</RouterLink>
            <RouterLink class="nav-link" to="/feed">Feed</RouterLink>
            <span v-if="isLoggedIn">
              <button @click="signOutUser">Logout</button>
            </span>
            <span v-else>
              <RouterLink class="nav-link" to="/signin">Sign In</RouterLink>
            </span>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue' // used for conditional rendering
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
const router = useRouter()
const isLoggedIn = ref(true)
// runs after firebase is initialized
const auth = getAuth()
onAuthStateChanged(auth, (user) => {
  if (user) {
    isLoggedIn.value = true // if we have a user
  } else {
    isLoggedIn.value = false // if we do not
  }
})
const signOutUser = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('signed out')
      router.push('/')
    })
    .catch((error) => {
      // An error happened.
      console.log('error sigining out:', error)
    })
}
</script>

<style></style>
