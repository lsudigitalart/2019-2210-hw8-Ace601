let img0, img1, img2, img3;
let x0 = 0
let y0 = 0  
let x1 = 0
let y1 = 0  
function preload(){
    img0 = loadImage('themonster1.png');
    img1 = loadImage('themonster2.png');
    img2 = loadImage('Monster4.png');
    img3 = loadImage('dod.png');

}

function setup() {
    createCanvas(3500,3500)
      
}
    
    function draw() {
    background(51, 99, 90) 
    img3.resize(75, 100);
    img2.resize(100, 150);
    img1.resize(100,90);
creature0(100, 50,);
creature1(0, 20,);
creature2(0, 20,);
creature3(0, 20,);

}
function mousePressed(){
    creature0 = int(random(100));
    creature1 = int(random(100));
    creature2 = int(random(100));
    creature3 = int(random(100));

image(img1, x1, y1) 
image(img0, x0 ,y0);
image(img2, x2 ,y2);
image(img3, x3 ,y3);
}

function creature0(x,y){
      let x0 = 0
let y0 = 0  
    
    for(let x0 = 0; x0 <= width; x0 =x0+505 ){
        for(let y0 = 0; y0 <= height; y0 = y0+165){

image(img0, x0 ,y0);
   }}}
    
    function creature1(x,y){
     let x1 = 0
let y1 = 0
       for(let x1 = 0; x1 <= width; x1 =x1+245 ){
          for(let y1 = 0; y1 <= height; y1 = y1+265){
      image(img1, x1, y1);
    }}

    //if (x1 > 2 && x1 < 100 ); {
        //image(img1, x1 , y1);

//}
    }
    function creature2(x,y){
        let x2 = 0
        let y2 = 0
        
        
                for(let x2 = 0; x2 <= width; x2 =x2+285 ){
                    for(let y2 = 0; y2 <= height; y2 = y2+255){
                image(img2, x2, y2);
            }}

    
}
    

function creature3(x,y){
    let x3 = 0
    let y3 = 0
    
    
            for(let x3 = 0; x3 <= width; x3 =x3+445 ){
                for(let y3 = 0; y3 <= height; y3 = y3+465){
            image(img3, x3, y3);
        }}


}









