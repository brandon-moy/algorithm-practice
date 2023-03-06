def solution(n, firstNumber):
    half = n / 2
    across = firstNumber + half
    if across > n:
        across = firstNumber - half
    elif across == n:
        across = 0
    return across
