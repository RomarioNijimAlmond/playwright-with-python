x = 5;
print(x)

def helloWorld():
    print("hello world")

name = "random"
hello = "hello"
print(type(name))
greeting = f"{hello} {name}"
print(greeting)

def switchCase(name):
    match name:
        case 'dog':
            print("hello dog")
            return
        case 'cat':
            print("hello cat")
            return
        case 'fish':
            print("hello fish")
            return

print(switchCase("dog"))
print(switchCase("fish"))

list = ["Rom", 5, True]

print(type(list))

"""
hello world
docs
comments
and more

"""