<template>
    <input
        :value="modelValue"
        type="date"
        class="date-input"
        @change="updateValue"
    >
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        modelValue: {
            type: String,
            default: undefined,
        },
    },
    emits: ["update:modelValue"],
    methods: {
        updateValue(e: Event) {
            const target = e.target as HTMLInputElement;
            this.$emit("update:modelValue", target.value);
        },
    },
});
</script>

<style lang="scss">
.date-input {
    outline: none;
    border-bottom: 1px solid grey;

    &:hover { 
        border-color: black;
    }
    &:focus{ 
        border-bottom: 2px solid black;
    }
}
</style>
