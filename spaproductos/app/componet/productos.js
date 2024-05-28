


export const productos = () => {
    let pageproduct = document.createElement('div');
    pageproduct.id = "categorias"

    pageproduct.innerHTML = `
                
                

                <a href="#/Todos_los_Productos" id="Todos" class="botoncategorias">Todos los Productos</a>

                <a href="#/Aseo_Personal" id="aseopersonal" class="botoncategorias">Aseo Personal</a>

                <a href="#/Productos_Cannabicos" id="cannabis" class="botoncategorias">Productos Cannabicos</a>

                <a href="#/Productos_Alimenticios" id="alimentos" class="botoncategorias">Productos Alimenticios</a>

                <a href="#/Productos_Hogar" id="hogar" class="botoncategorias">Productos Hogar<a>


    `

    return pageproduct;
}