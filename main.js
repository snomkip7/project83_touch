var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var width = screen.width;

new_width = screen.width - 70;
new_height = screen.height - 300;
if(width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    radius = 40;

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        radius = document.getElementById("radius").value;
        //Addictonal Activity ends
        console.log("my_touchstart")

        last_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("touchup", my_touchup);
    function my_touchup(e)
    {
        mouseEvent = "touchUP";
    }

    canvas.addEventListener("touchleave", my_touchleave);
    function my_touchleave(e)
    {
        mouseEvent = "touchleave";
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        circle(current_position_of_mouse_x, current_position_of_mouse_y);
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

function clear_canvas(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function circle(current_position_of_mouse_x, current_position_of_mouse_y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
    ctx.stroke();
    console.log("circle");
}