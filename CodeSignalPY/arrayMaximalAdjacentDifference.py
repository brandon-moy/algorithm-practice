def solution(inputArray):
    distance = 0
    i = 0
    while i < len(inputArray) - 1:
        difference = inputArray[i] - inputArray[i + 1] if inputArray[i] > inputArray[i + 1] else inputArray[i + 1] - inputArray[i]
        if difference > distance:
            distance = difference
        i += 1
    return distance
