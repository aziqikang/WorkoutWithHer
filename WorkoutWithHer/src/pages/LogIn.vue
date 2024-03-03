<template>
  <div style="position:fixed; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
    <v-card style="padding: 3% 5%; width: 500px; height: 450px; border-radius: 20px; align-items: center; justify-content: center;" elevation="8">
      <v-card-title><h1 class="cardtitle">Log In to an Account</h1></v-card-title>
      <v-text-field
        label="Email"
        variant="outlined"
        single-line
        v-model="email"
        type="text"
      ></v-text-field>
      <v-text-field
        label="Password"
        variant="outlined"
        single-line
        v-model="password"
        type="password"
      ></v-text-field>
      <p v-if="errMsg">{{ errMsg }}</p>
      <v-card-actions class="justify-center">
        <v-btn variant="flat" color="pink-accent-1" @click="signIn">Submit</v-btn>
      </v-card-actions>
      <br/>
      <p>Don't have an account? <v-btn to="/sign-up" variant="flat">Sign up</v-btn></p>
    </v-card>
  </div>
</template>
  
  <script setup>
    import { ref } from 'vue'
    import firebase from "firebase/compat/app"
    import "firebase/compat/auth"
    import { useRouter } from 'vue-router' // import router
    const email = ref('')
    const password = ref('')
    const errMsg = ref() // ERROR MESSAGE
    const router = useRouter() // get a reference to our vue router
    const signIn = () => { // we also renamed this method
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
        .then((data) => {
          console.log('Successfully logged in!');
          router.push('/feed') // redirect to the feed
        })
        .catch(error => {
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
        });
    }
  </script>
  