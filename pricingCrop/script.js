
const card = document.getElementsByClassName("card");
for(i = 0; i < card.length; i++){
    card[i].addEventListener("click", function(){
        this.classList.toggle("active")
    })
}
