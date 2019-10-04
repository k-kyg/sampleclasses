class Person {
	public String name;
	public int age;

	Person(String name, int age) {
		this.name = name;
		this.age = age;
	}

	public String toString() {
		return this.name + ", " + this.age;
	}
}