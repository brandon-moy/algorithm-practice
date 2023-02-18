def solution(inputArray):
    jump = 1
    valid = True
    while True:
        valid = True
        for i in range(len(inputArray)):
            if inputArray[i] % jump == 0:
                valid = False
        if valid == True:
            return jump
        jump += 1
