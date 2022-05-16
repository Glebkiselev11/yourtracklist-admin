<template>
    <v-app>
        <app-header />
        <v-main class="bg-grey-lighten-4">
            <RouterView />
        </v-main>
        <app-notification />
    </v-app>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
import AppNotification from "@/components/AppNotification.vue";

</script>
