

// /*------------------------------ notifications ------------------------------*/

// const notificationBtn = document.querySelector('.notification-button');
// const notificationsPopup = document.querySelector('.notifications-popup');
// const notifications = document.querySelector('#notifications');
// const notificationCount = document.querySelector('.notification-count');
// notificationBtn.addEventListener('click',()=>{
//     console.log('sfgsd');
//     notificationsPopup.style.display = "none";
// })

// notifications.addEventListener('click', (e)=>{
//     e.preventDefault();
//     notificationsPopup.style.display = "block";
//     notificationCount.innerText = "";
// })



/*------------------------------ create post ------------------------------*/
const createPostModal =document.querySelector('.create-post-modal');
const createPost = document.querySelector('.create-post');
const closeCreateModal = document.querySelector('.close-create-modal');

const addPhoto = document.querySelector('.add-photo');
const fileInput = document.querySelector('#add-photo-input');

const textarea = document.querySelector('#create-textarea');
const addFeedBtn = document.querySelector('.add-feed-btn');


createPost.addEventListener('click', ()=>{
    createPostModal.style.display = "grid";
})

closeCreateModal.addEventListener('click',()=>{
    createPostModal.style.display = "none";
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('create-post-modal')) {
        createPostModal.style.display = "none";
    }
})

addPhoto.addEventListener('click', ()=> {
    fileInput.click();
})

fileInput.addEventListener('click', ()=>{
    console.log(fileInput.value);

})


const CheckTextarea =()=>{
 
    textarea.addEventListener('onchange',()=>{
        CheckTextarea2();
    })
}

const CheckTextarea2 =()=>{
    if(textarea.innerText === ""){
        addFeedBtn.disabled = "true";
        console.log("silir?");
    }
}

CheckTextarea();
addFeedBtn.disabled = "true";


/*------------------------------ quick chat ------------------------------*/
const quickchat = document.querySelector('.quick-chat');
const contactFriends = document.querySelectorAll('.contact-friend');
const quickChatCloser = document.querySelector('.quick-chat-closer');

contactFriends.forEach(element => {
    element.addEventListener('click',()=>{
        quickchat.classList.remove('d-none');

        ScrollToBottom();
    })
});

quickChatCloser.addEventListener('click',()=>{
    quickchat.classList.add('d-none');
})
/*------------------------------ quick chat send message ------------------------------*/
const quickChatSelfMessage = document.querySelector('#quick-chat-self-message');
const quickChatsendBtn = document.querySelector('#quick-chat-send-btn');
const quickChatMessageBody = document.querySelector('.quick-chat-body');

function ScrollToBottom() {
    quickChatMessageBody.scrollTop = quickChatMessageBody.scrollHeight;
  } 

const SendMessage = () =>{
    let context = quickChatSelfMessage.value;
    
        if (context.trim() !== "") {
            const div = document.createElement('div');
            div.classList.add('self-div');
            let p = document.createElement('p');
            p.classList.add('chat-message-self');
            p.innerText = `${context}`;
            div.appendChild(p);
            quickChatMessageBody.appendChild(div);
        }

        quickChatSelfMessage.value = "";
}

const ShouldScroll = () =>{
    shouldScroll = quickChatMessageBody.scrollTop + quickChatMessageBody.clientHeight === quickChatMessageBody.scrollHeight;

    if (!shouldScroll) {
        console.log('scroll olmalidi');
        ScrollToBottom();
    }
}

document.addEventListener('keypress', (e) => {
    (e.keyCode == 13) && SendMessage();
    
    ShouldScroll();
})

quickChatsendBtn.addEventListener('click', ()=>{
    SendMessage();
    ShouldScroll();
})  








