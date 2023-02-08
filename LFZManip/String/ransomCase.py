# ransomCase(string)
# Parameters
# string - any JavaScript String
# Return Value
# Returns string with every-other character uppercased.

# Examples
# ransomCase('foo') // -> "fOo"
# ransomCase('QUUX') // -> "qUuX"
# ransomCase('WaldO') // -> "wAlDo"
# ransomCase('JavaScript') // -> "jAvAsCrIpT"
# ransomCase('LearningFuze') // -> "lEaRnInGfUzE"

def ransomCase(string) :
    i = 0
    output = ''
    while i < len(string) :
        if i % 2 == 0 :
            output = output + string[i].lower()
        else :
            output = output + string[i].upper()
        i = i + 1
    return output

print(ransomCase('foo'))
print(ransomCase('QUUX'))
print(ransomCase('WaldO'))
print(ransomCase('JavaScript'))
print(ransomCase('LearningFuze'))
