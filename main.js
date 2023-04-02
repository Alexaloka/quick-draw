var quick_draw =[butterfly,heart,rose,watermelon,lipstick,hockey,phone,cake,car,rainbow];
answer_holder = "";
drawn_sketch = "";
score = 0;
timer_counter = 0;
timer_check = "" ;
random_no = Math.floor((Math.random()*quick_draw)+1);
elements = quick_draw[random_no];
document.getElementById("ogsketch").innerHTML = "Sketch to be drawn :"+ elements;
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
timer_counter = timer_counter + 1;
console.log(timer_counter);
document.getElementById("timer").innerHTML = "Time : " + timer_counter;
if (timer_counter > 400)
{
    timer_check = "compleated";
timer_counter = 0;

}
if(timer_check == "compleated"||answer_holder == "set")
{
timer_check = "";
answer_holder = "";
updateCanvas();

}
}
