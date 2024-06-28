/** @format */

console.log(this); // window - global

function Person(name) {
  // this.name = name;
  console.log('this in Person ', this); // Person
  const testArrow = () => {
    console.log('this arrow ', this); // Person
  };
  testArrow();
}

const testArrow = () => {
  console.log('this arrow ', this); // Person
};
testArrow();
// new Person('Person test');

const woman = {
  name: 'Anna Smith',
  birthDate: '1989-02-28', // Date
  getFirstName: function () {
    // normal function
    console.log('this woman', this);
    return this.name.split(' ').shift();
  },
  getAge: function () {
    const birthYear = new Date(this.birthDate).getFullYear();
    return new Date().getFullYear() - birthYear;
  },
}; //

Object.prototype.getLastName = function () {};
console.log('first name ', woman.getFirstName());
console.log('woman ', woman);
console.log('age ', woman.getAge());

console.log('Array ', []);
Array.prototype.filterGreaterNum = function (x) {
  console.log('this arr ', this);
  const res = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] > x) {
      res.push(this[i]);
    }
  }
  return res;
};
console.log([1, 3, 4].filterGreaterNum(1));

// OOP
const regionCode = {
  '+84': 'VN',
  '+60': 'MY',
  '+63': 'ID',
  '+65': 'SG',
};
class Shop {
  constructor(name, phone, address) {
    this.name = name;
    this.phone = phone;
    this.address = address;
  }
  getRegion() {
    console.log('this ', this);
    const shopRegionCode = this.phone.split(' ').shift();
    return regionCode[shopRegionCode] || regionCode['+84'];
  }
}

const cosmeticShop = new Shop(
  'Lavana',
  '+84 789 11122',
  '81 Pham Ngu Lao, HCM'
);
console.log('cosmeticShop ', cosmeticShop);
console.log('region code ', cosmeticShop.getRegion());

const NewShop = function (name, phone, address) {
  this.name = name;
  this.phone = phone;
  this.address = address;
};

NewShop.prototype.getRegion = function () {
  console.log('this new Shop ', this);
  const shopRegionCode = this.phone.split(' ').shift();
  return regionCode[shopRegionCode] || regionCode['+84'];
};

const shop2 = new NewShop('Lavana', '+60 789 11122', '81 Pham Ngu Lao, HCM');
console.log('region ', shop2.getRegion());

class AsianShop extends Shop {
  constructor(name, phone, address, area) {
    super(name, phone, address);
    this.area = area;
  }

  getArea() {
    return this.area;
  }
}

const asianShopA = new AsianShop(
  'Lavana',
  '+65 789 11122',
  '81 Pham Ngu Lao, HCM',
  'DNA'
);

console.log('asianShopA ', asianShopA.getRegion());

// homework
function SortedArray(array) {
  // [1, 5, 8]
  this.numbers = array ?? [];
}

SortedArray.prototype.get = function (x) {}; // return index in array, -1
SortedArray.prototype.set = function (x) {}; // set x in the correct position
// x: 6 -> this.numbers: [1, 5, 6, 8]
SortedArray.prototype.remove = function (x) {}; // remove x in the numbers
