# chunk(array, size)
# 🚨 Do not mutate the input array! 🚨

# Parameters
# array - Any JavaScript Array
# size - A positive integer Number indicating the desired "chunk" size.
# Return Value
# A new Array of Arrays. Each sub-Array has a length equal to size. Remaining elements are gathered into a final sub-Array.

# OPTIONAL CHALLENGE(optional: don't do it this way if it takes a long time to solve)
# Do not use Array.prototype.slice in your implementation.

# Examples
# chunk(['foo', 'bar', 'baz', 'qux'], 2)
# # -> [["foo", "bar"], ["baz", "qux"]]
# chunk([1, 2, 3, 4, 5], 1)
# # -> [[1], [2], [3], [4], [5]]
# chunk([false, true, false, true], 3)
# # -> [[false, true, false], [true]]
# chunk([], 7)
# # -> []

def chunk(array, size) :
    output = []
    i = 0
    j = 0
    sub = []
    if len(array) == 0 : return output
    while i < len(array) :
       if j < size :
          sub.append(array[i])
          j = j + 1
       else :
          output.append(sub)
          sub = []
          sub.append(array[i])
          j = 1
       i = i + 1
    if len(sub) != 0 : output.append(sub)
    return output


print(chunk(['foo', 'bar', 'baz', 'qux'], 2))
print(chunk([1, 2, 3, 4, 5], 1))
print(chunk([False, True, False, True], 3))
print(chunk([], 7))
