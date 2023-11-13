<template>
    <div class="text-center loader-wrapper">
        <b-spinner class="p-4" variant="primary" label="Spinning"></b-spinner>
    </div>
</template>

<style scoped>
.loader-wrapper {
    opacity: 0.5;
    background: rgb(184, 183, 183);
    width: 100%;
    height: 220vh;
    z-index: 1255;
    top: 0;
    left: 0;
    position: fixed;
    direction: initial;
}
</style>