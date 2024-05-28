
import { main } from "./componet/main.js";
import { productos } from "./componet/productos.js";
import { router } from "./componet/router.js";


export const App = () => {
    let root =document.querySelector('#root');
    root.append(productos())
    root.append(main())


    // ajax(url,(data)=>{
    //     console.log(data.results)
    //     document.querySelector('#contenedorpadre').append(contenedortarjet(data.results))
    // })

   router()
    
}
    

