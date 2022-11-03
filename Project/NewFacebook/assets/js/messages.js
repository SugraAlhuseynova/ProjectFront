const messageFriend = document.querySelectorAll('.message-friend');
const chooseMessage = document.querySelector('.choose-message');

messageFriend.forEach(item=>{
    item.addEventListener('click',()=>{
        // console.log('try');
        chooseMessage.classList.add('d-none')
        // console.log(chooseMessage.classList);
    })
})

/*--------------------------------- all friend show ----------------------------------*/
const chooseFriend = document.querySelector('#choose-friend');
const friends = document.querySelector('.friends');
const hideMessage = document.querySelector('#hide-message');

const AddShadowMessageBox = ()=>{
    friends.style.boxShadow = '0 0 1rem var(--primary-color)';
    setTimeout(() => {
        friends.style.boxShadow = 'none';
    }, 3000);
}

chooseFriend.addEventListener('click', ()=>{
    friends.classList.add('show-friends');    
    AddShadowMessageBox();    
})


messageFriend.forEach(item=>{
    item.addEventListener('click',()=>{
        friends.classList.remove('show-friends');
        // console.log('sdhaskdjlh');
    })
})

hideMessage.addEventListener('click',()=>{
    friends.classList.add('show-friends'); 
    AddShadowMessageBox();    
})

/*--------------------------------- friend search ----------------------------------*/
const userSearch = document.querySelector('#user-search');
const SearchUser = ()=>{
    const val = userSearch.value.toLowerCase();
    // console.log(val);
    messageFriend.forEach(chat => {
        let name = chat.querySelector('h4').innerText.toLowerCase();
        let small = chat.querySelector('small').innerText.toLowerCase();
        if (name.indexOf(val) != -1 || small.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } 
        else {
            chat.style.display = 'none';
        }
    });
}
userSearch.addEventListener('keyup', SearchUser);

/*--------------------------------- message send ----------------------------------*/
const selfMessage = document.querySelector('#self-message');
const sendBtn = document.querySelector('#send-btn');
const messageBody = document.querySelector('.message-body');

function ScrollToBottom() {
    messageBody.scrollTop = messageBody.scrollHeight;
  } 

const SendMessage = () =>{
    let context = selfMessage.value;
    
        if (context.trim() !== "") {
            const div = document.createElement('div');
            div.classList.add('self-div');
            let p = document.createElement('p');
            p.classList.add('chat-message-self');
            p.innerText = `${context}`;
            div.appendChild(p);
            messageBody.appendChild(div);
        }

    selfMessage.value = "";
}

const ShouldScroll = () =>{
    shouldScroll = messageBody.scrollTop + messageBody.clientHeight === messageBody.scrollHeight;

    if (!shouldScroll) {
        console.log('scroll olmalidi');
        ScrollToBottom();
    }
}

document.addEventListener('keypress', (e) => {
    if(e.keyCode == 13){
        SendMessage();
    }

    ShouldScroll();

})

sendBtn.addEventListener('click', ()=>{
    SendMessage();
    ShouldScroll();
})

ScrollToBottom();
