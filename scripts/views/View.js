import { $app } from "../router.js";

class View {
    constructor(route) {
        this.route = route;
    }

    setTitle(title) {
        document.title = title;
    }

    render(){
        $app.innerHTML = this.getHtml()
        this.renderComponents()
    }

    renderComponents(){
        if(this.components){
            for (let key in this.components) {
                const component = document.querySelector(key);
                if (component) {
                    new this.components[key](component);
                } 
            }
        }
    }
} 

export default View;