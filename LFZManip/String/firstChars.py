# firstChars(length, string)
# Parameters
# length - an integral JavaScript Number
# string - any JavaScript String
# Return Value
# The first length characters of string.

# Examples
# firstChars(8, 'All Code All Day') // -> "All Code"
# firstChars(15, 'HTML, CSS, JavaScript, React') // -> "HTML, CSS, Java"
# firstChars(1, 'React') // -> "R"
# firstChars(3, 'Angular') // -> "Ang"
# firstChars(5, '') // -> ""
# firstChars(20, 'LearningFuze') // -> "LearningFuze"

def firstChars(length, string) :
    return string[:length]

print(firstChars(8, 'All Code All Day'))
print(firstChars(15, 'HTML, CSS, JavaScript, React'))
print(firstChars(1, 'React'))
print(firstChars(3, 'Angular'))
print(firstChars(5, ''))
print(firstChars(20, 'LearningFuze'))
