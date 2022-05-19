let toggle = false;

const remove = (elem) => {
    elem.style.transform = 'translateX(-9999px)';
    elem.style.transition = 'all 3s';
}

const add = (elem) => {
    elem.style.transform = 'translateX(0)';
    elem.style.transition = 'all 500ms';
}


btn.onclick = function() {
    if (toggle === false) {
        remove(text);
        alert(`Now you don't.`);
        toggle = true;
    } else {
        add(text);
        alert(`I am back.`);
        toggle = false;
    }
}