import Component from "./Component.js";

class MemoryCards extends Component{
    constructor(element) {
        super(element);
        this.render();
        this.$cards = document.querySelectorAll('.memory-card');
        this.shuffle();
        this.finish = false;
        this.lockBoard = false;
        this.hasFlippedCard = false;
        this.firstCard, this.secondCard;
    }

    shuffle() {
      this.$cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
      });
    }

    checkForMatch() {
      let isMatch = this.firstCard.dataset.img === this.secondCard.dataset.img;
      isMatch ? this.disableCards() : this.unflipCards();
     }

     disableCards() {
      this.firstCard.removeAttribute('event-click');
      this.secondCard.removeAttribute('event-click');
      this.firstCard.classList.add('none-clickable')
      this.secondCard.classList.add('none-clickable')

      const isNotReady = document.querySelector('[event-click="flipCard"]');
      if(!isNotReady) {
        setTimeout(() => {
          this.goNext();
        }, 1500);
      }
    }

    unflipCards() {
      this.lockBoard = true;
      setTimeout(() => {
        this.firstCard.classList.remove('flip');
        this.secondCard.classList.remove('flip');
        this.lockBoard = false;
      }, 500);
    }

    goNext() {
      this.navigateTo('second-task');
    }


    getAllComponentEvents(){
        return {
          flipCard(e) {
            const $div = e.target.parentNode;
            if (this.lockBoard) return;
            $div.classList.add('flip');
            if (!this.hasFlippedCard) {
                this.hasFlippedCard = true;
                this.firstCard = $div;
                this.firstCard.setAttribute('used', '')
                return;
            }
            if ($div.hasAttribute('used')) return;
            this.firstCard.removeAttribute('used')
            this.secondCard = $div;
            this.hasFlippedCard = false;
                
           this.checkForMatch();
          },
      }
    }

    getHtml() {
        return `
          <section class="memory-game">
          <div class="memory-card" event-click="flipCard" data-img="Lynx">
            <img class="front-face" src="./images/Lynx.jpg" alt="Lynx">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="Lynx">
            <img class="front-face" src="./images/Lynx.jpg" alt="Lynx">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="fox">
            <img class="front-face" src="./images/fox.jpg" alt="fox">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="fox">
            <img class="front-face" src="./images/fox.jpg" alt="fox">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="giraffe">
            <img class="front-face" src="./images/giraffe.jpg" alt="giraffe">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="giraffe">
            <img class="front-face" src="./images/giraffe.jpg" alt="giraffe">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="Hedgehog">
            <img class="front-face" src="./images/Hedgehog.jpg" alt="Hedgehog">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="Hedgehog">
            <img class="front-face" src="./images/Hedgehog.jpg" alt="Hedgehog">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="tree">
            <img class="front-face" src="./images/tree.jpg" alt="tree">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="tree">
            <img class="front-face" src="./images/tree.jpg" alt="tree">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="snowman">
            <img class="front-face" src="./images/snowman.jpg" alt="snowman">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="snowman">
            <img class="front-face" src="./images/snowman.jpg" alt="snowman">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>

          <div class="memory-card" event-click="flipCard" data-img="tree2">
            <img class="front-face" src="./images/tree2.jpg" alt="tree2">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>

          <div class="memory-card" event-click="flipCard" data-img="tree2">
            <img class="front-face" src="./images/tree2.jpg" alt="tree2">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="NEball">
            <img class="front-face" src="./images/NEball.jpg" alt="NEball">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>

          <div class="memory-card" event-click="flipCard" data-img="NEball">
            <img class="front-face" src="./images/NEball.jpg" alt="NEball">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>

          <div class="memory-card" event-click="flipCard" data-img="present">
            <img class="front-face" src="./images/present.jpg" alt="present">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>

          <div class="memory-card" event-click="flipCard" data-img="present">
            <img class="front-face" src="./images/present.jpg" alt="present">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>

          <div class="memory-card" event-click="flipCard" data-img="blueberry">
            <img class="front-face" src="./images/blueberry.jpg" alt="blueberry">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="blueberry">
            <img class="front-face" src="./images/blueberry.jpg" alt="blueberry">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>

          <div class="memory-card" event-click="flipCard" data-img="apple">
            <img class="front-face" src="./images/apple.jpg" alt="apple">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="apple">
            <img class="front-face" src="./images/apple.jpg" alt="apple">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="torro">
            <img class="front-face" src="./images/torro.jpg" alt="torro">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="torro">
            <img class="front-face" src="./images/torro.jpg" alt="torro">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="manicure">
            <img class="front-face" src="./images/manicure.jpg" alt="manicure">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="manicure">
            <img class="front-face" src="./images/manicure.jpg" alt="manicure">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="ben">
            <img class="front-face" src="./images/ben.jpg" alt="ben">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="ben">
            <img class="front-face" src="./images/ben.jpg" alt="ben">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="sangria">
            <img class="front-face" src="./images/sangria.jpg" alt="sangria">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="sangria">
            <img class="front-face" src="./images/sangria.jpg" alt="sangria">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="ermitage">
            <img class="front-face" src="./images/ermitage.jpg" alt="ermitage">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="ermitage">
            <img class="front-face" src="./images/ermitage.jpg" alt="ermitage">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>

          <div class="memory-card" event-click="flipCard" data-img="lily">
            <img class="front-face" src="./images/lily.jpg" alt="lily">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="lily">
            <img class="front-face" src="./images/lily.jpg" alt="lily">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>

          <div class="memory-card" event-click="flipCard" data-img="leyla">
            <img class="front-face" src="./images/leyla.jpg" alt="tree">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="leyla">
            <img class="front-face" src="./images/leyla.jpg" alt="leyla">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>

          <div class="memory-card" event-click="flipCard" data-img="freyd">
            <img class="front-face" src="./images/freyd.jpg" alt="freyd">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="freyd">
            <img class="front-face" src="./images/freyd.jpg" alt="freyd">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>

          <div class="memory-card" event-click="flipCard" data-img="heart">
            <img class="front-face" src="./images/heart.jpg" alt="heart">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        
          <div class="memory-card" event-click="flipCard" data-img="heart">
            <img class="front-face" src="./images/heart.jpg" alt="heart">
            <img class="back-face" src="./images/badge.jpg" alt="Memory Card">
          </div>
        </section>
      `;
    }
}

export default MemoryCards;