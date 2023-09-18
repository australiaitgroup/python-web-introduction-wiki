class Parent:
    name = "xxxx"  # Parent class attribute

    def c(self):
        print("This is parent's public instance method.")

    @classmethod
    def __b(cls):
        print(f"{cls.name}This is Parent's private class method.")

    @classmethod
    def _b(cls):
        print(f"{cls.name}This is Parent's protected class method.")

    @staticmethod
    def __a():
        print("This is Parent's private static method.")

    @staticmethod
    def _a():
        print("This is Parent's protected static method.")


class Child(Parent):
    def c(self):
        print("This is Child's public instance method.")

    @classmethod
    def __b(cls):
        print(f"{cls.name}This is Child's private class method.")

    @classmethod
    def _b(cls):
        print(f"{cls.name}This is Child's protected class method.")

    @staticmethod
    def __a():
        print("This is Child's private static method.")

    @staticmethod
    def _a():
        print("This is Child's protected static method.")


"""
instance method private vs protected
"""
print("================================================")
print("Testing instance method")
parent_obj = Parent()
child_obj = Child()
print(child_obj.name)
child_obj.c()
super(Child, child_obj).c()
print("================================================")
print("\n")
"""
classmethod private vs protected
"""
print("================================================")
print("Testing classmethod private vs protected")
# Parent.__b()
# Child.__b()
Child._Child__b()  # type: ignore
Parent._Parent__b()  # type: ignore

Parent._b()
Child._b()
# Parent._Parent_b()
# Child._Child_b()
print("================================================")
print("\n")

"""
staticmethod private vs protected
"""
print("================================================")
print("Testing staticmethod private vs protected")
# Parent.__a()
# Child.__a()
Parent._Parent__a()  # type: ignore
Child._Child__a()  # type: ignore

Parent._a()
Child._a()
# Parent._Parent_a()
# Child._Child_a()
