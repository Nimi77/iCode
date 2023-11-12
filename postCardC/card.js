const likeBtn = document.getElementById('like-btn');
const clickedBtn = document.getElementById('like-btn')
const heart = document.getElementById("heart")

heart.addEventListener('click',()=> {
    document.addEventListener('click', likeHeartBtn)
})

function likeHeartBtn(){
    if(heart.matches("i")){
        document.getElementById("like-btn").innerHTML = 
      `<i class="fa-solid fa-heart" id="liked-btn"></i>`;
   }
}

// heart.addEventListener('click', likeButton)

// document.querySelector(".heart").addEventListener("click", function(e){
//     const target = e.target;
//     if(target.matches("i")){
//          document.getElementById("like-btn").innerHTML = 
//        `<i class="fa-solid fa-heart" id="liked-btn"></i>`;
//     }

// });
// clickedBtn.remove(target)
// const clickedBtn = document.getElementById('like-btn');
// clickedBtn.addEventListener("click", function(){
//     if(likeBtn.classList.contains("like-btn")){
//         document.getElementById("like-btn").innerHTML =
//         `<i class="fa-solid fa-heart" ></i>`;
//     }
// })

