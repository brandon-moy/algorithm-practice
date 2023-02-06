# getFirstChar(string)
# Parameters
# string - Any JavaScript String
# Return Value
# The first character of string.

# Examples
# getFirstChar('LearningFuze') // -> "L"
# getFirstChar('paschal') // -> "p"
# getFirstChar('HTML') // -> "H"
# getFirstChar('code') // -> "c"
# getFirstChar('String') // -> "S"

# define a function that takes a string as a parameter
# return the first index (0) of the argument string

def getFirstChar(string) :
    return string[0]

print(getFirstChar('LearningFuze'))
print(getFirstChar('paschal'))
print(getFirstChar('HTML'))
print(getFirstChar('code'))
print(getFirstChar('String'))
