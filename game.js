class state {

    preload() {

        this.load.image('player', 'assets/player.png')
        this.load.image('coin', 'assets/coin.png')
    }

    create() {

        this.player = this.physics.add.sprite(100, 100, 'player')
        this.coin = this.physics.add.sprite(300, 300, 'coin')

        // create score
        this.score = 0

        // style code
        let style = {

            font: '20px Arial',
            fill: '#fff'
        }

        // load score
        this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style)

        // able Phaser arrow keys as inputs
        this.arrow = this.input.keyboard.createCursorKeys()



    }

    update() {

        // if the player is overlapping with the 'coin'

        // take the coin
        if(this.physics.overlap(this.player, this.coin)) {

            // call the new 'hit()' method
            this.hit()
        }

        // handle horizontal movements
        if(this.arrow.right.isDown) {

            this.player.x += 3
        } 
        else if(this.arrow.left.isDown) {

            this.player.x -= 3
        }

        // do the same for vertical movements
        if(this.arrow.down.isDown) { 
            this.player.y += 3 
        }

        else if(this.arrow.up.isDown) { 
            this.player.y -= 3 
        }
    } 

    hit() {

        this.coin.x = Phaser.Math.Between(100, 600)
        this.coin.y = Phaser.Math.Between(100, 300)

        this.score += 10

        this.scoreText.setText('score: ' + this.score)


        // create a new tween
        this.tweens.add({

            targets: this.player,
            duration: 200,
            scaleX: 1.2,
            scaleY: 1.2,
            yoyo: true,
        })


        this.tweens.add({

            targets: this.coin,
            duration: 200,
            scaleX: 1.2,
            scaleY: 1.2,
            yoyo: true,
        })
    }



}

new Phaser.Game({

    width: 700,
    height: 400,
    backgroundColor: '#3498db',
    scene: state,
    physics: { default: 'arcade' },
    parent: 'game',
})

