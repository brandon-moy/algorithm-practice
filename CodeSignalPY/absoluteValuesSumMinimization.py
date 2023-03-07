def solution(a):
    output = []
    for i in a:
        abv = 0
        for j in a:
            abv += abs(j - i)
        output.append(abv)
    location = output.index(min(output))
    return a[location]
