var position = 0;
var current_index = 0;


var navlist = document.getElementsByClassName('nav-list__item')

window.onscroll = function () {
	position = window.pageYOffset;
}


function Scroll(id, index) {
	navlist[current_index].className = 'nav-list__item';
	current_index = index;
	navlist[current_index].className = 'nav-list__item active';

    var el_pos = document.getElementById(id).offsetTop;
    console.log(el_pos);


    var interval;

    if(position < el_pos) {
    	interval = setInterval(function() {
    		position+=20;
    		if(position +70 >= el_pos) {
    			clearInterval(interval);
    		} else {
    			window.scrollTo(0, position);
    		}
    	}, 0);
    } else {
    	interval = setInterval(function() {
    		position-=20;
    		if(position + 70 <= el_pos) {
    			clearInterval(interval);
    		} else {
    			window.scrollTo(0, position);
    		}
    	}, 0);
    }
}
 