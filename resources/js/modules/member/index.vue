<template>
  <div class="flex">
    <ActionCard
      :desc="'Edit your name or change your password'"
      :title="'My Account'"
      :href="'/'"
      :icon="'fa fa-user'"
    />
    <ActionCard
      :desc="'Edit your name or change your password'"
      :title="'KYC'"
      :href="'/'"
      :icon="'fa fa-lock'"
    />
  </div>
</template>

<script>
import ActionCard from "./../../components/card/ActionCard";
export default {
  components: {
    ActionCard,
  },
};
</script>

<style>
</style>