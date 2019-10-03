using System;

class Person
{
	public string name;
	public int age;
	public Person(string name, int age)
	{
		this.name = name;
		this.age = age;
	}
	public string ToString()
	{
		return $"{this.name}, {this.age}";
	}
}

class MainProgram
{
	public static void Main(string[] args)
	{
		Person person1 = new Person("太郎", 14);
		Console.WriteLine(person1.ToString());
		Console.WriteLine($"私の名前は{person1.name}です。{person1.age}歳です。");
	}
}