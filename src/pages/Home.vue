<template>
  <div>
    <!-- Start breadcrumb section -->
    <section class="breadcrumb__section breadcrumb__bg">
      <div class="container">
        <div class="row row-cols-1">
          <div class="col">
            <div class="breadcrumb__content text-center">
              <h1 class="breadcrumb__content--title text-white mb-25">
                Stefeni feeds
              </h1>
              <ul
                class="breadcrumb__content--menu d-flex justify-content-center"
              ></ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End breadcrumb section -->

    <!-- Start shop section -->
    <section class="shop__section section--padding">
      <div class="container-fluid">
        <div
          class="shop__header bg__gray--color d-flex align-items-center justify-content-between mb-30"
        >
          <button
            class="widget__filter--btn d-flex d-lg-none align-items-center"
            data-offcanvas
          >
            <svg
              class="widget__filter--btn__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="28"
                d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"
              />
              <circle
                cx="336"
                cy="128"
                r="28"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="28"
              />
              <circle
                cx="176"
                cy="256"
                r="28"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="28"
              />
              <circle
                cx="336"
                cy="384"
                r="28"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="28"
              />
            </svg>
            <span class="widget__filter--btn__text">Filter</span>
          </button>
          <div class="product__view--mode d-flex align-items-center">
            <div
              class="product__view--mode__list product__short--by align-items-center d-lg-flex d-none"
            >
              <label class="product__view--label">Prev Page :</label>
              <div class="select shop__header--select">
                <select v-model="selectPerPage" class="product__view--select">
                  <option
                    v-for="option in options"
                    v-bind:key="option.value"
                    :value="option.value"
                  >
                    {{ option.text }}
                  </option>
                </select>
              </div>
            </div>
            <div
              class="product__view--mode__list product__short--by align-items-center d-none d-lg-flex"
            >
              <label class="product__view--label">Sort By :</label>
              <div class="select shop__header--select">
                <select class="product__view--select">
                  <option selected value="1">Sort by latest</option>
                  <option value="2">Sort by popularity</option>
                  <option value="3">Sort by newness</option>
                  <option value="4">Sort by rating</option>
                </select>
              </div>
            </div>
            <div class="product__view--mode__list">
              <div
                class="product__tab--one product__grid--column__buttons d-flex justify-content-center"
              >
                <button
                  class="product__grid--column__buttons--icons"
                  :class="{ active: showGridProducts }"
                  aria-label="grid btn"
                  data-toggle="tab"
                  data-target="#product_grid"
                  @click="showGrid"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 9 9"
                  >
                    <g transform="translate(-1360 -479)">
                      <rect
                        id="Rectangle_5725"
                        data-name="Rectangle 5725"
                        width="4"
                        height="4"
                        transform="translate(1360 479)"
                        fill="currentColor"
                      />
                      <rect
                        id="Rectangle_5727"
                        data-name="Rectangle 5727"
                        width="4"
                        height="4"
                        transform="translate(1360 484)"
                        fill="currentColor"
                      />
                      <rect
                        id="Rectangle_5726"
                        data-name="Rectangle 5726"
                        width="4"
                        height="4"
                        transform="translate(1365 479)"
                        fill="currentColor"
                      />
                      <rect
                        id="Rectangle_5728"
                        data-name="Rectangle 5728"
                        width="4"
                        height="4"
                        transform="translate(1365 484)"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </button>
                <button
                  class="product__grid--column__buttons--icons"
                  :class="{ active: showListProducts }"
                  aria-label="list btn"
                  data-toggle="tab"
                  data-target="#product_list"
                  @click="showList"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 13 8"
                  >
                    <g
                      id="Group_14700"
                      data-name="Group 14700"
                      transform="translate(-1376 -478)"
                    >
                      <g transform="translate(12 -2)">
                        <g id="Group_1326" data-name="Group 1326">
                          <rect
                            id="Rectangle_5729"
                            data-name="Rectangle 5729"
                            width="3"
                            height="2"
                            transform="translate(1364 483)"
                            fill="currentColor"
                          />
                          <rect
                            id="Rectangle_5730"
                            data-name="Rectangle 5730"
                            width="9"
                            height="2"
                            transform="translate(1368 483)"
                            fill="currentColor"
                          />
                        </g>
                        <g
                          id="Group_1328"
                          data-name="Group 1328"
                          transform="translate(0 -3)"
                        >
                          <rect
                            id="Rectangle_5729-2"
                            data-name="Rectangle 5729"
                            width="3"
                            height="2"
                            transform="translate(1364 483)"
                            fill="currentColor"
                          />
                          <rect
                            id="Rectangle_5730-2"
                            data-name="Rectangle 5730"
                            width="9"
                            height="2"
                            transform="translate(1368 483)"
                            fill="currentColor"
                          />
                        </g>
                        <g
                          id="Group_1327"
                          data-name="Group 1327"
                          transform="translate(0 -1)"
                        >
                          <rect
                            id="Rectangle_5731"
                            data-name="Rectangle 5731"
                            width="3"
                            height="2"
                            transform="translate(1364 487)"
                            fill="currentColor"
                          />
                          <rect
                            id="Rectangle_5732"
                            data-name="Rectangle 5732"
                            width="9"
                            height="2"
                            transform="translate(1368 487)"
                            fill="currentColor"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div
              class="product__view--mode__list product__view--search d-xl-block d-none"
            >
              <form class="product__view--search__form" action="#">
                <label>
                  <input
                    class="product__view--search__input border-0"
                    placeholder="Search by"
                    type="text"
                  />
                </label>
                <button
                  class="product__view--search__btn"
                  aria-label="search btn"
                  type="submit"
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
                </button>
              </form>
            </div>
          </div>
          <p class="product__showing--count">Showing 1–9 of 21 results</p>
        </div>
        <div class="row">
          <div class="col-xl-12 col-lg-12">
            <div class="shop__product--wrapper">
              <div class="tab_content">
                <div style="text-align: center">
                  <PulseLoader :loading="loading" />
                </div>
                <!-- <GridView v-show="showGridProducts" :products="storeProducts" /> -->
                <GridView v-show="showGridProducts" :products="products" />
                <ListView v-show="showListProducts" :products="products" />
              </div>
              <Pagination
                :pageItemsCount="pageItemsCount"
                :perPage="selectPerPage"
                :page="currentPage"
                @changePage="changePage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End shop section -->

    <section class="banner__section section--padding pt-0">
      <div class="container">
        <div
          class="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 mb--n30"
        >
          <div class="col mb-30">
            <div class="banner__items position__relative">
              <a class="banner__items--thumbnail display-block" href="shop.html"
                ><img
                  class="banner__items--thumbnail__img display-block"
                  src="assets/img/banner/banner1.png"
                  alt="banner-img"
                />
                <div class="banner__items--content">
                  <h2 class="banner__items--content__title text__secondary">
                    Organic Juice
                  </h2>
                  <p class="banner__items--content__desc text-white">
                    Shop our selection of organic fresh vegetables in a
                    discounted price 10% off.
                  </p>
                  <span class="btn banner__items--content__btn">Shop Now</span>
                </div>
              </a>
            </div>
          </div>
          <div class="col mb-30">
            <div class="banner__items position__relative">
              <a class="banner__items--thumbnail display-block" href="shop.html"
                ><img
                  class="banner__items--thumbnail__img display-block"
                  src="assets/img/banner/banner2.png"
                  alt="banner-img"
                />
                <div class="banner__items--content">
                  <h2 class="banner__items--content__title text__secondary">
                    Organic Food
                  </h2>
                  <p class="banner__items--content__desc text-black">
                    Shop our selection of organic fresh vegetables in a
                    discounted price 10% off.
                  </p>
                  <span class="btn banner__items--content__btn">Shop Now</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Testimonial />

    <div class="banner__bideo--section section--padding pt-0">
      <div class="container">
        <div class="row row-cols-1">
          <div class="col">
            <div class="banner__bideo--thumbnail position__relative">
              <!-- <img class="banner__img--max__height" src="assets/img/drive/preppic.jpg" alt=" banner img"> -->
              <div class="banner__img--max__height" alt=" banner img"></div>
              <div class="banner__bideo--play">
                <a
                  class="banner__bideo--play__icon glightbox"
                  href="assets/img/drive/prparation1.mp4"
                  data-gallery="video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="37"
                    viewBox="0 0 31 37"
                  >
                    <path
                      id="Polygon_1"
                      data-name="Polygon 1"
                      d="M16.783,2.878a2,2,0,0,1,3.435,0l14.977,25.1A2,2,0,0,1,33.477,31H3.523a2,2,0,0,1-1.717-3.025Z"
                      transform="translate(31) rotate(90)"
                      fill="currentColor"
                    />
                  </svg>
                  <span class="visually-hidden">video play</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import GridView from "@/components/product-list/GridView.vue";
import ListView from "@/components/product-list/ListView.vue";
import Pagination from "@/components/Pagination.vue";
import Testimonial from "@/components/Testimonials.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["storeProducts"]),
  },
  // computed: mapGetters({
  //   products: "storeProducts"}),
  data() {
    return {
      products: [],
      // products: this.$store.state.products,
      showGridProducts: true,
      showListProducts: false,
      selectPerPage: 20,
      options: [
        { text: "20", value: 20 },
        { text: "25", value: 25 },
        { text: "30", value: 30 },
        { text: "35", value: 35 },
        { text: "40", value: 40 },
      ],
      currentPage: 1,
      indexOfLastItems: 0,
      indexOfFirstItems: 0,
      pageItemsCount: 0,
      allProducts: [],
      loading: true,
    };
  },
  components: {
    GridView,
    ListView,
    Pagination,
    Testimonial,
    PulseLoader,
  },
  methods: {
    showGrid: function () {
      this.showGridProducts = true;
      this.showListProducts = false;
    },
    showList: function () {
      this.showGridProducts = false;
      this.showListProducts = true;
    },
    changePage: function (pageNumber) {
      const convertToNumber = parseInt(pageNumber);
      if (isNaN(convertToNumber) && this.currentPage > 1) {
        const decreaseCurrentPageByOne = this.currentPage - 1;
        this.currentPage = decreaseCurrentPageByOne;
      } else if (isNaN(convertToNumber)) {
      } else {
        this.currentPage = convertToNumber;
      }
      this.indexOfLastItems = this.currentPage * this.selectPerPage;
      this.indexOfFirstItems = this.indexOfLastItems - this.selectPerPage;
      this.products = this.allProducts.slice(
        this.indexOfFirstItems,
        this.indexOfLastItems
      );
    },
    ...mapActions(["getProducts"]),
    async fetchProducts() {
      const getData = await this.getProducts();
      console.log("getData", getData);
      this.allProducts = getData;
      this.pageItemsCount = getData.length;
      this.indexOfLastItems = this.currentPage * this.selectPerPage;
      this.indexOfFirstItems = this.indexOfLastItems - this.selectPerPage;
      this.products = getData.slice(this.indexOfFirstItems, this.indexOfLastItems);
      this.loading = false;
    },
  },
  async created() {
    this.fetchProducts();
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  

