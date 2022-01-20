<template>
  <section>
    <div class="flex justify-between items-center">
      <SectionHeader title="My Listed Tokens" />
      <router-link :to="{ name: 'token-form' }">
        <button class="btn btn-secondary">Create</button>
      </router-link>
    </div>

    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="lists.length < 1">
        <Empty :link="'token-form'"  />
      </div>
      <div v-else>
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
              >
                Token Name
              </th>
              <th
                scope="col"
                class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
              >
                Token Symbol
              </th>
              <th
                scope="col"
                class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
              >
                Status
              </th>
              <th
                scope="col"
                class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
              >
                Contract Address
              </th>

              <th
                scope="col"
                class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
              >
                Action
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="list in lists" :key="list.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ list.token_name }}
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ list.symbol }}
              </td>

              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="
                    px-2
                    inline-flex
                    text-xs
                    leading-5
                    font-semibold
                    rounded-full
                    bg-green-100
                    text-green-800
                  "
                >
                  {{ list.status }}
                </span>
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                {{ list.address }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-gray-500">View</td>
            </tr>

            <!-- More people... -->
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from "../../../../components/SectionHeader.vue";
import Empty from "../../../../components/Empty.vue";
export default {
  components: {
    SectionHeader,
    Empty,
  },
  data() {
    return {
      lists: [],
      loading: false,
    };
  },

  methods: {
    getLists() {
      this.loading = true;
      axios.get("/api/token/").then((res) => {
        this.lists = res.data.lists;
        this.loading = false;
      });
    },
  },
  mounted() {
    this.getLists();
  },
};
</script>

<style>
</style>