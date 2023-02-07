# setValue(object, key, value)
# Parameters
# object - Any JavaScript Object
# key - A JavaScript String
# value - Any JavaScript value
# Return Value
# This function does not return anything (undefined)

# Examples
# const dave = { firstName: 'David' };
# setValue(dave, 'lastName', 'Thomas');
# print(dave); // { firstName: "David", lastName: "Thomas" }

# const learningFuze = { latitude: 33.6349 };
# setValue(learningFuze, 'attitude', 'sanguine');
# print(learningFuze); // { latitude: 33.6349, attitude: "sanguine" }

# const tim = { name: 'Tim', language: 'JavaScript' };
# setValue(tim, 'language', 'PHP');
# print(tim); // { name: "Tim", language: "PHP" }

def setValue(object, key, value) :
    object[key] = value

dave = { 'firstName': 'David' };
setValue(dave, 'lastName', 'Thomas');
print(dave);

learningFuze = { 'latitude': 33.6349 };
setValue(learningFuze, 'attitude', 'sanguine');
print(learningFuze);

tim = { 'name': 'Tim', 'language': 'JavaScript' };
setValue(tim, 'language', 'PHP');
print(tim);
