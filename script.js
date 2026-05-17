const elements = document.querySelectorAll(
  ".about, .skills, .projects, .contact"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

});

elements.forEach((element) => {

  element.classList.add("hidden");

  observer.observe(element);

});

function projetos() {
  window.location.href = "#projetos";
}

function contato() {
  window.location.href = "#contato";
}