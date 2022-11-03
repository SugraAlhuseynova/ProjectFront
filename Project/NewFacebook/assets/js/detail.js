/*------------------------------ quick chat ------------------------------*/
const quickchat = document.querySelector('.quick-chat-detail');
const sendMessage = document.querySelector('#detail-send-message');
const quickChatCloser = document.querySelector('.quick-chat-closer-detail');

sendMessage.addEventListener('click',()=>{
    quickchat.classList.remove('d-none');
    ScrollToBottom();
})

quickChatCloser.addEventListener('click',()=>{
    quickchat.classList.add('d-none');
})
/*------------------------------ quick chat send message ------------------------------*/
const quickChatSelfMessage = document.querySelector('#quick-chat-self-message-detail');
const quickChatsendBtn = document.querySelector('#quick-chat-send-btn-detail');
const quickChatMessageBody = document.querySelector('.quick-chat-body-detail');

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

/*------------------------------  ------------------------------*/
const moreAction = document.querySelector('.more-action');
const moreOptions = document.querySelector('.more-options');

moreAction.addEventListener('click',()=>{
    moreOptions.classList.toggle('d-none');
})

/*------------------------------ Show more info ------------------------------*/

