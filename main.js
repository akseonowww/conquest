// 
//  S L I D E R 
// 
const slideList = document.querySelectorAll(".slide")
const slideNavPrev = document.querySelector(".slider__nav .nav__prev")
const slideNavNext = document.querySelector(".slider__nav .nav__next")
const slideNavCount = document.querySelector(".slider__nav .nav__count")

slideList[0].classList.add("active")
slideNavCount.innerHTML = "01"
console.log(slideNavCount.innerHTML)

const btnPrev = () => {
   let slideId = 0
   let allId = slideList.length
   let f = 0

   slideList.forEach(el => {
      let classes = el.classList.value

      if (classes.indexOf("active") !== -1 && !f) {
         el.classList.remove("active")
         if (slideId === 0) {
            let newActiveId = allId - 1
            slideList[newActiveId].classList.add("active")
            slideNavCount.innerHTML = "0" + String(newActiveId + 1)

            f = 1
         } else if (slideId === (allId - 1)) {
            let newActiveId2 = slideId - 1
            slideList[newActiveId2].classList.add("active")
            slideNavCount.innerHTML = "0" + String(newActiveId2 + 1)

            f = 1
         } else {
            slideList[0].classList.add("active")
            slideNavCount.innerHTML = "01"

            f = 1
         }
      }

      slideId += 1
   })
}

const btnNext = () => {
   let slideId = 0
   let allId = slideList.length
   let f = 0

   slideList.forEach(el => {
      let classes = el.classList.value

      if (classes.indexOf("active") !== -1 && !f) {
         el.classList.remove("active")
         if (slideId === 0) {
            let newActiveId = slideId + 1
            slideList[newActiveId].classList.add("active")
            slideNavCount.innerHTML = "0" + String(newActiveId + 1)

            f = 1
         } else if (slideId === (allId - 1)) {
            slideList[0].classList.add("active")
            slideNavCount.innerHTML = "01"

            f = 1
         } else {
            let newActiveId2 = slideId + 1
            slideList[newActiveId2].classList.add("active")
            slideNavCount.innerHTML = "0" + String(newActiveId2 + 1)

            f = 1
         }
      }

      slideId += 1
   })
}

// 
//  H E A D E R
// 
const headerPage = document.querySelector("header")
document.addEventListener('wheel', function (event) {
   if (event.deltaY > 0) {
      headerPage.classList.add("scroll")
   } else {
      headerPage.classList.remove("scroll")
   }

   console.log(event.deltaY);
});

// 
// L I K E
// 
const moduleList = document.querySelectorAll(".models__item")
const countLikes = document.querySelector(".count-likes")

function toLike(event) {
   if (event.classList.value.indexOf("active") > -1) {
      event.classList.remove("active")
      countLikes.innerHTML = Number(countLikes.innerHTML) - 1
      if (Number(countLikes.innerHTML) === 0) {
         countLikes.classList.remove("active")
      }

      console.log(event)
   } else {
      countLikes.innerHTML = Number(countLikes.innerHTML) + 1
      countLikes.classList.add("active")
      event.classList.add("active")
   }
}

moduleList.forEach(el => {
   if (el.children[0].classList.value.indexOf("active") > -1) {
      countLikes.innerHTML = Number(countLikes.innerHTML) + 1
      countLikes.classList.add("active")
   }
})

// 
// M E N U
// 
const menuModal = document.querySelector(".header .nav")
const btnOpenMenu = document.querySelector(".header .button-menu")
const openMenu = (event) => {
   if (event.classList.value.indexOf("active") === -1) {
      menuModal.classList.add("active")
      btnOpenMenu.classList.add("active")
      document.body.style.overflowY = "hidden"
   } else {
      menuModal.classList.remove("active")
      btnOpenMenu.classList.remove("active")
      document.body.style.overflowY = "scroll"
   }
}