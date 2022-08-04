var n = 1

var id = setInterval(() => {
    if (n <= 200) {
        demo.style.left = n + 'px'
        n = n + 1
    } else {
        clearInterval(id)
    }

}, 1000 / 60)