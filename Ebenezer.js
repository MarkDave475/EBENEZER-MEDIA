setTimeout(() => {
    document.querySelector(`.hv`).classList.add(`h1`)
    document.querySelector(`.hv`).classList.remove(`herop`)
}, 300)

function openM() {
    document.querySelector(`.menu`).classList.remove(`hide`)
}
function closeM() {
    document.querySelector(`.menu`).classList.add(`hide`)
}