var li = document.querySelector("li");
var isLight = false;

li.addEventListener("hover", function(){
	li.style.background = rgb(255, 255, 255);
});

li.addEventListener("click", function(){
	if(isLight){
		document.li.style.background = "navy";
		isLight = false;
	} else {
		document.li.style.background = "white";
		isLight = true;
	}
});

// var lis = document.querySelectorAll("li");

// for(var i = 0; i < lis.length; i++){
// 	lis[i].addEventListener("click", function(){
//     	this.style.color = "pink";
// 	});
// }