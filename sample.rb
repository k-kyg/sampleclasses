class Person
  attr_accessor :name
  attr_accessor :age
  def initialize(name, age)
    @name = name
    @age = age
  end
  def toString
    return "#{@name}, #{@age}"
  end
end

person1 = Person.new("太郎", 14)
puts person1.toString
puts "私の名前は#{person1.name}です。#{person1.age}歳です。"