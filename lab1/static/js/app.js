let timerId = setInterval(() => {
    if (document.getElementById('sec').textContent > 58){
        document.getElementById('sec').textContent = "0"+0
        document.getElementById('min').textContent++
        if(document.getElementById('min').textContent > 58){
            document.getElementById('min').textContent = 0
            document.getElementById('sec').textContent = 0
            document.getElementById('hour').textContent++
            if (document.getElementById('hour').textContent > 22){
                document.getElementById('hour').textContent = 0
            }}
    }else{
        if(document.getElementById('sec').textContent < 9){
            document.getElementById('sec').textContent++
            document.getElementById('sec').textContent = "0"+ String(document.getElementById('sec').textContent)
        }else{
            document.getElementById('sec').textContent++
        }}}, 1000);