const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

let time = 1500; // 25 minutos en segundos
let interval;

function actualizarTiempo(){
    const m = Math.floor(time / 60)
    const s = time % 60;
    minutes.textContent = m.toString().padStart(2, '0');
    seconds.textContent = s.toString().padStart(2, '0');
}

function startTimer(){
    if(!interval){
        interval = setInterval(() => {
            time--;
            actualizarTiempo();
            if(time === 0){
                clearInterval(interval);
                interval = null;
                alert('Se acabó el tiempo');
            }
        }, 1000);
    }
}

function stopTimer(){
    clearInterval(interval);
    interval = null;
}

function resetTimer(){
    time = 1500;
    actualizarTiempo();
}

document.getElementById('start').addEventListener('click', startTimer)

document.getElementById('stop').addEventListener('click', stopTimer)

document.getElementById('reset').addEventListener('click', resetTimer)

actualizarTiempo();