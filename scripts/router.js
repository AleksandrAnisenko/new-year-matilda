import StartPage from "./views/StartPage.js";
import MemoryCardsPage from "./views/MemoryCardsPage.js";
import SecondTaskPage from "./views/SecondTaskPage.js";
import CodeGamePage from "./views/CodeGamePage.js";
import SafePage from "./views/SafePage.js";
import ThirdTaskPage from "./views/ThirdTaskPage.js";
import GiftPage from "./views/GiftPage.js";

const $app = document.getElementById('app');

const views = {
    'start': StartPage,
    'memory-cards': MemoryCardsPage,
    'second-task': SecondTaskPage,
    'code-game': CodeGamePage,
    'safe': SafePage,
    'third-task': ThirdTaskPage,
    'gift': GiftPage
}

function locationHashChanged() {
    let hash = location.hash.slice(1);
    if (!views[hash]){
        hash = 'start';
    }
    
    let view = new views[hash](hash);

    view.render();
}

export {locationHashChanged, $app}


