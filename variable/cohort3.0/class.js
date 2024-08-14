class Rectangle{
    constructor(width, height){//constructor creates new object that can take in parameters
        this.width = width;//this ka use krke the width and height got attached to the rect object hence it is defined as this.width and this.height
        this.height = height;
    }
    area(){
const area=this.width*this.height;
    return area;}
     
}
const rectangle= new Rectangle(5,6);
const area=rectangle.area();
 console.log(area);

// const rect1={
//     width:5,
//     height:6,}
//         function area (rect){
//         return rect.width*rect.height;
//     }   
//     const area3=area(rect1);
//     console.log(area3);
// can also be written like this but class syntax is cleaner and better