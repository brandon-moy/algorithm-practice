# omit(source, keys)
# The opposite of pick
# this method creates an object composed of properties of source not listed in keys.

# Parameters
# source - Any JavaScript Object
# keys - An array of JavaScript Strings
# Return Value
# A new Object containing all of the properties of source that are not listed in keys. If a key is listed in keys, then it should not be included in the new Object.

# Examples
# omit({foo: 1, bar: 2, baz: 3}, ['foo', 'baz']) // -> {bar: 2}
# omit({qux: 4, corge: 5}, ['bar', 'grault']) // -> {qux: 4, corge: 5}
# omit({}, ['foo', 'bar', 'baz']) // -> {}

def omit(source, keys) :
    output = {}
    for key in source :
        if key not in keys :
            output[key] = source[key]
    return output

print(omit({ 'foo': 1, 'bar': 2, 'baz': 3 }, ['foo', 'baz']))
print(omit({ 'qux': 4, 'corge': 5 }, ['bar', 'grault']))
print(omit({ 'bar': 2 }, ['foo', 'bar', 'baz']))
