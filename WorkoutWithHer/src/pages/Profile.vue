<template>
    <div style="position:fixed; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
    <v-card style="margin: 10%;padding: 3% 5%; width: 100%; border-radius: 20px; align-items: center; justify-content: center;" elevation="8">
        <v-row style="margin-bottom: 3%;">
            <v-avatar size="100"><img src="../assets/cailey_jen.jpg" width="150"></v-avatar>
            <v-col>
                <v-card-title><h1 class="cardtitle" style="align-self: center; justify-self: center;">Cailey Jen</h1></v-card-title>
                <v-card-subtitle><div style="align-self: center; justify-self: center;">caileyjen@gmail.com</div></v-card-subtitle>
            </v-col>
            <v-btn variant="outlined" color="pink-accent-1">
                edit
            </v-btn>
        </v-row>
        <v-row style="margin-bottom: 3%;">
            <v-card-title><h1 class="cardtitle" style="align-self: center; justify-self: center;">PRONOUNS</h1></v-card-title>
            <v-col>
                she/her
            </v-col>
        </v-row>
        <v-row style="margin-bottom: 3%;">
            <v-card-title><h1 class="cardtitle" style="align-self: center; justify-self: center;">BIO</h1></v-card-title>
            <v-col>
                touch rugby player and running enthusiast
            </v-col>
        </v-row>
    </v-card>
  </div>
</template>