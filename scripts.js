// Write your JavaScript code here.
// Remember to pay attention to page loading!

function allEvents() {
    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const rocketImg = document.getElementById("rocket");
    
    takeOff.addEventListener("click", function() {

        let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (confirmation) {
            
            flightStatus.innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
                                    
        }

    });

    landing.addEventListener("click", function() {

        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;

    });

    let position = 0;

    abort.addEventListener("click", function() {

        let confirmation = window.confirm("Confirm that you want to abort the mission.");

        if (confirmation) {

            flightStatus.innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
        }

    });

    

    up.addEventListener("click", function() {

        let position = rocketImg.offsetTop;
        position -= 10;
        rocketImg.style.top = position + "px";
        shuttleHeight.innerHTML= Number(shuttleHeight.innerHTML) + 10000;

    });

    down.addEventListener("click", function() {

        let position = rocketImg.offsetTop;
        position += 10;
        rocketImg.style.top = position + "px";
        shuttleHeight.innerHTML= Number(shuttleHeight.innerHTML) - 10000;

    });

    right.addEventListener("click", function() {

        let position = rocketImg.offsetLeft;
        position += 10;
        rocketImg.style.left = position + "px";

    });

    left.addEventListener("click", function() {

        let position = rocketImg.offsetLeft;
        position -= 10;
        rocketImg.style.left = position + "px";

    });

}

window.addEventListener("load", allEvents);