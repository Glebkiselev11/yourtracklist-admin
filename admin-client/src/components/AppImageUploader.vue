<template>
    <v-img
        v-if="imageBlob !== ''"
        :src="imageBlob"
        cover
        class="image-size"
    />
    <button
        v-else
        class="image-size bg-grey-lighten-4 d-flex justify-center align-center"
        @click="selectFile"
    >
        <v-icon icon="mdi-image-plus" />

        <input
            ref="fileInput"
            type="file"
            accept="image/jpeg,image/png"
            class="d-none"
            @change="extractFile"
        >
        <button />
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return {
            imageBlob: "" as string,
        };
    },
    methods: {
        selectFile() {
            const fileInput = this.$refs.fileInput as HTMLInputElement;
            fileInput.click();
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        extractFile({ target }: any) {
            const file = target.files?.[0];
            if (file) {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = e => {
                    const image = e.target?.result;
                    if (typeof image === "string") {
                        this.imageBlob = image;
                    } else {
                        alert("Error: Cant read image, try upload another format");
                    }
                }; 
            }
        },
    },
});
</script>

<style lang="scss" scoped>
.image-size {
    min-width: 220px;
    min-height: 220px;
    border-radius: 4px;
}
</style>
