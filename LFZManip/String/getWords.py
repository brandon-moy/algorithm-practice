# getWords(string)
# Parameters
# string - A JavaScript String containing zero or more words, separated by spaces.
# Return Value
# An Array of JavaScript String. Each String is one of the words in the string parameter.

# Examples
# getWords('LearningFuze')
# // -> ["LearningFuze"]
# getWords('Web Development')
# // -> ["Web", "Development"]
# getWords('Cascading Style Sheets')
# // -> ["Cascading", "Style", "Sheets"]
# getWords('European Computer Manufacturers Association')
# // -> ["European", "Computer", "Manufacturers", "Association"]
# getWords('')
# // -> []

def getWords(string) :
    return string.split(' ')


print(getWords('LearningFuze'))
print(getWords('Web Development'))
print(getWords('Cascading Style Sheets'))
print(getWords('European Computer Manufacturers Association'))
print(getWords(''))
