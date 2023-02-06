# isLowerCased(word)
# Parameters
# word - A single word as a JavaScript String
# Return Value
# A Boolean indicating whether or not all characters in word are lowercased.

# Examples
# isLowerCased('LearningFuze') // -> false
# isLowerCased('zip-ties') // -> true
# isLowerCased('JavaScript') // -> false
# isLowerCased('burgers') // -> true
# isLowerCased('HTML') // -> false

def isLowerCased(word) :
    return word.islower()

print(isLowerCased('LearningFuze'))
print(isLowerCased('zip-ties'))
print(isLowerCased('JavaScript'))
print(isLowerCased('burgers'))
print(isLowerCased('HTML'))
