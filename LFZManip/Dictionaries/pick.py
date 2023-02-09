# pick(source, keys)
# Creates an object composed of the picked source properties.

# Parameters
# source - Any JavaScript Object
# keys - An array of JavaScript Strings
# Return Value
# A new Object containing all of the properties of source listed in keys. If a key is listed in keys, but is not defined in source, then that property is not added to the new Object.

# Examples
# pick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']) // -> { foo: 1, baz: 3 }
# pick({ qux: 4, corge: 5 }, ['bar', 'grault'])    // -> {}
# pick({ bar: 2 }, ['foo', 'bar', 'baz'])          // -> { bar: 2 }

def pick(source,keys) :
    output = {}
    i = 0
    while i < len(keys) :
        if keys[i] in source :
            output[keys[i]] = source[keys[i]]
        i = i + 1
    return output

print(pick({ 'foo': 1, 'bar': 2, 'baz': 3 }, ['foo', 'baz']))
print(pick({ 'qux': 4, 'corge': 5 }, ['bar', 'grault']))
print(pick({ 'bar': 2 }, ['foo', 'bar', 'baz']))
