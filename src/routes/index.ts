import IRoute from "../interfaces/IRoute";
import { HomePage, SignIn, Messages, Notifications, Profile, Settings } from "../pages";
import { LayoutWithoutRightBar } from "../components/Layouts/DefaultLayout";

export const publicRoutes: Array<IRoute> = [
    {
        path: "/signin",
        component: SignIn,
        layout: "none"
    }
]
export const privateRoutes: Array<IRoute> = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/notifications",
        component: Notifications,
    },
    {
        path: "/messages",
        component: Messages,
        layout: LayoutWithoutRightBar
    },
    {
        path: "/messages/:id",
        component: Messages,
        layout: LayoutWithoutRightBar
    },
    {
        path: "/profile",
        component: Profile,
    },
    {
        path: "/settings",
        component: Settings,
    }
]