# getKeys(object)
# 🚨 Do not use Object.keys in your implementation of getKeys().

# Parameters
# object - Any JavaScript Object
# Return Value
# An Array of the object's property keys.

# Examples
# const dave = {
#   firstName: 'David',
#   lastName: 'Thomas'
# };
# getKeys(dave); // -> ["firstName", "lastName"]

# const learningfuze = {
#   latitude: 33.6349,
#   attitude: 'sanguine',
#   longitude: 117.7405
# }
# getKeys(learningFuze); // -> ["latitude", "attitude", "longitude"]

# const tim = {}
# getKeys(tim); // -> []

def getKeys(object) :
    output = []
    for key in object :
        output.append(key)
    return output

dave = {
  'firstName': 'David',
  'lastName': 'Thomas'
};
print(getKeys(dave));

learningfuze = {
  'latitude': 33.6349,
  'attitude': 'sanguine',
  'longitude': 117.7405
}
print(getKeys(learningfuze));

tim = {}
print(getKeys(tim));
