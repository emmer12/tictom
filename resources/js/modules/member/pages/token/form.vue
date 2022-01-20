<template>
  <section>
    <SectionHeader title="List Tokens" />
    <validationObserver ref="form">
      <form @submit.prevent="submit">
        <section class="sm:w-1/2 w-full">
          <ValidationProvider name="name" rules="required" v-slot="{ errors }">
            <div class="form-group mr-2 w-full my-2">
              <label for="email">Token Name</label>
              <input
                type="text"
                class="form-control"
                :class="errors.length && 'border-red-600 border-2'"
                id="name"
                name="name"
                value=""
                v-model="token.token_name"
                aria-label="name"
                aria-describedby="name"
                required
              />

              <span class="text-red-600" v-if="errors.length"
                ><i class="fa fa-exclamation-circle"></i> {{ errors[0] }}</span
              >
            </div>
          </ValidationProvider>

          <ValidationProvider name="name" rules="required" v-slot="{ errors }">
            <div class="form-group mr-2 w-full my-2">
              <label for="symbol">Token Symbol</label>
              <input
                type="text"
                class="form-control"
                :class="errors.length && 'border-red-600 border-2'"
                id="symbol"
                name="name"
                value=""
                v-model="token.symbol"
                aria-label="name"
                aria-describedby="name"
                required
              />

              <span class="text-red-600" v-if="errors.length"
                ><i class="fa fa-exclamation-circle"></i> {{ errors[0] }}</span
              >
            </div>
          </ValidationProvider>

          <ValidationProvider
            name="address"
            rules="required"
            v-slot="{ errors }"
          >
            <div class="form-group mr-2 w-full my-2">
              <label for="address">Contract address</label>
              <input
                type="text"
                class="form-control"
                :class="errors.length && 'border-red-600 border-2'"
                id="address"
                name="address"
                value=""
                v-model="token.address"
                aria-label="address"
                aria-describedby="address"
                required
              />

              <span class="text-red-600" v-if="errors.length"
                ><i class="fa fa-exclamation-circle"></i> {{ errors[0] }}</span
              >
            </div>
          </ValidationProvider>

          <ValidationProvider
            name="network"
            rules="required"
            v-slot="{ errors }"
          >
            <div class="form-group mr-2 w-full my-2">
              <label for="network">Network/Chain</label>
              <select
                name=""
                v-model="token.network"
                id=""
                class="form-control"
              >
                <option value="" disabled selected>Select Network</option>
                <option value="Bsc">BSC</option>
              </select>
              <span class="text-red-600" v-if="errors.length"
                ><i class="fa fa-exclamation-circle"></i> {{ errors[0] }}</span
              >
            </div>
          </ValidationProvider>

          <ValidationProvider
            name="address"
            rules="required"
            v-slot="{ errors }"
          >
            <div class="form-group mr-2 w-full my-2">
              <label for="address">Starting Market Capital</label>
              <input
                type="number"
                class="form-control"
                :class="errors.length && 'border-red-600 border-2'"
                id="smc"
                name="smc"
                value=""
                v-model="token.smc"
                aria-label="smc"
                aria-describedby="smc"
                required
              />

              <span class="text-red-600" v-if="errors.length"
                ><i class="fa fa-exclamation-circle"></i> {{ errors[0] }}</span
              >
            </div>
          </ValidationProvider>


           <ValidationProvider
            name="desc"
            rules="required"
            v-slot="{ errors }"
          >
            <div class="form-group mr-2 w-full my-2">
              <label for="desc">Token Description </label>

              <textarea class="form-control" name="desc" v-model="token.desc" id="" cols="30" rows="10"></textarea>

              <span class="text-red-600" v-if="errors.length"
                ><i class="fa fa-exclamation-circle"></i> {{ errors[0] }}</span
              >
            </div>
          </ValidationProvider>

          <div class="font-bold text-base my-4">Social links</div>

          <validation-provider rules="required" v-slot="{ errors }">
            <div class="my-2">
              <label
                for="telegram"
                class="block text-sm font-medium text-gray-700"
                >Telegram Link</label
              >
              <input
                :class="{ 'border-red-600': errors.length }"
                type="text"
                name="telegram"
                id="telegram"
                placeholder="telegram"
                class="form-control"
                v-model="token.telegram"
              />
              <span
                v-if="errors.length"
                v-text="errors[0]"
                class="text-red-600 text-xs"
                name="name"
              ></span>
            </div>
          </validation-provider>

          <validation-provider rules="required" v-slot="{ errors }">
            <div class="my-2">
              <label
                for="twitter"
                class="block text-sm font-medium text-gray-700"
                >Twitter Link</label
              >
              <input
                :class="{ 'border-red-600': errors.length }"
                type="text"
                name="twitter"
                id="twitter"
                placeholder="twitter"
                class="form-control"
                v-model="token.twitter"
              />
              <span
                v-if="errors.length"
                v-text="errors[0]"
                class="text-red-600 text-xs"
                name="name"
              ></span>
            </div>
          </validation-provider>

          <validation-provider rules="required" v-slot="{ errors }">
            <div class="my-2">
              <label
                for="website"
                class="block text-sm font-medium text-gray-700"
                >Website</label
              >
              <input
                :class="{ 'border-red-600': errors.length }"
                type="text"
                name="website"
                id="website"
                placeholder="Website"
                class="form-control"
                v-model="token.website"
              />
              <span
                v-if="errors.length"
                v-text="errors[0]"
                class="text-red-600 text-xs"
                name="name"
              ></span>
            </div>
          </validation-provider>

          <div class="my-2">
            <label
              for="facebook"
              class="block text-sm font-medium text-gray-700"
              >Facebook Link</label
            >
            <input
              type="text"
              name="facebook"
              id="name"
              placeholder="facebook"
              class="form-control"
              v-model="token.facebook"
            />
          </div>

          <Upload :multiple="true" :folder="'token'" />

          <br />

          <button class="btn btn-secondary">List Token</button>
        </section>
      </form>
    </validationObserver>
  </section>
</template>

<script>
import SectionHeader from "./../../../../components/SectionHeader";
import Upload from "./../../../../components/Upload";
export default {
  components: {
    SectionHeader,
    Upload
  },
  data() {
    return {
      token: {},
      loading:false
    };
  },

  methods: {
    submit() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        }
        this.loading=true
        axios.post("api/token", this.token).then((res) => {
          this.$toast.success("Token Listed");
          this.$router.push({name:'token-list'})
          this.loading=false
        }).catch(()=>{
          this.$toast.error("Something went wrong please try again");
        })
      });
    },
  },
};
</script>

<style>
</style>