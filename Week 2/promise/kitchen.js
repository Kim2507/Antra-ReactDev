//sync kitchen
// function getBun() {
//   console.log("got bun");
//   return "bun";
// }

// function getBeef() {
//   console.log("got beef");
//   return "beef";
// }

// function makePatty(beef) {
//   if (beef === "beef") {
//     console.log("made patty");
//     return "patty";
//   }
// }

// function makeBurger(bun, patty) {
//   if (bun === "bun" && patty === "patty") {
//     console.log("made burger");
//     return "burger";
//   }
// }

// const bun = getBun();
// const beef = getBeef();
// const patty = makePatty(beef);
// const burger = makeBurger(bun, patty);

// // "async" kitchen with callbacks functions
// // simulating an api call
// function getBun(cb){
//     setTimeout(() => {
//         //somehow we just get the bun after 1s
//         const bun = "bun";
//         console.log(bun);
//         cb(bun);
//     }, 1000);
// }

// function getBeef(cb){
//     setTimeout(() => {
//         //somehow we just get the beef after 1s
//         const beef = "beef";
//         console.log(beef);
//         cb(beef);
//     }, 1000);
// }

// function makePatty(beef,cb){
//     setTimeout(()=>{
//         if(beef==="beef"){
//             const patty = "patty";
//             console.log(patty);
//             cb(patty);
//         }
//     },1000)
// }

// function makeBurger(bun,patty,cb){
//     setTimeout(()=>{
//         if(bun==="bun" && patty==="patty"){
//             const burger = "burger";
//             console.log(burger);
//             cb(burger);
//         }
//     },1000)
// }

getBun((bun)=>{
    getBeef(beef=>{
        makePatty(beef,(patty)=>{
            makeBurger(bun,patty,(burger)=>{
                console.log(burger,"is ready to serve")
            })
        })
    })
})

function getBun() {
    // return a promise
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("bun");
      }, 1000);
    });
  }
  
  function getBeef() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("beef");
      }, 1000);
    });
  }
  function makePatty(beef) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (beef === "beef") resolve("patty");
        else reject("wrong ingredient");
      }, 1000);
    });
  }
  function makeBurger(bun, patty) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (bun === "bun" && patty === "patty") resolve("burger");
        else reject("wrong ingredient");
      }, 1000);
    });
  }
  
  // // then chaining
  getBeef().then(beef=>{
      console.log(beef);
      return makePatty(beef)
  }).then(patty=>{
      return getBun().then(bun=>{
          return makeBurger(bun,patty)
      })
  }).then(burger=>{
      console.log(burger);
  })
  
  
  
  getBun()
    .then((bun) => {
      return getBeef();
    })
    .then((beef) => {
      console.log(beef);
      return makePatty(beef);
    })
    .then((patty) => {
      return makeBurger("bun", patty);
    })
    .then((burger) => {
      console.log(burger);
    });
  
  // //async await
  async function asyncMakeBurger() {
    try {
      const bun = await getBun();
      console.log(bun);
      const beef = await getBeef();
      console.log(beef);
      const patty = await makePatty(beef);
      console.log(patty);
      const burger = await makeBurger(bun, beef);
      console.log(burger);
    } catch (err) {
  
    }
  }
  // asyncMakeBurger()
  
  // const p1 = new Promise((res,rej) => {
  //   setTimeout(() => {
  //     const random = Math.random();
  //     if(random>0.5){
  //         res(1)
  //     } else {
  //         rej("i just don't feel like it")
  //     }
  //   }, 1000);
  // });
  
  // // .then .catch
  // p1.then(console.log).catch(console.log)
  
  // // async/await
  // async function handleP1() {
  //     try {
  //         const p = await p1;
  //         console.log(p);
  //     } catch(err){
  //         console.log(err);
  //     }
  // }
  // handleP1()
  
  // fetch("https://jsonplaceholder.typicode.com/posts")
  // .then(res=>res.json())
  // .then(data=>{
  //     console.log(data);
  // })
  
  // async function fetchPosts(){
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  //     const data = await res.json();
  //     console.log(data);
  // }
  
  // fetchPosts();
  
  //async functions return promise
  // async function foo(){
  //     return "foo";
  // }
  
  // const f = foo();
  // f.then(data=>{
  //     console.log(data);
  // })
  