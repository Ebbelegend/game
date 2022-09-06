function Game () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("Go!")
    Car = game.createSprite(2, 4)
    for (let index = 0; index < 10; index++) {
        Enemyx = randint(0, 4)
        Enemy = game.createSprite(Enemyx, 0)
        for (let index = 0; index < 5; index++) {
            Enemy.change(LedSpriteProperty.Y, 1)
            basic.pause(1000)
            if (Enemy.isTouching(Car)) {
                game.gameOver()
            }
        }
        Enemy.delete()
    }
}
input.onButtonPressed(Button.A, function () {
    Car.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    Game()
})
input.onButtonPressed(Button.B, function () {
    Car.move(1)
})
let Enemy: game.LedSprite = null
let Enemyx = 0
let Car: game.LedSprite = null
basic.showString("Press A+B!")
basic.forever(function () {
	
})
