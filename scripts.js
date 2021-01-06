const main = () => {
    const tarea = document.querySelector('textarea')
    tarea.addEventListener('input',() => {
        let text = tarea.value;
        let arr = text.trim().split(" ")
        arr = arr.filter(n => n)
        document.getElementById('value').innerHTML = arr.length;
    })
}

main()