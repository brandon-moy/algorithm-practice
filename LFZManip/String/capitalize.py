# capitalize(word)
# Parameters
# word - A single word as a JavaScript String
# Return Value
# The original word, but with its first character uppercased and the rest of its characters lowercased.

# Examples
# capitalize('a') // -> "A"
# capitalize('link') // -> "Link"
# capitalize('tO') // -> "To"
# capitalize('ThE') // -> "The"
# capitalize('pAsT') // -> "Past"

# define a function that takes a string (word)
# define a variable for the output
# loop through the word
# if it is the first word capitalize and add
# otherwise add the letter

def capitalize(word) :
    output = None
    i = 0
    length = len(word)
    while i < length :
        if output is None :
            output = word[i].upper()
        else :
            output = output + word[i].lower()
        i = i + 1
    return output

print(capitalize('a'))
print(capitalize('link'))
print(capitalize('tO'))
print(capitalize('ThE'))
print(capitalize('pAsT'))
