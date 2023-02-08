# drop(array, count)
# 🚨 Do not mutate the input array! 🚨

# Parameters
# array - Any JavaScript Array
# count - A positive integer Number of elements to "drop" from the beginning of array
# Return Value
# A new Array containing the elements of array after the first count elements.

# Examples
# drop(['foo', 'bar', 'baz', 'qux'], 2)
# // -> ["baz", "qux"]
# drop([1, 2, 3, 4, 5], 1)
# // -> [2, 3, 4, 5]
# drop([false, true, false, true], 3)
# // -> [true]
# drop([], 7)
# // -> []

def drop(array, count) :
    output = []
    i = count
    end = len(array)
    if end == 0 : return output
    while i < end :
        output.append(array[i])
        i = i + 1
    return output


print(drop(['foo', 'bar', 'baz', 'qux'], 2))
print(drop([1, 2, 3, 4, 5], 1))
print(drop([False, True, False, True], 3))
print(drop([], 7))
