import MenuMobile from "./module/menuMobile.js"
import ScrollAnimation from "./module/scrollAnimation.js"
import SlideNav from "./module/slide/slidenav.js"

const menu = new MenuMobile('.toggle', '.list-menu')

menu.init()

const scroll = new ScrollAnimation('.scroll')

scroll.init()

const slide = new SlideNav('.slide', '.slider-wrapper')

slide.init()

slide.addControl('.custom-control')