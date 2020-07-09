import FollowPeople from './components/FollowPeople.vue';
import Welcome from './components/Welcome.vue';
import Feed from './components/Feed.vue';
import Profile from './components/Profile.vue';
import Signup from './components/auth/signup.vue';
import Login from './components/auth/login.vue';
import Logout from './components/auth/logout.vue';

export default [
    {path: '/', component: Welcome},
    {path: '/signup', component: Signup},
    {path: '/login', component: Login},
    {path: '/logout', component: Logout},
    {path: '/followPeople', component: FollowPeople},
    {path: '/feed', component: Feed},
    {path: '/profile', component: Profile},
]