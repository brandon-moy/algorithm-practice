def solution(n):
    strN = str(n)
    for i in range(len(strN)):
        if int(strN[i]) % 2 != 0:
            return False
    return True
