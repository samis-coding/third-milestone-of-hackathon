window.onload = function () {
    // Retrieve resume data from localStorage
    var resumeData = JSON.parse(localStorage.getItem('resumeData') || '{}');
    // Populate the resume display with the stored data
    document.getElementById('name').innerText = resumeData.name;
    document.getElementById('avatar').src = resumeData.avatar;
    document.getElementById('contact').innerText = "Contact: ".concat(resumeData.contact);
    document.getElementById('linkedin').href = resumeData.linkedin;
    document.getElementById('instagram').href = resumeData.instagram;
    document.getElementById('github').href = resumeData.github;
    document.getElementById('education').innerText = resumeData.education;
    document.getElementById('experience').innerText = resumeData.experience;
};
