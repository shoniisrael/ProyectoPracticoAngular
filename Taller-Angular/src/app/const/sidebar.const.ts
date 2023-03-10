import { SidebarRoutesInterface } from "src/app/models/sidebarRoutes.interfaces"

export const SidebarRoutes: SidebarRoutesInterface[] = [
    {
        name: "Inicio",
        route: "/inicio",
        icon: "icon-door",
        userRoles: [1,2,3]
    },
    {
        name: "Dashboard",
        route: "/dashboard",
        icon: "icon-door",
        userRoles: [1,2]
    },
    {
        name: "Administración de usuarios",
        route: "/admin-users",
        icon: "icon-door",
        userRoles: [1]
    },
    {
        name: "Tasks",
        route: "/tasks",
        icon: "icon-door",
        userRoles: [1,2,3]
    },
    {
        name: "Rides",
        route: "/rides",
        icon: "icon-door",
        userRoles: [1,2,3]
    },
]