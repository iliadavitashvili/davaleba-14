// 1.შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი,
//  console.log გამოიტანეთ ამ მასივის ყველა ელემენტის ჯამი

let numbersArray = [1, 2, 3, 4, 5];

console.log(
  "დავალება 1 >>",
  numbersArray.reduce((acc, curr) => {
    return acc + curr;
  })
);

// 2.შექმენით 3 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი
// რომელსაც აქვს შემდეგი ველები (properties): name, age, address.

const objectsArray = [];
let names = ["ilia", "iliko", "ilarioni"];
let ages = [20, 21, 22];
let address = [
  "ქ.თბილისი რუსთაველის 21",
  "ქ.თელავი რუსთაველის 22",
  "ქ.რუსთავი რუსთაველის 23",
];
for (let i = 0; i < 3; i++) {
  objectsArray.push({
    name: names[i],
    age: ages[i],
    address: address[i],
  });
}

console.log("დავალება 2 >>", objectsArray);

// 3. console.log ში გამოიტანეთ 3 სტრინგი
// "My name is (#2 დავალების 0 ინდექსზე მყოფი ობიექტის ველი name ის მნიშვნელობა)",
//  My age is (#2 დავალების 0 ინდექსზე მყოფი   ობიექტის ველი age ის მნიშვნელობა)",
//   "My address is (#2 დავალების 0 ინდექსზე მყოფი  ობიექტის ველი address ის მნიშვნელობა)"
let str1 = `My name is ${objectsArray[0].name}`;
let str2 = `My age is ${objectsArray[0].age}`;
let str3 = `My address is ${objectsArray[0].address}`;

console.log("დავალება 3 >> ", str1," ,", str2, " ,",str3);

// 4. დაწერეთ if / else statement სადაც შეამოწმებთ #2 დავალებაში 
//  1 ინდექსზე მყოფი ობიექტში არსებულ age ველის მნიშვნელობას თუ ნაკლებია 19 ზე 
//  console.log ში დაბეჭდეთ "I am a teenager" დანარჩენ შემთხვევაში დაბეჭდეთ "I am an adult"

const myStatus = objectsArray[0].age < 19 ? "I am a teenager" : "I am an adult";

console.log("დავალება 4 >>",myStatus)

// 5.  შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი,
// და შეეცადეთ console.log-ში გამოიტანოთ ამ მასივის ყველა ელემენტი . გამოიყენეთ ეს რესურსი  
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

const numbersArray2 = [2,4,6,8,10]

for(let i=0;i<numbersArray2.length;i++){
    console.log("დავალება 5 >>",numbersArray2[i])
}


// დამატებითი დავალება
// 6. const currentDay = new Date().getDay(); currentDay ცვლადი გვაძლევს კვირის დღეს რიცხვითი სახით 0
// არის კვირა 1
// არის ორშაბათი და ასე შემდეგ. 0
// 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი .
// დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში
//  გამოვიტანთ სიტყვას კვირას 1 ის შემთხვევაში ორშაბათს და ასე შემდეგ 6მდე.
//   (სურვილის შემთხვევაში შეგიძლიათ დაამატოთ სხვა პირობებიც სადაც და, 
//     ან  || && ლოგიკურ ოპერატორებს გამოიყენებთ)
// დავალებები დანომრიეთ და ისე ატვირთეთ

const currentDay = new Date().getDay();
switch(currentDay){
    case 0:
        console.log("დამატებითი დავალება >>> კვირა")
        break;
    case 1:
        console.log("დამატებითი დავალება >>> ორშაბათი")
        break;
    case 2:
        console.log("დამატებითი დავალება >>> სამშაბათი")
        break;
    case 3:
        console.log("დამატებითი დავალება >>> ოთხშაბათი")
        break;
    case 4:
        console.log("დამატებითი დავალება >>> ხუთშაბათი")
        break;
    case 5:
        console.log("დამატებითი დავალება >>> პარასკევი")
        break;
    case 6:
        console.log("დამატებითი დავალება >>> შაბათი")
        break;
 
}

