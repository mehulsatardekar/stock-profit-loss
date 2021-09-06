const initialpriceElem = document.querySelector('#initialprice')
const stockquantityElem = document.querySelector('#stockquantity')
const currentpriceElem = document.querySelector('#currentprice')
const resultBtn = document.querySelector('#calres')
const result = document.querySelector('.result')
const bgimg = document.querySelector('.img');
const sadUrl = 'https://thumbs.dreamstime.com/b/children-boy-thinking-smile-idea-chalkboard-cute-kid-imagine-classroom-space-your-text-education-concept-books-102349052.jpg';
const happyUrl = 'https://img.freepik.com/free-vector/happy-young-couple-having-fun-girl-guy-dancing-party-celebrating-good-news-flat-illustration_74855-10820.jpg?size=338&ext=jpg';
resultBtn.addEventListener('click',()=>{

    const init_price = Number(initialpriceElem.value);
    const quantity = Number(stockquantityElem.value);
    const curr_price = Number(currentpriceElem.value);

    if(init_price>0 && quantity>0 && curr_price>0){
    if(init_price > curr_price){
        let loss = ((init_price - curr_price) * quantity).toFixed(2);
        let loss_per = ((loss / (init_price*quantity)) * 100).toFixed(2);
        result.innerText =`Your loss is ${loss} and loss percentage is ${loss_per}%`;
        bgimg.innerHTML = `<img src=${sadUrl} class='sadimg' />`
        result.classList.add('success');
    }else if(init_price < curr_price){
        let profit = ((curr_price - init_price) * quantity).toFixed(2);
        let profit_per = ((profit / (init_price*quantity)) * 100).toFixed(2);
        result.innerText = `Your profit is ${profit} and profit percentage is ${profit_per}%`;
        bgimg.innerHTML = `<img src=${happyUrl} class='sadimg' />`
        result.classList.add('success');
    }else{
        result.innerText=`No Loss & No Profit`;
    }
  }else{
      result.innerText=`All values Must Be Greater than Zero`;
      bgimg.innerText='';
  }

})

