import Safe from "../components/Safe.js";
import View from "./View.js";

class SafePage extends View {
    constructor(route) {
        super(route);
        this.setTitle('Safe');

        this.components = {
            'safe': Safe,
        }
    }

    getHtml() {
        return `
            <safe></safe>
        `
    }
}

export default SafePage;