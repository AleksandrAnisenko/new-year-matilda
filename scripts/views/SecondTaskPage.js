import SecondTask from "../components/SecondTask.js";
import View from "./View.js";

class SecondTaskPage extends View {
    constructor(route) {
        super(route);
        this.setTitle('SecondTask');

        this.components = {
            'second-task': SecondTask,
        }
    }

    getHtml() {
        return `
            <second-task></second-task>
        `
    }
}

export default SecondTaskPage;