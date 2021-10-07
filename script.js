function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button and the JS used an external script!!!!';
    document.body.appendChild(para);
  }
  
  //const buttons = document.querySelectorAll('button');
  const buttons = document.getElementsByClassName("button2");


  
  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }