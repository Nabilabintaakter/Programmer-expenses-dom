// add event listener for calculate button
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    // input validation
    if(income <= 0 || isNaN(income)){
        document.getElementById('income-error').classList.remove('hidden');
        return;
    }
    else if(software <= 0 || isNaN(software)){
        document.getElementById('software-error').classList.remove('hidden');
        return;
    }
    else if(courses <= 0 || isNaN(courses)){
        document.getElementById('courses-error').classList.remove('hidden');
        return;
    }
    else if(internet <= 0 || isNaN(internet)){
        document.getElementById('internet-error').classList.remove('hidden');
        return;
    }
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    if(totalExpenses > income){
        document.getElementById('logic-error').classList.remove('hidden');
        return;
    }

    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);

    document.getElementById('results').classList.remove('hidden');

    // history tab functionalities

    const historyItem = document.createElement('div');
    historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500";

    historyItem.innerHTML = `
    <p class = "text-xs text-gray-500"> ${new Date().toLocaleDateString()}</p>
    <p class = "text-xs text-gray-700 font-bold" >Income: $${income.toFixed(2)} </p>
    <p class = "text-xs text-gray-500" >Expenses: $${totalExpenses.toFixed(2)} </p>
    <p class = "text-xs text-gray-500" >Balance: $${balance.toFixed(2)} </p>
    `;
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild)
});

// add event listener for calculate savings button

const calculateSavings = document.getElementById('calculate-savings');
calculateSavings.addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    const savings = parseFloat(document.getElementById('savings').value);
    const savingsAmount = (balance * savings) / 100;
    const remainingBalance = balance - savingsAmount;

    document.getElementById('savings-amount').innerText = savingsAmount.toFixed(2);

    document.getElementById('remaining-balance').innerText = remainingBalance.toFixed(2);
})


// add event listener to history tab

document.getElementById('history-tab').addEventListener('click', function () {
    document.getElementById('history-tab').classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    document.getElementById('history-tab').classList.remove('text-gray-600');

    document.getElementById('assistant-tab').classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    document.getElementById('assistant-tab').classList.add('text-gray-600');

    document.getElementById('expense-form').classList.add('hidden');

    document.getElementById('results').classList.remove('hidden');

    document.getElementById('history-section').classList.remove('hidden');
})


// add event listener to assistant tab

document.getElementById('assistant-tab').addEventListener('click', function () {
    document.getElementById('assistant-tab').classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    document.getElementById('assistant-tab').classList.remove('text-gray-600');

    document.getElementById('history-tab').classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    document.getElementById('history-tab').classList.add('text-gray-600');

    document.getElementById('expense-form').classList.remove('hidden');

    document.getElementById('results').classList.add('hidden');

    document.getElementById('history-section').classList.add('hidden');

})
