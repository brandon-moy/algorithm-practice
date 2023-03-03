def solution(inputString):
    output = ''
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for i in range(len(inputString)):
        position = alphabet.index(inputString[i]) + 1
        if position == 26:
            position = 0
        output += alphabet[position]
    return output
