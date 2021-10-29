<template>
  <section>
      <SectionHeader title="Edit Profile" />
      <section class="sm:w-1/2 w-full">
    <div class="flex sm:flex-row flex-col">
      <div class="form-group mr-2 w-full">
        <label for="firstname">First Name</label>
        <input
          type="text"
          class="form-control"
          id="firstname"
          name="firstname"
          value=""
          v-model="user.firstname"
          aria-label="firstname"
          aria-describedby="firstname"
          required
        />
      </div>

      <div class="form-group mr-2 w-full">
        <label for="lastname">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="lastname"
          name="lastname"
          value=""
          v-model="user.firstname"
          aria-label="lastname"
          aria-describedby="lastname"
          required
        />
      </div>

    </div>

    
      <div class="form-group mr-2 w-full">
        <label for="email">Email Address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          value=""
          v-model="user.firstname"
          aria-label="email"
          aria-describedby="email"
          required
        />
      </div>

      <div class="form-group mr-2 w-full">
        <label for="phone">Phone Number</label>
        <input
          type="number"
          class="form-control"
          id="phone"
          name="phone"
          value=""
          v-model="user.phone"
          aria-label="phone"
          placeholder=""
          aria-describedby="phone"
          required
        />
      </div>

      <div class="form-group mr-2 w-full">
        <label for="username">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          name="username"
          value=""
          v-model="user.phone"
          aria-label="username"
          aria-describedby="username"
          required
        />
      </div>

      <div class="form-group mr-2 w-full">
        <label for="bio">Bio</label>
         <textarea id="bio" class="form-control"></textarea>
      </div>

      <button class="btn btn-primary">Update</button>

  </section>
</section>
</template>

<script>
import SectionHeader from "./../../../components/SectionHeader";
export default {
  components:{
    SectionHeader
  },
  data(){
      return {
          user:{}
      }
  }
};
</script>

<style>
</style>