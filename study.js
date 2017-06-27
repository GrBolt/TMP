//'use strict'
//
//function ebal(x, y, z) {
//   return x + y + z;
//}
//console.log(ebal(1, 2, 3));
//
//var stana = "str";
//stana += 13;
//console.log(stana);
//    
//*********************************
//
//window.onload = function(){
//         'use strict'
//        function createArrayIterator(array) {
//            var i = -1;          
//            return function(){
//                return array[++i];
//            }
//    
//            }
//            
//
//            var arr = [5, 6, 7];
//            var itr = createArrayIterator(arr);
//            console.log(itr()); // 5
//            console.log(itr()); // 6
//            console.log(itr()); // 7
//            console.log(itr()); // undefined}
//    
//  *****************************  
//    
//    var inp = document.getElementById("inp");
//         var btns = document.getElementsByTagName("button");
//         for (var i = 0; i < btns.length; i++) {
//            btns[i].onclick = (function (i) {
//               return function (){inp.value += (i + 1);}
//            }
//         (i))}
//         }
//
// ************************************   
//
//    
//            window.onload = function(){
//         'use strict'
//         var k = document.getElementById('in'); 
//         var btn = document.getElementById('btn');
//            k.onchange = function(){var m = document.getElementById('in').value; digitSum(m); }
//            
//            function digitSum(k){
//                alert(getNumbersSum(k)); 
//               function getNumbersSum(num){
//                return num.split('').reduce(function(a, b) {
//                    return +a + +b;
//                })
//            }
//        }
//    }
//
//
//******************************************
//
//          window.onload = function(){
//         'use strict'
//         var btn = document.getElementById('btn');
//            btn.onclick = fn1();
//            function fn1(){
//                alert(' Hello World!');
//                var fn1 = null;
//            }
//        }
//
//    
//    **************************************
//    
//            'use strict'
//        this.onload = function(){
//            var user = {
//                name: 'Cris',
//                surname: 'Simons',
//            }
//            user.name = 'Brain';
//            delete user.name;
//
//        }
//*************************************
//                'use strict'
//        this.onload = function(){
//            var car = {
//                module: 'BMW',
//                speed: 295,
//                run: function(){
//                  console.log(this.module+' едет со скоростью '+this.speed);  
//                },
//                stop: function(){
//                    console.log(this.module+' остановилась');
//                }
//            }
//        }
//        
//*************************************
//            
//            	        'use strict'
//        this.onload = function(){
//           var tv = {
//               currentChannel: 1,
//               nextChannel: function(){
//                 ++this.currentChannel;  
//               },
//               previousChannel: function(){
//                   --this.currentChannel;
//               },
//               setChannel: function(number){
//                   this.currentChannel = number;
//               }
//           }
//        }
//**************************************
//            
//                'use strict'
//            function people (name, age, exp, lang){
//                return{
//                    name: name,
//                    age: age,
//                    exp: exp,
//                    lang: lang
//                    }
//                }
//          var John  = people('John', 28, 1, ['Java','JavaScript','SQL']);
//          var Bill  = people('Bill', 30, 5, ['HTML','CSS','JS']);
//          var Mike  = people('Mike', 32, 4, ['Python','SQL']);
//
//************************************
//    
//    
//              function isEmpty(obj){
//            var counter = 0;
//              for(var key in obj){
//                  ++counter;
//                  if(counter > 0){
//                      console.log(false);
//                      break;
//                  }
//              }
//              if(counter == 0) console.log(true);  
//          }
//
//*********************************
//    var salaries = {
//   "John": 100,
//   "Bill": 300,
//   "Mike": 250
//};
//
//var salaries = {
//   "Cris": 150,
//   "Brain": 600,
//   "John": 300,
//   "Steve": 400,
//   "Bill": 50
//};
//            function calc(data){
//                var temp = 0;
//                for(var key in data){
//                    if(data[key] > temp) temp = data[key];
//                }
//            }
//
//
//
//        
//    
    