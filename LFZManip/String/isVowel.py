# isVowel(char)
# Parameters
# char - A single JavaScript String character
# Return Value
# A Boolean indicating whether or not char is a vowel. isVowel should handle both uppercase and lowercase characters.

# Examples
# isVowel('L') // -> false
# isVowel('f') // -> false
# isVowel('Z') // -> false
# isVowel('a') // -> true
# isVowel('E') // -> true
# isVowel('I') // -> true
# isVowel('o') // -> true
# isVowel('u') // -> true

def isVowel(char) :
    vowels = ('a', 'e', 'i', 'o', 'u')
    if char.lower() in vowels :
        return True
    else :
        return False

print(isVowel('L'))
print(isVowel('f'))
print(isVowel('Z'))
print(isVowel('a'))
print(isVowel('E'))
print(isVowel('I'))
print(isVowel('o'))
print(isVowel('u'))
