import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
const MainLayout = loadable(() => import('./layouts/MainLayout'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));

const Join = loadable(() => import('./member/pages/join'));
const Login = loadable(() => import('./member/pages/login'));
const Main = loadable(() => import('./main/pages/Main'));

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Main />} />   

                <Route path="member">
                    <Route path="join" element={<Join />} />
                    <Route path="login" element={<Login />} />
                </Route>
                
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;