const devProjects = [
    {
        img: "./public/omni8-logo.svg",
        imgAlt: "Tindev",
        name: "Semana Omnistack 8.0",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis neque, accusamus itaque delectus totam alias pariatur illo quo ea vero ut repellat nobis, nostrum nesciunt animi. Dolore autem, possimus nam labore placeat consectetur eum eveniet ipsam ea recusandae blanditiis? Cupiditate.",
        link: "Git Repo",
        repo: "https://github.com/Finnkell/Tindev",
    },
    {
        img: "./public/omni9-logo.svg",
        imgAlt: "Arcnc",
        name: "Semana Omnistack 9.0",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis neque, accusamus itaque delectus totam alias pariatur illo quo ea vero ut repellat nobis, nostrum nesciunt animi. Dolore autem, possimus nam labore placeat consectetur eum eveniet ipsam ea recusandae blanditiis? Cupiditate.",
        link: "Git Repo",
        repo: "https://github.com/Finnkell/Arcnc",
    },
    {
        img: "./public/omni10.png",
        imgAlt: "Arcnc",
        name: "Semana Omnistack 10.0",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis neque, accusamus itaque delectus totam alias pariatur illo quo ea vero ut repellat nobis, nostrum nesciunt animi. Dolore autem, possimus nam labore placeat consectetur eum eveniet ipsam ea recusandae blanditiis? Cupiditate.",
        link: "Git Repo",
        repo: "https://github.com/Finnkell/Arcnc",
    },
    {
        img: "./public/Logo.svg",
        imgAlt: "Doe",
        name: "Maratona Dev 3.0",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis neque, accusamus itaque delectus totam alias pariatur illo quo ea vero ut repellat nobis, nostrum nesciunt animi. Dolore autem, possimus nam labore placeat consectetur eum eveniet ipsam ea recusandae blanditiis? Cupiditate.",
        link: "Git Repo",
        repo: "https://github.com/Finnkell/Doe-maratonaDev",
    },
    {
        img: "./public/nu-logo.svg",
        imgAlt: "Nubank",
        name: "React Native Nubank UI clone",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis neque, accusamus itaque delectus totam alias pariatur illo quo ea vero ut repellat nobis, nostrum nesciunt animi. Dolore autem, possimus nam labore placeat consectetur eum eveniet ipsam ea recusandae blanditiis? Cupiditate.",
        link: "Git Repo",
        repo: "https://github.com/Finnkell/Nubank",
    },
    {
        img: "./public/whatsapp.svg",
        imgAlt: "Whatsapp",
        name: "Flutter Whatsapp UI clone",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis neque, accusamus itaque delectus totam alias pariatur illo quo ea vero ut repellat nobis, nostrum nesciunt animi. Dolore autem, possimus nam labore placeat consectetur eum eveniet ipsam ea recusandae blanditiis? Cupiditate.",
        link: "Git Repo",
        repo: "https://github.com/Finnkell/flutter-whatsapp",
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
            <a href=${element.repo} target="_blank" >${element.link}</a>
        </div>
    `);

    count++;
    
    if (count == 4) {
        html.insertAdjacentHTML('beforeend', '<div class="w-100"></div>');
        count = 0;
    }

});