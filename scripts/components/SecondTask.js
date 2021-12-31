import Component from "./Component.js";

class SecondTask extends Component{
    constructor(element) {
        super(element);
        this.render();    
    }

    
    getAllComponentEvents(){
        return {
            
            goNext() {
                this.navigateTo('code-game');
              }
        }
    }

    getHtml() {
        return `
            <div class="start-container">
                <h1 class="newYear">
                    Улики найдены!!!
                </h1>
                <div class="preview">
                    Благодоря уликам ты нашла место, где спрятана коробка.
                    Но его охраняет огромный бич из фильма Гая Ричи. Он просит у тебя кодовую фразу.
                    Ты не видишь рядом машину, которую можно в него кинуть, поэтому придется назвать кодовую фразу.
                    Удачи!!!
                    (используй все символы в правильном порядке)
                </div>
                <div class="next" event-click="goNext">Далее</div>
            </div>
        `;
    }
}

export default SecondTask;