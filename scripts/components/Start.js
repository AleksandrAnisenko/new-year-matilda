import Component from "./Component.js";

class Game2 extends Component{
    constructor(element) {
        super(element);
        this.render();    
    }

    
    getAllComponentEvents(){
        return {
            
            goNext() {
                this.navigateTo('memory-cards');
              }
        }
    }

    getHtml() {
        return `
            <div class="start-container">
                <h1 class="newYear">
                    С Новым Годом, Мия!!!
                </h1>
                <div class="preview">
                    Твой подарок лежит в коробке, но увы, злая и безумная Франческа спрятала его.
                    Тебе придется его отыскать. К счастью она оставила улики.
                    Тебе придется проверить все улики. Удачи!!!
                    (найди все одинаковые карточки) 
                </div>
                <div class="next" event-click="goNext">Далее</div>
            </div>
        `;
    }
}

export default Game2;