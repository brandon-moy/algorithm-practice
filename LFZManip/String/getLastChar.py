# getLastChar(string)
# Parameters
# string - Any JavaScript String
# Return Value
# The last character of string.

# Examples
# getLastChar('LearningFuze') // -> "e"
# getLastChar('paschal') // -> "l"
# getLastChar('HTML') // -> "L"
# getLastChar('code') // -> "e"
# getLastChar('String') // -> "g"

# define a function that takes a string
# determine the length of the string
# return the item at the index of the string length - 1

def getLastChar(string) :
    length = len(string)
    last = int(length) - 1
    return string[last]

print(getLastChar('LearningFuze'))
print(getLastChar('paschal'))
print(getLastChar('HTML'))
print(getLastChar('code'))
print(getLastChar('String'))
