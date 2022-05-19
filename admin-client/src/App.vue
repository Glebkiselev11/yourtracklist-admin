<template>
    <v-app @dragenter.prevent="enableDragging">
        <app-header />

        <app-drop-overlay />

        <v-main class="bg-grey-lighten-4">
            <RouterView />
        </v-main>

        <app-notification />
    </v-app>
</template>

<script  lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import { mapActions } from "pinia";
import { useDraggingFilesStore } from "@/stores/draggingFiles";
import AppHeader from "@/components/AppHeader.vue";
import AppNotification from "@/components/AppNotification.vue";
import AppDropOverlay from "./components/AppDropOverlay.vue";

export default defineComponent({
    components: {
        AppHeader,
        AppDropOverlay,
        AppNotification,
        RouterView,
    },
    methods: {
        ...mapActions(useDraggingFilesStore, { 
            enableDragging: "enable",
        }),
    },
});

</script>
