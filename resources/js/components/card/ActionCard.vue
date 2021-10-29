<template>
    <div class="card flex flex-row shadow-sm p-3 max-w-xs items-center cursor-pointer mx-2">
        <div class="avatar">
               <i class="text-6xl" :class="icon"></i>
        </div>
        <div class="details p-2 ">
           <h1 class="text-xl font-bold mt-2 mb-1 ">{{ title }}</h1>
           <p class="font-medium text-base">{{ desc }}</p>
        </div>
        <div v-if="action">
            <router-link :to="href" class="">
               <i class="fa fa-arrow-right text-lg"  style="color:#161d42"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            required:true,
            default:'My Account',
            type:String
        },
        action:{
            required:false,
            default:true,
            type:Boolean
        },
        desc:{
            required:true,
            type:String,
        },
        icon:{
            required:true,
            default:'fa fa-user-circle',
            type:String
        },
        href:{
            required:false,
            default:'/',
            type:String
        }
    }

}
</script>

<style>

</style>