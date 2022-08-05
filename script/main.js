"use strict";


const burger = document.querySelector('.menu__burger');
const menuList = document.querySelector('.menu__list')
const body = document.body


burger.addEventListener("click", () => {
   burger.classList.toggle('act')
   body.classList.toggle('off')
   menuList.classList.toggle('act')
})


// Прокрутка Навигация по сайту
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// const menuPageLinks = document.querySelectorAll(".page-link")
// if (menuPageLinks.length > 0) {
//    for (let index = 0; index < menuPageLinks.length; index++) {
//       const pageLink = menuPageLinks[index];
//       pageLink.addEventListener("click", (e) => {
//          return e.preventDefault()
//       })
//    }
// }


if (menuLinks.length > 0) {
   for (let index = 0; index < menuLinks.length; index++) {
      const link = menuLinks[index];
      link.addEventListener('click', scrollMenu)

      function scrollMenu(e) {
         const link = e.target


         if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
            const gotoBlock = document.querySelector(link.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector('header').offsetHeight;

            if (burger.classList.contains('act')) {
               menuList.classList.remove('act')
               body.classList.remove('off')
               burger.classList.remove('act')
            }

            window.scrollTo({
               top: gotoBlockValue,
               behavior: "smooth"
            })

            e.preventDefault()
         }
      }
   }
}








// Все объекты которые поддаются анимации
const allItems = document.querySelectorAll('._anim-items');

if (allItems.length > 0) {
   window.addEventListener("scroll", animOnScroll)
   function animOnScroll() {
      for (let index = 0; index < allItems.length; index++) {
         const item = allItems[index];
         const itemHeight = item.offsetHeight;
         const itemOffset = item.getBoundingClientRect().top + scrollY;

         const itemStart = 4;

         let itemPoint = window.innerHeight - itemHeight / itemStart;
         if (itemHeight > window.innerHeight) {
            itemPoint = window.innerHeight - window.innerHeight / itemStart
         }



         if ((scrollY > itemOffset - itemPoint) && scrollY < (itemOffset + itemHeight)) {
            item.classList.add("_active")

            // const textShow = document.querySelector("._anim-text-show")
            // const textOffset = textShow.getBoundingClientRect().top + scrollY
            // console.log(textOffset)
         } else {
            if (!item.classList.contains('_anim-none')) {

               item.classList.remove("_active")
            }


         }
      }
      console.log(window.innerHeight)
      console.log(scrollY)
   }



   setTimeout(() => {
      animOnScroll()
   }, 300);


}






