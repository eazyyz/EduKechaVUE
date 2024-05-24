<script setup>
import VHeader from './components/VHeader.vue';
import VPromo from './components/VPromo.vue';
import VClass from './components/VClass.vue';
import VHistory from './components/VHistory.vue';
import VPossibilities from './components/VPossibilities.vue';
import VIdea from './components/VIdea.vue';
import VReviews from './components/VReviews.vue';
import VFooter from './components/VFooter.vue';

</script>

<template>
    <V-header></V-header>
    <main>
        <VPromo></VPromo>
        <VClass></VClass>
        <VHistory></VHistory>
        <VPossibilities></VPossibilities>
        <VIdea></VIdea>
        <VReviews></VReviews>
    </main>
    <VFooter></VFooter>
</template>

<style scoped>

</style>
