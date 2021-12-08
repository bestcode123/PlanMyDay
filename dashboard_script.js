var setupq = localStorage.getItem('setupq')

if(setupq == null || setupq == "null") {
    location.replace('setupPage.html')
}

function start_timer() {
    var hours = document.getElementById('hours').value
    var minutes = document.getElementById('mins').value
    var seconds = document.getElementById('secs').value
    var tone = document.getElementById('tone')
    var playtone = true
    
    if(hours == '') {
        hours = '0'
    } if(minutes == '') {
        minutes = '0'
    } if(seconds == '') {
        seconds = '0'
    }

    total_seconds = hours * 60 * 60 + minutes * 60 + seconds

    const time_millis = total_seconds * 1000
    countdowndate = new Date(new Date().getTime() + time_millis)


    var x = setInterval(function() {
        var now = new Date().getTime();

        distance = countdowndate - now

        if(distance <= 0) {
            clearInterval(x)
            if(playtone){
                tone.play()
            }
        } else {
            // console.log(Math.round(distance / 1000)) // Just Seconds
            var output = "Hours: " + Math.floor((distance / 1000) / (60 * 60 * 10)) + 
                        ", Minutes: " + Math.floor(((distance / 60000) % (60 * 60) - 60 * (Math.floor((distance / 1000) / (60 * 60)))) / 10) + 
                        ", Seconds: " + Math.floor(distance % (1000 * 60) / 1000)
            document.getElementById('timer_output').innerHTML = output
            // document.getElementById('slider_output').innerHTML = Math.floor(distance / 1000) // "<progress value=\"" + Math.floor(((distance / time_millis) * 100)) + "\" max=\"100\">"
        }
        
    }, 1000)
}
