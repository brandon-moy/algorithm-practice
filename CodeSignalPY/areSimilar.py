def solution(a, b):
    diff = []
    for i in range(len(a)):
        if a[i] != b[i]:
            diff.append(i)
    if len(diff) == 0: return True
    if len(diff) == 2:
        if a[diff[0]] == b[diff[1]] and a[diff[1]] == b[diff[0]]:
            return True
    return False
