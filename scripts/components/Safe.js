import Component from "./Component.js";

class Safe extends Component{
    constructor(element) {
        super(element);
        this.render();   
        this.counter = 0; 
    }

    unlock(lock) {
        lock.style.top = '220px';
        if (this.counter === 3) {
            document.querySelector('.safe img').style.opacity = '0';
            document.querySelector('.get-gift').style.opacity = '1';
            document.querySelector('.get-gift').style['z-index'] = '100';
        }
    }
    
    getAllComponentEvents(){
        return {

            validateRGB(e) {
                e.preventDefault();
                let code = '';
                const $inputs = document.querySelectorAll('.rgb-input');
                $inputs.forEach((input) => code += input.value);
                if (code === '02550') {
                    document.querySelector('.rgb').classList.add('none-clickable');
                    this.counter += 1;
                    return this.unlock(document.querySelector('.lock1'));    
                } 
                $inputs.forEach((input) => input.value = '');
            },

            validateMap(e) {
                e.preventDefault();
                let code = '';
                const $input = document.querySelector('.map-input');
                code = $input.value;
                if (code.toUpperCase() === 'ЛДОПСЬ') {
                    document.querySelector('.map').classList.add('none-clickable');
                    this.counter += 1;
                    return this.unlock(document.querySelector('.lock2'));
                } 
                $input.value = '';
            },

            validateSequence(e) {
                e.preventDefault();
                let code = '';
                const $input = document.querySelector('.sequence-input');
                code = $input.value;
                if (code === '1311') {
                    document.querySelector('.sequence').classList.add('none-clickable');
                    this.counter += 1;
                    return this.unlock(document.querySelector('.lock3'));
                } 
                $input.value = '';
            },
            
            goNext() {
                this.navigateTo('gift');
            }
        }
    }

    getHtml() {
        return `
            <div class="game3-wrapper">
                <div class="inputs-field">
                    <form class="rgb" event-submit="validateRGB">
                        <input class="input rgb-input">
                        <input class="input rgb-input">
                        <input class="input rgb-input">
                        <button class="openLock">Открыть замок</button>
                        <div class="helper">
                            <span class="q">?</span>
                            <span class="help1">RGB <div class="rgbDIV"></div></span>
                        </div>
                    </form>
                    <form class="map" event-submit="validateMap">
                        <input class="input map-input">
                        <button class="openLock">Открыть замок</button>
                        <div class="helper">
                            <span class="q">?</span>
                            <span class="help2">
                            <div class="coords">55°47'05.9"N 37°31'35.4"E</div>
                            <div class="coords">55°43'39.5"N 37°37'44.3"E</div>
                            <div class="coords">55°42'26.2"N 37°28'15.4"E</div>
                            <div class="coords">55°42'58.6"N 37°36'43.6"E</div>
                            <div class="coords">55°35'58.4"N 37°30'47.7"E</div>
                            <div class="coords">55°44'18.1"N 37°38'12.8"E</div>
                            </span>
                        </div>
                    </form>
                    <form class="sequence" event-submit="validateSequence">
                        <input class="input sequence-input">
                        <button class="openLock">Открыть замок</button>
                        <div class="helper">
                            <span class="q">?</span>
                            <span class="help3">
                            1 ? 2 ? 5 8 ?3 2?
                        </div>
                    </form>
                </div>
                <div class="safe-field">
                    <div class="safe">
                        <div class="lock lock1"></div>
                        <div class="lock lock2"></div>
                        <div class="lock lock3"></div>
                        <img src="./images/safe.png">
                        <div class="get-gift">
                            <img event-click="goNext" src="./images/gift.png">
                        <div>
                    </div>
                </div>
            </div>
        `;
    }
}

export default Safe;