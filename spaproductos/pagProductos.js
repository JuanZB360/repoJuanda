// import { card } from "./app/componet/cartproduct.js";
// import { ajax } from "./app/helpers/ajax.js";



// export const pageproducts = () => {

//     let cuerpo = document.createElement('div');
//     cuerpo.setAttribute('class', 'cuerpo')

//     let categorias = document.createElement('div')
//     categorias.setAttribute('class', 'categorias')
//     categorias.innerHTML = `
                
                

//     <a href="#/Todos_los_Productos" id="Todos" id="todos" class="botoncategorias">Todos los Productos</a>

//     <a href="#/Aseo_Personal" id="aseopersonal" id="aseo" class="botoncategorias">Aseo Personal</a>

//     <a href="#/Productos_Cannabicos" id="cannabis" id="canabicos" class="botoncategorias">Productos Cannabicos</a>

//     <a href="#/Productos_Alimenticios" id="alimentos" id="alimentos" class="botoncategorias">Productos Alimenticios</a>

//     <a href="#/Productos_Hogar" id="hogar" id="hogar" class="botoncategorias">Productos Hogar<a>


// `   

//     cuerpo.append(categorias)

//     let contenedorpadre = document.createElement('div');
//     contenedorpadre.setAttribute('class', 'contenedorpadre');

//     cuerpo.append(contenedorpadre)

//     document.getElementById('todos').addEventListener('click', () => {
//         contenedorpadre.innerHTML = ''
//         ajax(url,(data)=>{
//             data.results.forEach(el => {
//                 contenedorpadre.append(card(el))
//             })
//         })
//     })

//     document.getElementById('aseo').addEventListener('click',() => {
//         contenedorpadre.innerHTML=""
//         ajax(url,(data)=>{
//             const obj = data.results.filter(el => {
//                 el.species == "Human"
//             });
//             obj.forEach(el => {
//                 contenedorpadre.append(card(el))
//             })
//         })
//     })
    
//     document.getElementById('canabicos').addEventListener('click',() => {
//         contenedorpadre.innerHTML=""
//         ajax(url,(data)=>{
//             const obj = data.results.filter(el => {
//                 el.species == "Alien"
//             });
//             obj.forEach(el => {
//                 contenedorpadre.append(card(el))
//             })
//         })
//     })

//     document.getElementById('alimentos').addEventListener('click',() => {
//         contenedorpadre.innerHTML=""
//         ajax(url,(data)=>{
//             const obj = data.results.filter(el => {
//                 el.gender == "Human"
//             });
//             obj.forEach(el => {
//                 contenedorpadre.append(card(el))
//             })
//         })
//     })

//     document.getElementById('hogar')

    

// }