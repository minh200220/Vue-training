<template>
  <div>
    <h1>Welcome {{ $route.params.name }}</h1>
    <router-link to="/users/minh">
      Go to User Home
    </router-link>
    <router-link to="/users/minh/posts">
      Go to User Posts
    </router-link>
    <router-link to="/users/minh/profile">
      Go to User Profile
    </router-link>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {};
</script>
