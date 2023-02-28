var l = document.querySelectorAll(".day").length;
for(var i=0;i<l;i++){
    document.querySelectorAll(".day")[i].addEventListener("click",function(){
        var day_name = this.innerHTML;
       Animation(day_name);
       menubar(day_name);
    })
}


function menubar(day_name){
    switch(day_name){
        case "Monday":
            var audio = new Audio("sounds/monday.mp3");
            audio.play();
            break;
        case "Tuesday":
             var audio = new Audio("sounds/tuesday.mp3");
            audio.play();
            break;
        case "Wednesday":
             var audio = new Audio("sounds/wednesday.mp3");
            audio.play();
            break;
        case "Thursday":
             var audio = new Audio("sounds/thursday.mp3");
            audio.play();
            break;
        case "Friday":
             var audio = new Audio("sounds/friday.mp3");
            audio.play();
            break;
        case "Saturday":
             var audio = new Audio("sounds/saturday.mp3");
            audio.play();
            break;
        case "Sunday":
             var audio = new Audio("sounds/sunday.mp3");
            audio.play();
            break;
    }
}

function Animation(day_name){
    var day_class = document.querySelector("."+day_name.slice(0,3));
    day_class.classList.add("pressed");
    setTimeout(function(){
        day_class.classList.remove("pressed");
    },100)

}