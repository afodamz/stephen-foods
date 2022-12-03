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
        <li class="pagination__list" v-if="page != 1" @click="page--">
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
        <li
          @click="page = pageNumber"
          class="pagination__list"
          v-for="pageNumber in pages.slice(page - 1, page + 5)"
        >
          <span class="pagination__item pagination__item--current">{{
            pageNumber
          }}</span>
        </li>
        <li @click="page++" v-if="page < pages.length" class="pagination__list">
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
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    pageItems: {
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
    pages: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data() {
    return {
      perPage: 4,
      page: 1,
    };
  },
  methods: {
    getPosts() {
      let data = [];
      for (let i = 0; i < 200; i++) {
        this.posts.push({ first: "John", last: "Doe", suffix: "#" + i });
      }
    },
    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    },
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.posts);
    },
  },
  watch: {
    posts() {
      this.setPages();
    },
  },
  created() {
    this.getPosts();
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
};
</script>
