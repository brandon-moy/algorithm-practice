# List Less Than Ten

# Take a list, say for example this one:

#   a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
# and write a program that prints out all the elements of
# the list that are less than 5.

a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
for i in a :
    if i < 5 :
        print(i)

# Extras:

# Instead of printing the elements one by one, make a new list that has all the
# elements less than 5 from this list in it and print out this new list.

a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = list()
for i in a:
    if i < 5:
        b.append(i)
print(b)

# Write this in one line of Python.
print([ x for x in a if x < 5])

# Ask the user for a number and return a list that contains only elements from the
# original list a that are smaller than that number given by the user.

c = int(input('Please enter a number for a list up to that number: '))
d = list()
i = 1
while i < c :
    d.append(i)
    i = i + 1
print(d)
