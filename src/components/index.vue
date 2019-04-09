<template>
    <div @click="func">1</div>
</template>

<script>
export default {
    methods:{
        func(){
            this.$emit('func');
        }
    }
}
</script>

<style>

</style>
