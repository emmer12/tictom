<template>
  <section>
    <div class="flex justify-between items-center">
      <SectionHeader title="Vet packages" />
      <router-link :to="{ name: 'vet-form' }">
        <button class="btn btn-primary">Create</button>
      </router-link>
    </div>

    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="lists.length < 1">
        <Empty :link="'vet-form'" :title="'No post Yet'" />
      </div>
      <div v-else class="table-responsive" style="overflow-x:auto">
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
                S/N
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
                Title
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
                Price
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
                Date Created
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
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(list, index) in lists" :key="list.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ index + 1 }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ list.title }}
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ list.price | formatMoney }}
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                {{ list.created_at }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                <div>
                  <div class="btn-view">View</div>
                </div>
              </td>
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
      axios.get("/api/veter/").then((res) => {
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

<style lang='scss' scoped>
.btn-view {
  background: #ddd;
  padding: 5px 10px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover{
    background:#ccc;
  }
}
</style>