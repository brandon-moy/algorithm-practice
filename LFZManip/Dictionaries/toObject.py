# toObject(keyValuePair)
# Parameters
# keyValuePair - An Array containing two elements; a String key and any other JavaScript value.
# Return Value
# An Object with one property consisting of the passed keyValuePair.
# Examples
# toObject(['firstName', 'David']);       // -> { firstName: "David" }
# toObject(['isCool', true]);             // -> { isCool: true }
# toObject(['employer', 'LearningFuze']); // -> { employer: "LearningFuze" }

def toObject(keyValuePair) :
    output = {
      keyValuePair[0]: keyValuePair[1]
    }
    return output

print(toObject(['firstName', 'David']))
print(toObject(['isCool', True]))
print(toObject(['employer', 'LearningFuze']))
