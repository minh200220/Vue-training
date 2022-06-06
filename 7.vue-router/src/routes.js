import Home from "./components/Home.vue";
import About from "./components/About.vue";
import User from "./components/User.vue";
import UserHome from "./components/UserHome.vue";
import UserProfile from "./components/UserProfile.vue";
import UserPosts from "./components/UserPosts.vue";
import NotFound from "./components/NotFound.vue";

export default [
  { path: "/", component: Home },
  { path: "/about", component: About },
  {
    path: "/users/:name",
    component: User,
    children: [
      { path: "", component: UserHome },
      { path: "profile", component: UserProfile },
      { path: "posts", component: UserPosts }
    ]
  },
  { path: "*", component: NotFound }
];
