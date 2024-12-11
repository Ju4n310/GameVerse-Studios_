document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('budget-form');
    const productSelect = document.getElementById('product');
    const deliveryTimeInput = document.getElementById('delivery-time');
    const extrasCheckboxes = document.querySelectorAll('.extra');
    const finalBudgetDisplay = document.getElementById('final-budget');

    function calculateBudget() {
        let basePrice = parseFloat(productSelect.value);
        let extrasPrice = Array.from(extrasCheckboxes)
            .filter(checkbox => checkbox.checked)
            .reduce((sum, checkbox) => sum + parseFloat(checkbox.value), 0);
        let discount = (parseInt(deliveryTimeInput.value) < 30) ? 0.1 : 0; 
        let totalPrice = (basePrice + extrasPrice) * (1 - discount);
        finalBudgetDisplay.textContent = totalPrice.toFixed(2) + '€';
    }

    form.addEventListener('change', calculateBudget);
    form.addEventListener('reset', () => finalBudgetDisplay.textContent = '0€');
});
