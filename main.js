var quick_draw =["butterfly","heart","rose","watermelon","lipstick","hockey","phone","cake","car","rainbow"];
answer_holder = "";
drawn_sketch = "";
score = 0;
time_counter = 0;
timer_check = "" ;

random_no = Math.floor((Math.random()*quick_draw.length)+1);
elements = quick_draw[random_no];
document.getElementById("ogSketch").innerHTML = "Sketch to be drawn :"+elements;
function setup()
{
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
}
function draw()
{
    check_sketch();
    if(elements==drawn_sketch)
    {
        answer_holder = "set";
        score = score + 1;
document.getElementById("score").innerHTML = "Score : " + score;



    }
}
function check_sketch()
{
time_counter = time_counter + 1;
console.log(time_counter);
document.getElementById("time").innerHTML = "Timer : " + time_counter;
if (time_counter > 400)
{
    time_check = "compleated";
time_counter = 0;

}
if(timer_check == "compleated"||answer_holder == "set")
{
time_check = "";
answer_holder = "";
updateCanvas();

}
}
function updateCanvas()
{
    background("white");
    random_no = Math.floor((Math.random()*quick_draw.length)+1);
    console.log(quick_draw[random_no]);
    elements = quick_draw[random_no];
    document.getElementById("ogsketch").innerHTML = "Sketch to be drawn :"+ elements;



}

