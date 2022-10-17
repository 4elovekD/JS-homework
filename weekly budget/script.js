const budget = document.querySelector('.budget-ammount');
const mainBudget = document.querySelector('.budget-ammount__input');
const mainButton = document.querySelector('.budget-ammount__button');
const expensesName = document.querySelector('.expenses-info__name');
const expensesPrice = document.querySelector('.expenses-info__price');
const expensesButton = document.querySelector('.expenses-info__button');
const budgetScale = document.querySelector('#budget');
let budgetRest = document.querySelector('#rest');
const costList = document.querySelector('.current-expenses')
const cost = document.querySelector('li')

mainBudget.focus()
budget.addEventListener('click', addBudget);
expensesButton.addEventListener('click', addExpenses)
/* expensesButton.addEventListener('click', result) */

function addBudget(event){
    event.preventDefault()
    if (event.target.classlist = '.budget-ammount__button' && /^\d{1,10}$/g.test(mainBudget.value)){
        budgetScale.insertAdjacentText('afterbegin',mainBudget.value);
    }
     if (budgetScale.outerText != ""){budget.classList.add('none')}

}

function addExpenses(){
    let nameText = expensesName.value;
    priceNumber = expensesPrice.value;
    const costHtml = `<li>${nameText}: ${priceNumber} $</li>`
    if(nameText != '' && priceNumber != ''){
        costList.insertAdjacentHTML("beforeend", costHtml)
    } else 
    expensesName.value = '';
    expensesPrice.value = '';
    result()
}

function result(){
    let res = mainBudget.value - priceNumber;
    if(budgetRest.outerText == ''){
        Number(budgetRest.insertAdjacentText('afterbegin',res));
    }else {budgetRest.innerHTML = Number(budgetRest.outerText) - priceNumber}

    if(budgetRest.outerText <0){
        alert('You have used up your entire budget for the week!')
    }
    expensesName.value = '';
    expensesPrice.value = ''
}

