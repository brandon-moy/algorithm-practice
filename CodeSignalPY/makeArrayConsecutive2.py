def solution(statues):
    mn = min(statues)
    mx = max(statues)
    count = mx - mn - len(statues) + 1
    return count
