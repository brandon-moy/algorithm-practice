# numVowels(string)
# Parameters
# string - any JavaScript String
# Return Value
# The Number of vowel characters in string.

# Examples
# numVowels('All Code All Day') // -> 5
# numVowels('HTML, CSS, JavaScript, React') // -> 5
# numVowels('React') // -> 2
# numVowels('Angular') // -> 3
# numVowels('') // -> 0
# numVowels('LearningFuze') // -> 5

def numVowels(string) :
    count = 0
    vow = 'aeiou'
    for char in string :
        if char.lower() in vow :
            count = count + 1
    return count

print(numVowels('All Code All Day'))
print(numVowels('HTML, CSS, JavaScript, React'))
print(numVowels('React'))
print(numVowels('Angular'))
print(numVowels(''))
print(numVowels('LearningFuze'))
