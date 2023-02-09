# Rock Paper Scissors
# Exercise 8 ( and Solution)
# Make a two-player Rock-Paper-Scissors game. (Hint: Ask for player plays(using input), compare them, print out a message of congratulations to the winner, and ask if the players want to start a new game)

# Remember the rules:

# Rock beats scissors
# Scissors beats paper
# Paper beats rock

player1 = str(input('Player 1, please choose Rock, Paper, or Scissors: ')).lower()
player2 = str(input('Player 2, please choose Rock, Paper, or Scissors: ')).lower()

def compare(p1, p2) :
    if p1 == p2 :
        print("It's a tie!")
    elif p1 == 'rock' :
        if p2 == 'scissors' :
            print('Player 1 wins! Rock > Scissors')
        else :
            print('Player 2 wins! Paper > Rock')
    elif p1 == 'scissors' :
        if p2 == 'paper' :
            print('Player 1 wins! Scissors > Paper')
        else :
            print('Player 2 wins! Rock > Scissors')
    elif p1 == 'paper' :
        if p2 == 'rock' :
            print('Player 1 wins! Paper > Rock')
        else :
            print('Player 2 wins! Scissors > Paper')
    else :
        print('Sorry, please make sure you only choose Rock, Paper, or Scissors!')

compare(player1, player2)
