def solution(inputString):
    inputList = inputString.split('.')
    if len(inputList) != 4:
        return False
    for i in range(len(inputList)):
        if not inputList[i].isnumeric():
            return False
        elif (len(inputList[i]) > 1) and (inputList[i][0] == '0'):
            return False
        elif int(inputList[i]) not in range(256):
            return False
    return True
