export default class ScrollAnimation{
    constructor(section) {
        this.sections = document.querySelectorAll(section)
        this.visibleClass='visible'
    }

    scrollAnimation() {
        const halfHieght = window.innerHeight * 0.6
        this.sections.forEach((section) => {
            const elementTop = section.getBoundingClientRect().top
            const isVisible = (elementTop - halfHieght) < 0
            if (isVisible) {
                section.classList.add(this.visibleClass)
            } else {
                section.classList.remove(this.visibleClass)
            }
        })
    }


    addEventScroll() {
        window.addEventListener('scroll', this.scrollAnimation)
    }

    bindEvent() {
        this.scrollAnimation = this.scrollAnimation.bind(this)
    }

    init() {
        if (this.sections.length) {
            this.bindEvent()
            this.addEventScroll()
            this.scrollAnimation()
        }
        return this
    }
}