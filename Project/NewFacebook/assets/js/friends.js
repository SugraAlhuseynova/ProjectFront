const friendCategories = document.querySelectorAll('.friend-category');
const tabMenufriends = document.querySelectorAll('.tab-menu-friends');

const AllCategoryActive = () =>{
    friendCategories.forEach((item)=>{
        item.classList.remove('active');
    })
}


const AllTabmenuHide = () =>{
    tabMenufriends.forEach((item)=>{
        item.classList.add('d-none')
    })
}

friendCategories.forEach((item)=>{
    item.addEventListener('click', ()=>{
        AllCategoryActive();
        AllTabmenuHide();
        item.classList.add('active');
        let dataId = item.getAttribute('data-id');
        const element = document.querySelector(`#${dataId}`);
        element.classList.remove('d-none');
    })
})

/*------------------------------ quick chat ------------------------------*/
const quickchat = document.querySelector('.quick-chat-friend');
const SendMessages = document.querySelectorAll('.send-message');
const quickChatCloser = document.querySelector('.quick-chat-closer-friend');

SendMessages.forEach(element => {
    element.addEventListener('click',()=>{
        quickchat.classList.remove('d-none');

        ScrollToBottom();
    })
});

quickChatCloser.addEventListener('click',()=>{
    quickchat.classList.add('d-none');
})
/*------------------------------ quick chat send message ------------------------------*/
const quickChatSelfMessage = document.querySelector('#quick-chat-self-message-friend');
const quickChatsendBtn = document.querySelector('#quick-chat-send-btn-friend');
const quickChatMessageBody = document.querySelector('.quick-chat-body-friend');

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
