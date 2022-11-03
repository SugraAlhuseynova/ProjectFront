const changePhotoBox = document.querySelector('.change-photo-box');
const changeProfileBtn = document.querySelector('.change-profile-btn');
const cancel = document.querySelector('#cancel');

changeProfileBtn.addEventListener('click', ()=>{
    changePhotoBox.style.display = "grid";
})

window.addEventListener('click', (e)=>{
    if(e.target.className === "change-photo-box"){
        changePhotoBox.style.display = "none";
    }
})

cancel.addEventListener('click', ()=>{
    changePhotoBox.style.display = "none";
})
/*----------------------------- Upload Remove Photo -----------------------------*/
const uploadPhoto = document.querySelector('#upload-photo');
// const removePhoto = document.querySelector('#remove-photo');
const uploadPhotoInput = document.querySelector('#upload-photo-input');

uploadPhoto.addEventListener('click',()=>{
    uploadPhotoInput.click();
})

/*----------------------------- Add University -----------------------------*/
const addUniversity = document.querySelector('.add-university');
const universityDiv = document.querySelector('#university');

addUniversity.addEventListener('click', ()=>{
    let inputUniversity = document.createElement('input');
    inputUniversity.classList.add('edit-input');
    universityDiv.appendChild(inputUniversity);
    universityDiv.insertBefore(inputUniversity, addUniversity)
})
