def solution(picture):
    border_length = len(picture[0]) + 2
    border = ''
    i = 0
    while i < border_length:
        border += '*'
        i += 1
    output = [border]
    j = 0
    while j < len(picture):
        add = '*' + picture[j] + '*'
        output.append(add)
        j += 1
    output.append(border)
    return output
