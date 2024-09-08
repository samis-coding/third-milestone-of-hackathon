(function () {
    // Get the form and elements once
    var resumeForm = document.getElementById('resume-form');
    // Handle Form Submission
    resumeForm.addEventListener('submit', function (event) {
        // Prevent the default form submission action
        event.preventDefault();
        // Collect form data into a single object
        var formData = {
            name: document.getElementById('name-input').value,
            avatar: document.getElementById('avatar-input').value,
            contact: document.getElementById('contact-input').value,
            linkedin: document.getElementById('linkedin-input').value,
            instagram: document.getElementById('instagram-input').value,
            github: document.getElementById('github-input').value,
            education: document.querySelector('.school-input').value,
            experience: document.querySelector('.job-title-input').value,
        };
        // Store the collected form data in localStorage
        localStorage.setItem('resumeData', JSON.stringify(formData));
        // Redirect to page2.html after storing data
        window.location.href = 'page2.html';
    });
})();
