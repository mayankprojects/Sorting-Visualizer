var speed=1000;

inp_aspeed.addEventListener("input",vis_speed);  // function for speed change

function vis_speed()  // gives the delay time
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);        
}
// 100000/(arraysize * speed)  -> more speed, less is the delay 
// -> less array size, more is the delay
var delay_time=10000/(Math.floor(array_size/10)*speed);        
var c_delay=0;

// chaning the height and color of the div 
function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
        console.log(cont);
    },c_delay+=delay_time);
}

// Enable other buttons once the soting is complete which was at start disabled
function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
        }
    },c_delay+=delay_time);
}

