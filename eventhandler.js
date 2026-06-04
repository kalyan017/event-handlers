let div1=document.getElementById("gp");
let div2=document.getElementById("parent");
let div3=document.getElementById("child");


//bubbling: 

// div1.addEventListener("click",(e)=>{
//     e.stopPropagation()
//     console.log("grand parent");
// })

// div2.addEventListener("click",(e)=>{
//     console.log("parent")
//     e.stopPropagation()
// })

// div3.addEventListener("click",(e)=>{
//     console.log("child")
//     e.stopPropagation()
// })

//Capturing:


// div1.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     console.log("grand parent");
//     div1.style.backgroundColor="red"
// },true)

// div2.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     console.log("parent");
//     div2.style.backgroundColor="green"
//     // e.stopImmediatePropagation()
    
// },true)

// div2.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     console.log("child");
//     div3.style.backgroundColor="blue"
    
// },true)

// div1.addEventListener("click",(e)=>{
//     if(e.target.id=="gp"){
//         console.log("grand parent")
//         div1.style.backgroundColor="red"
//     }
// })


// div1.addEventListener("click",(e)=>{
//     console.log(e.target)
// })