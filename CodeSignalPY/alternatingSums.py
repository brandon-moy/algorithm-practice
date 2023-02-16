def solution(a):
    one = 0
    two = 0
    i = 0
    while i < len(a):
        if i % 2 == 0:
            one = one + a[i]
        else:
            two = two + a[i]
        i = i + 1
    return [one, two]
