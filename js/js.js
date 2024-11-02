let sider = document.getElementById("sider")    

let opener = document.getElementById("opener")  

let closer =document.getElementById("closer")

opener.onclick = function(){
    sider.classList.add("sider-open")
    document.body.classList.add("no-scrool")
}
closer.onclick =function(){
    sider.classList.remove("sider-open")
    document.body.classList.remove("no-scrool")
}


let myImg ="img/IMG_20241013_015112_693.jpg"

let aboutImg = document.getElementById("aboutImg")

let yassinImg = ""
aboutImg.setAttribute("src",myImg)


let a = document.getElementById("myImg")
a.setAttribute("src",myImg)


//my name

let name = "Ahmed"
let name2 = "Yassin"

let myName = document.getElementById("name")

let yassinName = document.getElementById("yassinName")
yassinName.textContent = name2
myName.textContent = name
//myNote
let title = "😍😍😎";
let title2 = "👑";
let myNote = document.getElementById("myNote")

let myNote2 = document.getElementById("myNote2")

myNote.textContent = title
myNote2.textContent = title2
//siderSocial
document.getElementById("siderSocial").onclick = function(){
    document.querySelector('.social').scrollIntoView({behavior:('smooth')})
document.getElementById('sider').classList.remove('sider-open')
document.body.classList.remove('no-scrool')
}
//siderProjects
document.getElementById("siderProjects").onclick = function(){
    document.querySelector('.my-projects').scrollIntoView({behavior:('smooth')})
document.getElementById('sider').classList.remove('sider-open')
document.body.classList.remove('no-scrool')
}
//siderAbout
document.getElementById("siderAbout").onclick = function(){
    document.querySelector('.about').scrollIntoView({behavior:('smooth')})
document.getElementById('sider').classList.remove('sider-open')
document.body.classList.remove('no-scrool')
}