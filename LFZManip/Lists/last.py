# last(array)
# 🚨 Do not use slice(), splice(), pop(), or shift() in your implementation of last.

# Parameters
# array - Any JavaScript Array
# Return Value
# The last element of array.

# Examples
# last(['foo', 'bar', 'baz']) // -> "baz"
# last([1, 2, 3, 4, 5]) // -> 5
# last([false, true, false, true]) // -> true
# last([]) // -> undefined

def last(array) :
    end = len(array)
    if end != 0 :
        return array[end - 1]
    else :
        return None


print(last(['foo', 'bar', 'baz']))
print(last([1, 2, 3, 4, 5]))
print(last([False, True, False, True]))
print(last([]))
