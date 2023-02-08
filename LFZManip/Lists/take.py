# take(array, count)
# 🚨 Do not mutate the input array! 🚨

# Parameters
# array - Any JavaScript Array
# count - A positive integer Number of elements to "take" from the beginning of array
# Return Value
# A new Array containing the first count elements of array.

# Examples
# take(['foo', 'bar', 'baz', 'qux'], 2)
# // -> ["foo", "bar"]
# take([1, 2, 3, 4, 5], 1)
# // -> [1]
# take([false, true, false, true], 3)
# // -> [false, true, false]
# take([], 7)
# // -> []

def take(array, count) :
    output = []
    i = 0
    if len(array) == 0 :
        return output
    while i < count :
        output.append(array[i])
        i = i + 1
    return output


print(take(['foo', 'bar', 'baz', 'qux'], 2))
print(take([1, 2, 3, 4, 5], 1))
print(take([False, True, False, True], 3))
print(take([], 7))
