<template>
  <div class="my-3 flex justify-center items-center empty">
    <div class="my-3">
      <h4>{{ title || "Empty" }}</h4>
    </div>
  <router-link :to="{ name: link }">
    <button class="btn btn-secondary">Create</button>
  </router-link>
  </div>
</template>

<script>
export default {
  props: ["link", "title"],
};
</script>

<style>
.empty {
  height: 394px;
  flex-direction: column;
}

.empty h4{
    font-size: 24px;
}
</style>