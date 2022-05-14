const menuButton = document.querySelector('#menu-btn');
const closeButton = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

menuButton.addEventListener('click', () => {
  menu.style.display = 'block';
  menuButton.style.display = 'none';
  closeButton.style.display = 'inline-block';
});

closeButton.addEventListener('click', () => {
  menu.style.display = 'none';
  menuButton.style.display = 'inline-block';
  closeButton.style.display = 'none';
});

// Nav items selector
const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
};

navItems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () => {
    changeActiveItem();
    link.classList.add('active');
  })
})

// Read more button
const readMoreButton = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreButton.addEventListener('click', () => {
  readMoreContent.classList.toggle('show-content');
  readMoreContent.classList.contains('show-content') ? readMoreButton.textContent = 'Show less' : readMoreButton.textContent = 'Show more';
});

// Skills content toggle
const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
  skill.querySelector('.head').addEventListener('click', () => {
    skill.querySelector('.items').classList.toggle('show-items');
  });
});

// Add box shadow on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0);
})
