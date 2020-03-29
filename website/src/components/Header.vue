<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand" href="#">
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="@/assets/img/profile.jpeg" alt />
        </span>
      </a>
      <div class="collapse navbar-collapse" id="">
        <ul class="navbar-nav">
          <li class="nav-item">
              <router-link class="nav-link"  :to="{ name: 'home' }"><a>About</a></router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link"  :to="{ name: 'projects' }"><a>Portfolio</a></router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>