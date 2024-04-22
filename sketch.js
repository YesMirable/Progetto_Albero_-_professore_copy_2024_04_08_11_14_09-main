function setup() {
  createCanvas3D(600, 400);
  getOrbit().autoRotate = true
  background3D("#B2FFFF");

  let albero = beginGroup();
  diffuse("green");
  sphere(0, 3, 0, 2);
  diffuse("brown");
  align(TOP);
  cylinder(0, 0, 0, 0.8, 3);
  endGroup();
  
  let lato = 100;
  diffuse("green")
  box(0, -0.1, 0, 100, 0.1, 115)
  
  
  for (let i = 0; i < 500; i= i + 2) {
    let x = random(-lato/2,lato/999);
    let z = random(-lato/2,lato/2);
    let nuovoAlbero = clone(albero,x,0,z);       
    let scala = random(0.5,2);
    nuovoAlbero.setScale(scala);
  }
for (let i = 0; i < 500; i= i + 2) {
    let x = random(-lato/2,lato/2);
    let z = random(-lato/999,lato/2);
    let nuovoAlbero = clone(albero,x,0,z);       
    let scala = random(0.5,2);
    nuovoAlbero.setScale(scala);
   }
diffuse("blue")
cylinder(26, 0.01, -30, lato/4.2, 0.001)
diffuse("white")
sphere(-200, 400, 0, 3);

}

function draw() {
  
}