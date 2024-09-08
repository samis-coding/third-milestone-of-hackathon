window.onload = () => {
    // Retrieve resume data from localStorage
    const resumeData = JSON.parse(localStorage.getItem('resumeData') || '{}');
    
    // Populate the resume display with the stored data
    (document.getElementById('name') as HTMLElement).innerText = resumeData.name;
    (document.getElementById('avatar') as HTMLImageElement).src = resumeData.avatar;
    (document.getElementById('contact') as HTMLElement).innerText = `Contact: ${resumeData.contact}`;
    (document.getElementById('linkedin') as HTMLAnchorElement).href = resumeData.linkedin;
    (document.getElementById('instagram') as HTMLAnchorElement).href = resumeData.instagram;
    (document.getElementById('github') as HTMLAnchorElement).href = resumeData.github;
    (document.getElementById('education') as HTMLElement).innerText = resumeData.education;
    (document.getElementById('experience') as HTMLElement).innerText = resumeData.experience;
  };
  