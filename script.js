let inputSlider = document.getElementById("slider");
let sliderValue = document.getElementById("sliderange");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let specialsymbols = document.getElementById("special symbols");
let getbtn = document.getElementById("getbtn");
let copy = document.getElementById("copy")
// sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',() =>{
    sliderValue.textContent = inputSlider.value;
})
getbtn.addEventListener('click',()=>{
    passBox.value = generatePassword();
})
let lowerchars = "abcdefghijklmnopqrstuvwxyz"
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let nums = "0123456789"
let sym = "!@#$%^&*"
copy.addEventListener('click',()=>{
    if(passBox.value!=""||passBox.length>=1){
        navigator.clipboard.writeText(passBox.value)
        copy.innerText = "check"
        copy.title = "Password Copied";
        setTimeout(()=>{
            copy.innerHTML = "content_copy";
            copy.title=""
          },3000)
    }
    
  

})

function generatePassword(){
    let password = ""
    let allchars =""
    allchars += lowercase.checked?lowerchars:""
    allchars += uppercase.checked?upperchars:""
    allchars += numbers.checked?nums:""
    allchars += specialsymbols.checked?sym:""
    if(allchars == ""|| allchars.length==0)
    {
        return password
    }
    let i=1
    while(i<=inputSlider.value){
        password += allchars.charAt(Math.floor( Math.random()*allchars.length))
        i++;
 
}
return password
}