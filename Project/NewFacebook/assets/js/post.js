/*============================== REACTIONS ==============================*/
/*------------------------------ Like ------------------------------*/
const unlikedBtn = document.querySelectorAll('.unliked');
const likedBtn = document.querySelectorAll('.liked');

console.log(unlikedBtn);
console.log(likedBtn);
 
unlikedBtn.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.classList.add('d-none');
        item.nextElementSibling.classList.remove('d-none');
    })
})

likedBtn.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.classList.add('d-none');
        item.previousElementSibling.classList.remove('d-none');
    })
})

/*------------------------------ Save ------------------------------*/
const unsavedBtn = document.querySelectorAll('.unsaved');
const savedBtn = document.querySelectorAll('.saved');

unsavedBtn.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.classList.add('d-none');
        item.nextElementSibling.classList.remove('d-none');
    })
})

savedBtn.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.classList.add('d-none');
        item.previousElementSibling.classList.remove('d-none');
    })
})

/*------------------------------ Comment ------------------------------*/
const commentCount = document.querySelectorAll('.comment-count');
const allComments = document.querySelectorAll('.all-comments');
const selfCommment = document.querySelectorAll('#self-comment');

commentCount.forEach(element => {
    element.addEventListener('click' ,()=>{
       element.parentElement.nextElementSibling.nextElementSibling.classList.remove('d-none');      
    })
});

// console.log(selfCommment.value );

// const SendMessage = () =>{
//     let context = selfCommment.value;
    
//         if (context.trim() !== "") {
//             const div = document.createElement('div');
//             div.classList.add('comment-box');
//             let p = document.createElement('p');
//             p.innerText = "you";
//             let span = document.createElement('span');
//             span.innerText = `${context}`;
//             div.appendChild(p);
//             div.appendChild(span)
//             allComments.prepend(div);
//         }

//     selfMessage.value = "";
// }

// document.addEventListener('keypress', (e) => {
//     if(e.keyCode == 13){
//         SendMessage();
//     }
// })

