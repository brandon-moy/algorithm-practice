# truncate(length, string)
# Cuts string down to at most length characters long and appends an ellipsis(...).

# Parameters
# length - an integral JavaScript Number
# string - any JavaScript String
# Return Value
# A shortened version of string, plus in an ellipsis.
# Examples
# truncate(8, 'All Code All Day') // -> "All Code..."
# truncate(15, 'HTML, CSS, JavaScript, React') // -> "HTML, CSS, Java..."
# truncate(1, 'React') // -> "R..."
# truncate(3, 'Angular') // -> "Ang..."
# truncate(5, '') // -> "..."
# truncate(20, 'LearningFuze') // -> "LearningFuze..."

def truncate(length, string) :
    return string[:length] + '...'

print(truncate(8, 'All Code All Day'))
print(truncate(15, 'HTML, CSS, JavaScript, React'))
print(truncate(1, 'React'))
print(truncate(3, 'Angular'))
print(truncate(5, ''))
print(truncate(20, 'LearningFuze'))
