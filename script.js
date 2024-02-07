var tl = gsap.timeline();
tl.from(".line h1", {
	y: 150,
	stagger: 0.4,
	duration: 0.6,
	delay: 0.5,
});
tl.from("#line1-part1", {
	opacity: 0,
	onStart: function () {
		var h5timer = document.querySelector("#line1-part1 h5");
		var count = 0;
		setInterval(function () {
			if (count < 100) {
				h5timer.innerHTML = count++;
				console.log(h5timer);
			} else {
				h5timer.innerHTML = count;
			}
		}, 49);
	},
});
tl.to(".line h2", {
	animationName: "anime",
	opacity: 1,
});
tl.to("#loader", {
	opacity: 0,
	duration: 4.2,
	delay: 4.2,
	ease: Power4,
});
tl.from("#page1", {
	y: 1600,
	delay: 0.5,
	duration: 0.5,
});
tl.to("#loader", {
	display: none,
});
