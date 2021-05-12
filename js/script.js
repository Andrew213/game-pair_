
import {soundButton,soundTheme,soundCJ,soundCOP,soundSmoke,soundRyder,soundEnd,soundLoc,soundWu,soundTrain,soundDogg,soundNiko,soundZero, soundCatalina,soundBomj,soundDiller, soundCesar, soundKendli,soundPulaski, soundDenise, soundSweet, soundTruth} from './sound.js';
import {shuffle,cardsArrEasy,cardsArrMedium,cardsArrHard} from './data.js';

{

const selectEl = document.querySelector('.select');
const choiceEl = document.querySelector('.choices');

choiceEl.addEventListener('change', (event) => {

      if(selectEl.textContent === 'Легко'){
         startGame(cardsArrEasy, 1500,800);
         choiceEl.style.display = 'none';
         
      }else if (selectEl.textContent === 'Нормально'){
         startGame(cardsArrMedium, 2000,800);
         choiceEl.style.display = 'none';
      }else{
        
        
         startGame(cardsArrHard, 3000,1000);
      //    let cardEl = document.querySelectorAll('.card__inner');
      //   Array.from(cardEl).forEach(el => {el.style.cssText = 'width:100px;height:200px';})
         choiceEl.style.display = 'none';
      }
      
      });



function endGame (){

const blockHidden = document.querySelector('.main__btn');
const containerEl = document.querySelector('.main__container');
soundNiko.stop();
soundTheme.stop();
soundEnd.play();
blockHidden.classList.add('main__btn--active');
containerEl.classList.add('main__container--hide');
setTimeout(()=>{containerEl.style.display='none'},1000);

blockHidden.addEventListener('mouseover', ()=>{soundButton.play()})

blockHidden.addEventListener('click', event => {

   const resetBtnEl = event.target.closest('.main__btn');
   
   if(resetBtnEl){
     
      blockHidden.classList.remove('main__btn--active');
      location.reload();
   }
})

}

function startGame (cardsObjArr,closingDelay,mismatchesDelay){

let itemsArray = [];
localStorage.setItem('choice', JSON.stringify(itemsArray));
let choicesArr = JSON.parse(localStorage.getItem('choice'));

shuffle(cardsObjArr).forEach((el,index) => {

   const containerEl = document.querySelector('.main__container');

   el.id = index + 1;
   
   containerEl.insertAdjacentHTML('beforeend', el.htmlCode);

});

let resetCard = function(cardInnerEl,cardObj){
   setTimeout(() => {
      cardInnerEl.classList.remove('card__inner--active');
      choicesArr.shift(cardObj);
      localStorage.setItem('choice', JSON.stringify(choicesArr));
   }, closingDelay,cardInnerEl,cardObj);
} 

document.addEventListener('click', event => {

   const cardEl = event.target.closest('.card'); 
   const cardBackEl = event.target.closest('.card__back');
   const cardInnerEl = event.target.closest('.card__inner');
   const cardInnerNode = document.querySelectorAll('.card__inner');
   
   const indexCardEl = [...document.querySelectorAll('.main__container > .card')].indexOf(cardEl);
   const cardObj = cardsObjArr[indexCardEl];

   if(cardBackEl){

      if(!cardEl.classList.contains('card__inner--active')){

         cardInnerEl.classList.add('card__inner--active');

         choicesArr.push(cardObj);

         localStorage.setItem('choice', JSON.stringify(choicesArr));

         resetCard(cardInnerEl,cardObj)
      }


      if(choicesArr.length > 2){

         let id = window.setTimeout(function() {}, 0);

         while (id--) {window.clearTimeout(id)};

         cardInnerNode.forEach(el => el.classList.remove('card__inner--active'));

         choicesArr =  [];

         localStorage.setItem('choice', JSON.stringify(choicesArr));

         cardInnerEl.classList.add('card__inner--active');

         choicesArr.push(cardObj);

         localStorage.setItem('choice', JSON.stringify(choicesArr));

         resetCard(cardInnerEl,cardObj)
      }
    
      const cardInnerActiveArr = [...document.querySelectorAll('.card__inner--active')];

      const firstCardObj = choicesArr[0];
      const secondCardObj = choicesArr[1];

      if(choicesArr.length === 2 && firstCardObj.name !== secondCardObj.name){

         let id = window.setTimeout(function() {}, 0);

         while (id--) {window.clearTimeout(id)};

         let mismatchesTimeout = setTimeout(()=>{
            cardInnerActiveArr.forEach(el =>{
               el.classList.remove('card__inner--active');
               choicesArr =  [];
               localStorage.setItem('choice', JSON.stringify(choicesArr));
            } )
         },mismatchesDelay)
       
      }
      if(choicesArr.length === 2){

         let firstCard = choicesArr[0];
         let secondCard = choicesArr[1];

         if(firstCard.name === secondCard.name && firstCard.id !== secondCard.id){

            let cardsNode = document.querySelectorAll('.card');
            let cardsAllArr = Array.from(cardsNode);
                  
            cardsAllArr.forEach(el2 => {
               if(el2.outerHTML.replace(/ card__inner--active/g, '') === cardObj.htmlCode){
               
               el2.querySelector('.card__inner').style.cssText = 'transform: rotateY(180deg);'
                  
               }
            })

            switch (firstCard.name && secondCard.name) {
               case 'Ryder':
                  soundRyder.play()
                  break;
               case 'Big-Smoke':
                  soundSmoke.play()
                  break;
               case 'CJ':
                  soundCJ.play()
                  break;
               case 'LOC':
                  soundLoc.play()
                  break;
               case 'COP':
                  soundCOP.play()
                  break;  
               case 'NIKO':
                  soundTheme.stop()
                  soundNiko.play()
                  break;    
               case 'SWEET':
                  soundSweet.play()
                  break;
               case 'CESAR':
                  soundCesar.play()
                  break;
               case 'TRAIN':
                  soundTrain.play()
                  break;
               case 'ZERO':
                  soundZero.play()
                  break;
               case 'WU':
                  soundWu.play()
                  break;
               case 'CATALINA':
                  soundCatalina.play()
                  break;
               case 'BOMJ':
                  soundBomj.play()
                  break;
               case 'SWEET':
                  soundSweet.play()
                  break;
               case 'KENDLI':
                  soundKendli.play()
                  break;
               case 'DOGG':
                  soundDogg.play()
                  break;
               case 'PULASKI':
                  soundPulaski.play()
                  break;
               case 'DILLER':
                  soundDiller.play()
                  break;   
               case 'TRUTH':
                  soundTruth.play()
                  break;
               case 'DENIS':
                  soundDenise.play()
                  break;       
            }
            const test = document.querySelectorAll('[style="transform: rotateY(180deg);"]');
            if(test.length === cardsObjArr.length){
               endGame();
            }
         }
         
      }

   }
    // ========GAME OVER===============
 



})
}

}