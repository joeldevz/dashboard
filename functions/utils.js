import { uuid } from "uuidv4";

export class NumberS {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
  subtract(num) {
    return new NumberS(this.value - num);
  }
  sum(num) {
    return new NumberS(this.value + num);
  }

  multiple(num) {
    return new NumberS(this.value * num);
  }

  divide(num) {
    return new NumberS(this.value / num);
  }

  getValueFormat() {
    return this.value / 100;
  }

  getTax(num) {
    return new NumberS(this.value).multiple(num).divide(10000);
  }
}
export const generateUuid = () => {
  return uuid();
};
