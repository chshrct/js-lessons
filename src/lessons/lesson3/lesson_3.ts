import axios from "axios";

// console.log("lesson 3");

// Event loop
// https://learn.javascript.ru/event-loop +
// https://habr.com/ru/company/ruvds/blog/340508/ +
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU

// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const omdb = {
  get() {
    return instance.get("posts");
  },
  post(title:string,body:string,userId:number) {
    return instance.post("posts", {
      title,
      body,
      userId,
    });
  },
  put(id:number,title:string,body:string,userId:number) {
      return instance.put(`posts/${id}`,{
        id,
        title,
        body,
        userId
      })
  },
  delete(id:number) {
      return instance.delete(`posts/${id}`)
  },
};

omdb.get().then(
  // console.log
  );
omdb.post('foo','bar',1).then(
  // console.log
  );
omdb.put(1,'foo','bar',1).then(
  // console.log
  );
omdb.delete(1).then(
  // console.log
  );


// just a plug
export default () => {};
