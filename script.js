// const mobileMenu=()=>{
//     let menu=document.querySelector('.header ul');
//     let btn=document.querySelector('.header button');

//     if(btn.innerHTML==='MENU'){
//         menu.style.display='block';
//         btn.innerHTML='CLOSE';
//     }else{
//         menu.style.display='none';
//         btn.innerHTML='MENU';
//     }

// }
let btnHeader=document.querySelector('.header button');
btnHeader.addEventListener('click', ()=>{
    let menu=document.querySelector('.header ul');
    let btn=document.querySelector('.header button');
    if(btn.innerHTML==='MENU'){
        menu.style.display='block';
        btn.innerHTML='CLOSE';
    }else{

  menu.style.display='none';
       btn.innerHTML='MENU';
    }
});

let left=document.querySelector('#left-btn');
let right=document.querySelector('#right-btn');
let images=document.querySelectorAll('.slider-images img');
images.forEach((img)=>{
  
});
let count=0;
const moveLeft=()=>{
    displayNone();
    count--;
    if(count===-1){
        count=images.length-1;
    }
    images[count].style.display='block'; 

}
const moveRight=()=>{
    displayNone();
    count++;
    if(count===images.length){
        count=0;
    }
    images[count].style.display='block';
}
left.addEventListener('click',moveLeft);
const displayNone=()=>{
    images.forEach((img)=>{
        img.style.display='none';
      });
};
right.addEventListener('click',moveRight);


// const portfolioSort=(elem)=>{
//     let category=elem.getAttribute('data-category');
// let portfolioItems=document.querySelectorAll('.portfolio-single-item');

// portfolioItems.forEach((item)=>{
//     item.style.display='none';
// });

//     if(category==='sve'){
//         portfolioItems.forEach((item)=>{
//             item.style.display='block';
//         }
        
//         );
//     }
//     portfolioItems.forEach((item)=>{
//         if(item.getAttribute('data-category').includes(category)){
//             item.style.display='block';
//         }
//     })
// }

let buttons=document.querySelectorAll('.portfolio-wrapper button');

buttons.forEach((btn)=>{
btn.addEventListener('click', ()=>{
    let category=btn.getAttribute('data-category');
    let portfolioItems=document.querySelectorAll('.portfolio-single-item');
    portfolioItems.forEach((item)=>{
        item.style.display='none';
    });
    if(category==='sve'){
        portfolioItems.forEach((item)=>{
            item.style.display='block';
        });
    }
    portfolioItems.forEach((item)=>{
       if(item.getAttribute('data-category').includes(category)) {
        item.style.display='block';
       }
    });
});
});


const openModal=()=>{

    let popup=document.querySelector('.popup-modal');
   let overlay=document.querySelector('.overlay');
    popup.style.display='block';
    overlay.style.display='block';
}

const openBtn=document.querySelector('.modal-button');
openBtn.addEventListener('click', openModal);
 const closeModal=()=>{
    
    let popup=document.querySelector('.popup-modal');
    let overlay=document.querySelector('.overlay');
    popup.style.display='none';
    overlay.style.display='none';
 }
 const closeBtn=document.querySelector('.close-modal');
 closeBtn.addEventListener('click', closeModal);

 const btn2=document.querySelector('#button2');
 const openModal2=()=>{
     const popupImg=document.querySelector('.popup-modal-dva img');
     let overlay=document.querySelector('.overlay');
     popupImg.style.display='block';
     overlay.style.display='block';
    }
    btn2.addEventListener('click',openModal2);
 let esc=window.addEventListener('keydown',(escape)=>{
    const popupImg=document.querySelector('.popup-modal-dva img');
    let overlay=document.querySelector('.overlay');
     if(escape.key==='Escape'){
        popupImg.style.display='none';
        overlay.style.display='none';
     }
 });

 let btn3=document.querySelector('#button3');
 btn3.addEventListener('click', ()=>{
    const popupMsg=document.querySelector('.popup-modal-tri');
    let overlay=document.querySelector('.overlay');
    popupMsg.style.display='block';
    overlay.style.display='block';
 });

 let mouse=window.addEventListener('mousedown', ()=>{
    const popupMsg=document.querySelector('.popup-modal-tri');
    let overlay=document.querySelector('.overlay');
    
    popupMsg.style.display='none';
    overlay.style.display='none';
});