function Update_Scores () {
    OLED.clear()
    OLED.writeStringNewLine("Player1" + Player_1)
    OLED.newLine()
    OLED.writeStringNewLine("Player2" + Player_1)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + rounds)
    OLED.newLine()
    OLED.writeStringNewLine("Ties" + ties)
}
let rounds = 0
let ties = 0
let Player_1 = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Wanna play a game?")
Player_1 = 0
let player_2 = 0
ties = 0
rounds = 0
basic.pause(1000)
