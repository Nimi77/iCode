const list = document.querySelectorAll("li");

for(i = 0; i < list.length; i++ ){
    list[i].addEventListener("click", function(){
        this.classList.toggle("checked");
    })
}