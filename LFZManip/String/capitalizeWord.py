# capitalizeWord(word)
# Parameters
# word - A single word as a JavaScript String
# Return Value
# Returns word with its first character uppercased and the rest of its characters lowercased. For this function, JavaScript is always cased as JavaScript.

# Examples
# capitalizeWord('broKeN') // -> "Broken"
# capitalizeWord('sEarCHinG') // -> "Searching"
# capitalizeWord('quEStiOn') // -> "Question"
# capitalizeWord('tHoUghTfUl') // -> "Thoughtful"
# capitalizeWord('jaVAsCrIPt') // -> "JavaScript"
# capitalizeWord('javaScript') // -> "JavaScript"
# capitalizeWord('JavascRipt') // -> "JavaScript"

def capitalizeWord(word) :
    if word.lower() == 'javascript' :
      return 'JavaScript'
    else :
       return word[0].upper() + word[1:].lower()


print(capitalizeWord('broKeN'))
print(capitalizeWord('sEarCHinG'))
print(capitalizeWord('quEStiOn'))
print(capitalizeWord('tHoUghTfUl'))
print(capitalizeWord('jaVAsCrIPt'))
print(capitalizeWord('javaScript'))
print(capitalizeWord('JavascRipt'))
