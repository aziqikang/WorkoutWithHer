<template>
  <div>
    <header>
        <div class="wrap">
          <img src="./assets/logo.svg" alt="logo" width="40" height="40">
          <nav id="navbar">
              <span>
                <router-link to="/" class="route"> Home </router-link>
              </span>
              <span v-if="isLoggedIn">
                <router-link to="/feed" class="route"> Feed </router-link>
                <router-link to="/profile" class="route"> Profile </router-link>
                <v-btn @click="signOut" variant="outlined" color="pink-accent-1">Logout</v-btn>
              </span>
          </nav>
        </div>
    </header>
    <div class="page">
      <router-view />
    </div>
    <!-- <footer>
      footer
    </footer> -->
  </div>
</template>

<script setup>
  import { ref, watchEffect } from 'vue' // used for conditional rendering
  import firebase from "firebase/compat/app"
    import "firebase/compat/auth"
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const isLoggedIn = ref(true)
  // runs after firebase is initialized
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        isLoggedIn.value = true // if we have a user
      } else {
        isLoggedIn.value = false // if we do not
      }
  })
  const signOut = () => {
    firebase.auth().signOut()
    router.push('/')
  }
</script>
