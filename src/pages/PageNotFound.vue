<template>
    <div>
        
        <!-- Start breadcrumb section -->
        <section class="breadcrumb__section breadcrumb__bg">
            <div class="container">
                <div class="row row-cols-1">
                    <div class="col">
                        <div class="breadcrumb__content text-center">
                            <h1 class="breadcrumb__content--title text-white mb-25">Error 404</h1>
                            <ul class="breadcrumb__content--menu d-flex justify-content-center">
                                <li class="breadcrumb__content--menu__items"><a class="text-white" href="index-2.html">Home</a></li>
                                <li class="breadcrumb__content--menu__items"><span class="text-white">Error 404</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End breadcrumb section -->

        <!-- Start error section -->
        <section class="error__section section--padding">
            <div class="container">
                <div class="row row-cols-1">
                    <div class="col">
                        <div class="error__content text-center">
                            <img class="error__content--img display-block mb-50" src="assets/img/other/404-thumb.png" alt="error-img">
                            <h2 class="error__content--title">Opps ! We,ar Not Found This Page </h2>
                            <p class="error__content--desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi aliquid minima assumenda.</p>
                            <router-link tag="a" class="error__content--btn btn" class-active="active" to="/">Back To Home</router-link>

                            <!-- <div class="error__content--btn btn"><router-link to="/">Back To Home</router-link> </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End error section -->

    </div>
</template>

<script>
export default {
    name: "PageNotFound",
    components: {
    }
}
</script>