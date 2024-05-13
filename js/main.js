  function clickme(){
    //console.log("piggy")//
    var btn=document.getElementById("mv");
    btn.classList.toggle("ABC");
    //.btn.classList.remove("menu")//
   //btn.classList.add("menu")//
}

function clickme2(){
    
    var btn2=document.getElementById("sec");
    btn2.classList.toggle("A123");
    
}

function getresult() {
    let kkk = document.getElementById("chinese");
    let ooo = document.getElementById("eng");
    let rrr = document.getElementById("math");
    let res = document.getElementById("result");

    if (isNaN(ooo.value) || ooo.value === "" ) {
        alert("英文分數不得為數字或者為空");
        ooo.value = "";  // 清空英文分數
    }
    if (isNaN(kkk.value) || kkk.value === "" ) {
        alert("中文分數不得為數字或者為空");
        kkk.value = "";  // 清空中文分數
    }
    if (isNaN(rrr.value) || rrr.value === "" ) {
        alert("數學分數不得為數字或者為空");
        rrr.value = "";  // 清空數學分數
    } 
    else  {
        let score = parseInt(kkk.value) + parseInt(ooo.value) + parseInt(rrr.value);
        res.innerText = "你的平均分數為" + (score / 3);
    }
}

//window.addEventListener("DOMContentLoaded",function(){
//let cont=document.querySelector("#container");

//let piccc=document.createElement("img");
//piccc.src = "./images/dog.jpg";
//piccc.className = "123456";
//cont.append(piccc);





//let znnn=[
    "sarah",
    "cindy",
    "jean",
    "roy",
    "jenny"
//];


//let qqqq=this.document.createElement("ul");
   
//qqqq=ul
//pppp=li

//for(let nameee=0; nameee<znnn.length; nameee++){
   // let pppp=document.createElement("li");
   // pppp.innerText =znnn[nameee];
   // qqqq.append(pppp);


    //console.log("name:"+nameee);
    //console.log(znnn[nameee]);
   //console.log("");

//}

//cont.append(qqqq);

//});





window.addEventListener("DOMContentLoaded",()=>{
    let items=[
        {
          "_id": "657124ca920a85b582361fd1",
          "index": 0,
          "guid": "61a53e4a-6b53-4566-882f-d976a89d7224",
          "isActive": true,
          "balance": "$3,411",
          "picture": " http://placehold.it/32x32 ",
          "age": 31,
          "eyeColor": "brown",
          "name": "Marcella Mcdonald",
          "gender": "female",
          "company": "KENGEN",
          "email": "marcellamcdonald@kengen.com",
          "phone": "+886 (802) 591-2694",
          "address": "373 Holmes Lane, Dargan, North Dakota, 3195",
          "about": "Amet voluptate sit in qui fugiat fugiat proident nisi pariatur id ut. Aliquip veniam reprehenderit ullamco consequat consectetur proident reprehenderit consectetur labore esse eu incididunt irure. Non sit proident nulla cupidatat. Duis officia reprehenderit consectetur reprehenderit dolore nostrud culpa anim dolor duis voluptate voluptate. Tempor Lorem eu enim dolor esse minim pariatur ad tempor Lorem. In Lorem elit velit ipsum Lorem pariatur ex esse velit Lorem Lorem laboris in sit.\r\n",
          "registered": "2023-02-20T04:29:24 -08:00",
          "tags": [
            "veniam",
            "mollit",
            "voluptate",
            "excepteur",
            "minim",
            "mollit",
            "ut"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Sylvia Pierce"
            },
            {
              "id": 1,
              "name": "Randi Faulkner"
            },
            {
              "id": 2,
              "name": "Camacho Carey"
            }
          ],
          "greeting": "Hello, Marcella Mcdonald! You have 4 unread messages.",
          "favoriteFruit": "banana",
          "articles": {
            "title": "Proident proident amet eu ex anim nisi ipsum voluptate do anim laborum laboris.",
            "content": "Sunt proident ea dolor elit consectetur anim laborum quis nisi minim consequat aliqua commodo.",
            "crreated_at": "2014-02-16T03:03:53"
          }
        },
        {
          "_id": "657124caa9210a29c13c11f9",
          "index": 1,
          "guid": "e3c7d908-6f86-4abf-b04c-b7f062dfcaca",
          "isActive": true,
          "balance": "$3,720",
          "picture": " http://placehold.it/32x32 ",
          "age": 32,
          "eyeColor": "brown",
          "name": "Love Alexander",
          "gender": "male",
          "company": "INTERLOO",
          "email": "lovealexander@interloo.com",
          "phone": "+886 (949) 510-2494",
          "address": "925 Powell Street, Comptche, Nevada, 7523",
          "about": "Nulla excepteur minim tempor laboris occaecat pariatur voluptate cillum nulla cillum. Elit cillum in ea cupidatat incididunt deserunt mollit irure occaecat aliquip irure. Do ex aute consequat reprehenderit exercitation nulla sit excepteur eiusmod ea duis. Quis mollit nulla sit anim ipsum aliqua non dolor irure magna fugiat in anim voluptate. Non velit culpa aute in est nulla minim in veniam quis dolor exercitation duis. Consequat excepteur pariatur cillum ut sit. Non enim veniam ut consectetur enim sint ex ex voluptate laboris qui.\r\n",
          "registered": "2015-02-17T04:41:51 -08:00",
          "tags": [
            "duis",
            "tempor",
            "cillum",
            "non",
            "esse",
            "velit",
            "nisi"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Miranda Bowen"
            },
            {
              "id": 1,
              "name": "Whitehead Finch"
            },
            {
              "id": 2,
              "name": "Perkins Patton"
            }
          ],
          "greeting": "Hello, Love Alexander! You have 1 unread messages.",
          "favoriteFruit": "apple",
          "articles": {
            "title": "Ullamco velit veniam mollit veniam.",
            "content": "Qui ea laboris elit tempor Lorem minim voluptate ex fugiat deserunt eu.",
            "crreated_at": "2020-10-04T07:15:26"
          }
        },
        {
          "_id": "657124cade76bafe05dd141e",
          "index": 2,
          "guid": "12aa0f67-5352-4df4-9ba5-bcffc9c1d987",
          "isActive": true,
          "balance": "$1,803",
          "picture": " http://placehold.it/32x32 ",
          "age": 26,
          "eyeColor": "brown",
          "name": "Joanne Kerr",
          "gender": "female",
          "company": "QUILITY",
          "email": "joannekerr@quility.com",
          "phone": "+886 (924) 578-3350",
          "address": "725 Shale Street, Diaperville, Minnesota, 3325",
          "about": "Consequat non pariatur id incididunt aute irure anim. Id magna pariatur aliquip Lorem anim mollit anim. Exercitation eiusmod excepteur pariatur sint est do laboris mollit in nulla commodo occaecat. Proident amet commodo duis incididunt tempor nostrud ea commodo. Deserunt velit sunt consectetur incididunt Lorem anim officia ullamco consequat qui est proident veniam ipsum. Duis enim aliquip duis nulla Lorem labore cupidatat. Exercitation ullamco veniam duis adipisicing exercitation dolore irure.\r\n",
          "registered": "2020-10-06T07:40:21 -08:00",
          "tags": [
            "officia",
            "consectetur",
            "pariatur",
            "adipisicing",
            "magna",
            "velit",
            "consequat"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Duffy Sloan"
            },
            {
              "id": 1,
              "name": "Matilda Walters"
            },
            {
              "id": 2,
              "name": "Julie Cooper"
            }
          ],
          "greeting": "Hello, Joanne Kerr! You have 3 unread messages.",
          "favoriteFruit": "strawberry",
          "articles": {
            "title": "Amet laboris occaecat dolor sint deserunt aute aute.",
            "content": "Commodo adipisicing laboris reprehenderit proident in ullamco officia occaecat.",
            "crreated_at": "2018-07-14T05:15:35"
          }
        },
        {
          "_id": "657124caa156987c687829e3",
          "index": 3,
          "guid": "81793dd2-8207-4785-82a5-3164383631ac",
          "isActive": true,
          "balance": "$1,771",
          "picture": " http://placehold.it/32x32 ",
          "age": 35,
          "eyeColor": "brown",
          "name": "Luisa Koch",
          "gender": "female",
          "company": "AQUAZURE",
          "email": "luisakoch@aquazure.com",
          "phone": "+886 (812) 562-2579",
          "address": "368 Monument Walk, Blende, Arkansas, 8050",
          "about": "Ut in velit veniam Lorem duis ipsum irure exercitation. Eu deserunt quis ullamco incididunt magna aliqua labore ullamco irure. Cupidatat consectetur ex consectetur eu. Adipisicing id aliquip amet anim. Minim qui reprehenderit quis ad adipisicing ea anim. Consectetur elit ullamco eu occaecat dolor enim officia commodo id. Ex enim in nulla irure.\r\n",
          "registered": "2018-07-26T04:12:12 -08:00",
          "tags": [
            "pariatur",
            "quis",
            "ex",
            "pariatur",
            "reprehenderit",
            "officia",
            "do"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Amanda Casey"
            },
            {
              "id": 1,
              "name": "Shawn Bean"
            },
            {
              "id": 2,
              "name": "Cecilia Pace"
            }
          ],
          "greeting": "Hello, Luisa Koch! You have 5 unread messages.",
          "favoriteFruit": "strawberry",
          "articles": {
            "title": "Ipsum et nisi mollit non esse enim nostrud occaecat enim amet nisi in reprehenderit ullamco.",
            "content": "Incididunt amet exercitation cupidatat laborum ut ullamco culpa esse proident exercitation sunt culpa.",
            "crreated_at": "2021-07-28T12:42:43"
          }
        },
        {
          "_id": "657124ca32ed5f08f1457749",
          "index": 4,
          "guid": "294c0bf7-f41d-49a2-b6f1-9e11cc21aae9",
          "isActive": true,
          "balance": "$2,758",
          "picture": " http://placehold.it/32x32 ",
          "age": 39,
          "eyeColor": "blue",
          "name": "Guerrero Burt",
          "gender": "male",
          "company": "ECRATIC",
          "email": "guerreroburt@ecratic.com",
          "phone": "+886 (988) 539-2047",
          "address": "862 Locust Street, Westboro, Idaho, 1375",
          "about": "Labore anim fugiat elit do consequat. Duis consectetur exercitation minim labore dolor mollit et. Sunt veniam nostrud ut excepteur. Quis exercitation ut et proident. Voluptate veniam ullamco eu proident. Sit sint in nisi minim minim magna incididunt proident.\r\n",
          "registered": "2017-12-13T11:07:51 -08:00",
          "tags": [
            "est",
            "ullamco",
            "magna",
            "qui",
            "elit",
            "adipisicing",
            "cupidatat"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Ross Odom"
            },
            {
              "id": 1,
              "name": "Garrison Serrano"
            },
            {
              "id": 2,
              "name": "Buck Hudson"
            }
          ],
          "greeting": "Hello, Guerrero Burt! You have 7 unread messages.",
          "favoriteFruit": "apple",
          "articles": {
            "title": "Laborum sit cupidatat amet est dolor consectetur id labore voluptate eu nisi.",
            "content": "Do dolore elit qui duis non voluptate occaecat eiusmod veniam.",
            "crreated_at": "2015-03-25T10:15:09"
          }
        }
    ]

let aaa=document.querySelector("#container");
//選取一個 id 為 container 的元素=aaa

let ulll=document.createElement("ul");
aaa.append(ulll);
 //創造一個元素ul叫做ulll
 //ulll會顯示在aaa裡(ul會顯示在container裡面)   


 //初始值為0 條件為items長度小於i i就增加一
    for(let i=0; i<items.length; i++){
        let liii=document.createElement("li");
        ulll.append(liii);
        console.log(items[i].name);
        liii.innerHTML =items[i].name;
//從0開始 反覆循環 每次將i+1 直到超過items組數為止
//創造一個元素li叫做liii
//(li會顯示在ul上，container裡面)
//consolo上面會顯示取item值的name
//html會顯示li，內容為item值的name
        let ullll=document.createElement("ul");

        for(let g=0; g<items[i].friends.length; g++){
        
            let llll=document.createElement("li") 
            llll.innerHTML=items[i].friends[g].name;
            console.log(items[i].friends[g].name);
            ullll.append(llll);
        }
        liii.append(ullll);
    }
   
   

});





window.addEventListener('DOMContentLoaded',function(){
  let ut= document.querySelector("#sss");

  let abc='';//先設abc為字串

  for(let i=3;i<9;i++){
    for(let j=1;j<10;j++){
      let result = i*j;
     
    abc =abc+ `<div class="gap1"><span class='i'>${i} </span>  x <span class='j'>${j}</span> = <span class=result>${result}</span></div>`;
    //字串+每一筆的結果才不會被新結果蓋過去
      //innerText = `${i} x ${j} = ${i * j}`;  

    }
  }
 
  ut.innerHTML=abc;
  //sss=ut 讓它顯示abc的資訊



let number1=1;
let number2=2;
let number3=3;
let number4=4;
let number5=5;
let number6=6;

console.log(`${number1} x ${number1}=${number1*number1}`);
console.log(`${number1} x ${number2}=${number1*number2}`);

})

