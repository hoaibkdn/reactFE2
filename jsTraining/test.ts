/** @format */
interface Color {
	value: number;
  color: string;
}

interface Model extends Color {
  size: string;
	isActive?: boolean | null;
}

interface Product {
	name: string;
	quantity: number;
	models: Model;
}

type Value = string;

type Region = Record<string, string> // { [key: string]: string }
const obj: Region = {
	VN: '+84',
	SG: '+65'
}


const products: Array<Product | null | undefined> = [
  {
    name: 'T-shirt',
    quantity: 20,
    models: {
      value: 1,
      color: 'red',
      size: 'L',
    },
  },
  null,
  {
    name: 'short',
    quantity: 25,
    models: {
      value: 2,
      color: 'black',
      size: 'M',
    },
  },
];

async function fetchApi(path: string): Promise<any> {
  const response = await fetch('https://jsonplaceholder.typicode.com/' + path);
  if (response.status !== 200) {
    throw new Error('Cannot fetch');
  }
  return response.json();
}

function sum(a: number ,b: number) {
	const c = a + b
}


type Woman = {
  name: string,
  birthDate: string,
  getFirstName: () => string,
  getAge: () => number,
};
const woman: Woman = {
  name: 'Anna Smith',
  birthDate: '1989-02-28', // Date
  getFirstName: function () {
    // normal function
    console.log('this woman', this);
    return this.name.split(' ').shift() as string;
  },
  getAge: function () {
    const birthYear = new Date(this.birthDate).getFullYear();
    return new Date().getFullYear() - birthYear;
  },
}; //



interface Post {
	userId: number;
	id: number;
	body: string;
	title: string;
}
interface PreferedShop  {
	name: string;
}

interface MallShop  {
	brand: string
}

type Shop = PreferedShop | MallShop 

const posts: Post[] = [{
	userId: 1,
	id: 1,
	body: 'loremp string',
	title: 'title'
}]

enum RegionCode {
	VN = '+84',
	SG =  '+65'
} 

