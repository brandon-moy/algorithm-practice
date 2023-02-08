# takeRight(array, count)
# 🚨 Do not mutate the input array! 🚨

# Parameters
# array - Any JavaScript Array
# count - A positive integer Number of elements to "take" from the end of array.
# Return Value
# A new Array containing the last count elements of array. If the count is larger than the length of the array, then a shallow copy of the entire array is returned.

# Examples
# takeRight(['foo', 'bar', 'baz', 'qux'], 2)
# // -> ["baz", "qux"]
# takeRight([1, 2, 3, 4, 5], 1)
# // -> [5]
# takeRight([false, true, false, true], 3)
# // -> [true, false, true]
# takeRight([], 7)
# // -> []
# takeRight([4, 5, 6, 7], 5)
# // -> [4, 5, 6, 7]

def takeRight(array, count) :
    output = []
    i = len(array) - count
    if len(array) == 0 : return output
    if i < 0 : i = 0
    while i < len(array) :
        output.append(array[i])
        i = i + 1
    return output

print(takeRight(['foo', 'bar', 'baz', 'qux'], 2))
print(takeRight([1, 2, 3, 4, 5], 1))
print(takeRight([False, True, False, True], 3))
print(takeRight([], 7))
print(takeRight([4, 5, 6, 7], 5))
