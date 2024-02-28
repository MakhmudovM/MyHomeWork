const showBtn = document.getElementById('show-btn')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')
const overlay = document.getElementById('overlay')

const addHiden = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
  }
const removeHidden = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
showBtn.addEventListener('click' ,removeHidden)/*() => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})*/
closeBtn.addEventListener('click' ,addHiden)
   /* modal.classList.add('hidden')
    overlay.classList.add('hidden') */
overlay.addEventListener('click' , addHiden)
console.log(overlay);
    /*modal.classList.add('hidden')
    overlay.classList.add('hidden') */

document.addEventListener('keydown', (e) => {
    if(e.key == "Escape") {
        addHiden()
       /* modal.classList.add('hidden')
        overlay.classList.add('hidden') */
    }
})