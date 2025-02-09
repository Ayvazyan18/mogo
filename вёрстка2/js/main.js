document.addEventListener('DOMContentLoaded', function () {
	var sidenav = document.querySelectorAll('.sidenav')
	var instances_sidenav = M.Sidenav.init(sidenav);
	
	var modal = document.querySelectorAll('.modal')
	var instances_modal = M.Modal.init(modal);

	var gallery = document.querySelectorAll('.materialboxed')
	var instances = M.Materialbox.init(gallery)
})




$(() => {
	function showP (e) {
		if($(this).is(":checked")) {
			$('.finger_img').attr('src', 'img/pointing-down.png')
			$(".label_text").text("Close All");
		} else {
			$('.finger_img').attr('src', 'img/pointing-right.png')
			$('.label_text').text('Show All')
		}
		$('.question_p').toggle();
	}
	$('.checkbox').on("click", showP)
})



// let inp = document.querySelector('.desc')
// let p = document.querySelector('.question_p')

// inp.addEventListener('click', e => {
// 	debugger
// 	e.preventDefault()
// 	if (p.style.display === 'block') {
// 		p.style.display = 'none'
// 	} else {
// 		p.style.display = 'block'
// 	}
// })