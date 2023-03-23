// window object showing events:: window

// target elements: seletors
const grandparent= document.querySelector('#grandparent');
const parent= document.querySelector("#parent");
const child= document.querySelector("#child");

// add events
grandparent.addEventListener("click", ()=>{
    console.log("G_clicked");
}, false)

parent.addEventListener("click", (e)=>{
    console.log("P_clicked");
    e.stopPropagation();
}, false)
child.addEventListener("click", (e)=>{
    console.log('C_clicked');
    e.stopPropagation();

    // console.log(event);
}, false)

document.addEventListener("click", ()=>{
    console.log("D_clicked")
}, false)

// event capturing (D->G->P->C) and event bubbling (C->P->G->D)