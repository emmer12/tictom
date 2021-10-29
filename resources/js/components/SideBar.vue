<template>
  <div
    class="side-bar flex flex-col justify-between sticky1"
    :class="{ added: true }"
  >
    <div class="profile-area flex flex-col justify-center items-center " v-show="true">
        <img src="/img/avatars/6.jpg" class="rounded-full w-32 h-32 flex-center" />
        <h1 class="text-base font-semibold mt-2 mb-1 ">Emmanuel Taiwo</h1>
        <div class="flex">
            <span class="font-medium mr-2">20 Follower </span> |
            <span class="font-medium ml-2">2 Following </span>
        </div>
        
    </div>


    <div class="menu">
      <div v-for="(item, index) in menu" :key="index">
        <div v-if="item.child && item.child.length > 0">
          <div
            class="item flex justify-between items-center"
            @click="showDrop(index)"
          >
            <div class="flex items-center">
              <i class="mr-3" :class="item.icon"></i>
              <a class="block" href="#">{{ item.title }}</a>
            </div>
            <div>
              <span v-if="item.badge" class="badge">{{ item.badge }}</span>
              <i class="fa fa-angle-left"></i>
            </div>
          </div>
          <transition
            :appear="true"
            name="expand"
            @enter="expandEnter"
            @afterEnter="expandAfterEnter"
            @beforeLeave="expandBeforeLeave"
          >
            <div class="child-item-container" v-show="showIndex == index">
              <div v-for="(child, index) in item.child" :key="'child-' + index">
                <a v-if="child.external" :href="child.href">
                  <div class="block item item-child">
                    <i class="fa fa-angle-right"></i>
                    {{ child.title }}
                  </div>
                </a>
                <router-link v-else :to="child.href" tag="div">
                  <div class="block item item-child">
                    <i class="fa fa-angle-right"></i>
                    {{ child.title }}
                  </div>
                </router-link>
              </div>
            </div>
          </transition>
        </div>

        <router-link
          tag="div"
          :to="item.href || '#'"
          class="item flex justify-between items-center"
          v-else
        >
          <div class="flex items-center">
            <i class="mr-3" :class="item.icon"></i>
            <div>
              {{ item.title }}
            </div>

            <!-- <a class="block" :href="item.href"> {{item.title}} </a> -->
          </div>
          <div>
            <span v-if="item.badge" class="badge">{{ item.badge }}</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </router-link>
      </div>
    </div>
    <ul>
      <li><a href="/logout">Logout</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["open", "menu"],
  data() {
    return {
      showIndex: null,
    };
  },
  methods: {
    expandEnter(el) {
      el.style.height = el.scrollHeight + "px";
    },
    expandAfterEnter(el) {
      el.style.height = "auto";
    },
    expandBeforeLeave(el) {
      el.style.height = el.scrollHeight + "px";
    },
    showDrop(index) {
      this.showIndex = this.showIndex == index ? null : index;
    },
  },

  mounted() {
    let sticky = document.querySelector(".sticky1"),
      stickyTop = sticky.offsetTop,
      scrolled = false,
      $window = window;
    console.log(sticky);
    /* Bind the scroll Event */
    document.addEventListener("scroll", function (e) {
      scrolled = true;
    });

    let timeout = setInterval(function () {
      /* If the page was scrolled, handle the scroll */
      if (scrolled) {
        scrolled = false;
        if ($window.scrollY >= 50) {
          sticky.classList.add("fixed");
        } else if ($window.scrollY >= 400) {
          sticky.classList.remove("fixed");
        } else {
          sticky.classList.remove("fixed");
        }
      }
    }, 200);
  },
};
</script>

<style lang="scss" scoped>
$primary:#161d42;


.side-bar {
  width: 19%;
  /* position: absolute; */
  top: 77px;
  float: left;
  background: #fff;
  height: 90vh;
  transition: 0.5s ease-in-out;
  z-index: 9;
  left: 0px;
  padding: 20px 10px;
  flex-shrink: 0;
  flex-basis: 280px;
  width: 280px;
  border-radius: 10px;
  &.fixed {
     position: -webkit-sticky; /* for Safari */
    position: sticky;
    top: 100px;
    align-self: flex-start;
  }

  .menu {
    max-height: 90%;
    overflow-y: auto;

     &::-webkit-scrollbar {
      width: 10px;
      background: #ebedef;
    }
    &::-webkit-scrollbar-thumb {
      background: $primary;
      border-radius: 10px;
    }

    .item {
      color: #464646;
      border-bottom: 1px solid #f3f4f6;
      font-weight: 500;
      cursor: pointer;
      padding: 10px;
      font-size: 14px;
      transition: 0.3s ease-in-out;

      .badge {
        background: #4caf50;
        font-size: 12px;
        border-radius: 5px;
        padding: 0px 7px;
        color: white;
      }
      &:hover {
        color: #fff;
        background: $primary;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
      }
      
    }

    .child-item-container {
      margin-left: 15px;
    }
  }

  ul {
    padding: 0px;
    margin-top: 20px;

    li {
      list-style: none;
      color: #464646;
      border-bottom: 1px solid #f3f4f6;
      font-weight: 500;
      cursor: pointer;
      &:hover {
        color: #fff;
        /* background: #f8a917; */
      }
      a {
        padding: 10px;
        display: block;
        transition: 0.3s;
      }

      &.active {
        color: #fff;
        background: $primary;
        font-weight: 700;
        margin: 10px 0px;
      }
    }
  }

  .expand-enter-active,
  .expand-leave-active {
    transition: height 0.3s ease;
    overflow: hidden;
  }
  .expand-enter,
  .expand-leave-to {
    height: 0 !important;
  }
}

@media (max-width: 640px) {
  .side-bar {
    top: 50px;
    width: 290px;
    &.added {
      left: -290px;
    }
  }
}
</style>