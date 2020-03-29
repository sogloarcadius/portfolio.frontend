<template>
  <div id="app">

    <Header />

    <main id="content">
      <div class="page-content">
          <router-view name="panel"></router-view>
      </div>
    </main>

	  <Footer />

  </div>
</template>

<style></style>

<script>
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';

  export default {
	name: 'app',
	components: {
		Header, 
		Footer
  }
  }
</script>

