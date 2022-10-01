const btn1 = document.querySelector('.card-buttons__one');
const btn2 = document.querySelector('.card-buttons__two');
const btn3 = document.querySelector('.card-buttons__three');
const btn4 = document.querySelector('.card-buttons__four');
const btn5 = document.querySelector('.card-buttons__five');
const submitButton = document.querySelector('.card__submit-btn');
const mainCard = document.querySelector('.main-card');
const thankYouCard = document.querySelector('.thankyou-card');
const thankYouResult = document.querySelector('.thankyou-card__result');

const buttons = [btn1, btn2, btn3, btn4, btn5];

let value;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    
    buttons.forEach(btn => {
      if (btn.classList.contains('btn-active')) {
        btn.classList.remove('btn-active');
      }
    })
    button.classList.toggle('btn-active');
    value = button.innerHTML;
  })
});

submitButton.addEventListener('click', () => {
  if (!value) {
    return;
  }

  mainCard.classList.add('hidden');
  thankYouCard.classList.remove('hidden');
  thankYouResult.innerHTML = `You selected ${value} out of 5`;  

})