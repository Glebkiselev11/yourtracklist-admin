<template>
    <div class="notification-list">
        <v-alert
            v-for="(notification, index) in notifications"
            :key="index" 
            :type="notification.type"
            variant="contained-text"
            class="mt-2"
        >
            {{ notification.text }}
        </v-alert>
    </div>
</template>
<script lang="ts">
import  { defineComponent } from "vue";
import { mapState } from "pinia";
import { useNotificationsStore } from "@/stores/notifications";

export default defineComponent({
    computed: {
        ...mapState(useNotificationsStore, ["notifications"]),
    },
});

</script>
<style lang="scss" scoped>

.notification-list {
    position: absolute;
    left: 12px;
    bottom: 12px;
}

</style>