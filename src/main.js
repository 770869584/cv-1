let html = document.querySelector("#demo");
let style = document.querySelector("#style");
let string = `
/* 你好，我是小欧
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div
 **/
#div1{
    border: 1px solid red;
    width: 300px;
    height: 300px;
}
/* 接下来我把div变成一个八卦图
 * 注意看好了
 * 首先，把div变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个风火轮 
 * 一黑一白
 **/
#div1::before{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let n = 0;
let string2 = "";

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      //如果是回车，就不照搬
      string2 += "<br>";
    } else if (string[n] === " ") {
      //如果是空格，就加&nbsp，&nbsp在html表示空格
      string2 += "&nbsp";
    } else {
      //如果不是回车,空格，就照搬
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0,999999);  //拖动滚动条
    if (n < string.length - 1) {
      // string长度 55 ,55为undefined
      // 因此n = 53 时为最后一次执行step()
      n += 1; //54
      step();
    }
  }, 1);
};
step();
