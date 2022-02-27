import renderer from "./renderer"

export function mouseParallax(visibleElement, domToParallax, breakpoint) {
    if (renderer.isElementVisible(visibleElement.current) && window.innerWidth > breakpoint ) {
        const mouse = renderer.getMouseWindowCoords()
        domToParallax.forEach((element, idx) => {
            element.current.style.transform = `translate3d(${mouse.x * (idx + 1) / 300}px, ${mouse.y * (idx + 1) / 300}px, 0)`
        })
    }
}

export function addClassOnVisible(visibleElement, domToShow, className = 'visible') {
    if (renderer.isElementVisible(visibleElement.current)) {
        domToShow.forEach((element, idx) => {
            const el = element.current || element
            if (renderer.isElementVisible(el)) {
                if (!el.classList.contains(className)) { el.classList.add(className) }
            }  else {
                if (el.classList.contains(className)) { el.classList.remove(className) }
            }
        })
    }
}