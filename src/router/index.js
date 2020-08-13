import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Dashboard - Vue Admin'
    },
    component: Home
  },
  {
    path: '/users',
    name: 'USers',
    meta: {
      title: 'Users - Vue Admin'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Users.vue')
  },
  {
    path: '/analytics',
    name: 'Analytics',
    meta: {
      title: 'Analytics - Vue Admin'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Analytics.vue')
  },
  {
    path: '/notifications',
    name: 'Notifications',
    meta: {
      title: 'Notifications - Vue Admin'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Notifications.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    meta: {
      title: 'Settings - Vue Admin'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue')
  },
  {
    path: '/changelog',
    name: 'Changelog',
    meta: {
      title: 'Changelog - Vue Admin'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Changelog.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
