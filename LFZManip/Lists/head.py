# head(array)
# 🚨 Do not use slice(), splice(), pop(), or shift() in your implementation of head.

# Parameters
# array - Any JavaScript Array
# Return Value
# The first element of array.

# Examples
# head(['foo', 'bar', 'baz']) // -> "foo"
# head([1, 2, 3, 4, 5]) // -> 1
# head([false, true, false, true]) // -> false
# head([]) // -> undefined

def head(array) :
    if len(array) != 0 :
        return array[0]
    else :
        return None

print(head(['foo', 'bar', 'baz']))
print(head([1, 2, 3, 4, 5]))
print(head([False, True, False, True]))
print(head([]))
