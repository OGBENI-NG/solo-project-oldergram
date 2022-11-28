import { likesObjects } from "./data.js"




document.addEventListener('click', (e) => {
   if(e.target.dataset.like) {
    handleLikeClik(e.target.dataset.like)
   }
})


//like function
function handleLikeClik(likeId) {
    const targetLikeObj = likesObjects.filter((postLikes) => {
        return postLikes.uuid === likeId
    })[0]
    
    if(targetLikeObj.isLike) {
        targetLikeObj.likes--
    } else {
        targetLikeObj.likes++
        
    }
    //flip boolean
    targetLikeObj.isLike = !targetLikeObj.isLike
    render()
}

// main html contents
function getFeedHtml() {
    let feedHtml = ``
    likesObjects.forEach((post) => {
        let likeHeart = ''
        //add color to like and unlike
        if(post.isLike) {
            likeHeart = 'like-color'
        }

        feedHtml +=` 
        <section>
        <div class="user-info">
            <img src="images/avatar-vangogh.jpg" alt="user-pics" class="user-pics">
            <h3>Vincent van Gogh <span class="country"><p>Zundert, Netherlands</p></span></h3>
        </div>
        <img src="${post.Image}" alt="vangogh-image" class="post-image">
        <div class="like-section">
        <i class="fa-solid fa-heart ${likeHeart}" data-like="${post.uuid}"></i>
        <i class="fa-regular fa-comment"></i>
        <i class="fa-regular fa-paper-plane"></i>
        <h3 class="likes">${post.likes} likes</h3>
        <h4>Adeolu777<span class="comments"> just took a few mushrooms lol</span></h4>
        </div>
    </section>      
        `
    })
    return feedHtml
}

function render() {
    document.getElementById('main-content').innerHTML = getFeedHtml()
}
render()






