const btn = document.getElementById('click')
btn.addEventListener('click', (e) => {
    console.log(e.target.innerHTML);
})