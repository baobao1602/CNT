// Array reduce() method
// 1. tính tổng số coin khóa học trên
// var totalCoin = courses.reduce(function(total, course) {
//     return total + course.coin;
// }, 0);
// console.log(totalCoin);


// Flat - làm phẳng mảng từ Depth array -" mảng sâu"

// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
//     return flatOutput.concat(depthItem);
// }, []);

// console.log(flatArray);


// 2. lấy ra cacs khóa học đưa vào mảng mới
// var topics = [
//     {
//         topic: "Front-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "HTML, CSS"
//             },

//             {
//                 id: 2,
//                 title: "Javascript"
//             },

//             {
//                 id: 3,
//                 title: "Ruby"
//             }
//         ]
        
//     },
//     {
//         topic: "Back-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "PHP"
//             },

//             {
//                 id: 2,
//                 title: "Java"
//             },

//             {
//                 id: 3,
//                 title: "NodeJS"
//             }
//         ]
//     },
// ];

// var newCourses = topics.reduce(function (courses, topic) {
//     return courses.concat(topic.courses);

// }, []);

// console.log(newCourses);

///////////////////////////////////////////////////


//      Tự tạo ra phương thức reduce họa động như reduce gốc

// Array.prototype.reduce2 = function (callback, result) {
//     let i = 0
//     if (arguments.length < 2) {
//         i = 1
//         result = this[0]
//     }
//     for (; i < this.length; i++) {
//         result = callback(result, this[i], i, this)
//     }
//     return result;
// }


// const numbers = [1, 2, 3, 4, 5]

// const result = numbers.reduce2((toltal, number, index, array) => {
//     return toltal + number
// }, 10)

// console.log(result);


//Callback

// là hàm function được truyền qua đối số 
// khi gọi hàm khác

//1. là làm
//2. được truyền qua đối số


// var courses =  [
//     'javascript',
//     'PHP'
// ];

// courses.length = 10;
// console.log(courses)


// My forEach () method

// var courses = [
//     'javascript',
//     'PHP',
//     'Ruby'
// ];

// courses.length = 1000;

// courses.forEach(function(course, index, array) {
//     console.log(course, index, array);
// });


//                           HTML DOM

// var headingNode = document.querySelector('.box .heading-2:first-child');

// console.log(headingNode);


// công việc 1 : sử dụng tới 'boxNode' 

var boxNode = document.querySelector('.box-1');

console.log(boxNode);

// công việc 2 : sử dụng tới các li elements là con của '.box-1'

var liNode = boxNode.getElementsByTagName('li');

console.log(liNode);

// hướng tới thẻ 'p' trong '.box-1'

console.log(boxNode.querySelector('p'));


//              Get element methods - 3

// 1. getElementById : lấy trực tiếp 1 element, lấy id
// 2. getElementsByClassName : lấy class
// 3. getElementsByTagName : lấy tên thẻ
// 4. querySelector : lấy trực tiếp 1 element
// 5. querySelectorAll : lấy tất cả element

// 6. HTML collection : có thể lấy những thẻ : img, form, a...

//    document. + loại thẻ
//        vd : document.forms

// lồng với array
console.log(document.forms[1]);


// 7. document.write : 


//                 Attribute node & Text node

// 1. element : thẻ (<h1>, <div>... )
// 2. attribute : thuộc tính trong thẻ
// 3. text : văn bản

//                  DOM attribute : 

//thêm thuộc tính (attribute) vào element

var headingElement = document.querySelector('h2');

console.log(headingElement);

headingElement.setAttribute('class', 'heading')
headingElement.title = 'title-test';

// lấy attribute ra element

console.log(headingElement.getAttribute('class'));
console.log(headingElement.getAttribute('title'));

//                      InnerText vs textContent Property

// sử nội dung textnode trong 1 element :

var headingTextNode = document.querySelector('.innerText');

headingTextNode.innerText = 'New Heading';


//                  InnerHTML vs OuterHTML

// thêm 1 element vào 1 element đã có sẵn

// innerHTML, 

var boxElement = document.querySelector('.box');

console.log(boxElement);

boxElement.innerHTML = '<h1 class = "HeadingHtml">Heading HTML</h1>';
console.log(document.querySelector('.HeadingHtml').innerText);

//outerHTML :

var boxOutHTML = document.querySelector('.box-outerHTML');

boxOutHTML.outerHTML = '<span>Test</span>';

//          Node properties


//          DOM CSS

var boxElementCss = document.querySelector('.boxCss');

boxElementCss.style.width = '100px';
boxElementCss.style.height = '200px';
boxElementCss.style.backgroundColor = 'red';

Object.assign(boxElementCss.style, {
    width: "200px",
    height: '100px',
    backgroundColor:'green',
});

console.log(boxElementCss.style.backgroundColor);


//              ClassList Property

// add
// contains
// remove
// toggle

var Classlist = document.querySelector('.classList-1');

// add : thêm class vào classlist :
Classlist.classList.add('font', 'blue');

// contains: kiểm tra trong 1 element có trong class hay k

console.log(Classlist.classList.contains('font'));

//remove: xóa class trong element :

// xóa class trong 3s
setTimeout(() => {
    Classlist.classList.remove('blue');
}, 3000);

// toggle : kiểm tra xem elemet có class hay không, nếu có thì 
// xóa bỏ class đi, nếu không thì thêm vào

// áp dụng toggle kiểm tra element sau 5s trong trường hợp có class
// tronng element

setTimeout(() => {
    Classlist.classList.toggle('font');
}, 5000);

//                   DOM events 

// 1. attribute envents
// 2. assign event using the element node : gán events cho element

// var h1Element = document.querySelector('.DomEvents');

// h1Element.onclick = function() {
//     console.log(Math.random());
// }

// var spanElement = document.querySelectorAll('span');

// for (var i = 0; i < spanElement.length; i++) {
//     spanElement[i].onclick = function(e) {
//         console.log(e.target);
//     }
// }
 

// ex events DOM

// 1. Input / select
// 2. Key up / down


// 1 

var inputValue;

var inputElement = document.querySelector('select');

inputElement.onchange = function(e) {
    console.log(e.target.value);
}


// 2


//          PreventDefault and StopPropagation


// PreventDefault

var aElements = document.links;

for (var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function(e) {
        
        if(!e.target.href.startsWith('https://baobao1602.github.io/Wed-Shopee/')) {
                e.preventDefault();
            }
    }
}


// ví dụ 2

// var ulElement = document.querySelector('.ulSeach');

// ulElement = onmousedown = function(e) {
//     e.preventDefault();
// }

// document.querySelector('.ulSeach').onclick = function(e) {
//         console.log(e.target);
//     }

//              event listener
// lắng nghe event
var btn = document.getElementById('btn');

btn.addEventListener('click', function(e) {
    console.log(Math.random());
});

btn.addEventListener('click', function(e) {
    console.log(Math.random());
});

btn.addEventListener('click', function(e) {
    console.log(Math.random());
});


//              JSON

// 1. là 1 định dạng dữ liệu (chuỗi)
// 2. JavaScript Object Notation
// 3. JSON : Number, string, Boolean, Null, Array, Object

// mã hóa / giải mã
// Encode / decode
// Stringify : từ Javascript -> JSON
// Parse từ JSON -> javascript

// var Json = '{"name":"Bao Bao", "age":20}';
// var Json = '["JavaScript", "PHP"]';

console.log(JSON.stringify({
    name: 'bao bao',
    age: 20
}));


//                              Promise

// var promise = new Promise(
//     //Executor
//     function(resolve, reject) {
//         // logic
//         // Thành công : resolve()
//         // Thất bại : reject()

//         resolve([
//             {
//                 id: 1,
//                 name: 'JavaScript'
//             }
//         ]);

//         // reject('có lỗi');
//     }
// );

// promise
//     .then(function(courses) {
//         console.log(courses);
//     })
    
//     .catch(function(error) {
//         console.log(error);
//     })
    
//     .finally(function() {
//         console.log('Xong');
//     })
    

//Promise example

var users = [
    {
        id: 1,
        name: 'Bao Bao',
    },

    {
        id: 2,
        name: 'Thanh Le',
    },

    {
        id: 3,
        name: 'lotso',
    },
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'anh chưa ra video anh ơi !',
    },

    {
        id: 2,
        user_id: 2,
        content: 'vừa ra xong em ơi !',
    }
];


// 1 lấy comments
// 2 từ comments lấy ra user_id
// từ user_id lấy ra user tương ứng

// Fake API

function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments)
        },1000);
    });
};

function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(users) {
            return userIds.includes(users.id);
        })
        resolve(result);
    },1000)
}

getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comments) {
            return comments.user_id;
        });
        console.log(userIds);
    })

