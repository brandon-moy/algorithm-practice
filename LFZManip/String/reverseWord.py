# reverseWord(word)
# 🚨 Do not use String.prototype.split for this problem. 🚨

# Parameters
# word - A single word as a JavaScript String
# Return Value
# A JavaScript String containing the characters of word in reverse order.

# Examples
# reverseWord('foo') // -> "oof"
# reverseWord('rab') // -> "bar"
# reverseWord('LearningFuze') // -> "ezuFgninraeL"
# reverseWord('tpircSavaJ') // -> "JavaScript"
# reverseWord('racecar') // -> "racecar"

def reverseWord(word) :
    i = len(word) - 1
    output = ''
    while i >= 0 :
        output = output + word[i]
        i = i - 1
    return output

print(reverseWord('foo'))
print(reverseWord('rab'))
print(reverseWord('LearningFuze'))
print(reverseWord('tpircSavaJ'))
print(reverseWord('racecar'))
