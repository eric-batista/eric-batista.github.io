// ANIMATION
gsap.from('.img-fluid rounded-circle', {opacity: 0, duration: 3, delay: 1, x: 70})
gsap.from('.home', {opacity: 0, duration: 2, delay: 2, x: 65});
gsap.from('.home-description h1', {opacity: 0, duration: 2.1, delay: 1, y: 20, ease: 'expo.out'})
gsap.from('.home-description p', {opacity: 0, duration: 2.3, delay: 2, y: 25, ease:'expo.out', stagger: .2})
gsap.from('.navbar', {opacity: 0, duration: 2, delay: 2, y: 25, ease:'expo.out', stagger: .3})
