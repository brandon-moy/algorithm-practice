# lastChars(length, string)
# Parameters
# length - an integral JavaScript Number
# string - any JavaScript String
# Return Value
# The last length characters of string.

# Examples
# lastChars(8, 'All Code All Day') // -> " All Day"
# lastChars(15, 'HTML, CSS, JavaScript, React') // -> "vaScript, React"
# lastChars(1, 'React') // -> "t"
# lastChars(3, 'Angular') // -> "lar"
# lastChars(5, '') // -> ""
# lastChars(20, 'LearningFuze') // -> "LearningFuze"

def lastChars(length, string) :
    start = len(string) - length
    if start < 0 :
        start = 0
    return string[start:]

print(lastChars(8, 'All Code All Day'))
print(lastChars(15, 'HTML, CSS, JavaScript, React'))
print(lastChars(1, 'React'))
print(lastChars(3, 'Angular'))
print(lastChars(5, ''))
print(lastChars(20, 'LearningFuze'))
