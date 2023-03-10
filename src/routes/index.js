import HomePage from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import HeaderOnlyLayout from '~/components/Layouts/HeaderOnlyLayout ';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: null },
    // { path: '/upload', component: Upload, layout: HeaderOnlyLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
