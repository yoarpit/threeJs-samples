import * as th from 'three';

const scene=new th.Scene();
const camera = new th.PerspectiveCamera(
50,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer=new th.WebGLRenderer({antialias:true,});
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement);
window.addEventListener("resize",()=>{
    const width = window.innerHeight;
    const height = window.innerWidth;
    renderer.setSize(width,height);
    camera.aspect=width/height;
    camera.updateProjectionMatrix();
}

)

const texture =new th.TextureLoader().load(
"images/download.jpg"   
)
texture.repeat.set(0.5,0.5);
const geomentry = new th.BoxGeometry(2,2,2);

const material=new th.MeshBasicMaterial(
{
    
    wireframe:false,
    map:texture

}
);

const cube= new th.Mesh(geomentry,material);

scene.add(cube);
camera.position.z=5;
function animation(){
    requestAnimationFrame(animation);
    cube.rotation.x+=0.01;
    cube.rotation.y+=0.01;

    renderer.render(scene,camera);
}

animation()


