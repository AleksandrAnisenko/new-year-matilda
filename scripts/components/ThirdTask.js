import Component from "./Component.js";

class ThirdTask extends Component{
    constructor(element) {
        super(element);
        this.render();    
    }

    
    getAllComponentEvents(){
        return {
            
            goNext() {
                this.navigateTo('safe');
              }
        }
    }

    getHtml() {
        return `
            <div class="start-container">
                <h1 class="newYear">
                    Молодец!!!
                </h1>
                <div class="preview">
                    Ты назвала правильную кодовую фразу и тебя пропусили.
                    Кажется Франческа спрятала коробку сдесь.
                    Перед тобой стоит сейф, но он закрыт на три кодовых замка.
                    Придется ввести шифр к каждому замку. Я в тебя верю, Мия.
                    (используй подсказки "?", они помогут тебе подобрать шифр) 
                </div>
                <div class="next" event-click="goNext">Далее</div>
            </div>
        `;
    }
}

export default ThirdTask;