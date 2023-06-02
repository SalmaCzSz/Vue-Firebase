import comInicio from "./components/inicio";
import comBlog from "./components/blog";

export const routes = [
    { path: '/', component: comInicio },
    { path: '/blog', component: comBlog },
]

/*
    Path define la ruta
    component define el componente al que enruta
*/