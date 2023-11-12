const starRating = document.querySelectorAll('.star-rating .star');

starRating.forEach((item, idx)=> {
    item.addEventListener('click', function(){
        let click = 0

        starRating.forEach(i => {
            i.classList.replace('fa-solid', 'fa-regular');
            i.classList.remove('active');
        })
        for(let i = 0; i<starRating.length; i++){
            if(i <= idx){
                starRating[i].classList.replace('fa-regular', 'fa-solid')
                starRating[i].classList.add('active')
            } else{
                starRating[i].style.setProperty('--i', click)
                click++
            }
        }
    })
}
)

// Number rating
const firstSet = document.querySelectorAll('.num');
console.log(firstSet);

for(element of firstSet ){
    element.addEventListener("click", function(){
   
        if(!this.dataset.clicked){
            this.setAttribute("data-clicked", "true");
            this.style.backgroundColor = "rgb(137 1 87)"
            console.log("clicked");
        }else{
            this.removeAttribute("data-clicked");
            this.removeAttribute("style")
        }
    })
  
}

