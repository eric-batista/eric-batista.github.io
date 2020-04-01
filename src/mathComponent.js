const mathProjects = [
  {
      img: "./public/linear-logo.svg",
      imgAlt: "Linear Algebra",
      name: "Linear Algebra Manim",
      description: "Projeto consiste em um repositório de para o curso de Álgebra linear I e Álgebra linear II do curso de Matemática Aplicada e Computacional, utilizando Python e Manim para criar animações e LaTeX para escrever os textos.",
      link: "Git Repo",
      repo: "https://github.com/Finnkell/Linear-Algebra",
  },
  {
      img: "./public/angelos.png",
      imgAlt: "Angelos Adventure",
      name: "Angelo's Adventure",
      description: "Projeto de desenvolvimento de jogos utilizando programação em Scratch. Desenvolvido pelos alunos Eric Batista e Carlos Eduardo, no projeto de extensão em robótica - DEMAT",
      link: "Scratch Game",
      repo: "https://scratch.mit.edu/projects/284143112/",
  },
];

count = 1;

mathProjects.forEach(element => {
 var html = document.getElementById("math-elements");
 
 html.insertAdjacentHTML('beforeend', `
      <div class="col-sm-3" >
          <div class="img-container">
              <img class="img-fluid rounded" src=${element.img} alt=${element.imgAlt}>
          </div>
          <h1>${element.name}</h1>
          <p>${element.description}</p>
          <a href=${element.repo} target="_blank" >${element.link}</a>
      </div>
  `);

  count++;
  
  if (count == 4) {
      html.insertAdjacentHTML('beforeend', '<div class="w-100"></div>');
      count = 0;
  }
});