"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_modules_member_layout_main_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["open", "menu"],
  data: function data() {
    return {
      showIndex: null,
      permission: []
    };
  },
  methods: {
    expandEnter: function expandEnter(el) {
      el.style.height = el.scrollHeight + "px";
    },
    expandAfterEnter: function expandAfterEnter(el) {
      el.style.height = "auto";
    },
    expandBeforeLeave: function expandBeforeLeave(el) {
      el.style.height = el.scrollHeight + "px";
    },
    showDrop: function showDrop(index) {
      this.showIndex = this.showIndex == index ? null : index;
    }
  },
  mounted: function mounted() {
    var sticky = document.querySelector(".sticky1"),
        stickyTop = sticky.offsetTop,
        scrolled = false,
        $window = window;
    console.log(sticky);
    /* Bind the scroll Event */

    document.addEventListener("scroll", function (e) {
      scrolled = true;
    });
    var timeout = setInterval(function () {
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
    this.permission = window.permission;
  },
  computed: {
    permitMenu: function permitMenu() {
      var canCreate = this.permission.some(function (data) {
        return data === "create_signal";
      });
      console.log(this.permission);
      return this.menu.filter(function (data) {
        return data.guard == "veter" && canCreate || data.guard !== "veter";
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/member/layout/main.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/member/layout/main.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_SideBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/SideBar */ "./resources/js/components/SideBar.vue");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../menu */ "./resources/js/modules/member/menu.js");
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SideBar: _components_SideBar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      menu: _menu__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  }
});

/***/ }),

/***/ "./resources/js/modules/member/menu.js":
/*!*********************************************!*\
  !*** ./resources/js/modules/member/menu.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  href: '/',
  title: 'Dashboard',
  icon: 'fa fa-tachometer-alt'
}, {
  title: 'Tokens',
  icon: 'fa fa-user',
  child: [{
    href: '/tokens',
    title: 'Listed Tokens',
    external: false
  }, {
    href: '/tokens/list',
    title: 'List Token',
    external: false
  }]
}, {
  title: 'Vet',
  icon: 'fa fa-bullhorn',
  guard: 'veter',
  child: [{
    href: '/vet/',
    title: 'Vet Profiles'
  }]
}, {
  title: 'Signal',
  icon: 'fa fa-chart-area',
  badge: 'New',
  guard: 'veter',
  child: [{
    href: '/member/products',
    title: 'Signal Management',
    external: false
  }]
}, {
  title: 'KYC',
  icon: 'fa fa-shopping-basket'
}, {
  title: 'My Account',
  icon: 'fa fa-user',
  child: [{
    href: '/profile',
    title: 'Update Profile',
    external: false
  }, {
    href: '/profile/password',
    title: 'Update Password',
    external: false
  }]
}]);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=style&index=0&id=223abea1&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=style&index=0&id=223abea1&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".side-bar[data-v-223abea1] {\n  width: 19%;\n  /* position: absolute; */\n  top: 77px;\n  float: left;\n  background: #fff;\n  height: 90vh;\n  transition: 0.5s ease-in-out;\n  z-index: 9;\n  left: 0px;\n  padding: 20px 10px;\n  flex-shrink: 0;\n  flex-basis: 280px;\n  width: 280px;\n  border-radius: 10px;\n}\n.side-bar a[data-v-223abea1]:hover {\n  color: #fff;\n  text-decoration: none;\n}\n.side-bar.fixed[data-v-223abea1] {\n  position: -webkit-sticky;\n  /* for Safari */\n  position: sticky;\n  top: 100px;\n  z-index: 0;\n  align-self: flex-start;\n}\n.side-bar .menu[data-v-223abea1] {\n  max-height: 90%;\n  overflow-y: auto;\n}\n.side-bar .menu[data-v-223abea1]::-webkit-scrollbar {\n  width: 10px;\n  background: #ebedef;\n}\n.side-bar .menu[data-v-223abea1]::-webkit-scrollbar-thumb {\n  background: #161d42;\n  border-radius: 10px;\n}\n.side-bar .menu .item[data-v-223abea1] {\n  color: #464646;\n  border-bottom: 1px solid #f3f4f6;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 10px;\n  font-size: 14px;\n  transition: 0.3s ease-in-out;\n}\n.side-bar .menu .item .badge[data-v-223abea1] {\n  background: #4caf50;\n  font-size: 12px;\n  border-radius: 5px;\n  padding: 0px 7px;\n  color: white;\n}\n.side-bar .menu .item[data-v-223abea1]:hover {\n  color: #fff;\n  background: #161d42;\n  border-top-left-radius: 50px;\n  border-bottom-left-radius: 50px;\n}\n.side-bar .menu .child-item-container[data-v-223abea1] {\n  margin-left: 15px;\n}\n.side-bar ul[data-v-223abea1] {\n  padding: 0px;\n  margin-top: 20px;\n}\n.side-bar ul li[data-v-223abea1] {\n  list-style: none;\n  color: #464646;\n  border-bottom: 1px solid #f3f4f6;\n  font-weight: 500;\n  cursor: pointer;\n}\n.side-bar ul li[data-v-223abea1]:hover {\n  color: #fff;\n  /* background: #f8a917; */\n}\n.side-bar ul li a[data-v-223abea1] {\n  padding: 10px;\n  display: block;\n  transition: 0.3s;\n}\n.side-bar ul li.active[data-v-223abea1] {\n  color: #fff;\n  background: #161d42;\n  font-weight: 700;\n  margin: 10px 0px;\n}\n.side-bar .expand-enter-active[data-v-223abea1],\n.side-bar .expand-leave-active[data-v-223abea1] {\n  transition: height 0.3s ease;\n  overflow: hidden;\n}\n.side-bar .expand-enter[data-v-223abea1],\n.side-bar .expand-leave-to[data-v-223abea1] {\n  height: 0 !important;\n}\n@media (max-width: 640px) {\n.side-bar[data-v-223abea1] {\n    top: 50px;\n    width: 290px;\n}\n.side-bar.added[data-v-223abea1] {\n    left: -290px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/member/layout/main.vue?vue&type=style&index=0&id=67ac2ce2&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/member/layout/main.vue?vue&type=style&index=0&id=67ac2ce2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container[data-v-67ac2ce2] {\n  display: flex;\n  /* padding:10px 20px; */\n  position: relative;\n}\n.container .body[data-v-67ac2ce2] {\n  flex: 1;\n  background: #fff;\n  margin-left: 20px;\n  border-radius: 10px;\n  padding: 20px;\n  overflow: auto;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=style&index=0&id=223abea1&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=style&index=0&id=223abea1&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_223abea1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideBar.vue?vue&type=style&index=0&id=223abea1&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=style&index=0&id=223abea1&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_223abea1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_223abea1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/member/layout/main.vue?vue&type=style&index=0&id=67ac2ce2&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/member/layout/main.vue?vue&type=style&index=0&id=67ac2ce2&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_67ac2ce2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=style&index=0&id=67ac2ce2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/member/layout/main.vue?vue&type=style&index=0&id=67ac2ce2&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_67ac2ce2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_67ac2ce2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/SideBar.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/SideBar.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideBar_vue_vue_type_template_id_223abea1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBar.vue?vue&type=template&id=223abea1&scoped=true& */ "./resources/js/components/SideBar.vue?vue&type=template&id=223abea1&scoped=true&");
/* harmony import */ var _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar.vue?vue&type=script&lang=js& */ "./resources/js/components/SideBar.vue?vue&type=script&lang=js&");
/* harmony import */ var _SideBar_vue_vue_type_style_index_0_id_223abea1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar.vue?vue&type=style&index=0&id=223abea1&lang=scss&scoped=true& */ "./resources/js/components/SideBar.vue?vue&type=style&index=0&id=223abea1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideBar_vue_vue_type_template_id_223abea1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SideBar_vue_vue_type_template_id_223abea1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "223abea1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SideBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/modules/member/layout/main.vue":
/*!*****************************************************!*\
  !*** ./resources/js/modules/member/layout/main.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_vue_vue_type_template_id_67ac2ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=67ac2ce2&scoped=true& */ "./resources/js/modules/member/layout/main.vue?vue&type=template&id=67ac2ce2&scoped=true&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./resources/js/modules/member/layout/main.vue?vue&type=script&lang=js&");
/* harmony import */ var _main_vue_vue_type_style_index_0_id_67ac2ce2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.vue?vue&type=style&index=0&id=67ac2ce2&lang=scss&scoped=true& */ "./resources/js/modules/member/layout/main.vue?vue&type=style&index=0&id=67ac2ce2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_67ac2ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _main_vue_vue_type_template_id_67ac2ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "67ac2ce2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/member/layout/main.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SideBar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/SideBar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/member/layout/main.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/modules/member/layout/main.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/member/layout/main.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SideBar.vue?vue&type=style&index=0&id=223abea1&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/SideBar.vue?vue&type=style&index=0&id=223abea1&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_223abea1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideBar.vue?vue&type=style&index=0&id=223abea1&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=style&index=0&id=223abea1&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/modules/member/layout/main.vue?vue&type=style&index=0&id=67ac2ce2&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/modules/member/layout/main.vue?vue&type=style&index=0&id=67ac2ce2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_67ac2ce2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=style&index=0&id=67ac2ce2&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/member/layout/main.vue?vue&type=style&index=0&id=67ac2ce2&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/SideBar.vue?vue&type=template&id=223abea1&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/SideBar.vue?vue&type=template&id=223abea1&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_223abea1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_223abea1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_223abea1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideBar.vue?vue&type=template&id=223abea1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=template&id=223abea1&scoped=true&");


/***/ }),

/***/ "./resources/js/modules/member/layout/main.vue?vue&type=template&id=67ac2ce2&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/modules/member/layout/main.vue?vue&type=template&id=67ac2ce2&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_67ac2ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_67ac2ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_67ac2ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=template&id=67ac2ce2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/member/layout/main.vue?vue&type=template&id=67ac2ce2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=template&id=223abea1&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=template&id=223abea1&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "side-bar flex flex-col justify-between sticky1",
      class: { added: true },
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: true,
              expression: "true",
            },
          ],
          staticClass: "profile-area flex flex-col justify-center items-center",
        },
        [
          _c("img", {
            staticClass: "rounded-full w-32 h-32 flex-center",
            attrs: { src: "/img/avatars/6.jpg" },
          }),
          _vm._v(" "),
          _c("h1", { staticClass: "text-base font-semibold mt-2 mb-1" }, [
            _vm._v("Emmanuel Taiwo"),
          ]),
          _vm._v(" "),
          _vm._m(0),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "menu" },
        _vm._l(_vm.permitMenu, function (item, index) {
          return _c(
            "div",
            { key: index },
            [
              item.child && item.child.length > 0
                ? _c(
                    "div",
                    [
                      _c(
                        "div",
                        {
                          staticClass: "item flex justify-between items-center",
                          on: {
                            click: function ($event) {
                              return _vm.showDrop(index)
                            },
                          },
                        },
                        [
                          _c("div", { staticClass: "flex items-center" }, [
                            _c("i", { staticClass: "mr-3", class: item.icon }),
                            _vm._v(" "),
                            _c(
                              "a",
                              { staticClass: "block", attrs: { href: "#" } },
                              [_vm._v(_vm._s(item.title))]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            item.badge
                              ? _c("span", { staticClass: "badge" }, [
                                  _vm._v(_vm._s(item.badge)),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("i", { staticClass: "fa fa-angle-left" }),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: { appear: true, name: "expand" },
                          on: {
                            enter: _vm.expandEnter,
                            afterEnter: _vm.expandAfterEnter,
                            beforeLeave: _vm.expandBeforeLeave,
                          },
                        },
                        [
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.showIndex == index,
                                  expression: "showIndex == index",
                                },
                              ],
                              staticClass: "child-item-container",
                            },
                            _vm._l(item.child, function (child, index) {
                              return _c(
                                "div",
                                { key: "child-" + index },
                                [
                                  child.external
                                    ? _c("a", { attrs: { href: child.href } }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "block item item-child",
                                          },
                                          [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(child.title) +
                                                "\n                "
                                            ),
                                          ]
                                        ),
                                      ])
                                    : _c(
                                        "router-link",
                                        {
                                          attrs: { to: child.href, tag: "div" },
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "block item item-child",
                                            },
                                            [
                                              _vm._v(
                                                "\n                  " +
                                                  _vm._s(child.title) +
                                                  "\n                "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                ],
                                1
                              )
                            }),
                            0
                          ),
                        ]
                      ),
                    ],
                    1
                  )
                : _c(
                    "router-link",
                    {
                      staticClass: "item flex justify-between items-center",
                      attrs: { tag: "div", to: item.href || "#" },
                    },
                    [
                      _c("div", { staticClass: "flex items-center" }, [
                        _c("i", { staticClass: "mr-3", class: item.icon }),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v(
                            "\n            " +
                              _vm._s(item.title) +
                              "\n          "
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        item.badge
                          ? _c("span", { staticClass: "badge" }, [
                              _vm._v(_vm._s(item.badge)),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("i", { staticClass: "fa fa-angle-right" }),
                      ]),
                    ]
                  ),
            ],
            1
          )
        }),
        0
      ),
      _vm._v(" "),
      _vm._m(1),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex" }, [
      _c("span", { staticClass: "font-medium mr-2" }, [_vm._v("20 Follower ")]),
      _vm._v(" |\n      "),
      _c("span", { staticClass: "font-medium ml-2" }, [_vm._v("2 Following ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [_c("a", { attrs: { href: "/logout" } }, [_vm._v("Logout")])]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/member/layout/main.vue?vue&type=template&id=67ac2ce2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/modules/member/layout/main.vue?vue&type=template&id=67ac2ce2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", [_c("SideBar", { attrs: { menu: _vm.menu } })], 1),
    _vm._v(" "),
    _c("div", { staticClass: "body" }, [_c("router-view")], 1),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);