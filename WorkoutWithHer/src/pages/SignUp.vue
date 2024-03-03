<template>
  <div style="position:fixed; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
    <v-card style="padding: 3% 5%; width: 500px; height: 600px; border-radius: 20px; align-items: center; justify-content: center;" elevation="8">
      <v-card-title><h1 class="cardtitle">Create an Account</h1></v-card-title>
      <v-text-field
        label="First Name"
        variant="outlined"
        single-line
        v-model="firstname"
        type="text"
      ></v-text-field>
      <v-text-field
        label="Last Name"
        variant="outlined"
        single-line
        v-model="lastname"
        type="text"
      ></v-text-field>
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
        <v-btn variant="flat" color="pink-accent-1" @click="register">Submit</v-btn>
      </v-card-actions>
      <br/>
      <p>Already have an account? <v-btn to="/log-in" variant="flat">Log in</v-btn></p>
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
    const firstname = ref('')
    const lastname = ref('')
    const errMsg = ref() // ERROR MESSAGE
    const router = useRouter() // get a reference to our vue router
    const register = () => {
      firebase
        .auth() // get the auth api
        .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
        .then((data) => {
          console.log('Successfully registered!');
          router.push('/feed') // redirect to the feed
        })
        .catch(error => {
          switch (error.code) {
            case 'auth/invalid-email':
                errMsg.value = 'Invalid email'
                break
            default:
                errMsg.value = 'Email or password was incorrect'
                break
          }
        });
    }
  </script>
  