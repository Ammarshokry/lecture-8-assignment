let ac = false;
let acspeed = 16;
let fanspeed = 0;
function toggleonof(){
    if(ac == false){
        ac = true
        console.log('ac is on')
    }else{
        ac = false
        console.log('ac is off')
    }
}
function increase(){
    if(ac == true && acspeed < 29){
       acspeed++;
       console.log('ac on and speed is ' + acspeed)
    }
}

function decrease(){
    if( ac == true && acspeed > 16){
        acspeed--;
        console.log('ac on and speed is ' + acspeed)
    }
}

function fan(){
  if(ac == true){
      if(fanspeed < 3){
           fanspeed++;
        }else{
            fanspeed = 1;
        }
        console.log('fan speed is ' + fanspeed)

  }
}