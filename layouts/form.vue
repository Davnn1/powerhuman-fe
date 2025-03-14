<script setup lang="ts">
const goBack = () => {
    window.history.back();
};
</script>

<template>
    <div class="pt-[50px] md:px-[50px] flex justify-between items-center px-4">
        <NuxtLink to="/">
            <img src="/assets/svgs/logo-type.svg" alt="">
        </NuxtLink>
        <a @click="goBack">
            <img src="/assets/svgs/ric-close-white.svg" alt="">
        </a>
    </div>
    <slot/>
</template>
