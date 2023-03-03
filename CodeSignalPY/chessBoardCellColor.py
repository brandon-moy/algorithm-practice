def solution(cell1, cell2):
    group1 = ['A', 'C', 'E', 'G']
    cell1color = ''
    cell2color = ''
    if cell1[0] in group1:
        if int(cell1[1]) % 2:
            cell1color = 'tan'
        else:
            cell1color = 'brown'
    else:
        if int(cell1[1]) % 2:
            cell1color = 'brown'
        else:
            cell1color = 'tan'

    if cell2[0] in group1:
        if int(cell2[1]) % 2:
            cell2color = 'tan'
        else:
            cell2color = 'brown'
    else:
        if int(cell2[1]) % 2:
            cell2color = 'brown'
        else:
            cell2color = 'tan'
    if cell1color == cell2color:
        return True
    return False
