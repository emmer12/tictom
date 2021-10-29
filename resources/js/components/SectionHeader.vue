<template>
   <div class="my-3">
        <h1 class="text-3xl ">{{ title }}</h1>
        <p v-if="desc">{{desc}}</p>
   </div>
</template>

<script>
export default {
    props:['title','desc'],
}
</script>

<style>

</style>