const deleteBtn = document.getElementById("delete");
const deleteList = document.getElementById("delete-list")
const listWrapper = document.getElementById("main")

deleteBtn.addEventListener('click', function(){
    deleteList.parentElement.remove()
    console.log("clicked")
    listWrapper.style.marginTop = "120px";
})
console.log("working")