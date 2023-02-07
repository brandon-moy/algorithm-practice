# reverse(array)
# Do not use Array.prototype.reverse() in your implementation of reverse.

# Parameters
# array - Any JavaScript Array
# Return Value
# A new array containing all elements of array in reverse order.

# Examples
# reverse(['foo', 'bar', 'baz']) // -> ["baz", "bar", "foo"]
# reverse([1, 2, 3, 4, 5]) // -> [5, 4, 3, 2, 1]
# reverse([false, true, false, true]) // -> [true, false, true, false]
# reverse([]) // -> []

def reverse(array) :
    reverse = []
    end = len(array) - 1
    while end > -1 :
        reverse.append(array[end])
        end = end - 1
    return reverse

print(reverse(['foo', 'bar', 'baz']))
print(reverse([1, 2, 3, 4, 5]))
print(reverse([False, True, False, True]))
print(reverse([]))
