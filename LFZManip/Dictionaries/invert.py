# invert(source)
# Creates an object composed of the inverted keys and values of source.

# Parameters
# source - Any JavaScript Object
# Return Value
# A new Object containing all properties of source, but with the keys and values inverted.

# Examples
# invert({age: NaN, occupation: 'programmer', language: 'JavaScript'})
# // -> {NaN: 'age', programmer: 'occupation', JavaScript: 'language'}
# invert({accountId: 'axbxcx', amount: 1000, type: 'withdrawal'})
# // -> {axbxcx: 'accountId', '1000': 'amount', withdrawal: 'type'}
# invert({name: 'ada', type: 'cat', breed: 'bengal', age: 1.5})
# // -> {ada: 'name', cat: 'type', bengal: 'breed', '1.5': 'age'}
# invert({})
# // -> {}

def invert(source) :
    output = {}
    for key in source :
        output[source[key]] = key
    return output

print(invert({ 'age': 'NaN', 'occupation': 'programmer', 'language': 'JavaScript' }))
print(invert({ 'accountId': 'axbxcx', 'amount': 1000, type: 'withdrawal' }))
print(invert({ 'name': 'ada', type: 'cat', 'breed': 'bengal', 'age': 1.5 }))
print(invert({}))
