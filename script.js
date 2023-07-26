const container = document.querySelector('.container');
let divx;
for(let i =0 ; i<256;i++){
  divx = document.createElement('div');
  container.appendChild(divx);
  divx.classList.add("divSquare");
}

const divs = document.querySelectorAll('.divSquare');
divs.forEach(
    (di)=>{di.addEventListener('mouseover',
    ()=>{di.classList.add('hovered')}
    );

    }
)