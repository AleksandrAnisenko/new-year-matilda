import Start from "../components/Start.js";
import View from "./View.js";

class StartPage extends View {
    constructor(route) {
        super(route);
        this.setTitle('Start');

        this.components = {
            'start': Start,
        }
    }

    getHtml() {
        return `
            <start></start>
        `
    }
}

export default StartPage;