let loading = document.querySelector('.load')

window.addEventListener('load', ()=> {
    setTimeout(() => {
        loading.style.display = 'none'
    }, 2000);
})