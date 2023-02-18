def solution(image):
    r = len(image)
    c = len(image[0])
    output = []
    for i in range(1, r-1):
        row = []
        for j in range(1, c-1):
            row.append(sum([image[i+k][j+l] for k in [-1, 0, 1]
                       for l in [-1, 0, 1]])//9)
        output.append(row)
    return output
