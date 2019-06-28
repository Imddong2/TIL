var circle={
    center:{x:1.0,y:2.0},
    radius:2.5,
    area:function(){
        return Math.PI * this.radius * this.radius;
    }
};
circle.area()
circle.translate=function(a,b){
    this.center.x=this.center.x+a;
    this.center.y=this.center.y+b;
};
circle.translate(1,2);
document.write(circle.area());
document.write(circle.center.x);
document.write(circle.radius);