let offSwitch = document.querySelector('.off')
let onSwitch = document.querySelector('.on')
let bulb = document.querySelector('.bulb')
// console.log(offSwitch)
// console.log(onSwitch)
// console.log(bulb)

offSwitch.addEventListener('click',function(){
    bulb.src="./pic_bulboff.gif";
})

onSwitch.addEventListener('click',function(){
    bulb.src="./pic_bulbon.gif"
})