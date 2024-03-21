<template>
  <div class="position-relative d-flex">
    <div class="container d-flex flex-column" style="min-height: 100vh">
      <nav class="navbar navbar-expand-lg navbar-light px-0">
        <a class="navbar-brand" href="./">回首頁</a>
      </nav>
      <div class="row my-auto pb-7">
        <div class="col-md-4 d-flex flex-column">
          <div class="my-auto">
            <h2>結帳成功！</h2>
            <p>期待您下次光臨</p>
            <router-link to="/" class="btn btn-dark mt-4 px-5"
              >回首頁</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-md-50 w-100 position-absolute opacity-1"
      style="
        z-index: -1;
        min-height: 100vh;
        right: 0;
        background-image: url(https://plus.unsplash.com/premium_photo-1663040444770-37b9a5a68384?w=1950&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFscyUyMGZyaWVuZGx5fGVufDB8fDB8fHww);
        background-position: center center;
        background-repeat: no-repeat;
      "
    ></div>
  </div>
</template>

<script></script>

<style>
body {
  padding-top: 0;
}
</style>
