const toggleoverlay2 = document.getElementById('whatIs');
const overlay2 = document.getElementById('sunesballade');
const lukOverlay2 = document.getElementById('popupclose');
const backgroundblur = document.getElementById('backgroundblur');

toggleoverlay2.addEventListener('click', () => {
    overlay2.classList.add('active');
    backgroundblur.classList.add('active2');
});

lukOverlay2.addEventListener('click', () => {
    overlay2.classList.remove('active');
    backgroundblur.classList.remove('active2');
});
