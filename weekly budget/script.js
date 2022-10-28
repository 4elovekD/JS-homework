const budget = document.querySelector('.budget-ammount');
const mainBudget = document.querySelector('.budget-ammount__input');
const mainButton = document.querySelector('.budget-ammount__button');
const expensesName = document.querySelector('.expenses-info__name');
const expensesPrice = document.querySelector('.expenses-info__price');
const expensesButton = document.querySelector('.expenses-info__button');
const budgetScale = document.querySelector('#budget');
let budgetRest = document.querySelector('#rest');
const costList = document.querySelector('.current-expenses')

let localData = [];


if (localStorage.getItem("localData")) {
    localData = JSON.parse(localStorage.getItem("localData"));
  }

  
  localData.forEach(itemData =>{
    budgetScale.insertAdjacentText('afterbegin',itemData.value)
    const costHtml = `<li>${itemData.name}: ${itemData.value} $</li>`
    costList.insertAdjacentHTML("beforeend", costHtml)
    Number(budgetRest.insertAdjacentText('afterbegin',itemData.value));
  })

mainBudget.focus()
budget.addEventListener('click', addBudget);
expensesButton.addEventListener('click', addExpenses)
expensesButton.addEventListener('click', result)

function addBudget(event){
    event.preventDefault()
    const addBudgetLocal = {
        value: mainBudget.value
     }
    if (event.target.classlist = '.budget-ammount__button' && /^\d{1,10}$/g.test(addBudgetLocal.value)){
        budgetScale.insertAdjacentText('afterbegin',addBudgetLocal.value);
        localData.push(addBudgetLocal);
    }
    if (budgetScale.outerText != ""){budget.classList.add('none')}



}


function addExpenses(){
    const nameText = expensesName.value;
    priceNumber = expensesPrice.value;

    const addExpenseLocal = {
        name: nameText,
        value: priceNumber
    }

    localData.push(addExpenseLocal);

    const costHtml = `<li>${addExpenseLocal.name}: ${addExpenseLocal.value} $</li>`
    if(addExpenseLocal.name != '' && addExpenseLocal.value != ''){
        costList.insertAdjacentHTML("beforeend", costHtml)
    } else return
/*     result() */
}

function result(){
    let res = mainBudget.value - priceNumber;

    const addResultLocal = {
        value: res,
        restValue: budgetRest.outerText
    }

    if(addResultLocal.restValue == ''){
        Number(budgetRest.insertAdjacentText('afterbegin',addResultLocal.value));
    }else {budgetRest.innerHTML = Number(addResultLocal.restValue) - priceNumber}

    if(addResultLocal.restValue <0){
        alert('You have used up your entire budget for the week!')
    }
    localData.push(addResultLocal);
    expensesName.value = '';
    expensesPrice.value = ''
    saveToLocalStorage()
}

function saveToLocalStorage(){
    localStorage.setItem('localData', JSON.stringify(localData))
}
