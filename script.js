let input = document.querySelector("#searchInput");
let data =[
    {name:"Aakash", src:"https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBtZW58ZW58MHx8MHx8fDA%3D"},
    {name:"Amiyah", src:"https://images.unsplash.com/photo-1508243771214-6e95d137426b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Arjun", src:"https://images.unsplash.com/photo-1489913590284-9269438bb411?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww"},
    {name:"Amani", src:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {name:"Adhya", src:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {name:"Aarna", src:"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {name:"Ananya", src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww"},
    {name:"Ayanna", src:"https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8fDB8fHww"},
    {name:"Advika", src:"https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsfGVufDB8fDB8fHww"},
    {name:"Harsh", src:"https://images.unsplash.com/photo-1527010154944-f2241763d806?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww"},
    {name:"Vansh", src:"https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww"},
    {name:"Harshita", src:"https://images.unsplash.com/photo-1440589473619-3cde28941638?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsfGVufDB8fDB8fHww"},
    {name:"Vanshita", src:"https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1vZGVsfGVufDB8fDB8fHww"},
    {name:"Hanshika", src:"https://images.unsplash.com/photo-1544963151-fb47c1a06478?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fG1vZGVsfGVufDB8fDB8fHww"},
    {name:"Harshika", src:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fG1vZGVsfGVufDB8fDB8fHww"},
    {name:"Varshika", src:"https://images.unsplash.com/photo-1621086893822-ca4d5a70bf36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fG1vZGVsfGVufDB8fDB8fHww"},
    {name:"Vanshika", src:"https://images.unsplash.com/photo-1534008757030-27299c4371b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG1vZGVsfGVufDB8fDB8fHww"},
]
let pers = "";

data.forEach(function (elem) {
    pers += `<div class="person" id="person1">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h2>${elem.name}</h2>
                </div>`
})
document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function () {
    let matchiing = data.filter(function (e) {
        return e.name.startsWith(input.value)
    })
    // console.log(matchiing);
    let newusers="";
    matchiing.forEach(function (elem) {
    newusers += `<div class="person" id="person1">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h2>${elem.name}</h2>
                </div>`
})
document.querySelector(".people").innerHTML = newusers;
})
