import MemoryCards from "../components/MemoryCards.js";
import View from "./View.js";

class MemoryCardsPage extends View {
    constructor(route) {
        super(route);
        this.setTitle('MemoryCards');

        this.components = {
            'memory-cards': MemoryCards,
        }
    }

    getHtml() {
        return `
            <memory-cards></memory-cards>
        `
    }
}

export default MemoryCardsPage;