let c=document.querySelector("button")
// let button=document.querySelector(".btn1")
// let container=document.querySelector(".container")
function change(){
    let colors=["green","red","yellow","pink","purple"]
    let c=colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor=c;
}
c.addEventListener("click",()=>{
    change();
})
// button.addEventListener("click",()=>{
//     const imgContainer=document.createElement('div')
// const image=document.createElement('img')
// image.src="js-1\images.png"
// imgContainer.append(image)
// container.append(imgContainer)
// })


// function addTask(){
//     let text=document.getElementById("task").value;

//     if(text==="")
//             return;
//     let li=document.createElement("li");
//     li.innerHTML=text;
//     document.getElementById("list").appendChild(li);
//     document.getElementById("task").value="";
// }