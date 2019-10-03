class Person:
  def __init__(self, name, age):
    self.name = name;
    self.age = age
  def toString(self):
    return self.name + ", " + str(self.age)

person1 = Person("太郎", 14)
print(person1.toString())
print("私の名前は" + person1.name + "です。" + str(person1.age) + "歳です。")