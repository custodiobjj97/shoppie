import Slide from "./slide.js";


export default class SlideNav extends Slide{
    constructor(slide, wrapper) {
        super(slide, wrapper)
        this.bindControlEvents()
    }

    addArrow(prev, next) {
        this.elementPrev = document.querySelector(prev)
        this.elementNext = document.querySelector(next)
        this.arrowEvents()
    }

    arrowEvents() {
        this.elementPrev.addEventListener('click', this.activePrevSlide)
        this.elementNext.addEventListener('click', this.activeNextSlide)
    }

    createControl() {
        const control = document.createElement('ul')
        control.datatset.control = 'slide'
        this.slideArray.forEach((item, index) => {
            control.innerHTML=`<li><a href="#slide${index + 1}">${index + 1}</a></li>`
        })
        this.wrapper.appendChild(control)
        return control
    }

    eventControl(item, index) {
        item.addEventListener('click', (event) => {
            event.preventDefault()
            this.changeSlide(index)
        })

        this.wrapper.addEventListener('changeEvent', this.activeControlItem)
    }

    activeControlItem() {
        this.controlArray.forEach((item) => item.classList.remove(this.activeClass))
        this.controlArray[this.index.active].classList.add(this.activeClass)
    }

    addControl(customControl) {
        this.control = document.querySelector(customControl) || this.createControl()

        this.controlArray = [...this.control.children]
        this.activeControlItem()
        this.controlArray.forEach(this.eventControl)
    }

    bindControlEvents() {
        this.eventControl = this.eventControl.bind(this)
        this.activeControlItem = this.activeControlItem.bind(this)
    }
}