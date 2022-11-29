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
          class="
            shop__header
            bg__gray--color
            d-flex
            align-items-center
            justify-content-between
            mb-30
          "
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
              class="
                product__view--mode__list product__short--by
                align-items-center
                d-lg-flex d-none
              "
            >
              <label class="product__view--label">Prev Page :</label>
              <div class="select shop__header--select">
                <select v-model="selectPerPage" class="product__view--select">
                  <option v-for="option in options" :value="option.value">
                    {{ option.text }}
                  </option>
                </select>
              </div>
            </div>
            <div
              class="
                product__view--mode__list product__short--by
                align-items-center
                d-none d-lg-flex
              "
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
                class="
                  product__tab--one product__grid--column__buttons
                  d-flex
                  justify-content-center
                "
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
              class="
                product__view--mode__list product__view--search
                d-xl-block d-none
              "
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
                <GridView v-show="showGridProducts" :products="products" />
                <ListView v-show="showListProducts" :products="products" />
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End shop section -->

    <section class="banner__section section--padding pt-0">
      <div class="container">
        <div
          class="
            row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1
            mb--n30
          "
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

    <section class="testimonial__section testimonial__bg section--padding">
      <div class="container-fluid p-0">
        <div class="section__heading text-center mb-40">
          <span class="section__heading--subtitle"
            >Recently added our store</span
          >
          <h2 class="section__heading--maintitle">Our Testimonial</h2>
        </div>

        <div
          class="
            testimonial__section--inner testimonial__swiper--activation
            swiper
          "
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial__items d-flex align-items-center">
                <div class="testimonial__items--thumbnail">
                  <img
                    class="testimonial__items--thumbnail__img"
                    src="assets/img/other/testimonial-thumb1.png"
                    alt="testimonial-img"
                  />
                </div>
                <div class="testimonial__items--content">
                  <h3 class="testimonial__items--title">JACKLY SMITH</h3>
                  <span class="testimonial__items--subtitle"
                    >Senior Maneger</span
                  >
                  <p class="testimonial__items--desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt dolor sit amet, consectetur
                  </p>
                  <div class="ratting testimonial__ratting">
                    <ul class="d-flex testimonial__ratting--inner">
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="testimonial__chat--icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52.472"
                      height="45.687"
                      viewBox="0 0 52.472 45.687"
                    >
                      <path
                        data-name="Chat icon"
                        d="M105.2,149.979a16.71,16.71,0,0,0,3.8-15.4,18.87,18.87,0,0,0-8.881-11.694,25.79,25.79,0,0,0-17.343-3.676,23.55,23.55,0,0,0-15.238,7.706,16.673,16.673,0,0,0-4.108,15.7,40.137,40.137,0,0,1,1.547,7.124,15.559,15.559,0,0,1-1.727,8.677c-.228.414-.486.81-.744,1.229.1.036.15.066.192.06a26.1,26.1,0,0,0,11.034-3.862.865.865,0,0,1,.983-.132A26.582,26.582,0,0,0,91,157.853a23.243,23.243,0,0,0,14.194-7.874Zm9.5,13.924a8.286,8.286,0,0,1-.911-1.3,11.272,11.272,0,0,1-.354-9.049,12.317,12.317,0,0,0-.486-9.4c-.4-.846-.935-1.625-1.493-2.591-.108.408-.162.582-.2.762a18.517,18.517,0,0,1-2.968,7.076c-4.234,6.141-10.236,9.427-17.468,10.65-1.283.216-2.591.288-3.916.432a.579.579,0,0,0,.126.168c.33.216.648.438,1,.624a19.172,19.172,0,0,0,17.037.846,1.037,1.037,0,0,1,.8,0,18.573,18.573,0,0,0,6.033,2.291,11.879,11.879,0,0,0,2.519.246C115.079,164.647,115.115,164.419,114.7,163.9Z"
                        transform="translate(-62.5 -118.975)"
                        fill="currentColor"
                        opacity="0.11"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="testimonial__items d-flex align-items-center">
                <div class="testimonial__items--thumbnail">
                  <img
                    class="testimonial__items--thumbnail__img"
                    src="assets/img/other/testimonial-thumb2.png"
                    alt="testimonial-img"
                  />
                </div>
                <div class="testimonial__items--content">
                  <h3 class="testimonial__items--title">Laura Johnson</h3>
                  <span class="testimonial__items--subtitle"
                    >Products Manager</span
                  >
                  <p class="testimonial__items--desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt dolor sit amet, consectetur
                  </p>
                  <div class="ratting testimonial__ratting">
                    <ul class="d-flex testimonial__ratting--inner">
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="testimonial__chat--icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52.472"
                      height="45.687"
                      viewBox="0 0 52.472 45.687"
                    >
                      <path
                        data-name="Chat icon"
                        d="M105.2,149.979a16.71,16.71,0,0,0,3.8-15.4,18.87,18.87,0,0,0-8.881-11.694,25.79,25.79,0,0,0-17.343-3.676,23.55,23.55,0,0,0-15.238,7.706,16.673,16.673,0,0,0-4.108,15.7,40.137,40.137,0,0,1,1.547,7.124,15.559,15.559,0,0,1-1.727,8.677c-.228.414-.486.81-.744,1.229.1.036.15.066.192.06a26.1,26.1,0,0,0,11.034-3.862.865.865,0,0,1,.983-.132A26.582,26.582,0,0,0,91,157.853a23.243,23.243,0,0,0,14.194-7.874Zm9.5,13.924a8.286,8.286,0,0,1-.911-1.3,11.272,11.272,0,0,1-.354-9.049,12.317,12.317,0,0,0-.486-9.4c-.4-.846-.935-1.625-1.493-2.591-.108.408-.162.582-.2.762a18.517,18.517,0,0,1-2.968,7.076c-4.234,6.141-10.236,9.427-17.468,10.65-1.283.216-2.591.288-3.916.432a.579.579,0,0,0,.126.168c.33.216.648.438,1,.624a19.172,19.172,0,0,0,17.037.846,1.037,1.037,0,0,1,.8,0,18.573,18.573,0,0,0,6.033,2.291,11.879,11.879,0,0,0,2.519.246C115.079,164.647,115.115,164.419,114.7,163.9Z"
                        transform="translate(-62.5 -118.975)"
                        fill="currentColor"
                        opacity="0.11"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="testimonial__items d-flex align-items-center">
                <div class="testimonial__items--thumbnail">
                  <img
                    class="testimonial__items--thumbnail__img"
                    src="assets/img/other/testimonial-thumb3.png"
                    alt="testimonial-img"
                  />
                </div>
                <div class="testimonial__items--content">
                  <h3 class="testimonial__items--title">Richard Smith</h3>
                  <span class="testimonial__items--subtitle"
                    >CEO - Founder</span
                  >
                  <p class="testimonial__items--desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt dolor sit amet, consectetur
                  </p>
                  <div class="ratting testimonial__ratting">
                    <ul class="d-flex testimonial__ratting--inner">
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="testimonial__chat--icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52.472"
                      height="45.687"
                      viewBox="0 0 52.472 45.687"
                    >
                      <path
                        data-name="Chat icon"
                        d="M105.2,149.979a16.71,16.71,0,0,0,3.8-15.4,18.87,18.87,0,0,0-8.881-11.694,25.79,25.79,0,0,0-17.343-3.676,23.55,23.55,0,0,0-15.238,7.706,16.673,16.673,0,0,0-4.108,15.7,40.137,40.137,0,0,1,1.547,7.124,15.559,15.559,0,0,1-1.727,8.677c-.228.414-.486.81-.744,1.229.1.036.15.066.192.06a26.1,26.1,0,0,0,11.034-3.862.865.865,0,0,1,.983-.132A26.582,26.582,0,0,0,91,157.853a23.243,23.243,0,0,0,14.194-7.874Zm9.5,13.924a8.286,8.286,0,0,1-.911-1.3,11.272,11.272,0,0,1-.354-9.049,12.317,12.317,0,0,0-.486-9.4c-.4-.846-.935-1.625-1.493-2.591-.108.408-.162.582-.2.762a18.517,18.517,0,0,1-2.968,7.076c-4.234,6.141-10.236,9.427-17.468,10.65-1.283.216-2.591.288-3.916.432a.579.579,0,0,0,.126.168c.33.216.648.438,1,.624a19.172,19.172,0,0,0,17.037.846,1.037,1.037,0,0,1,.8,0,18.573,18.573,0,0,0,6.033,2.291,11.879,11.879,0,0,0,2.519.246C115.079,164.647,115.115,164.419,114.7,163.9Z"
                        transform="translate(-62.5 -118.975)"
                        fill="currentColor"
                        opacity="0.11"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="testimonial__items d-flex align-items-center">
                <div class="testimonial__items--thumbnail">
                  <img
                    class="testimonial__items--thumbnail__img"
                    src="assets/img/other/testimonial-thumb1.png"
                    alt="testimonial-img"
                  />
                </div>
                <div class="testimonial__items--content">
                  <h3 class="testimonial__items--title">JACKLY SMITH</h3>
                  <span class="testimonial__items--subtitle"
                    >Senior Maneger</span
                  >
                  <p class="testimonial__items--desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt dolor sit amet, consectetur
                  </p>
                  <div class="ratting testimonial__ratting">
                    <ul class="d-flex testimonial__ratting--inner">
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="testimonial__chat--icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52.472"
                      height="45.687"
                      viewBox="0 0 52.472 45.687"
                    >
                      <path
                        data-name="Chat icon"
                        d="M105.2,149.979a16.71,16.71,0,0,0,3.8-15.4,18.87,18.87,0,0,0-8.881-11.694,25.79,25.79,0,0,0-17.343-3.676,23.55,23.55,0,0,0-15.238,7.706,16.673,16.673,0,0,0-4.108,15.7,40.137,40.137,0,0,1,1.547,7.124,15.559,15.559,0,0,1-1.727,8.677c-.228.414-.486.81-.744,1.229.1.036.15.066.192.06a26.1,26.1,0,0,0,11.034-3.862.865.865,0,0,1,.983-.132A26.582,26.582,0,0,0,91,157.853a23.243,23.243,0,0,0,14.194-7.874Zm9.5,13.924a8.286,8.286,0,0,1-.911-1.3,11.272,11.272,0,0,1-.354-9.049,12.317,12.317,0,0,0-.486-9.4c-.4-.846-.935-1.625-1.493-2.591-.108.408-.162.582-.2.762a18.517,18.517,0,0,1-2.968,7.076c-4.234,6.141-10.236,9.427-17.468,10.65-1.283.216-2.591.288-3.916.432a.579.579,0,0,0,.126.168c.33.216.648.438,1,.624a19.172,19.172,0,0,0,17.037.846,1.037,1.037,0,0,1,.8,0,18.573,18.573,0,0,0,6.033,2.291,11.879,11.879,0,0,0,2.519.246C115.079,164.647,115.115,164.419,114.7,163.9Z"
                        transform="translate(-62.5 -118.975)"
                        fill="currentColor"
                        opacity="0.11"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="testimonial__items d-flex align-items-center">
                <div class="testimonial__items--thumbnail">
                  <img
                    class="testimonial__items--thumbnail__img"
                    src="assets/img/other/testimonial-thumb2.png"
                    alt="testimonial-img"
                  />
                </div>
                <div class="testimonial__items--content">
                  <h3 class="testimonial__items--title">Laura Johnson</h3>
                  <span class="testimonial__items--subtitle"
                    >Products Manager</span
                  >
                  <p class="testimonial__items--desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt dolor sit amet, consectetur
                  </p>
                  <div class="ratting testimonial__ratting">
                    <ul class="d-flex testimonial__ratting--inner">
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                      <li class="testimonial__ratting--list">
                        <span class="testimonial__ratting--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.54"
                            height="15.555"
                            viewBox="0 0 20.54 19.555"
                          >
                            <path
                              d="M9.947,24.316c.168-.388.446-.388.616,0L13,29.9a1.447,1.447,0,0,0,1.076.783l6.067.589c.423.039.507.3.191.585L15.77,35.9a1.456,1.456,0,0,0-.411,1.267l1.315,5.95c.092.415-.134.577-.5.364L10.92,40.4a1.45,1.45,0,0,0-1.331,0L4.335,43.485c-.368.214-.589.051-.5-.364l1.315-5.95A1.462,1.462,0,0,0,4.74,35.9L.176,31.862c-.316-.281-.232-.546.191-.585l6.069-.589A1.454,1.454,0,0,0,7.513,29.9l2.434-5.589Z"
                              transform="translate(0.015 -24.025)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="testimonial__chat--icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52.472"
                      height="45.687"
                      viewBox="0 0 52.472 45.687"
                    >
                      <path
                        data-name="Chat icon"
                        d="M105.2,149.979a16.71,16.71,0,0,0,3.8-15.4,18.87,18.87,0,0,0-8.881-11.694,25.79,25.79,0,0,0-17.343-3.676,23.55,23.55,0,0,0-15.238,7.706,16.673,16.673,0,0,0-4.108,15.7,40.137,40.137,0,0,1,1.547,7.124,15.559,15.559,0,0,1-1.727,8.677c-.228.414-.486.81-.744,1.229.1.036.15.066.192.06a26.1,26.1,0,0,0,11.034-3.862.865.865,0,0,1,.983-.132A26.582,26.582,0,0,0,91,157.853a23.243,23.243,0,0,0,14.194-7.874Zm9.5,13.924a8.286,8.286,0,0,1-.911-1.3,11.272,11.272,0,0,1-.354-9.049,12.317,12.317,0,0,0-.486-9.4c-.4-.846-.935-1.625-1.493-2.591-.108.408-.162.582-.2.762a18.517,18.517,0,0,1-2.968,7.076c-4.234,6.141-10.236,9.427-17.468,10.65-1.283.216-2.591.288-3.916.432a.579.579,0,0,0,.126.168c.33.216.648.438,1,.624a19.172,19.172,0,0,0,17.037.846,1.037,1.037,0,0,1,.8,0,18.573,18.573,0,0,0,6.033,2.291,11.879,11.879,0,0,0,2.519.246C115.079,164.647,115.115,164.419,114.7,163.9Z"
                        transform="translate(-62.5 -118.975)"
                        fill="currentColor"
                        opacity="0.11"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper__nav--btn swiper-button-next"></div>
          <div class="swiper__nav--btn swiper-button-prev"></div>
        </div>
      </div>
    </section>

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

export default {
  name: "Home",
  data() {
    return {
      products: [],
      showGridProducts: true,
      showListProducts: false,
      perPage: 0,
      selectPerPage: "20",
      options: [
        { text: "20", value: "20" },
        { text: "25", value: "25" },
        { text: "30", value: "30" },
        { text: "35", value: "35" },
        { text: "40", value: "40" },
      ],
    };
  },
  components: {
    GridView,
    ListView,
    Pagination,
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
  },
  async created() {
    this.products = [
      {
        id: 1,
        status: "sale",
        day: "March 1st at 2:30pm",
        imageUrl: "assets/img/drive/1.jpg",
        title: "Turkey Spice",
        description: `Lorem,ipsum dolor sit amet consectetur adipisicing elit. 
        Quia voluptas dolore doloribus architecto sequi corporis deleniti 
        officia culpa dolor esse consectetur eligendi, natus at rem 
        b quae amet molestiae quod voluptates, illo exercitationem
                                                    numquam ipsa. Est fuga ex ipsum alias ipsa quibusdam magni
                                                    harum labore voluptate.`,
        ratings: 3.6,
        oldPrice: "250,000",
        currentPrice: "350,000",
        dateCreated: "March 1st at 2:30pm",
      },
      {
        id: 2,
        status: "sale",
        day: "March 1st at 2:30pm",
        imageUrl: "assets/img/drive/2.jpg",
        title: "Turkey Spice",
        description: `Lorem,ipsum dolor sit amet consectetur adipisicing elit. 
        Quia voluptas dolore doloribus architecto sequi corporis deleniti 
        officia culpa dolor esse consectetur eligendi, natus at rem 
        b quae amet molestiae quod voluptates, illo exercitationem
                                                    numquam ipsa. Est fuga ex ipsum alias ipsa quibusdam magni
                                                    harum labore voluptate.`,
        ratings: 3.6,
        oldPrice: "250,000",
        currentPrice: "350,000",
        dateCreated: "March 1st at 2:30pm",
      },
      {
        id: 3,
        status: "sale",
        day: "March 1st at 2:30pm",
        imageUrl: "assets/img/drive/3.jpg",
        title: "Turkey Spice",
        description: `Lorem,ipsum dolor sit amet consectetur adipisicing elit. 
        Quia voluptas dolore doloribus architecto sequi corporis deleniti 
        officia culpa dolor esse consectetur eligendi, natus at rem 
        b quae amet molestiae quod voluptates, illo exercitationem
                                                    numquam ipsa. Est fuga ex ipsum alias ipsa quibusdam magni
                                                    harum labore voluptate.`,
        ratings: 3.6,
        oldPrice: "250,000",
        currentPrice: "350,000",
        dateCreated: "March 1st at 2:30pm",
      },
      {
        id: 4,
        status: "sale",
        day: "March 1st at 2:30pm",
        imageUrl: "assets/img/drive/4.jpg",
        title: "Turkey Spice",
        description: `Lorem,ipsum dolor sit amet consectetur adipisicing elit. 
        Quia voluptas dolore doloribus architecto sequi corporis deleniti 
        officia culpa dolor esse consectetur eligendi, natus at rem 
        b quae amet molestiae quod voluptates, illo exercitationem
                                                    numquam ipsa. Est fuga ex ipsum alias ipsa quibusdam magni
                                                    harum labore voluptate.`,
        ratings: 3.6,
        oldPrice: "250,000",
        currentPrice: "350,000",
        dateCreated: "March 1st at 2:30pm",
      },
      {
        id: 5,
        status: "sale",
        day: "March 1st at 2:30pm",
        imageUrl: "assets/img/drive/5.jpg",
        title: "Turkey Spice",
        description: `Lorem,ipsum dolor sit amet consectetur adipisicing elit. 
        Quia voluptas dolore doloribus architecto sequi corporis deleniti 
        officia culpa dolor esse consectetur eligendi, natus at rem 
        b quae amet molestiae quod voluptates, illo exercitationem
                                                    numquam ipsa. Est fuga ex ipsum alias ipsa quibusdam magni
                                                    harum labore voluptate.`,
        ratings: 3.6,
        oldPrice: "250,000",
        currentPrice: "350,000",
        dateCreated: "March 1st at 2:30pm",
      },
      {
        id: 6,
        status: "sale",
        day: "March 1st at 2:30pm",
        imageUrl: "assets/img/drive/6.jpg",
        title: "Turkey Spice",
        description: `Lorem,ipsum dolor sit amet consectetur adipisicing elit. 
        Quia voluptas dolore doloribus architecto sequi corporis deleniti 
        officia culpa dolor esse consectetur eligendi, natus at rem 
        b quae amet molestiae quod voluptates, illo exercitationem
                                                    numquam ipsa. Est fuga ex ipsum alias ipsa quibusdam magni
                                                    harum labore voluptate.`,
        ratings: 3.6,
        oldPrice: "250,000",
        currentPrice: "350,000",
        dateCreated: "March 1st at 2:30pm",
      },
      {
        id: 7,
        status: "sale",
        day: "March 1st at 2:30pm",
        imageUrl: "assets/img/drive/7.jpg",
        title: "Turkey Spice",
        description: `Lorem,ipsum dolor sit amet consectetur adipisicing elit. 
        Quia voluptas dolore doloribus architecto sequi corporis deleniti 
        officia culpa dolor esse consectetur eligendi, natus at rem 
        b quae amet molestiae quod voluptates, illo exercitationem
                                                    numquam ipsa. Est fuga ex ipsum alias ipsa quibusdam magni
                                                    harum labore voluptate.`,
        ratings: 3.6,
        oldPrice: "250,000",
        currentPrice: "350,000",
        dateCreated: "March 1st at 2:30pm",
      },
      {
        id: 8,
        status: "sale",
        day: "March 1st at 2:30pm",
        imageUrl: "assets/img/drive/8.jpg",
        title: "Turkey Spice",
        description: `Lorem,ipsum dolor sit amet consectetur adipisicing elit. 
        Quia voluptas dolore doloribus architecto sequi corporis deleniti 
        officia culpa dolor esse consectetur eligendi, natus at rem 
        b quae amet molestiae quod voluptates, illo exercitationem
                                                    numquam ipsa. Est fuga ex ipsum alias ipsa quibusdam magni
                                                    harum labore voluptate.`,
        ratings: 3.6,
        oldPrice: "250,000",
        currentPrice: "350,000",
        dateCreated: "March 1st at 2:30pm",
      },
      {
        id: 9,
        status: "sale",
        day: "March 1st at 2:30pm",
        imageUrl: "assets/img/drive/9.jpg",
        title: "Turkey Spice",
        description: `Lorem,ipsum dolor sit amet consectetur adipisicing elit. 
        Quia voluptas dolore doloribus architecto sequi corporis deleniti 
        officia culpa dolor esse consectetur eligendi, natus at rem 
        b quae amet molestiae quod voluptates, illo exercitationem
                                                    numquam ipsa. Est fuga ex ipsum alias ipsa quibusdam magni
                                                    harum labore voluptate.`,
        ratings: 3.6,
        oldPrice: "250,000",
        currentPrice: "350,000",
        dateCreated: "March 1st at 2:30pm",
      },
    ];
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  