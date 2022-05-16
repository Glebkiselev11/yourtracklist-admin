<template>
    <v-snackbar
        v-model="show"
        :color="color"
        top
        absolute
    >
        {{ text }}
    </v-snackbar>
</template>
<script lang="ts">
import  { defineComponent } from "vue";
import {mapState} from "pinia";
import { useNotificationStore } from "@/stores/notification";

export default defineComponent({
    computed: {
        ...mapState(useNotificationStore, ["show", "isError", "text"]),
        color(): string {
            return this.isError ? "red" : "green";
        },
    },
});

</script>