def solution(inputArray):
    output = []
    length = 0
    for i in range(len(inputArray)):
        if len(inputArray[i]) > length:
            length = len(inputArray[i])
    for j in range(len(inputArray)):
        if len(inputArray[j]) == length:
            output.append(inputArray[j])
    return output
