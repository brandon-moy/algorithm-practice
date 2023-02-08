# includes(array, value) 🚨
# 🚨 Do not use Array.prototype.includes in your implementation. 🚨

# Parameters
# array - Any JavaScript Array
# value - The value to search for in array
# Return Value
# A Boolean indicating the presence of value at any index of array.

# Examples
# includes(['foo', 'bar', 'baz', 'qux'], 'baz')
# // -> true
# includes(['foo', 'bar', 'baz', 'qux'], 'corge')
# // -> false
# includes([1, 2, 3, 4, 5], 2)
# // -> true
# includes([1, 2, 3, 4, 5], 7)
# // -> false
# includes([false, true, false, true], false)
# // -> true
# includes([false, true, false, true], null)
# // -> false
# includes([], true)
# // -> false
# includes([], 'foo')
# // -> false
# includes([], 7)
# // -> false

def includes(array, value) :
    for item in array :
        if item == value :
            return True
    return False


print(includes(['foo', 'bar', 'baz', 'qux'], 'baz'))
print(includes(['foo', 'bar', 'baz', 'qux'], 'corge'))
print(includes([1, 2, 3, 4, 5], 2))
print(includes([1, 2, 3, 4, 5], 7))
print(includes([False, True, False, True], False))
print(includes([False, True, False, True], None))
print(includes([], True))
print(includes([], 'foo'))
print(includes([], 7))
