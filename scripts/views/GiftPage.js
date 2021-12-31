import Gift from "../components/Gift.js";
import View from "./View.js";

class GiftPage extends View {
    constructor(route) {
        super(route);
        this.setTitle('Gift');

        this.components = {
            'gift': Gift,
        }
    }

    getHtml() {
        return `
            <gift></gift>
        `
    }
}

export default GiftPage;