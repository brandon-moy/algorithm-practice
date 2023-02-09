# defaults(target, source)
# Assigns properties of source object to the target object for all properties that are not defined on target.

# Parameters
# target - Any JavaScript Object
# source - Any JavaScript Object
# Return Value
# This function does not return anything, but it does modify target.

# Examples
# const target = {};
# const source = {
#   foo: 1,
#   bar: 2,
#   baz: 3
# };
# defaults(target, source);
# console.log(target) // -> { foo: 1, bar: 2, baz: 3 }

# const target = {
#   foo: 1,
#   baz: 3
# };
# const source = {
#   bar: 2
# };
# defaults(target, source);
# console.log(target) // -> { foo: 1, bar: 2, baz: 3 }

# const target = {
#   foo: 1,
#   baz: 3
# };
# const source = {
#   foo: 4,
#   bar: 2,
#   baz: 5
# };
# defaults(target, source);
# console.log(target) // -> { foo: 1, bar: 2, baz: 3 }

# const target = {
#   foo: 1,
#   baz: 3
# };
# const source = {};
# defaults(target, source);
# console.log(target) // -> { foo: 1, baz: 3 }

def defaults(target, source) :
    for key in source :
        if key not in target :
            target[key] = source[key]
    return target

target = {};
source = {
  'foo': 1,
  'bar': 2,
  'baz': 3
};
print(defaults(target, source));
# { foo: 1, bar: 2, baz: 3 }

target = {
  'foo': 1,
  'baz': 3
};
source = {
  'bar': 2
};
print(defaults(target, source));
# foo: 1, bar: 2, baz: 3 }

target = {
  'foo': 1,
  'baz': 3
};
source = {
  'foo': 4,
  'bar': 2,
  'baz': 5
};
print(defaults(target, source));
# { foo: 1, bar: 2, baz: 3 }

target = {
  'foo': 1,
  'baz': 3
};
source = {};
print(defaults(target, source));
# { foo: 1, baz: 3 }
