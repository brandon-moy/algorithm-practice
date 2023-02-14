def solution(n):
    if n <= 1:
        return 1
    area = (n * n) + (n - 1) * (n - 1)
    return area
