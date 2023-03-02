def solution(matrix):
    r = len(matrix)
    c = len(matrix[0])
    m = [[] for x in range(r)]
    for x in range(r):
        for y in range(c):
            count = 0
            if r > x-1 >= 0 and c > y-1 >= 0 and matrix[x-1][y-1] == True:
                count += 1
            if r > x >= 0 and c > y-1 >= 0 and matrix[x][y-1] == True:
                count += 1
            if r > x+1 >= 0 and c > y-1 >= 0 and matrix[x+1][y-1] == True:
                count += 1
            if r > x-1 >= 0 and c > y >= 0 and matrix[x-1][y] == True:
                count += 1
            if r > x+1 >= 0 and c > y >= 0 and matrix[x+1][y] == True:
                count += 1
            if r > x-1 >= 0 and c > y+1 >= 0 and matrix[x-1][y+1] == True:
                count += 1
            if r > x >= 0 and c > y+1 >= 0 and matrix[x][y+1] == True:
                count += 1
            if r > x+1 >= 0 and c > y+1 >= 0 and matrix[x+1][y+1] == True:
                count += 1
            m[x].append(count)
    return (m)
