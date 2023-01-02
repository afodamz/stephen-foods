<template>
  <div class="pagination__area bg__gray--color">
    <nav class="pagination justify-content-center">
      <ul
        class="
          pagination__wrapper
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <li class="pagination__list">
          <a href="shop.html" class="pagination__item--arrow link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.51"
              height="20.443"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M244 400L100 256l144-144M120 256h292"
              />
            </svg>
            <span class="visually-hidden">page left arrow</span>
          </a>
        </li>

        <li></li>
        <li class="pagination__list" @click="$emit('changePage', pageNumber)" :key="pageNumber" v-for="pageNumber in pages">
          <a class="pagination__item " :class="{'pagination__item--current': page===pageNumber, 'link': page!==pageNumber}">{{pageNumber}}</a>
        </li>
        <li class="pagination__list">
          <a href="shop.html" class="pagination__item--arrow link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.51"
              height="20.443"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M268 112l144 144-144 144M392 256H100"
              />
            </svg>
            <span class="visually-hidden">page right arrow</span>
          </a>
        </li>

        <li></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pageItemsCount: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
      default: 10,
    },
    page: {
      type: Number,
      required: true,
      default: 1,
    },
    changePage: {
      type: Function,
      required: false,
    },
  },
  data() {
    return {
      pages: Math.ceil(this.pageItemsCount / this.perPage),
      // page: this.page
    };
  },
  methods: {
   
  },
  async created() {
    console.log("pageitems", this.pageItemsCount)
  }
};
</script>

