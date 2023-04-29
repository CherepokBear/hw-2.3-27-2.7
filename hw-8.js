// //1

// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];
// console.log(people.sort(function (a, b) {
//     if (a.age > b.age) {
//         return 1;
//     }
//     if (a.age < b.age) {
//         return -1;
//     }
//     return 0;
// }));

//2

// function isPositive() {
//     // писать код тут
//     }
//     function isMale() {
//     // писать код тут
//     }
    // function filter(minus) {
    //     return minus >=0;
    // }
    // console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
//     const people = [
//        {name: 'Глеб', gender: 'male'},
//        {name: 'Анна', gender: 'female'},
//        {name: 'Олег', gender: 'male'},
//        {name: 'Оксана', gender: 'female'}
//     ];
    
//     console.log(filter(people, isMale)); 
//     // Должен выводить [{name: 'Глеб', gender: 'male'},  
//     // {name: 'Олег', gender: 'male'}]

//  // 3
// повторить с интервалом 3 секунды
let timerId = setInterval(() => console.log(new Date), 3000);
// остановить вывод через 30 секунд
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);