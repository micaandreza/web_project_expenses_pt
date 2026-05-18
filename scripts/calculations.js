let budgetValue = 0
let totalExpensesValue = 0
let balanceColor = "green"
const  expenseEntries = [
    ["groceries", 33],
    ["restaurants", 50],
    ["transport", 12],
    ["home", 70],
    ["subscriptions", 14],
    ["groceries", 28],
    ["subscriptions", 12]
];
for ( let expense of expenseEntries ) {
    totalExpensesValue += expense[1];
}

function calculateAverageExpense(){
    if (expenseEntries.length === 0){
    return 0;     }
let total = 0; 
for(let i = 0; i < expenseEntries.length; i++ ){
    total += expenseEntries[i][1];
}

return total/expenseEntries.length;}

function calculateBalance() {
    return budgetValue - totalExpensesValue;
}

function updateBalanceColor(){
    const balanceValue = calculateBalance()
    if (balanceValue < 0){
        balanceColor = "red";
    } else if (balanceValue < budgetValue * 0.25){
        balanceColor = "orange";
    } else {balanceColor = "green"}
}

function calculateCategoryExpenses(categoryName){
    let total = 0;
    for ( let i = 0; i < expenseEntries.length; i++)
    { if (expenseEntries[i][0] === categoryName){
        total += expenseEntries[i][1];
    }
    } return total;
}

function calculateLargestCategory() {
    const categories = [ "groceries",
        "restaurants", "transport", 
        "home", "subscriptions"];
        let largesCategory ="categories";
        let maxTotal = 0;

    for (let i = 0; i < categories.length; i++) {
       const currentCategory = categories[i];
        const currentTotal = calculateCategoryExpenses(currentCategory);
        if (currentTotal > maxTotal ){
            maxTotal = currentTotal;
            largesCategory = currentCategory;
        }
    }
    return largesCategory;
}

function addExpenseEntry(newEntry){
    if (newEntry[1] >= 0 ){
 expenseEntries.push(newEntry);
 totalExpensesValue += newEntry[1];
    }
}