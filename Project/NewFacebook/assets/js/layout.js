let primaryColor = JSON.parse(localStorage.getItem('primaryColor')) || '#3d73d7';

/*------------------------------ Theme ------------------------------*/
const customizeTheme = document.querySelector('.customize-theme');
const themeBtn = document.querySelector('#theme-btn');
const cardcloser = document.querySelector('.card-x');
const colorPalette = document.querySelectorAll('.choose-color span');
const root = document.querySelector(':root');
const style = getComputedStyle(document.body);

let SetColor = ()=>{

    root.style.setProperty('--primary-color', primaryColor);
    // root.style.getPropertyValue('--primary-color')
    console.log('primaryColor: ', root.style.getPropertyValue('--primary-color'));
}
// primaryColor = "#8f5a16";

SetColor();

themeBtn.addEventListener('click', ()=>{
    customizeTheme.style.display = "grid";
})

window.addEventListener('click',(e)=>{
    if(e.target.className === "customize-theme"){
        customizeTheme.style.display = "none";
        themeBtn.classList.remove('active'); 
    }  
})

cardcloser.addEventListener('click',()=>{
    customizeTheme.style.display = "none";
})

/*------------------------------ color change ------------------------------*/
const ChangeActiveColorClass = () =>{
    colorPalette.forEach(color=>{
        color.classList.remove('active');
    })
}


colorPalette.forEach(color => {
    color.addEventListener('click',()=>{
        ChangeActiveColorClass();

        primaryColor = style.getPropertyValue(`--${color.classList[0]}`);
        localStorage.setItem('primaryColor', JSON.stringify(primaryColor))
        
        color.classList.add('active');
        SetColor();
    })
})

 

/*------------------------------ background color change ------------------------------*/
const backgroundPalette = document.querySelectorAll(".choose-bg div");
const ChangeActiveBgColorClass = () => {
    backgroundPalette.forEach((bgColor) => {
        bgColor.classList.remove("active");
    });
};

let lightColorParams = [17, 100, 95];
let whiteColorParams = [95, 20, 15];
let darkColorParams = [90, 10, 0];

const ChangeBg = (params) => {
    let [darkColorLigthness, whiteColorLigthness, lightColorLigthness] = params;
    root.style.setProperty("--light-color-lightness", `${lightColorLigthness}%`);
    root.style.setProperty("--dark-color-lightness", `${darkColorLigthness}%`);
    root.style.setProperty("--white-color-lightness", `${whiteColorLigthness}%`);
    localStorage.setItem('main-theme-params', JSON.stringify(params));
};

let params = JSON.parse(localStorage.getItem('main-theme-params')) || [17, 100, 95];
ChangeBg(params)

backgroundPalette.forEach((bgColor) => {
    bgColor.addEventListener("click", () => {
        if (bgColor.classList[0] === 'light-theme') ChangeBg(lightColorParams);
        if (bgColor.classList[0] === 'dark-theme') ChangeBg(whiteColorParams);
        if (bgColor.classList[0] === 'night-theme') ChangeBg(darkColorParams);
    });
});


/*------------------------------ Sidebar ------------------------------*/
const menuItems = document.querySelectorAll('.menu-item');

const ChangeActiveItem = ()=>{
    menuItems.forEach(item => {
        
        item.classList.remove('active');
    });
}

menuItems.forEach(item=>{
    item.addEventListener('click', ()=>{
        if(item.id !== "theme-btn"){
            console.log("themedir");
            ChangeActiveItem();
        }
        item.classList.add('active');
    })
})

/*------------------------------ Hamburger ------------------------------*/
const hamburgerBtn = document.querySelector('.menu-hamburger');
const sideBar = document.querySelector('.left');

hamburgerBtn.addEventListener('click', ()=>{
    hamburgerBtn.classList.toggle('change');
    sideBar.classList.toggle('sidebar-show');
})


/*------------------------------ search bar ------------------------------*/
const searchBar = document.querySelector('.search-bar');
const searchResult = document.querySelector('.search-results');
const searchInput = document.querySelector('.searchInput');
const searchIcon = document.querySelector('#search-icon');
const profileName = document.querySelector('.profile-name');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('searchInput')) {
        searchResult.classList.remove('d-none')
        searchResult.classList.add('d-block');
    }else {
        searchResult.classList.remove('d-block')
        searchResult.classList.add('d-none');
    }
})


searchIcon.addEventListener('click',()=>{
    searchInput.classList.toggle('searchInput-show');
    if(searchInput.classList.contains('searchInput-show')){
        profileName.classList.add('profile-hide');
    }
    else{
        profileName.classList.remove('profile-hide');    
    }

})

/*------------------------------ Show friend in detail pages ------------------------------*/
const showFriendsBtnDetail = document.querySelector('#show-all-friends');
const friendsCard = document.querySelector('.show-all-friend');

showFriendsBtnDetail.addEventListener('click', ()=>{
    friendsCard.style.display = "grid";
    console.log(friendsCard);
})

window.addEventListener('click',(e)=>{
    if(e.target.className === "show-all-friend"){
        friendsCard.style.display = "none";
    }  
})
