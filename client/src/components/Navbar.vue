<template>
<div class="container">
  <nav class="navbar has-background-success-dark mx-3 mt-5" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start is-align-items-center mx-6">
        <h1 class="title has-text-white	 ">BLOG</h1>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/create" class="button is-success mx-3 is-align-content-flex-start">
              <strong>Create</strong>
            </router-link>
            
          </div>
        </div>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
