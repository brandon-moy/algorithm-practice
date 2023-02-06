# Character Input

# Create a program that asks the user to enter their name and their age.
# Print out a message addressed to them that tells them the year that they will
# turn 100 years old.

name = input('Enter your name: ')
age = int(input('Enter your age: '))
century = str(2023 - age + 100)
print('Thank you ' + name + ', you will turn 100 in ' + century)
