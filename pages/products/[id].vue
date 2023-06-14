<template>
    <div>
        <h2>Product Details for {{ id }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maxime quaerat voluptate error quos odit. Quasi accusantium nisi harum commodi.</p>
    </div>
</template>

<script  setup>
    const {id} = useRoute().params;

</script>
<style lang="scss" scoped>

</style>