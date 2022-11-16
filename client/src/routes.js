import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Login from "./pages/Login";
import News from "./pages/News";
import Stats from "./pages/Stats";
import Widgets from "./pages/Widgets";
import Contact from "./pages/Contact"
import { ABOUT_ROUTE, ACHIEVEMENTS_ROUTE, LOGIN_ROUTE, NEWS_ROUTE, STATS_ROUTE, WIDGETS_ROUTE, CONTACT_ROUTE } from "./utils/consts";


export const authRoutes = [
    {
        path: STATS_ROUTE,
        Element: <Stats />
    },
    {
        path: ACHIEVEMENTS_ROUTE,
        Element: <Achievements />
    },
]
export const publicRoutes = [
    {
        path: NEWS_ROUTE,
        Element: <News />
    },
    {
        path: ABOUT_ROUTE,
        Element: <About />
    },
    {
        path: WIDGETS_ROUTE,
        Element: <Widgets />
    },
    {
        path: LOGIN_ROUTE,
        Element: <Login />
    },
    {
        path: CONTACT_ROUTE,
        Element: <Contact />
    }
]
