export class Product {
  id: number;
  name: string;
  amount: number;
  typeAmount: string;

  constructor(name: string, amount: number, typeAmount: string) {
    this.name = name;
    this.amount = amount;
    this.typeAmount = typeAmount;
  }
}
