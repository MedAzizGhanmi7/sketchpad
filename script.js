const container = document.querySelector('.container');
let divx;
let promptVal;
for(let i =0 ; i<256;i++){
  divx = document.createElement('div');
  container.appendChild(divx);
  divx.classList.add("divSquare");
}

const divs = document.querySelectorAll('.divSquare');
divs.forEach(
    (di)=>{di.addEventListener('mouseover',
    ()=>{di.classList.add('hovered')}
    ); }
);

const change = document.querySelector('#change');
change.addEventListener('click',
()=>{
   promptVal =Number(prompt("enter the number of squares per side MAX 100"));
   console.log(promptVal);
}
)