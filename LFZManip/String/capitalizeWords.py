# capitalizeWords(string)
# Parameters
# string - any JavaScript String
# Return Value
# Returns string with every word capitalized.

# Examples
# capitalizeWords('needs solution')
# // -> "Needs Solution"
# capitalizeWords('Add string manipulation practice.')
# // -> "Add String Manipulation Practice."
# capitalizeWords('aLl CoDe aLl DaY')
# // -> "All Code All Day"
# capitalizeWords('HTML, CSS, JavaScript, PHP, SQL')
# // -> "Html, Css, Javascript, Php, Sql"

def capitalizeWords(string) :
    output = ''
    i = 0
    while i < len(string) :
        if i == 0 :
            output = string[i].upper()
        elif string[i - 1] == ' ' :
            output = output + string[i].upper()
        else :
            output = output + string[i].lower()
        i = i + 1
    return output


print(capitalizeWords('needs solution'))
print(capitalizeWords('Add string manipulation practice.'))
print(capitalizeWords('aLl CoDe aLl DaY'))
print(capitalizeWords('HTML, CSS, JavaScript, PHP, SQL'))
