var canvas=documentquerySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var x=Math.random()*innerWidth;
var y=Math.random()*innerHeight;
var dx=4;
var dy=4;
var radius=30;
function animate() {
    requestAnimationFrame(animate);
    c.clearect(0,0,innerWidth,innerHeight);
    c.beginPath();
    c.arc(x,y,radius,0,Math.pi*2,false);
    c.stroke();
    if (x+radius>innerWidth|| x-radius<0){
        dx=-dx
    }
    if (y+radius>innerHeight|| y-radius<0){
        dy=-dy
    }

}