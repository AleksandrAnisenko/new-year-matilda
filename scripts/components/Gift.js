import Component from "./Component.js";

class Gift extends Component{
    constructor(element) {
        super(element);
        this.render();   
        this.$letter = document.querySelector('.letter');
        this.$content = document.querySelector('.content-box');
 
        document.addEventListener('click', (e) => {return this.addActive(e)});
        document.addEventListener('mouseover', (e) => {return this.addHover(e)});
 
    }

    addActive(e) {
        if(e.target.classList.contains("cover") || e.target.classList.contains("side")){
            return this.$content.classList.contains('active') ? false : this.$content.classList.toggle('active')
        }
        this.$content.classList.remove('active')
    }

    addHover(e) {
        if(e.target.classList.contains("cover") || e.target.classList.contains("side")){
        return this.$content.classList.contains('hover') ? false : this.$content.classList.toggle('hover')
    }
        this.$content.classList.remove('hover')

    }
    
    getAllComponentEvents(){
        return {

        }
    }

    getHtml() {
        return `
            <div class="main-view">
                <div class="content-box">
                    <div class="container-box">
                        <div class="container-cover">
                            <div class="top-cover cover"></div>
                            <div class="left-cover cover"></div>
                            <div class="right-cover cover"></div>
                            <div class="back-cover cover"></div>
                            <div class="front-cover cover"></div>
                        </div>
                        <div class="back-box side"></div>
                        <div class="left-box side"></div>
                        <div class="right-box side"></div>
                        <div class="bottom-box side"></div>
                        <div class="front-box side"></div>
                        <div class="letter">
                            <div class="letter-wrapper">
                                Привет, Лиса)) Ну что расскажешь? <br>
                                Небось за день устала ты. <br>
                                В кроватку может быть приляжешь, <br>
                                И отдохнешь от суеты?
                                <br>
                                А я пока дела закончу, <br>
                                И ужин приготовлю нам. <br>
                                Его, надеюсь, не испорчу <br>
                                И романтик тебе создам))
                                <br>
                                ...
                                <br>
                                Ну что, милашка, отдохнула? <br>
                                Тогда садись, налью вино. <br>
                                Судьба с тобой меня столкнула, <br>
                                Хочу сказать тебе одно))
                                <br>
                                С тобой мне нравится общаться)) <br>
                                Ты и красива, и умна)) <br>
                                Вдвоем хочу я тусоваться, <br>
                                Ты очень для меня важна.
                                <br>
                                ...
                                <br>
                                Порой ты говоришь, что злая, <br>
                                Что есть вокруг тебя колючки, <br>
                                Но знаю я, ты не такая, <br>
                                И подниму тебя на ручки))
                                <br>
                                Пускай я иногда чудачу, <br>
                                Но никогда тебе не лгу. <br>
                                Тебя в своих объятиях спрячу, <br>
                                И сны твои оберегу))
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

export default Gift;