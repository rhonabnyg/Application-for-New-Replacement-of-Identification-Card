document.addEventListener('DOMContentLoaded', function () {
    var checkboxes = document.querySelectorAll('.checkbox-row input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            checkboxes.forEach(function (otherCheckbox) {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                }
            });
        });
    });

    document.querySelector('form').addEventListener('submit', function (event) {
        var studentNumber = document.getElementById('stud_number').value.trim();
        var firstName = document.getElementById('first_name').value.trim();
        var middleName = document.getElementById('middle_name').value.trim();
        var lastName = document.getElementById('last_name').value.trim();
        var dob = document.getElementById('dob').value.trim();
        var college = document.getElementById('college').value.trim();
        var courseSection = document.getElementById('course_section').value.trim();
        var homeAddress = document.getElementById('home_address').value.trim();
        var phoneNumber = document.getElementById('Phone_number').value.trim();
        var email = document.getElementById('email_address').value.trim();
        var completeName = document.getElementById('complete_name').value.trim();
        var emergencyNumber = document.getElementById('number').value.trim();
        var emergencyAddress = document.getElementById('ddress').value.trim();

        if (studentNumber === '' || firstName === '' || middleName === '' || lastName === '' || dob === '' || college === '' || courseSection === '' || homeAddress === '' || phoneNumber === '' || email === '' || completeName === '' || emergencyNumber === '' || emergencyAddress === '') {
            alert('Please fill in all required fields.');
            event.preventDefault();
            return false;
        }
    });
});
