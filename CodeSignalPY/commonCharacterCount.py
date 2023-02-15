def solution(s1, s2):
    output = 0
    s1l = list(s1)
    s2l = list(s2)
    for i in range(len(s1l)):
        for j in range(len(s2l)):
            if s1l[i] == s2l[j]:
                s2l.remove(s1l[i])
                output = output + 1
                break
    return output
