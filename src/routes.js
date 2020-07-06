import FollowPeople from './components/FollowPeople.vue';
import Welcome from './components/Welcome.vue';
import Feed from './components/Feed.vue';
import Profile from './components/Profile.vue';

export default [
    {path: '/', component: Welcome},
    {path: '/followPeople', component: FollowPeople},
    {path: '/feed', component: Feed},
    {path: '/profile', component: Profile},
]