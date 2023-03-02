def solution(inputArray, elemToReplace, substitutionElem):
    output = []
    for i in range(len(inputArray)):
        if inputArray[i] == elemToReplace:
            output.append(substitutionElem)
        else:
            output.append(inputArray[i])
    return output
