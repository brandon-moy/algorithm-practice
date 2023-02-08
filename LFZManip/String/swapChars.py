# swapChars(firstIndex, secondIndex, string)
# Parameters
# firstIndex - an integral JavaScript Number
# secondIndex - an integral JavaScript Number
# string - any JavaScript String
# Return Value
# string with the characters at firstIndex and secondIndex swapped.

# Examples
# swapChars(0, 1, 'lodash') // -> "oldash"
# swapChars(0, 4, 'React') // -> "teacR"
# swapChars(6, 7, 'complete') // -> "compleet"
# swapChars(0, 8, 'LearningFuze') // -> "FearningLuze"
# swapChars(11, 23, 'HTML, CSS, JavaScript, React') // -> "HTML, CSS, RavaScript, Jeact"

def swapChars(firstIndex, secondIndex, string) :
    output = ''
    i = 0
    while i < len(string) :
        if i == firstIndex :
            output = output + string[secondIndex]
        elif i == secondIndex :
            output = output + string[firstIndex]
        else :
            output = output + string[i]
        i = i + 1
    return output


print(swapChars(0, 1, 'lodash'))
print(swapChars(0, 4, 'React'))
print(swapChars(6, 7, 'complete'))
print(swapChars(0, 8, 'LearningFuze'))
print(swapChars(11, 23, 'HTML, CSS, JavaScript, React'))
