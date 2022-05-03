<template>
    <v-app-bar elevation="2">
        <template #prepend>
            <v-app-bar-title class="title font-weight-bold">
                Yourtracklist
            </v-app-bar-title>

            <div class="ml-4">
                <img
                    src="@/assets/logo.png"
                    alt="logo"
                >
            </div>
        </template>
        <template #append>
            <v-btn
                color="black"
                variant="contained-text"
            >
                Load release
            </v-btn>
        </template>
    </v-app-bar>
</template>

<style scope lang="scss">
.title {
    font-size: 28px !important;
}
</style>
