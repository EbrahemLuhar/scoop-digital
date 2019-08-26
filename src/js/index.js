ScrollOut({
    targets: ['h2', '.service', '.about-team', '.about-testimonials', '.team-member'],
    threshold: 0.4,
    once: true
});

var rellax = new Rellax('.rellax');

import Glider from './Glider';
import Navbar from './Navbar';

const glider = new Glider();
const navbar = new Navbar();