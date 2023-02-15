def solution(n):
    middle = int(len(str(n)) / 2)
    nums = list(str(n))
    first = nums[:middle]
    second = nums[middle:]
    sum_a = 0
    sum_b = 0
    for i in range(len(first)):
        sum_a = sum_a + int(first[i])
        sum_b = sum_b + int(second[i])
    return sum_a == sum_b
