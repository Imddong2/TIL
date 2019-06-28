//순차검색
function linearSearch(x,a){
    var i = 0;
    var n = a.length;
    while(i<n && x>a[i])i++;
    if(x==a[i])return i;
    return null;
}
//이진검색
function binarySearch(x,a){
    var n = a.length;
    var left = 0, right = n-1;
    while(left<right){
        var middle = Math.floor((left+right)/2);
        if(x<=a[middle]){
            right=middle;
        }else{
            left=middle+1;
        }
    }
    if(x==a[right]) return right;
    return null;
}
var a = [2,4,7,12,15,21,34,35,46,57,70];
console.log(linearSearch(35,a));
console.log(binarySearch(35,a));