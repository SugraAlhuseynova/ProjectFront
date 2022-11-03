const savedPostModal = document.querySelector('.saved-post-modal');
const savedFeeds = document.querySelectorAll('.saved-feed');

savedFeeds.forEach((item)=>{
    item.addEventListener('click', ()=>{
        savedPostModal.style.display = "grid";
    })
})

window.addEventListener('click', (e)=>{
    if(e.target.className === "saved-post-modal"){
        savedPostModal.style.display = "none";
    }
})