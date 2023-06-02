import comInicio from "./components/inicio";
import comBlog from "./components/blog";
import comPosts from "./components/posts";

export const routes = [
    { path: '/', component: comInicio },
    { path: '/blog', component: comBlog },
    { path: '/posts/:id/', component: comPosts },
]

/*
    Path define la ruta
    component define el componente al que enruta
*/