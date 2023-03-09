def match(s1, s2):
    found_diff = False
    for c1, c2 in zip(s1, s2):
        if c1 != c2:
            if found_diff:
                return False
            else:
                found_diff = True
    return found_diff


def is_solved(a):
    for idx in range(len(a)-1):
        if not match(a[idx], a[idx+1]):
            return False
    return True


def is_solvable(a, start, end):
    if is_solved(a):
        return True
    else:
        for i in range(start, end):
            a[start], a[i] = a[i], a[start]
            found = is_solvable(a, start+1, end)
            a[i], a[start] = a[start], a[i]
            if found:
                return True


def solution(a):
    if is_solvable(a, 0, len(a)):
        return True
    else:
        return False
