export default class MenuMobile{
    constructor(toggle, menu) {
        this.toggle = document.querySelector(toggle)
        this.menu = document.querySelector(menu)
        this.activeClass = 'active'
    }

    activeToggle(event) {
        if (event.type === 'touchstart') {
            event.preventDefault()
        }

        this.menu.classList.toggle(this.activeClass)
    }


    addEventToggle() {
        this.toggle.addEventListener('click', this.activeToggle)
        this.toggle.addEventListener('touchstart', this.activeToggle)
    }

    bindEvents() {
        this.activeToggle = this.activeToggle.bind(this)
    }

    init() {
        this.bindEvents()
        this.addEventToggle()
    }
}