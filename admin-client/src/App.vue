<template>
    <v-app
        @dragenter.prevent="enableEmphasizingPlaces"
        @mouseout="disableEmphasizingPlaces"
        @mouseup="disableEmphasizingPlaces"
    >
        <app-header />
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
import { useEmphasizeDropPlaces } from "@/stores/emphasizeDropPlaces";
import AppHeader from "@/components/AppHeader.vue";
import AppNotification from "@/components/AppNotification.vue";

export default defineComponent({
    components: {
        AppHeader,
        AppNotification,
        RouterView,
    },
    methods: {
        ...mapActions(useEmphasizeDropPlaces, { 
            enableEmphasizingPlaces: "enable",
            disableEmphasizingPlaces: "disable", 
        }),
    },
});

</script>
