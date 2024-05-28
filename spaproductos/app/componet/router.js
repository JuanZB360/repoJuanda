import { ajax } from "../helpers/ajax.js";
import { url } from "../helpers/url.js";
import { contenedortarjet } from "./contenedortarjetas.js";

ajax(url,(data)=>{
    document.querySelector('#contenedorpadre').append(contenedortarjet(data.results))
})

export const router = () => {
    
    let { hash } = location;

    switch(hash) {

        case "#/Todos_los_Productos":
            ajax(url,(data)=>{
                console.log(data.results);
                document.querySelector('#contenedorpadre').append(contenedortarjet(data.results))
            })
        case "#/Aseo_Personal":
            ajax(url,(data)=>{
                 const newdata  = data.results.filter(el => el.gender == "Male")
                document.querySelector('#contenedorpadre').append(contenedortarjet(newdata))
            })
        case "#/Productos_Cannabicos":
            ajax(url,(data)=>{
                 const newdata  = data.results.filter(el => el.gender == "Female")
                document.querySelector('#contenedorpadre').append(contenedortarjet(newdata))
            })   

        case "#/Productos_Alimenticios":
            ajax(url,(data)=>{
                 const newdata  = data.results.filter(el => el.species == "Human")
                document.querySelector('#contenedorpadre').append(contenedortarjet(newdata))
            })

        case "#/Productos_Hogar":
            ajax(url,(data)=>{
                 const newdata  = data.results.filter(el => el.species == "Alien")
                document.querySelector('#contenedorpadre').append(contenedortarjet(newdata))
            })
        
    }
}





