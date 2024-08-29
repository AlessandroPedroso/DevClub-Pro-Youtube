class Calc {
  static sum(a: number, b: number) {
    return a + b;
  }

  static sumMany(numbers: number[]) {
    let result = 0;

    numbers.forEach((number) => {
      result += number;
    });

    return result;

    // for (const item of numbers) {
    //   result += item;
    // }
  }

  static divide(a: number, b: number) {
    return a / b;
  }
}
// const math = new Calc();

console.log(Calc.sumMany([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
