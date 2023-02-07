# getValues(object)
# 🚨 Do not use Object.values in your implementation of getValues().

# Parameters
# object - Any JavaScript Object
# Return Value
# An Array of the object's property values.

# Examples
# const dave = {
#   firstName: 'David',
#   lastName: 'Thomas'
# };
# getValues(dave); // -> ["David", "Thomas"]

# const learningfuze = {
#   latitude: 33.6349,
#   attitude: 'sanguine',
#   longitude: 117.7405
# }
# getValues(learningFuze); // -> [33.6349, "sanguine", 117.7405]

# const tim = {}
# getValues(tim); // -> []

def getValues(object) :
    output = []
    for key in object :
        output.append(object[key])
    return output


dave = {
    'firstName': 'David',
    'lastName': 'Thomas'
}
print(getValues(dave))

learningfuze = {
    'latitude': 33.6349,
    'attitude': 'sanguine',
    'longitude': 117.7405
}
print(getValues(learningfuze))

tim = {}
print(getValues(tim))
