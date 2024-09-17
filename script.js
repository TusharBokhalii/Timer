let timer;
let Seconds = 0, Minutes = 0, Hours = 0, MiniSecond = 0;

function Start() {
    if (timer) return;
    timer = setInterval(on, 10);
}

function Stop() {
    clearInterval(timer)
    timer = null;
}

function Reset() {
    clearInterval(timer)
    Seconds = 0;
    MiniSecond = 0;
    Hours = 0;
    Minutes = 0;
    document.querySelector("h1").innerHTML = `00 : 00 : 00 : 000`
}
function on() {
    MiniSecond += 10;
    if (MiniSecond >= 1000) {
        MiniSecond = 0;
        Seconds++;
    }

    if (Seconds >= 59) {
        Seconds = 0;
        Minutes++;
    }

    if (Minutes >= 59) {
        Minutes = 0;
        Hours++;
    }

    if (Hours >= 24) {
        alert("Time Full Day Completed!!");
        clearInterval(timer)
        timer = null;
    }
    // if(MiniSecond>=99){
    //     MiniSecond=`0${MiniSecond}`
    // }
    document.querySelector("h1").innerHTML = `${String(Hours).padStart(2, '0')} : ${String(Minutes).padStart(2, '0')} : ${String(Seconds).padStart(2, '0')} : ${String(MiniSecond).padStart(3, '0')}`;
}


document.addEventListener('DOMContentLoaded', (event) => {
const checkbox = document.getElementById('Toggle');
checkbox.addEventListener('change', function() {
if (this.checked) {
    document.body.style.backgroundImage = "url('./images/peakpx.jpg')";
} else {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1554034483-04fda0d3507b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
}
});
});