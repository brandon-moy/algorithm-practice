# initial(array)
# 🚨 Do not use slice(), splice(), pop(), or shift() in your implementation of initial.

# Parameters
# array - Any JavaScript Array
# Return Value
# A new array containing all elements of array except the last.

# Examples
# initial(['foo', 'bar', 'baz']) // -> ["foo", "bar"]
# initial([1, 2, 3, 4, 5, 6]) // -> [1, 2, 3, 4, 5]
# initial([true, false, false, true]) // -> [true, false, false]
# initial([]) // -> []

def initial(array) :
    start = 0
    end = len(array) - 1
    output = []
    if len(array) == 0 :
        return None
    else :
        while start < end :
            output.append(array[start])
            start = start + 1
    return output

print(initial(['foo', 'bar', 'baz']))
print(initial([1, 2, 3, 4, 5, 6]))
print(initial([True, False, False, True]))
print(initial([]))
