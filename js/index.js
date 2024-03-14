
import { Router } from "./routes.js"


const routes = new Router()

routes.add("/home","/pages/home.html",)
routes.add("/universo","/pages/universo.html",)
routes.add("/explore","/pages/explore.html",)


 

  routes.handle()

  window.onpopstate = () => routes.handle()
  window.route = () => routes.route()

  
  

 