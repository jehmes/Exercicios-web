window.addEventListener("hashchange", (x) => {
            
    const oldURL = x.oldURL.split('#')[1]
    const newURL = x.newURL.split('#')[1]

    
    const oldMenu = document.querySelector(`.menu a[href='#${oldURL}']`)
    const newMenu = document.querySelector(`.menu a[href='#${newURL}']`)
    
    oldMenu.classList.remove('selected')
    newMenu.classList.add('selected')
})