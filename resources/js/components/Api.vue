<template>
  <div style="margin: auto auto auto 0px; float: left">$ {{ ad }} </div>
</template>

<script>
import Axios from "axios";
import Moralis from "moralis/dist/moralis.min.js";

export default {
  props: ["address"],
  data() {
    return {
      data: null,
      address: "",
      apiKey: "58QXUE19RENV7AN21RMSYW4BEEKB13EI26",
      serverUrl: "https://qeyk1zaw8nlh.usemoralis.com:2053/server",
      appId: "GZsJR5o1DBJ90rImS7Tmux7NboH2foSdfpHTzJqs",
      api: "3WYBbAgRqvuDvm55bFeWbzkTmM6RG40Z7qtiL2ZQFnelRUSM6UqBUEjwsfLnZsQ7",
      ad:'--',
      timer:''
    };
  },

  methods: {
    getData() {
      let config = {
        headers: {
          "X-API-KEY": this.api,
        },
      };
      axios
        .get(
          `https://deep-index.moralis.io/api/v2/erc20/${this.address}/price?chain=bsc`,
          config
        )
        .then(({data}) => {
          this.ad=data.usdPrice.toFixed(10)
        }).catch(()=>{
            this.ad= "--"
        })

      
    },
     cancelAutoUpdate () {
            clearInterval(this.timer);
        }
  },
  created() {
    this.getData();
    this.timer = setInterval(this.getData,1000);

  },
  beforeDestroy () {
      this.cancelAutoUpdate();
    },

  computed: {
   
  },
};
</script>

<style>
</style>