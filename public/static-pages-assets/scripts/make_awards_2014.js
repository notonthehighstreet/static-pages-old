define(function() {

    $(window).scroll(function(e){
      parallax();
    });
    function parallax(){
      var scrolled = $(window).scrollTop();
      $('.background').css('top',-(scrolled*0.4)+'px');
    }

    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 700);
            return false;
          }
        }
      });
    });

    // invoke woofoo embedded form and render it
    // inside #wufoo-zot3rxi0vryo5c in /public/apply.jade
    var zot3rxi0vryo5c;(function(d, t) {
    var s = d.createElement(t), options = {
        'userName':'notonthehighstreet',
        'formHash':'zot3rxi0vryo5c',
        'autoResize':true,
        'height':'2379',
        'async':true,
        'host':'wufoo.com',
        'header':'show',
        'ssl':true
    };
    
    s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'wufoo.com/scripts/embed/form.js';
    
    s.onload = s.onreadystatechange = function() {
      
      var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
      try {
        zot3rxi0vryo5c = new WufooForm();
        zot3rxi0vryo5c.initialize(options);
        zot3rxi0vryo5c.display();
      } catch (e) {}};
      var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
      
    })(document, 'script');

});
