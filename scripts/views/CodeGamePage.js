import CodeGame from "../components/CodeGame.js";
import View from "./View.js";

class CodeGamePage extends View {
    constructor(route) {
        super(route);
        this.setTitle('CodeGame');

        this.components = {
            'code-game': CodeGame,
        }
    }

    getHtml() {
        return `
            <code-game></code-game>
        `
    }
}

export default CodeGamePage;