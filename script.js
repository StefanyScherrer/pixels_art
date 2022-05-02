const container = document.querySelector('#pixel-board')

function setPenColor(color){ 
  colorColor = color
}


function setPixelColor (pixel){
    pixel.style.backgroundColor = colorColor;
}





function addEventsHandleButtons() {
    const buttonBlack = document.getElementById('black')
    const buttonYellowgreen = document.getElementById('yellowgreen')
    const buttonAqua = document.getElementById ('aqua')
    const buttonCoral = document.getElementById ('coral')
    
    buttonBlack.addEventListener('click', function() {
      buttonBlack.classList.add('selected');
      buttonYellowgreen.classList.remove('selected');
      buttonAqua.classList.remove('selected');
      buttonCoral.classList.remove('selected');
    })
    buttonYellowgreen.addEventListener('click', function() {
        buttonYellowgreen.classList.add('selected');
        buttonBlack.classList.remove('selected');
        buttonAqua.classList.remove('selected');
        buttonCoral.classList.remove('selected');

    })
    buttonAqua.addEventListener('click', function() {
        buttonAqua.classList.add('selected');
        buttonBlack.classList.remove('selected');
        buttonYellowgreen.classList.remove('selected');
        buttonCoral.classList.remove('selected');

    })
    buttonCoral.addEventListener('click', function() {
        buttonCoral.classList.add('selected');
        buttonBlack.classList.remove('selected');
        buttonYellowgreen.classList.remove('selected');
        buttonAqua.classList.remove('selected');

    })

  }
  addEventsHandleButtons()
  //   buttonX.addEventListener('click', function() {
  //     buttonO.classList.remove('selected');
  //     buttonX.classList.add('selected');
  //   })
  //   buttonO.addEventListener('click', function() {
  //     buttonX.classList.remove('selected');
  //     buttonO.classList.add('selected');
  //   })
  // }
  
  // function addEventsHandleButtons() {
  //   const buttonChange = document.getElementsByClassName('buttonChange')
  
  //   for (let index = 0; index < buttonChange.length; index += 1) {
  //     buttonChange[index].addEventListener('click', function(event) {
  //       const selected = document.querySelector('.selected')
  //       selected.classList.remove('selected')
  //       event.target.classList.add('selected')
  //     })
  //   }
  // } 

let btn = document.querySelector('#clear-board');
btn.addEventListener("click", () => {
    
   location.reload();
}); 
// isso para html <button class='refresh' id= "clear-board">Limpar</button>, como classe porque o exercício já pede outro id

// obs: colocar sÓ no html <input type="reset" id= "clear-board" value="Limpar"></input> também não funciona

// function reloadGame() {
//     const buttonReset = document.getElementById('clear-board')
//     //se eu colocar outra função aqui para preencher o quadro de pixels ele 'quebra' meu cód porque fiz pixel por pixel
// }




