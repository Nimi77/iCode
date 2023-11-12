const clickedBtn = document.getElementById('like-btn');
const heart = document.getElementById("heart");

heart.addEventListener('click',()=> {
    document.addEventListener('click', likeHeartBtn)
})

function likeHeartBtn(){
    if(heart.matches("i")){
        document.getElementById("like-btn").innerHTML = 
      `<i class="fa-solid fa-heart" id="liked-btn"></i>`;
   }
}


