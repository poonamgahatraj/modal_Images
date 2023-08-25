let image=document.getElementById("1")
image.addEventListener("click",showImage)

function showImage(){
let show=document.getElementById("2")
show.style.display="block";



}

let btn=document.getElementById("3")
btn.addEventListener("click",removeImage)

function removeImage()
{
    let show=document.getElementById("2")
    show.style.display="none";
}




