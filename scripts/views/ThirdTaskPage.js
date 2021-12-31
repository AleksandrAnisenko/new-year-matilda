import ThirdTask from "../components/ThirdTask.js";
import View from "./View.js";

class ThirdTaskPage extends View {
    constructor(route) {
        super(route);
        this.setTitle('ThirdTask');

        this.components = {
            'third-task': ThirdTask,
        }
    }

    getHtml() {
        return `
            <third-task></third-task>
        `
    }
}

export default ThirdTaskPage;