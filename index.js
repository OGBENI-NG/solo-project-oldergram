const likeEl = document.getElementById("like-btn")
const likeEl2 = document.getElementById("like-btn2")
const likeEl3 = document.getElementById("like-btn3")
const likesCount = document.getElementById("likes-one")
const likesCount2 = document.getElementById("likes-two")
const likesCount3 = document.getElementById("likes-three")


let likes = 290
let likes2 = 275
let likes3 = 212

likeEl.addEventListener("click", () => {
    likes += 1
    likesCount.textContent = `${likes} likes `
    
}) 

likeEl2.addEventListener("click", () => {
    likes2 += 1
    likesCount2.textContent = `${likes2} likes`
})

likeEl3.addEventListener("click", () => {
    likes3 += 1
    likesCount3.textContent = `${likes3} likes`
})

