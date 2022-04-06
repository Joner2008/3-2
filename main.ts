input.onButtonPressed(Button.A, function () {
    PUNTUA.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        PUNTUA.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    basic.showIcon(IconNames.Chessboard)
    basic.showIcon(IconNames.SmallDiamond)
    for (let index = 0; index < 4; index++) {
        PUNTUA.change(LedSpriteProperty.Y, -4)
    }
})
input.onButtonPressed(Button.B, function () {
    PUNTUA.move(1)
})
let PUNTUA: game.LedSprite = null
PUNTUA = game.createSprite(2, 0)
