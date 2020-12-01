var jump = document.getElementsByClassName("jump_to")
console.log(jump)
var arr = jump
for(i = 0; i < jump.length; i++){
    jump[i].onclick = function(){
        for(j = 0; j < jump.length; j++){
            arr[j].style.background = "#2f2f2f"
        }
        this.style.background = "red"
    }
}
jump[0].onclick = function(){
    window.open("pageone.html","_self")
}
jump[1].onclick = function(){
    window.open("pagefour.html","_self")
}
jump[2].onclick = function(){
    window.open("pagethree.html","_self")
}
jump[3].onclick = function(){
    window.open("pagetwo.html","_self")
}