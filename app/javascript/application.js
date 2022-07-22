// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require typed
import "@hotwired/turbo-rails"

document.addEventListener('turbolinks:load', () => {
    var typed = new Typed('#typed', {
        strings: ["Webmaster", "Developer", "Freelancer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
});