<template>
  <section>
    <SectionHeader title="Vet Profile" />
    <validationObserver ref="form">
      <form @submit.prevent="submit">
        <section class="sm:w-1/2 w-full">
          <ValidationProvider name="name" rules="required" v-slot="{ errors }">
            <div class="form-group mr-2 w-full my-2">
              <label for="title">Title</label>
              <input
                type="text"
                class="form-control"
                :class="errors.length && 'border-red-600 border-2'"
                id="title"
                name="name"
                value=""
                v-model="vet.title"
                aria-label="title"
                aria-describedby="title"
                required
              />

              <span class="text-red-600" v-if="errors.length"
                ><i class="fa fa-exclamation-circle"></i> {{ errors[0] }}</span
              >
            </div>
          </ValidationProvider>

          <ValidationProvider name="name" rules="required" v-slot="{ errors }">
            <div class="form-group mr-2 w-full my-2">
              <label for="pricing">Pricing</label>
              <input
                type="text"
                class="form-control"
                :class="errors.length && 'border-red-600 border-2'"
                id="pricing"
                name="price"
                value=""
                v-model="vet.price"
                aria-label="pricing"
                aria-describedby="pricing"
                required
              />

              <span class="text-red-600" v-if="errors.length"
                ><i class="fa fa-exclamation-circle"></i> {{ errors[0] }}</span
              >
            </div>
          </ValidationProvider>

          <ValidationProvider name="desc" rules="required" v-slot="{ errors }">
            <div class="form-group mr-2 w-full my-2">
              <label for="desc">Vet Description </label>

              <textarea
                class="form-control"
                name="desc"
                v-model="vet.description"
                id=""
                cols="30"
                rows="10"
              ></textarea>

              <span class="text-red-600" v-if="errors.length"
                ><i class="fa fa-exclamation-circle"></i> {{ errors[0] }}</span
              >
            </div>
          </ValidationProvider>

          <div class="offer" v-for="(offer, index) in offers" :key="index">
             <div>
               <!-- <i class="fa fa-checkbox"></i> -->
              <div> {{ offer }}</div>
             </div>
             <div> <i class="fa fa-times" @click="removeOffer(index)"></i></div>
          </div>
          <br>

          <button
            type="button"
            class="btn btn-outline-primary"
            @click="showModal = true"
          >
            Additional Offers
          </button>
          <br />
          <br />

          <button type="submit" class="btn btn-primary">Post</button>
        </section>
      </form>
    </validationObserver>

    <offer-modal v-show="showModal" @closeModal="closeModal">
      <input type="text" class="form-control" v-model="offer" />
      <br />
      <button class="btn btn-secondary" @click="addOffer">Add</button>
    </offer-modal>
  </section>
</template>

<script>
import SectionHeader from "~@/components/SectionHeader";
import OfferModal from "~@/components/modal/Offers";
export default {
  components: {
    SectionHeader,
    OfferModal,
  },
  data() {
    return {
      vet: {},
      loading: false,
      showModal: false,
      offers: [],
      offer: "",
    };
  },

  methods: {
    submit() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        }
        this.loading = true;
        this.vet.offers = this.offers;
        axios
          .post("/api/veter", this.vet)
          .then((res) => {
            this.$toast.success("Vet Created");
            this.$router.push({ name: "vet-list" });
            this.loading = false;
          })
          .catch(() => {
            this.$toast.error("Something went wrong please try again");
          });
      });
    },
    closeModal() {
      this.showModal = false;
    },
    addOffer() {
      if (this.offer.length) {
        this.offers.push(this.offer);
        this.showModal = false;
        this.offer = ""
      }
    },
    removeOffer(index){
       this.offers.splice(index,1)
    }
  },
};
</script>

<style lang="scss"  scoped>
.offer {
  padding: 10px;
  background: #fff;
  box-shadow: 1px 2px 2px #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:10px 0px;
}
</style>