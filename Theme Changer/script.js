const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");
const head=document.querySelector("h1");
const addText= (text)=>{
    const p=document.createElement('p');
    p.innerHTML=`${text}`;
    document.querySelector('.container').appendChild(p);
    p.style.color='white';
   }
   
const remove=()=>{
    const te=document.querySelector('p')
    te.remove();
}

buttons.forEach(function(button){
    // console.log(button)
    button.addEventListener('click',function(e){
        console.log(e.target)
        if(e.target.id==='black'){
            body.style.backgroundColor=e.target.id;
            head.style.color='white';
            const element=document.getElementsByTagName('p');
            // console.log(element);
            if(element.length>0){
                remove();
            }
            addText(`${e.target.id} colour it is`);
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
            head.style.color='black';
            const element=document.getElementsByTagName('p');
            // console.log(element);
            if(element.length>0){
                remove();
            }
            // remove();
            addText(`${e.target.id} colour it is`);
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
            head.style.color='black';
            const element=document.getElementsByTagName('p');
            // console.log(element);
            if(element.length>0){
                remove();
            }
            // remove();
            addText(`${e.target.id} colour it is`);
        }
        if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id;
            head.style.color='black';
            const element=document.getElementsByTagName('p');
            // console.log(element);
            if(element.length>0){
                remove();
            }
            // remove();
            addText(`${e.target.id} colour it is`);
        }
    });
});