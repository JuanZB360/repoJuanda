import { card } from "./cartproduct.js";


export const contenedortarjet = (data) => {
    

    let div = document.createElement("div");
    div.setAttribute('id','contenedortarjet')

    data.map( el => div.append(card(el)))

    return div
}