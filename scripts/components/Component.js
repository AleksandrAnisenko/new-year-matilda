class Component {
    constructor(element) {
        this.element = element;
    }

    getHtml() {
        return "";
    }

    navigateTo(urlPath) {
        window.location.hash = urlPath;
    }
 
    render(){
        this.element.innerHTML = this.getHtml()

        const events = this.getAllComponentEvents();
        if(events){
            for (let key in events) {
                const $form = this.element.querySelectorAll(`[event-submit=${key}]`);
                if($form){
                    $form.forEach(elem => {
                        elem.addEventListener('submit', events[key].bind(this));
                    }) 
                }

                const $btn = this.element.querySelectorAll(`[event-click=${key}]`);
                if($btn){
                    $btn.forEach(elem => {
                        elem.addEventListener('click', events[key].bind(this));
                    }) 
                }
            }
        }
    }
}

export default Component;