<template>
  <div class="" id="resources">

    <section class="jumbotron text-center">
        <div class="container">
            <h1 class="jumbotron-heading">
                {{ $t("menu.resources") }}
            </h1>
            <p class="lead text-muted"></p>
        </div>
    </section>
    <div class="">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-0 shadow">
                        <img src="@/assets/img/slideshare-brands.svg" width="400px" height="200px" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                        <h5 class="card-title mb-0">{{ $t("menu.presentations") }}</h5>
                        <div class="card-text text-black-50">
                            <a class="nav-link" href="https://sogloarcadius.github.io/presentations/" target="_blank"><i class="fas fa-link"></i></a>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-0 shadow">
                        <img src="@/assets/img/blog-solid.svg" width="400px" height="200px" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title mb-0">{{ $t("menu.blog") }}</h5>
                            <div class="card-text text-black-50">
                                <a class="nav-link" href="https://sogloarcadius.github.io/blog/" target="_blank"><i class="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-0 shadow">
                        <img src="@/assets/img/osi-brands.svg" width="400px" height="200px" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title mb-0">swagger</h5>
                            <div class="card-text text-black-50">
                                <a class="nav-link" href="https://api.sogloarcadius.com" target="_blank"><i class="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-0 shadow">
                        <img src="@/assets/img/android-brands.svg" width="400px" height="200px" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title mb-0">feelshare</h5>
                            <div class="card-text text-black-50">
                                <a class="nav-link" href="https://play.google.com/store/apps/details?id=io.sogloarcadius.feelshare" target="_blank"><i class="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  
</template>

<script>
export default {
}
</script>

<style>
</style>