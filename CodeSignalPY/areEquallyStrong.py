def solution(yourLeft, yourRight, friendsLeft, friendsRight):
    yourStrongest = yourLeft if yourLeft > yourRight else yourRight
    friendsStrongest = friendsLeft if friendsLeft > friendsRight else friendsRight
    if yourStrongest != friendsStrongest:
        return False
    yourWeakest = yourLeft if yourLeft < yourRight else yourRight
    friendsWeakest = friendsLeft if friendsLeft < friendsRight else friendsRight
    if yourWeakest != friendsWeakest:
        return False
    return True
