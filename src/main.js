class RulerSlider {
    constructor(props) {
        let { element, options = {} } = props
        
        if(typeof element === "string") {
            this.container = document.querySelector(element)
        } else {
            this.container = element
        }
        if(!this.container) {
            throw(new Error("the container element is not avalible"))
        }
        this.initSliderElement()
    }
    initSliderElement() {
        let fragment = document.createDocumentFragment()
        let ul = this.createElement("ul")
    }
    createElement(type, options = {}) {
        let ele = document.createElement(type)
        Object.keys(options).map(key => {
            ele.style[key] = options[key]
        })
    }
}