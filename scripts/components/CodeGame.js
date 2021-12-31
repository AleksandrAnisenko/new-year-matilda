import Component from "./Component.js";

class CodeGame extends Component{
    constructor(element) {
        super(element);
        this.render();    
        this.finish = false;
        this.$elems = document.querySelectorAll('.game2-elem');
        this.shuffle();
        this.answer = document.getElementById('game2Form-input');
        this.reset = document.getElementById('resetGame2');
    }

    shuffle() {
        this.$elems.forEach(elem => {
          let randomPos = Math.floor(Math.random() * 4);
          elem.style.order = randomPos;
        });
      }

    goNext() {
        this.navigateTo('third-task');
    }

    
    getAllComponentEvents(){
        return {
            addSymbol(e) {
                this.answer.value += e.target.innerText
                e.target.classList.add('used');
                if (this.answer.value === 'ГЕШТАЛЬТ_ТЕРАПИЯ')
                setTimeout(() => {
                    this.goNext();
                  }, 1000);
            },
            reset() {
                this.answer.value = '';
                document.querySelectorAll('.game2-elem').forEach((elem) => elem.classList.remove('used'))
            },
        }
    }

    getHtml() {
        return `
            <form id="game2Form">
                <input id="game2Form-input" value="">
            </form>
            <div class="game2-wrapper">
                <div class="game2-elem" event-click="addSymbol">Л</div>
                <div class="game2-elem" event-click="addSymbol">И</div>
                <div class="game2-elem" event-click="addSymbol">А</div>
                <div class="game2-elem" event-click="addSymbol">Я</div>
                <div class="game2-elem" event-click="addSymbol">П</div>
                <div class="game2-elem" event-click="addSymbol">Т</div>
                <div class="game2-elem" event-click="addSymbol">Т</div>
                <div class="game2-elem" event-click="addSymbol">Ь</div>
                <div class="game2-elem" event-click="addSymbol">_</div>
                <div class="game2-elem" event-click="addSymbol">Т</div>
                <div class="game2-elem" event-click="addSymbol">Е</div>
                <div class="game2-elem" event-click="addSymbol">А</div>
                <div class="game2-elem" event-click="addSymbol">Е</div>
                <div class="game2-elem" event-click="addSymbol">Г</div>
                <div class="game2-elem" event-click="addSymbol">Р</div>
                <div class="game2-elem" event-click="addSymbol">Ш</div>
            </div>
            <div id="resetGame2" class="resetGame2" event-click="reset"> СБРОС </div>
        `;
    }
}

export default CodeGame;