function selectPage(id) {
    var evt = new CustomEvent('selectpage', { detail: id });
    window.dispatchEvent(evt);
}

let pagetool = {
    selectPage
}

export default pagetool;