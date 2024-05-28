
export const card = (data) => {

    let card = document.createElement('div')
    card.setAttribute('class','tarjeta')
    
    card.innerHTML = `
                    <img src=${data.image} alt="" class="imagen">
                    <h2 class="nombre">${data.name}</h2>
                    <p class="descripcion">${data.status}</p>
                    <button id=${data.id} class="Comprar">Comprar</button>
            
                `
    return card;
                
}