# isUpperCased(word)
# Parameters
# word - A single word as a JavaScript String
# Return Value
# A Boolean indicating whether or not all characters in word are uppercased.

# Examples
# isUpperCased('LearningFuze') // -> false
# isUpperCased('JavaScript') // -> false
# isUpperCased('HTML') // -> true
# isUpperCased('css') // -> false
# isUpperCased('PHP') // -> true

def isUpperCased(word) :
    return word.isupper()

print(isUpperCased('LearningFuze'))
print(isUpperCased('JavaScript'))
print(isUpperCased('HTML'))
print(isUpperCased('css'))
print(isUpperCased('PHP'))
