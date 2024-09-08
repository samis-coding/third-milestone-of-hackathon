(() => {
    // Get the form and elements once
    const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
  
    // Handle Form Submission
    resumeForm.addEventListener('submit', (event: Event) => {
      // Prevent the default form submission action
      event.preventDefault();
  
      // Collect form data into a single object
      const formData = {
        name: (document.getElementById('name-input') as HTMLInputElement).value,
        avatar: (document.getElementById('avatar-input') as HTMLInputElement).value,
        contact: (document.getElementById('contact-input') as HTMLInputElement).value,
        linkedin: (document.getElementById('linkedin-input') as HTMLInputElement).value,
        instagram: (document.getElementById('instagram-input') as HTMLInputElement).value,
        github: (document.getElementById('github-input') as HTMLInputElement).value,
        education: (document.querySelector('.school-input') as HTMLInputElement).value,
        experience: (document.querySelector('.job-title-input') as HTMLInputElement).value,
      };
  
      // Store the collected form data in localStorage
      localStorage.setItem('resumeData', JSON.stringify(formData));
  
      // Redirect to page2.html after storing data
      window.location.href = 'page2.html';
    });
  })();
  