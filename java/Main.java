class Main {
	public static void main(String[] args) {
		Person person1 = new Person("太郎", 14);
		System.out.println(person1.toString());
		System.out.println("私の名前は" + person1.name + "です。" + person1.age + "歳です。");
	}
}