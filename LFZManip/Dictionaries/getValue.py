# getValue(object, key)
# Parameters
# object - Any JavaScript Object
# key - A JavaScript String
# Return Value
# The value in object found at the key property.

# Examples
# const dave = { firstName: 'David', lastName: 'Thomas' }
# getValue(dave, 'firstName'); // -> "David"
# getValue(dave, 'lastName'); // -> "Thomas"

# const learningFuze = { latitude: 33.6349, longitude: 117.7405 }
# getValue(learningFuze, 'latitude'); // -> 33.6349
# getValue(learningFuze, 'longitude'); // -> 117.7405

# const tim = { name: 'Tim', language: 'JavaScript' }
# getValue(tim, 'age'); // -> undefined
# getValue(tim, 'yearsExperience'); // -> undefined

def getValue(object, key) :
    if key in object :
        return object[key]
    else :
        return None

dave = { 'firstName': 'David', 'lastName': 'Thomas' }
print(getValue(dave, 'firstName'))
print(getValue(dave, 'lastName'))

learningFuze = { 'latitude': 33.6349, 'longitude': 117.7405 }
print(getValue(learningFuze, 'latitude'))
print(getValue(learningFuze, 'longitude'))

tim = { 'name': 'Tim', 'language': 'JavaScript' }
print(getValue(tim, 'age'))
print(getValue(tim, 'yearsExperience'))
