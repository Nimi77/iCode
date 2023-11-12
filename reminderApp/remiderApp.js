
var listContent = document.getElementById("content");
listContent.addEventListener('click', function(e){
    const target = e.target;
    if(target.tagName === 'li'){
        target.classList.toggle('checked');
        console.log(listContent.includes('li'))
        console.log("ttt")
    }
});
