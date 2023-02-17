import math

def solution(inputString):
    rearranged = sorted(inputString)
    count = 0
    i = 0
    while i < len(rearranged) - 1:
        if rearranged[i] == rearranged[i + 1]:
            count += 1
            i += 2
        else:
            i += 1
    return count == math.floor(len(rearranged) / 2)
