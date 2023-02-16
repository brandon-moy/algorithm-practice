def solution(a):
    output = []
    for i in range(len(a)):
        if a[i] != -1:
            output += [a[i]]
    for i in range(len(output)):
        for j in range(0, len(output)-i-1):
            if output[j] > output[j+1] :
                output[j], output[j+1] = output[j+1], output[j]
    k = 0
    for i in range(len(a)):
        if a[i] != -1:
            a[i] = output[k]
            k += 1
    return a
