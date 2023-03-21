const sr = ScrollReveal ({
    distance: '150px',
    duration: 1000,
    reset: true,
    delay: 100,
    

})

// sr.reveal('.one__one, .two__one, .three__one, .four__one, .five__one ', {delay:100, origin:'left'})
// sr.reveal('.one__two, .two__two, .three__two, .four__two, .five__two ', {delay:300, origin:'rigth'})

sr.reveal('.one__one, .one__two', {interval:100})
sr.reveal('.two__one, .two__two', {interval:100})
sr.reveal('.three__one, .three__two', {interval:100})
sr.reveal('.four__one, .four__two', {interval:100})
sr.reveal('.five__one, .five__two', {interval:100})
