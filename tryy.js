const clear=document.getElementById('clear');
const it=document.getElementById('item-input');
const items=document.querySelectorAll('li');
const add=document.querySelector('.btn');
const ul=document.querySelector('ul');
const txfl=document.getElementById('filter');
const select=document.querySelectorAll('.container');
const select1=document.querySelectorAll('.pro');
const select2=document.querySelectorAll('.cls');
const tun=document.querySelector('#ret');
const hera=document.querySelector('head');
const sete=document.querySelector('thisone');
const foo=document.querySelectorAll('footer');
const copo=document.getElementById('copo');




document.addEventListener('DOMContentLoaded',displayItems);
function displayItems(){
    const itemFromStorage=getItemFromStorage();
    itemFromStorage.forEach((itemlele) => kall(itemlele)
    )
    select.forEach((item) => {
        item.style.display="none";
    })
    select1.forEach((item) => {
        item.style.display="none";
    })
    copo.style.display='none';
}


tun.addEventListener('click',behave);

function behave(){
    let yut=document.getElementById('use');
    if(yut.value==='' || yut.value===' ' || yut.value==='  '){
        alert('Enter your name first you idiot.');
        return;
    }
    setTimeout(youdo,0);
    function youdo(){

    const g=yut.value;
   const g1=g.charAt(0);
    const g2=g1.toUpperCase();
    if(g1!==g2){
        // const rem=g.substring(1);
        let rem=g.substring(1);
        
        yut=g2+rem;

        // console.log(g.substring(1));
        console.log(yut);
    }

    const num=document.getElementById('f2');
    // num.innerText=yut.value;
    num.innerHTML=`Welcome <br> ${yut}`;
    
    // hera.removeChild(sete);
    // console.log('Welcome');
    const cre=document.createElement('link');
    cre.rel="stylesheet";
    cre.href="style.css";
    hera.appendChild(cre);

    
    select2.forEach((item) => {
        item.style.display="none";
    })
    foo.forEach((item) => {
        item.style.display="none";
    })


    

            setTimeout(chalo,500);
    function chalo() {
            select.forEach((item) => {
        item.style.display="block";
    })
        select1.forEach((item) => {
            item.style.display="block";
        })
    copo.style.display='block'
    }
    
}
}




function kall(itema){
    
    const ul2=document.querySelector('ul');
    const li=document.createElement('li');
    // // li.className="lisi";
    
    // // li.appendChild(document.createTextNode(item));
    // // ul1.appendChild(li);
    
    const button=document.createElement('button');
    button.className="remove-item btn-link text-red";
    button.title="Remove item"
    const icon=document.createElement('i');
    icon.className="fa-solid fa-xmark";

   
    // let g=itema.charAt(0);
    // let g1=itema.substring(1);
    // g=g.toUpperCase();
    // const ready=(g+g1);

    li.textContent=`${itema}`;
    button.appendChild(icon);
    li.appendChild(button);
    ul2.appendChild(li); 

    clearUI();
}


ul.addEventListener('click', finalRem);
function finalRem(e){
    let chos;
    if(e.target.parentElement.classList.contains('remove-item')){
         chos=e.target.parentElement.parentElement.textContent;
    }
    // chos=chos.toLowerCase();
    // console.log(chos.textContent);
    
    let itemFromStorage=getItemFromStorage();

    // filter out item to be removed
    itemFromStorage=itemFromStorage.filter((i) => i!==chos)
       
    // Re-set to local storage
        localStorage.setItem('items',JSON.stringify(itemFromStorage));
    
        clearUI();
}

clear.addEventListener('click', clall);
function clall(){
    // let kos=getItemFromStorage();
    let itemfromStorage=getItemFromStorage();
    // console.log(itemfromStorage);
    itemfromStorage.forEach((item) => sara(item));
 
}
function sara(yolyo){
    let chos=yolyo;
    // console.log(chos);
    let itemFromStorage=getItemFromStorage();

    // filter out item to be removed
    itemFromStorage=itemFromStorage.filter((i) => i!==chos)
       
    // Re-set to local storage
        localStorage.setItem('items',JSON.stringify(itemFromStorage));
    
        clearUI();
}

add.addEventListener('click', (e) => e.preventDefault());
add.onclick=function(){
    const ul1=document.querySelector('ul');

    const item=(document.getElementById('item-input').value);
    // let g=item.charAt(0);
    // let g1=item.substring(1);
    // g=g.toUpperCase();
    // const ready=(g+g1);
        
    


    const li=document.createElement('li');
    // li.className="lisi";

    // li.appendChild(document.createTextNode(item));
    // ul1.appendChild(li);
    
    const button=document.createElement('button');
    button.className="remove-item btn-link text-red";
    button.title="Remove item"
    const icon=document.createElement('i');
    icon.className="fa-solid fa-xmark";
    if(item ===''){
        alert('You need to enter an item first');
        return;
    }else{ 
    li.textContent=`${item}`;
    button.appendChild(icon);
    li.appendChild(button);
    ul1.appendChild(li);   
     }
    clearUI();
    addItemtoStorage(item);

it.value='';
// fir.insertAdjacentElement('beforebegin',li);   
}


clear.onclick=function(){
    if(confirm('Are u sure you want to clear the list ?')){
    const items=document.querySelectorAll('li');
    const ul=document.querySelector('ul');


    items.forEach((li) => {
    ul.removeChild(li);
    });

    txfl.style.display='none';
    clear.style.display='none';
    }

}

ul.addEventListener('click',dele);
function dele(e){
    // console.log(e.target);
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove();
    }

    clearUI();
    // e.target.remove();
}

function clearUI(){
const list1=document.querySelectorAll('li');
if(list1.length===0){
    clear.style.display='none';
    txfl.style.display='none';
    
}else{
    clear.style.display='block';
    txfl.style.display='block';
}
}
clearUI();

txfl.addEventListener('input',filcon);
function filcon(e){
    const list1=document.querySelectorAll('li');
    console.log(e.target.value); 
    const text=e.target.value.toLowerCase();

    list1.forEach((li) => {
        const ever=li.firstChild.textContent.toLowerCase();
        if(ever.indexOf(text) !== -1){
            li.style.display='flex';
            
        }else{
            li.style.display='none';
    }})
}

function addItemtoStorage(itema){
    const itemFromStorage=getItemFromStorage();

    // if(localStorage.getItem('items')===null){
    //     itemFromStorage=[];
    // }else {
    //     itemFromStorage=JSON.parse(localStorage.getItem('items'));
    // }
    // add new ite to array
    itemFromStorage.push(itema);

    // Convert to JSON string and set to loca storage
    localStorage.setItem('items',JSON.stringify(itemFromStorage));
    }

function getItemFromStorage() {
    let itemFromStorage;

    if(localStorage.getItem('items')===null){
        itemFromStorage=[];
    }else {
        itemFromStorage=JSON.parse(localStorage.getItem('items'));
    }
    return itemFromStorage;
}

// to shorten it we can do 
// change let itefrom storage  oconst and 
// const itemfromStoraeg=getItemFromStorage();
// and erase if else loop

// we didi thi sbecause DRY - don't repeat yourself;











































// const butt =document.querySelector('i');
// butt.onclick=function(){
    //     console.log('yes');
//     butt.parentNode.remove();
// }



// const all=document.querySelector('.container');




// const all=document.querySelector('.container');

// function dele(e){
//     e.target.remove();
// }

// all.addEventListener('click',dele);




// // console.log(items);
// // console.log(items);
// // clear.onclick=function(){
// //     // items.forEach((li) => {
// // //         li.style.color='blue';
// // //         console.log(li.innerText);
// // console.log(items);
// // //     });
// // }

// console.log(items.length);
// if(items.length===0){
//     clear.remove();

// }


// // function insertElement(){
// //     const filter=devicePixelRatio.querySelector('.filter');

// //     const h1=document.createElement('h1');
// //     h1.textContent='insertedAdjacentElement';

// //     filter.insertAdjacentElement('beforebegin',h1);

// // }




// // clear.onclick=function(){
// //     console.log(items);

// // }

// // clear.addEventListener('click', (e) => e.preventDefault());


// // const items1=document.querySelectorAll('lisi');
// // console.log(object);

// // clear.onclick=function(){
//     // console.log(items1);
// //     console.log(items1);
// //     // items1.forEach((lisi) => {
// //     // ul.removeChild(lisi);
// //     // });
// // }

// // clear.ondblclick=function(){
//     // console.log(items);
// //     items.forEach((li) => {
// //     ul.removeChild(li);
// //     });
// // }

// // clear.onclick=function(){
// //     // function insertText() {
// //     const item=document.querySelector('li:first-child');
// //     item.insertAdjacentText('beforebegin','insertAdjacentText');

// // }













// // const arr=Array.from(items);
// // arr.forEach((li)=>{
// //     console.log(li.innerText);
// // });

// // console.log(items);



// // const listItems = document.querySelectorAll('li');
// // // // this selects all th eelements having class name item
// // console.log(listItems);
// // console.log(listItems[1].innerText);
// // listItems[1].style.color='yellow';


// // const listItems = document.querySelectorAll('.items');
// // // // this selects all th eelements having class name item
// // console.log(listItems[1].innerText);
// // // // it gives th einner text of item at 1

// // // listItem.forEach((item) => {
// //     item.style.color='blue';
// // });
// // listItems[1].style.color='yellow';


// // clear.addEventListener('click', (e) => e.preventDefault());

// // clear.onclick=function(){
    
// // }







// const clear=document.getElementById('clear');
// const it=document.getElementById('item-input');
// const items=document.querySelectorAll('li');
// const add=document.querySelector('.btn');
// const ul=document.querySelector('ul');
// const txfl=document.getElementById('filter');


// document.addEventListener('DOMContentLoaded',displayItems);
// function displayItems(){
//     const itemFromStorage=getItemFromStorage();
//     itemFromStorage.forEach((itemlele) => kall(itemlele)
//     )}
    

// function kall(itema){
   
//     const ul2=document.querySelector('ul');
//     const li=document.createElement('li');
//     // // li.className="lisi";

//     // // li.appendChild(document.createTextNode(item));
//     // // ul1.appendChild(li);
    
//     const button=document.createElement('button');
//     button.className="remove-item btn-link text-red";
//     button.title="Remove item"
//     const icon=document.createElement('i');
//     icon.className="fa-solid fa-xmark";

   
//     // let g=itema.charAt(0);
//     // let g1=itema.substring(1);
//     // g=g.toUpperCase();
//     // const ready=(g+g1);

//     li.textContent=`${itema}`;
//     button.appendChild(icon);
//     li.appendChild(button);
//     ul2.appendChild(li); 

//     clearUI();
// }


// ul.addEventListener('click', finalRem);
// function finalRem(e){
//     let chos;
//     if(e.target.parentElement.classList.contains('remove-item')){
//          chos=e.target.parentElement.parentElement.textContent;
//     }
//     // chos=chos.toLowerCase();
//     // console.log(chos.textContent);
    
//     let itemFromStorage=getItemFromStorage();

//     // filter out item to be removed
//     itemFromStorage=itemFromStorage.filter((i) => i!==chos)
       
//     // Re-set to local storage
//         localStorage.setItem('items',JSON.stringify(itemFromStorage));
    
//         clearUI();
// }

// clear.addEventListener('click', clall);
// function clall(){
//     // let kos=getItemFromStorage();
//     let itemfromStorage=getItemFromStorage();
//     // console.log(itemfromStorage);
//     itemfromStorage.forEach((item) => sara(item));
 
// }
// function sara(yolyo){
//     let chos=yolyo;
//     // console.log(chos);
//     let itemFromStorage=getItemFromStorage();

//     // filter out item to be removed
//     itemFromStorage=itemFromStorage.filter((i) => i!==chos)
       
//     // Re-set to local storage
//         localStorage.setItem('items',JSON.stringify(itemFromStorage));
    
//         clearUI();
// }

// add.addEventListener('click', (e) => e.preventDefault());
// add.onclick=function(){
//     const ul1=document.querySelector('ul');

//     const item=(document.getElementById('item-input').value);
//     // let g=item.charAt(0);
//     // let g1=item.substring(1);
//     // g=g.toUpperCase();
//     // const ready=(g+g1);
        
    


//     const li=document.createElement('li');
//     // li.className="lisi";

//     // li.appendChild(document.createTextNode(item));
//     // ul1.appendChild(li);
    
//     const button=document.createElement('button');
//     button.className="remove-item btn-link text-red";
//     button.title="Remove item"
//     const icon=document.createElement('i');
//     icon.className="fa-solid fa-xmark";
//     if(item ===''){
//         alert('You need to enter an item first');
//         return;
//     }else{ 
//     li.textContent=`${item}`;
//     button.appendChild(icon);
//     li.appendChild(button);
//     ul1.appendChild(li);   
//      }
//     clearUI();
//     addItemtoStorage(item);

// it.value='';
// // fir.insertAdjacentElement('beforebegin',li);   
// }


// clear.onclick=function(){
//     if(confirm('Are u sure you want to clear the list ?')){
//     const items=document.querySelectorAll('li');
//     const ul=document.querySelector('ul');


//     items.forEach((li) => {
//     ul.removeChild(li);
//     });

//     txfl.style.display='none';
//     clear.style.display='none';
//     }

// }

// ul.addEventListener('click',dele);
// function dele(e){
//     // console.log(e.target);
//     if(e.target.parentElement.classList.contains('remove-item')){
//         e.target.parentElement.parentElement.remove();
//     }

//     clearUI();
//     // e.target.remove();
// }

// function clearUI(){
// const list1=document.querySelectorAll('li');
// if(list1.length===0){
//     clear.style.display='none';
//     txfl.style.display='none';
    
// }else{
//     clear.style.display='block';
//     txfl.style.display='block';
// }
// }
// clearUI();

// txfl.addEventListener('input',filcon);
// function filcon(e){
//     const list1=document.querySelectorAll('li');
//     console.log(e.target.value); 
//     const text=e.target.value.toLowerCase();

//     list1.forEach((li) => {
//         const ever=li.firstChild.textContent.toLowerCase();
//         if(ever.indexOf(text) !== -1){
//             li.style.display='flex';
            
//         }else{
//             li.style.display='none';
//     }})
// }

// function addItemtoStorage(itema){
//     const itemFromStorage=getItemFromStorage();

//     // if(localStorage.getItem('items')===null){
//     //     itemFromStorage=[];
//     // }else {
//     //     itemFromStorage=JSON.parse(localStorage.getItem('items'));
//     // }
//     // add new ite to array
//     itemFromStorage.push(itema);

//     // Convert to JSON string and set to loca storage
//     localStorage.setItem('items',JSON.stringify(itemFromStorage));
//     }

// function getItemFromStorage() {
//     let itemFromStorage;

//     if(localStorage.getItem('items')===null){
//         itemFromStorage=[];
//     }else {
//         itemFromStorage=JSON.parse(localStorage.getItem('items'));
//     }
//     return itemFromStorage;
// }

// // to shorten it we can do 
// // change let itefrom storage  oconst and 
// // const itemfromStoraeg=getItemFromStorage();
// // and erase if else loop

// // we didi thi sbecause DRY - don't repeat yourself;











































// // const butt =document.querySelector('i');
// // butt.onclick=function(){
//     //     console.log('yes');
// //     butt.parentNode.remove();
// // }



// // const all=document.querySelector('.container');




// // const all=document.querySelector('.container');

// // function dele(e){
// //     e.target.remove();
// // }

// // all.addEventListener('click',dele);




// // // console.log(items);
// // // console.log(items);
// // // clear.onclick=function(){
// // //     // items.forEach((li) => {
// // // //         li.style.color='blue';
// // // //         console.log(li.innerText);
// // // console.log(items);
// // // //     });
// // // }

// // console.log(items.length);
// // if(items.length===0){
// //     clear.remove();

// // }


// // // function insertElement(){
// // //     const filter=devicePixelRatio.querySelector('.filter');

// // //     const h1=document.createElement('h1');
// // //     h1.textContent='insertedAdjacentElement';

// // //     filter.insertAdjacentElement('beforebegin',h1);

// // // }




// // // clear.onclick=function(){
// // //     console.log(items);

// // // }

// // // clear.addEventListener('click', (e) => e.preventDefault());


// // // const items1=document.querySelectorAll('lisi');
// // // console.log(object);

// // // clear.onclick=function(){
// //     // console.log(items1);
// // //     console.log(items1);
// // //     // items1.forEach((lisi) => {
// // //     // ul.removeChild(lisi);
// // //     // });
// // // }

// // // clear.ondblclick=function(){
// //     // console.log(items);
// // //     items.forEach((li) => {
// // //     ul.removeChild(li);
// // //     });
// // // }

// // // clear.onclick=function(){
// // //     // function insertText() {
// // //     const item=document.querySelector('li:first-child');
// // //     item.insertAdjacentText('beforebegin','insertAdjacentText');

// // // }













// // // const arr=Array.from(items);
// // // arr.forEach((li)=>{
// // //     console.log(li.innerText);
// // // });

// // // console.log(items);



// // // const listItems = document.querySelectorAll('li');
// // // // // this selects all th eelements having class name item
// // // console.log(listItems);
// // // console.log(listItems[1].innerText);
// // // listItems[1].style.color='yellow';


// // // const listItems = document.querySelectorAll('.items');
// // // // // this selects all th eelements having class name item
// // // console.log(listItems[1].innerText);
// // // // // it gives th einner text of item at 1

// // // // listItem.forEach((item) => {
// // //     item.style.color='blue';
// // // });
// // // listItems[1].style.color='yellow';


// // // clear.addEventListener('click', (e) => e.preventDefault());

// // // clear.onclick=function(){
    
// // // }

