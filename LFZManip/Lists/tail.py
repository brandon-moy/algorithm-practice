# tail(array)
# 🚨 Do not use slice(), splice(), pop(), or shift() in your implementation of tail.

# Parameters
# array - Any JavaScript Array
# Return Value
# A new array containing all elements of array after the first.

# Examples
# tail(['foo', 'bar', 'baz']) // -> ["bar", "baz"]
# tail([1, 2, 3, 4, 5, 6]) // -> [2, 3, 4, 5, 6]
# tail([true, false, false, true]) // -> [false, false, true]
# tail([]) // -> []

def tail(array) :
    start = 1;
    length = len(array)
    output = []
    if start > length :
        return None
    else :
        while start < length :
            output.append(array[start])
            start = start + 1
    return output


print(tail(['foo', 'bar', 'baz']))
print(tail([1, 2, 3, 4, 5, 6]))
print(tail([True, False, False, True]))
print(tail([]))
