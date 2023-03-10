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
        icon: "icon-dashboard",
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
        icon: "icon-tasks",
        userRoles: [1,2,3]
    },
    {
        name: "Rides",
        route: "/rides",
        icon: "icon-rides",
        userRoles: [1,2,3]
    },
    {
        name: "Clients",
        route: "/clients",
        icon: "icon-clients",
        userRoles: [1,2,3]
    },
    {
        name: "Drivers",
        route: "/drivers",
        icon: "icon-drivers",
        userRoles: [1,2,3]
    },
     {
        name: "Shift",
        route: "/shift",
        icon: "icon-dollar",
        userRoles: [1,2,3]
    },
    {
        name: "Live map",
        route: "/map",
        icon: "icon-map",
        userRoles: [1,2,3]
    }, 
    {
        name: "Car classes",
        route: "/car",
        icon: "icon-car",
        userRoles: [1,2,3]
    },
    {
        name: "Branches",
        route: "/branches",
        icon: "icon-branches",
        userRoles: [1,2,3]
    },
    {
        name: "Moderators",
        route: "/moderators",
        icon: "icon-moderators",
        userRoles: [1,2,3]
    },
    {
        name: "Settings",
        route: "/settings",
        icon: "icon-settings",
        userRoles: [1,2,3]
    },
    
    

]