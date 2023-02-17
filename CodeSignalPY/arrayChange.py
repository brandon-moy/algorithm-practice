def solution(inputArray):
    output = 0
    for i in range(1, len(inputArray)):
        if inputArray[i] <= inputArray[i - 1]:
            f = (inputArray[i - 1] - inputArray[i]) + 1
            inputArray[i] = inputArray[i - 1] + 1
            output += f
    return output
