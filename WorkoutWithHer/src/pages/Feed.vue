<template>
    <div style="position:fixed; display: flex; align-items: center; justify-content: center; width: 100%; max-height: 100%;">
        <v-row justify-center align-content="center" style="height: 100%;">
            <v-col cols="8">
                <img src="../assets/map.png" width="100%" style="padding: 3%;"/>
            </v-col>
            <v-col cols="4">
                <v-infinite-scroll>
                    <v-card style="margin: 3%; border-radius: 20px; align-items: center; justify-content: center; padding: 4% 7%;" elevation="8">
                        <v-row style="margin-bottom: 3%;">
                            <v-avatar size="52">
                                <img src="../assets/eve_morris.jpg" width="52" height="52">
                            </v-avatar>
                            <v-card-title>
                                <h1 class="feedcardtitle">Eve Morris</h1>
                            </v-card-title>
                            <v-spacer/>
                            <v-avatar size="45" color="pink-accent-1" style="justify-self: center; align-self: center;">
                                97%
                            </v-avatar>
                        </v-row>
                        <v-card-subtitle>France A. Córdova Recreational Sports Center</v-card-subtitle>
                        <div class="activitycard">
                            <v-row>
                                <v-col cols="9" class="activityname">🏃Treadmill</v-col>
                                <v-col class="activitytime">20 minutes</v-col>
                            </v-row>
                        </div>
                        <div class="activitycard">
                            <v-row>
                                <v-col cols="9" class="activityname">🏋️ Squats</v-col>
                                <v-col class="activitytime">3 sets of 12</v-col>
                            </v-row>
                        </div>
                        <div class="activitycard">
                            <v-row>
                                <v-col cols="9" class="activityname">Seated Leg Press</v-col>
                                <v-col class="activitytime">4 sets of 8</v-col>
                            </v-row>
                        </div>
                        <div class="more">
                            <v-row>
                                <v-spacer/>
                                <v-spacer/>
                                <v-spacer/>
                                <v-col cols="2">see more</v-col>
                            </v-row>
                        </div>
                    </v-card>
                    <v-card style="margin: 3%; border-radius: 20px; align-items: center; justify-content: center; padding: 4% 7%;" elevation="8">
                        <v-row style="margin-bottom: 3%;">
                            <v-avatar size="52">
                                <img src="../assets/alicia_lee.jpg" width="52" height="52">
                            </v-avatar>
                            <v-card-title>
                                <h1 class="feedcardtitle">Alicia Lee</h1>
                            </v-card-title>
                            <v-spacer/>
                            <v-avatar size="45" color="pink-accent-1" style="justify-self: center; align-self: center;">
                                34%
                            </v-avatar>
                        </v-row>
                        <v-card-subtitle>France A. Córdova Recreational Sports Center</v-card-subtitle>
                        <div class="activitycard">
                            <v-row>
                                <v-col cols="9" class="activityname">🏃Treadmill</v-col>
                                <v-col class="activitytime">30 minutes</v-col>
                            </v-row>
                        </div>
                        <div class="activitycard">
                            <v-row>
                                <v-col cols="9" class="activityname">🧘‍♀️ Yoga</v-col>
                                <v-col class="activitytime">30 minutes</v-col>
                            </v-row>
                        </div>
                    </v-card>
                    <!-- <v-card style="margin: 3%; border-radius: 20px; align-items: center; justify-content: center; padding: 4% 7%;" elevation="8">
                        <v-row style="margin-bottom: 3%;">
                            <v-avatar size="52">
                                <img src="../assets/tanisha_logan.jpg" width="52" height="52">
                            </v-avatar>
                            <v-card-title>
                                <h1 class="feedcardtitle">Tanisha Logan</h1>
                            </v-card-title>
                        </v-row>
                        <v-card-subtitle>France A. Córdova Recreational Sports Center</v-card-subtitle>
                    </v-card>
                    <v-card style="margin: 3%; border-radius: 20px; align-items: center; justify-content: center; padding: 4% 7%;" elevation="8">
                        <v-row style="margin-bottom: 3%;">
                            <v-avatar size="52">
                                <img src="../assets/sabrina_bridges.jpg" width="52" height="52">
                            </v-avatar>
                            <v-card-title>
                                <h1 class="feedcardtitle">Sabrina Bridges</h1>
                            </v-card-title>
                        </v-row>
                        <v-card-subtitle>France A. Córdova Recreational Sports Center</v-card-subtitle>
                    </v-card> -->
                </v-infinite-scroll>
            </v-col>
        </v-row>
    </div>
</template>