const remove = (elem) => {
    elem.style.transform = 'translateX(-9999px)';
}


btn.onclick = function() {
    remove(text);
    alert(`Now You Don't`);
}