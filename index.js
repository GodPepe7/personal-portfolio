const callToActionBtn = document.querySelector(".call-to-action");
const projectsSection = document.querySelector(".projects-section");

const scrollToProjects = () => {
  projectsSection.scrollIntoView({ behavior: "smooth", top: 100 });
};

callToActionBtn.addEventListener("click", scrollToProjects);
