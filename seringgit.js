document.addEventListener('DOMContentLoaded', function () {
    var monthlyDeductionForm = document.getElementById('monthlyDeductionForm');
    monthlyDeductionForm.addEventListener('submit', function (event) {
        var amount = document.getElementById('amount').value;
        if (amount <= 0) {
            alert('Please enter a valid contribution amount.');
            event.preventDefault(); 
        }
    });

    var showContactInfoButton = document.getElementById('showContactInfo');
    var contactInfoSection = document.getElementById('contactInfo');
    showContactInfoButton.addEventListener('click', function () {
        contactInfoSection.style.display = (contactInfoSection.style.display === 'none') ? 'block' : 'none';
    });
});
