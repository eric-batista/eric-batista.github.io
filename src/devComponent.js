const devProjects = [
    {
        img: "./public/omni8-logo.svg",
        imgAlt: "Tindev",
        name: "Semana Omnistack 8.0",
        description: "Aplicativo desenvolvido na Semana Omnistack 8.0, consiste em um 'clone' do Tinder para desenvolvedores. Tecnologias utilizadas: NodeJS, ReactJS e React Native.",
        link: "Git Repo",
        repo: "https://github.com/Finnkell/Tindev",
    },
    // {
    //     img: "./public/omni9-logo.svg",
    //     imgAlt: "Arcnc",
    //     name: "Semana Omnistack 9.0",
    //     description: "Aplicativo desenvolvido na Semana Omnistack 8.0, consiste em um clone do Airbnb. Tecnologias utilizadas: NodeJS, ReactJS e React Native.",
    //     link: "Git Repo",
    //     repo: "https://github.com/Finnkell/Arcnc",
    // },
    // {
    //     img: "./public/omni10.png",
    //     imgAlt: "Arcnc",
    //     name: "Semana Omnistack 10.0",
    //     description: "Aplicativo desenvolvido na Semana Omnistack 10.0, consiste em um dev finder, semelhante ao aplicativo da Uber. Tecnologias utilizadas: NodeJS, ReactJS, React Native e Expo.",
    //     link: "Git Repo",
    //     repo: "https://github.com/Finnkell/Arcnc",
    // },
    // {
    //     img: "./public/omni10.png",
    //     imgAlt: "Arcnc",
    //     name: "Semana Omnistack 11.0",
    //     description: "Aplicativo desenvolvido na Semana Omnistack 11.0. Tecnologias utilizadas: NodeJS, ReactJS, React Native e Expo.",
    //     link: "Git Repo",
    //     repo: "https://github.com/Finnkell/Be-the-hero",
    // },
    {
        img: "./public/Logo.svg",
        imgAlt: "Doe",
        name: "Maratona Dev 3.0",
        description: "Aplicativo desenvolvido na Maratona Dev 3.0, consiste em um site para doação de sangue, em que mostra os últimos doadoes em tela. Tecnologias utilizadas: PostgreSQL, HTML, CSS e JS.",
        link: "Git Repo",
        repo: "https://github.com/Finnkell/Doe-maratonaDev",
    },
    {
        img: "./public/nu-logo.svg",
        imgAlt: "Nubank",
        name: "React Native Nubank UI clone",
        description: "Clone da interface da Nubank, utilizando React Native.",
        link: "Git Repo",
        repo: "https://github.com/Finnkell/Nubank",
    },
    {
        img: "./public/whatsapp.svg",
        imgAlt: "Whatsapp",
        name: "Flutter Whatsapp UI clone",
        description: "Clone da interface do aplicativo WhatsApp. Desenvolvido em Flutter.",
        link: "Git Repo",
        repo: "https://github.com/Finnkell/flutter-whatsapp",
    },
    {
        img: "./public/placeholder.png",
        imgAlt: "FitnessApp",
        name: "Flutter Health and Fitnnes App",
        description: "Aplicativo que consiste em três telas, com o tema de Fitness App. Desenvolvido em Flutter.",
        link: "Git Repo",
        repo: "https://github.com/Finnkell/health-fitness-app",
    },
    {
        img: "./public/placeholder.png",
        imgAlt: "FitnessApp",
        name: "Flutter Infinite Lazily Loaded List",
        description: "Aplicativo que consiste em uma lista infinita de nomes de startups gerados aleatoriamente. Desenvolvido em Flutter",
        link: "Git Repo",
        repo: "https://github.com/Finnkell/Infinite-lazily-loaded-list",
    },
];

let count = 1;

devProjects.forEach(element => {
   var html = document.getElementById("elements");
   
   html.insertAdjacentHTML('beforeend', `
        <div class="col-sm-3" >
            <div class="img-container">
                <img class="img-fluid rounded" src=${element.img} alt=${element.imgAlt}>
            </div>
            <h1>${element.name}</h1>
            <p>${element.description}</p>
            <a href=${element.repo} target="_blank" ><i id="icone" class="fab fa-github"></i> ${element.link}</a>
        </div>
    `);

    count++;
    
    if (count == 4) {
        html.insertAdjacentHTML('beforeend', '<div class="w-100"></div>');
        count = 1;
    }

});