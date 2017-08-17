var obj = {num:2};
var obj2 = {num:5};

var addToThis = function(a, b, c) {
    return this.num + a;
};

console.log(addToThis.call(obj, 1,2,3)); //functionname.call(obj, function argument

var arr = [1,2,3];
console.log(addToThis.apply(obj, arr));
console.log(addToThis.apply(obj2, arr));

var bound = addToThis.bind(obj);

bound(1,2,3);

//Bằng việc sử dụng call, apply và bind ta có thể thay đổi được ngữ cảnh thực thi (phạm vi chứa hàm) để sử dụng một hàm với công dụng đa năng hơn như thực thi cho một đối tượng, phạm vi khác khác giúp ta có thể tận dụng tối đa mã nguồn được đã tạo ra, hay tạo shortcut cho hàm, linh hoạt hơn tham số đầu vào. Với call và apply chúng ta sử dụng để thực thi hàm đó luôn khi gọi, còn với bind ta có thể thực thi hàm đó nhiều lần sau khi đã được buộc (bind) với một ngữ cảnh nhất định.