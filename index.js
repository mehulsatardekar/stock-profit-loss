const initialpriceElem = document.querySelector('#initialprice')
const stockquantityElem = document.querySelector('#stockquantity')
const currentpriceElem = document.querySelector('#currentprice')
const resultBtn = document.querySelector('#calres')
const result = document.querySelector('.result')
resultBtn.addEventListener('click',()=>{

    const initialPrice = Number(initialpriceElem.value);
    const stockquantity = Number(stockquantityElem.value);
    const currentprice = Number(currentpriceElem.value);
    let res=0, percentage=0;

    if(initialPrice>0 && stockquantity>0 && currentprice>0){
    if(currentprice>initialPrice){
        res = (currentprice - initialPrice) *stockquantity;
        percentage = (res/initialPrice) *100;
        result.innerText =`Your profit is ${res} and profit percentage is ${percentage.toFixed(3)}%`;
        result.classList.add('success');
    }else if(initialPrice> currentprice){
        res = (initialPrice - currentprice) *stockquantity;
        percentage = (res/ initialPrice) *100;
        result.innerText = `Your loss is ${res} and loss percentage is ${percentage.toFixed(3)}%`;
        result.classList.add('danger');
    }else{
        result.innerText=`No Loss & No Profit`;
    }
  }else{
      result.innerText=`All values Must Be Greater than Zero`;
  }

})

