document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('transaction-modal');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', event => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
function confirmAccount() {
    const accountNumber = document.getElementById('account-number').value;
    if (accountNumber) {
        document.getElementById('confirm-account-number').textContent = accountNumber;
        document.getElementById('confirm-modal').style.display = 'block';
    } else {
        alert("Please enter an account number.");
    }
}

function confirmAccount() {
    const accountNumber = document.getElementById('account-number').value;
    if (accountNumber) {
        document.getElementById('confirm-account-number').textContent = accountNumber;
        document.getElementById('confirm-modal').style.display = 'block';
    } else {
        alert("Please enter an account number.");
    }
}

function proceedToPin() {
    const accountNumber = document.getElementById('account-number').value;
    const amount = document.getElementById('amount').value;
    if (accountNumber && amount) {
        sessionStorage.setItem('accountNumber', accountNumber);
        sessionStorage.setItem('amount', amount);
        window.location.href = 'pin.html';
    }
}

function transferFunds() {
    const pin = document.getElementById('pin').value;
    if (pin) {
        const accountNumber = sessionStorage.getItem('accountNumber');
        const amount = sessionStorage.getItem('amount');
        alert(`Transfer of $${amount} to account number ${accountNumber} is successful.`);
        sessionStorage.clear();
        window.location.href = 'transfers.html';
    } else {
        document.getElementById('error-modal').style.display = 'block';
    }
}

function redirectToTransfer() {
    document.getElementById('error-modal').style.display = 'none';
    window.location.href = 'transfers.html';
}

document.querySelectorAll('.close').forEach(button => {
    button.onclick = function() {
        document.getElementById('error-modal').style.display = 'none';
    }
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        document.getElementById('error-modal').style.display = 'none';
    }
}
