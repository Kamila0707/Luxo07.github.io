var modal = document.getElementById ('modal');
var modal_backdrop = document.getElementById('modal-backdrop');
 function showModal(){
 	 modal.style.display= 'flex';
 	 document.body.style.overflow = 'hidden';
 }
  function hideModal(){
 	 modal.style.display= 'none';
 	 document.body.style.overflow = 'auto';
 }
 var dropdown_text = document.getElementById('dropdown-text');
 var dropdown_option = document.getElementById('dropdown-option');
 
 function showDropdown () {
     dropdown_option.style.display = 'block';
     document.addEventListener('click', clickOut, true);
 }
 function hideDropdown () {
 	dropdown_option.style.display = 'none';
 }
 function setOption(e) {
 	dropdown_text.innerHTML = e.target.innerHTML.trim();
 	document.removeEventListener('click', clickOut, true);
 	hideDropdown();

 }
 function clickOut(e) {
 	if(!dropdown_option.contains(e.target)) {
 		hideDropdown();

 	}
 }
