<template>
  <header class="header__section header__transparent">
    <div class="main__header header__sticky">
      <div class="container">
        <div
          class="main__header--inner position__relative d-flex justify-content-between align-items-center"
        >
          <div class="offcanvas__header--menu__open">
            <a
              class="offcanvas__header--menu__open--btn"
              href="javascript:void(0)"
              data-offcanvas
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon offcanvas__header--menu__open--svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M80 160h352M80 256h352M80 352h352"
                />
              </svg>
              <span class="visually-hidden">Stefeni Menu Open</span>
            </a>
          </div>
          <div class="main__logo">
            <router-link
              tag="a"
              class="main__logo--link"
              class-active="active"
              to="/"
            >
              <img
                class="main__logo--img"
                src="assets/img/drive/logo.jpeg"
                alt="logo-img"
              />
            </router-link>
          </div>
          <div
            class="header__search--widget d-none d-lg-block header__sticky--none"
          >
            <form class="d-flex header__search--form" action="#">
              <div class="header__select--categories select">
                <select class="header__select--inner">
                  <option selected value="1">Select Categories</option>
                  <option value="2">Barbecue</option>
                  <option value="3">Fish</option>
                  <option value="4">Grills</option>
                </select>
              </div>
              <div class="header__search--box">
                <label>
                  <input
                    class="header__search--input"
                    placeholder="Search Product"
                    type="text"
                  />
                </label>
                <button
                  class="header__search--button bg__secondary text-white"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div class="header__menu d-none d-lg-block header__sticky--block">
            <nav class="header__menu--navigation">
              <ul class="d-flex">
                <!-- <li class="header__menu--items">
                  <a class="header__menu--link" href="contact.html">Grills </a>
                </li> -->
                <li class="header__menu--items">
                  <router-link
                    tag="a"
                    class="header__menu--link"
                    class-active="active"
                    to="/contact"
                  >
                    Contact
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="header__account header__sticky--none">
            <ul class="d-flex">
              <li v-if="isLoggedIn" class="header__account--items d-none d-lg-block">
                <router-link v-if="isLoggedIn"  tag="a" class="header__account--btn" to="/account"
                        ><svg xmlns="http://www.w3.org/2000/svg"  width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
                                    <span class="visually-hidden">Account</span> 
                    </router-link>
                            </li>
              <li
                class="header__account--items header__account--search__items mobile__d--block d-sm-2-none"
              >
                <a
                  class="header__account--btn search__open--btn"
                  href="javascript:void(0)"
                  @click="showModalSearchFunc"
                  data-offcanvas
                >
                  <svg
                    class="product__items--action__btn--svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.51"
                    height="20.443"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="32"
                      d="M338.29 338.29L448 448"
                    />
                  </svg>
                  <span class="visually-hidden">Search</span>
                </a>
              </li>
              <li class="header__account--items">
                <a
                  class="header__account--btn minicart__open--btn"
                  href="javascript:void(0)"
                  @click="showMiniCartFunc"
                  data-offcanvas
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.706"
                    height="15.534"
                    viewBox="0 0 14.706 13.534"
                  >
                    <g transform="translate(0 0)">
                      <g>
                        <path
                          data-name="Path 16787"
                          d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                          transform="translate(0 -463.248)"
                          fill="#fefefe"
                        />
                        <path
                          data-name="Path 16788"
                          d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                          transform="translate(-1.191 -466.622)"
                          fill="#fefefe"
                        />
                        <path
                          data-name="Path 16789"
                          d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                          transform="translate(-2.875 -466.622)"
                          fill="#fefefe"
                        />
                      </g>
                    </g>
                  </svg>
                  <span class="items__count">{{ cartItems.length }}</span>
                </a>
              </li>
              <li class="header__account--items d-none d-lg-block">
                <router-link
                  tag="a"
                  class="header__account--btn"
                  to="/wishlist"
                >
                  <!-- <a class="header__account--btn" href="wishlist.html"> -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.541"
                    height="15.557"
                    viewBox="0 0 18.541 15.557"
                  >
                    <path
                      d="M71.775,135.51a5.153,5.153,0,0,1,1.267-1.524,4.986,4.986,0,0,1,6.584.358,4.728,4.728,0,0,1,1.174,4.914,10.458,10.458,0,0,1-2.132,3.808,22.591,22.591,0,0,1-5.4,4.558c-.445.282-.9.549-1.356.812a.306.306,0,0,1-.254.013,25.491,25.491,0,0,1-6.279-4.8,11.648,11.648,0,0,1-2.52-4.009,4.957,4.957,0,0,1,.028-3.787,4.629,4.629,0,0,1,3.744-2.863,4.782,4.782,0,0,1,5.086,2.447c.013.019.025.034.057.076Z"
                      transform="translate(-62.498 -132.915)"
                      fill="currentColor"
                    />
                  </svg>
                  <span class="items__count">{{ wishlistItems.length }}</span>
                  <!-- </a> -->
                </router-link>
              </li>
            </ul>
          </div>
          <div class="header__menu d-none d-lg-block header__sticky--block">
            <nav class="header__menu--navigation">
              <ul class="d-flex">
                <form class="d-flex header__search--form" action="#">
                  <div class="header__select--categories select">
                    <select class="header__select--inner">
                      <option selected value="1">Select Categories</option>
                      <option value="2">Barbecue</option>
                      <option value="3">Fish</option>
                      <option value="4">Grills</option>
                    </select>
                  </div>
                  <div class="header__search--box">
                    <label>
                      <input
                        class="header__search--input"
                        placeholder="Search Product"
                        type="text"
                      />
                    </label>
                    <button
                      class="header__search--button bg__secondary text-white"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="header__bottom bg__secondary">
      <div class="container">
        <div
          class="header__bottom--inner position__relative d-flex align-items-center"
        >
          <div
            class="header__right--area d-flex justify-content-between align-items-center"
          >
            <div class="header__menu">
              <nav class="header__menu--navigation">
                <ul class="d-flex">
                  <!-- <li class="header__menu--items">
                    <div class="header__menu--link text-white">
                      <router-link to="/risk-info" target="_blank"
                        >Grills</router-link
                      >
                    </div>
                  </li> -->
                  <li class="header__menu--items">
                    <router-link
                      tag="a"
                      class="header__menu--link text-white"
                      to="/contact"
                    >
                      Contact
                    </router-link>
                  </li>
                  <li v-if="!isLoggedIn" class="header__menu--items">
                    <router-link
                      tag="a"
                      class="header__menu--link text-white"
                      to="/login"
                    >
                      Login/ Register
                    </router-link>
                  </li>
                  <li v-if="isLoggedIn" class="header__menu--items">
                    <a class="header__menu--link text-white" @click="logout">
                      Logout
                  </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Offcanvas stikcy toolbar -->
    <div class="offcanvas__stikcy--toolbar">
      <ul class="d-flex justify-content-between">
        <li class="offcanvas__stikcy--toolbar__list">
          <a class="offcanvas__stikcy--toolbar__btn" href="/">
            <span class="offcanvas__stikcy--toolbar__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="21.51"
                height="21.443"
                viewBox="0 0 22 17"
              >
                <path
                  fill="currentColor"
                  d="M20.9141 7.93359c.1406.11719.2109.26953.2109.45703 0 .14063-.0469.25782-.1406.35157l-.3516.42187c-.1172.14063-.2578.21094-.4219.21094-.1406 0-.2578-.04688-.3515-.14062l-.9844-.77344V15c0 .3047-.1172.5625-.3516.7734-.2109.2344-.4687.3516-.7734.3516h-4.5c-.3047 0-.5742-.1172-.8086-.3516-.2109-.2109-.3164-.4687-.3164-.7734v-3.6562h-2.25V15c0 .3047-.11719.5625-.35156.7734-.21094.2344-.46875.3516-.77344.3516h-4.5c-.30469 0-.57422-.1172-.80859-.3516-.21094-.2109-.31641-.4687-.31641-.7734V8.46094l-.94922.77344c-.11719.09374-.24609.14062-.38672.14062-.16406 0-.30468-.07031-.42187-.21094l-.35157-.42187C.921875 8.625.875 8.50781.875 8.39062c0-.1875.070312-.33984.21094-.45703L9.73438.832031C10.1094.527344 10.5312.375 11 .375s.8906.152344 1.2656.457031l8.6485 7.101559zm-3.7266 6.50391V7.05469L11 1.99219l-6.1875 5.0625v7.38281h3.375v-3.6563c0-.3046.10547-.5624.31641-.7734.23437-.23436.5039-.35155.80859-.35155h3.375c.3047 0 .5625.11719.7734.35155.2344.211.3516.4688.3516.7734v3.6563h3.375z"
                ></path>
              </svg>
            </span>
            <span class="offcanvas__stikcy--toolbar__label">Home</span>
          </a>
        </li>
        <li class="offcanvas__stikcy--toolbar__list">
          <a
            class="offcanvas__stikcy--toolbar__btn search__open--btn"
            href="javascript:void(0)"
            @click="showModalSearchFunc"
            data-offcanvas
          >
            <span class="offcanvas__stikcy--toolbar__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.51"
                height="20.443"
                viewBox="0 0 512 512"
              >
                <path
                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M338.29 338.29L448 448"
                />
              </svg>
            </span>
            <span class="offcanvas__stikcy--toolbar__label">Search</span>
          </a>
        </li>
        <li class="offcanvas__stikcy--toolbar__list">
          <a
            class="offcanvas__stikcy--toolbar__btn minicart__open--btn"
            href="javascript:void(0)"
            @click="showMiniCartFunc"
            data-offcanvas
          >
            <span class="offcanvas__stikcy--toolbar__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.51"
                height="15.443"
                viewBox="0 0 18.51 15.443"
              >
                <path
                  d="M79.963,138.379l-13.358,0-.56-1.927a.871.871,0,0,0-.6-.592l-1.961-.529a.91.91,0,0,0-.226-.03.864.864,0,0,0-.226,1.7l1.491.4,3.026,10.919a1.277,1.277,0,1,0,1.844,1.144.358.358,0,0,0,0-.049h6.163c0,.017,0,.034,0,.049a1.277,1.277,0,1,0,1.434-1.267c-1.531-.247-7.783-.55-7.783-.55l-.205-.8h7.8a.9.9,0,0,0,.863-.651l1.688-5.943h.62a.936.936,0,1,0,0-1.872Zm-9.934,6.474H68.568c-.04,0-.1.008-.125-.085-.034-.118-.082-.283-.082-.283l-1.146-4.037a.061.061,0,0,1,.011-.057.064.064,0,0,1,.053-.025h1.777a.064.064,0,0,1,.063.051l.969,4.34,0,.013a.058.058,0,0,1,0,.019A.063.063,0,0,1,70.03,144.853Zm3.731-4.41-.789,4.359a.066.066,0,0,1-.063.051h-1.1a.064.064,0,0,1-.063-.051l-.789-4.357a.064.064,0,0,1,.013-.055.07.07,0,0,1,.051-.025H73.7a.06.06,0,0,1,.051.025A.064.064,0,0,1,73.76,140.443Zm3.737,0L76.26,144.8a.068.068,0,0,1-.063.049H74.684a.063.063,0,0,1-.051-.025.064.064,0,0,1-.013-.055l.973-4.357a.066.066,0,0,1,.063-.051h1.777a.071.071,0,0,1,.053.025A.076.076,0,0,1,77.5,140.448Z"
                  transform="translate(-62.393 -135.3)"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span class="offcanvas__stikcy--toolbar__label">Cart</span>
            <span class="items__count">{{ cartItems.length }}</span>
          </a>
        </li>
        <li class="offcanvas__stikcy--toolbar__list">
          <router-link
            tag="a"
            class="offcanvas__stikcy--toolbar__btn"
            class-active="active"
            to="/wishlist"
          >
            <span class="offcanvas__stikcy--toolbar__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.541"
                height="15.557"
                viewBox="0 0 18.541 15.557"
              >
                <path
                  d="M71.775,135.51a5.153,5.153,0,0,1,1.267-1.524,4.986,4.986,0,0,1,6.584.358,4.728,4.728,0,0,1,1.174,4.914,10.458,10.458,0,0,1-2.132,3.808,22.591,22.591,0,0,1-5.4,4.558c-.445.282-.9.549-1.356.812a.306.306,0,0,1-.254.013,25.491,25.491,0,0,1-6.279-4.8,11.648,11.648,0,0,1-2.52-4.009,4.957,4.957,0,0,1,.028-3.787,4.629,4.629,0,0,1,3.744-2.863,4.782,4.782,0,0,1,5.086,2.447c.013.019.025.034.057.076Z"
                  transform="translate(-62.498 -132.915)"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span class="offcanvas__stikcy--toolbar__label">Wishlist</span>
            <span class="items__count">{{ wishlistItems.length }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- End Offcanvas stikcy toolbar -->

    <!-- Start offCanvas minicart -->
    <MiniCart :active="showMinicart" :closeMinicart="closeMinicart" />
    <!-- End offCanvas minicart -->

    <!-- Start serch box area -->
    <ModalSearch
      :active="showSearchModal"
      :closeModalSearch="closeModalSearch"
    />
    <!-- End serch box area -->
  </header>
</template>
  
  <script>
import MiniCart from "@/components/MiniCart.vue";
import ModalSearch from "@/components/Search.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  components: {
    MiniCart,
    ModalSearch,
  },
  computed: {
    ...mapGetters(["systemModal", "cartItems", "isLoggedIn", "wishlistItems"]),
  },
  data() {
    return {
      showMinicart: false,
      showSearchModal: false,
    };
  },
  methods: {
    ...mapActions('notification', ["showOrHiddenModal"]),
    ...mapActions(["logout"]),
    showMiniCartFunc: function () {
      this.showMinicart = true;
      // this.$emit("showModal", this.showMinicart);
      this.showOrHiddenModal();
    },
    closeMinicart: function () {
      this.showMinicart = false;
      // this.$emit("showModal", this.showMinicart);
      this.showOrHiddenModal();
    },
    showModalSearchFunc: function () {
      this.showSearchModal = true;
      // this.$emit("showModal", this.showSearchModal);
      this.showOrHiddenModal();
    },
    closeModalSearch: function () {
      this.showSearchModal = false;
      // this.$emit("showModal", this.showSearchModal);
      this.showOrHiddenModal();
    },
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
</style>
  