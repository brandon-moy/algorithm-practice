# dropRight(array, count)
# 🚨 Do not mutate the input array! 🚨

# Parameters
# array - Any JavaScript Array
# count - A positive integer Number of elements to "drop" from the end of array.
# Return Value
# A new Array containing the elements of array before the last count elements.

# Examples
# dropRight(['foo', 'bar', 'baz', 'qux'], 2)
# // -> ["foo", "bar"]
# dropRight([1, 2, 3, 4, 5], 1)
# // -> [1, 2, 3, 4]
# dropRight([false, true, false, true], 3)
# // -> [false]
# dropRight([], 7)
# // -> []

def dropRight(array, count) :
    end = len(array) - count
    output = []
    i = 0
    if len(array) == 0 : return output
    while i < end :
        output.append(array[i])
        i = i + 1
    return output


print(dropRight(['foo', 'bar', 'baz', 'qux'], 2))
print(dropRight([1, 2, 3, 4, 5], 1))
print(dropRight([False, True, False, True], 3))
print(dropRight([], 7))
