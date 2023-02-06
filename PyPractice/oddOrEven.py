# Odd of Even

# The exercise comes first(with a few extras if you want the extra challenge
# or want to spend more time), followed by a discussion. Enjoy!

# Ask the user for a number. Depending on whether the number is even or odd,
# print out an appropriate message to the user. Hint: how does an even / odd number
# react differently when divided by 2?

num = int(input('Enter a number: '))
if (num % 2) :
    print('This number is odd')
else :
    print('This number is even')
