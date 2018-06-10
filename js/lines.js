let container;
let camera, scene, renderer;
let circle, triangleN, triangleW, triangleNW, triangleNE, triangleSW;
let branchNE, branchE, branchSE, branchS, branchSW, smallCircle;
let subBranchNE, subBranchE1, subBranchSE1, subBranchS1;
let subBranchSW, subBranchE2, subBranchSE2, subBranchS2;

function init() {
    container = document.getElementById('container');

    camera = new THREE.PerspectiveCamera(27, 1, 1, 5000);
    camera.position.z = 3500;
    scene = new THREE.Scene();

    let positions = [];

    let vertices = 1200;
    let k = 420;
    for (let i = 0; i < vertices; i++) {
        const theta = Math.random() * Math.PI + Math.PI / 4;
        const r = Math.random() * k;

        const x = Math.cos(theta) * r;
        const y = Math.sin(theta) * r;
        const z = Math.random() * 100 - 50;
        positions.push(x, y, z);
    }
    let geometry = new THREE.BufferGeometry();
    let material = new THREE.LineBasicMaterial({color: 0xffff00});
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    circle = new THREE.Line(geometry, material);
    scene.add(circle);

    positions = [];
    vertices = 200;
    let a = 470;
    let b = 100;
    let c = 770;
    for (let i = 0; i < vertices; i++){
        const x = Math.random() * 2 * b - b;
        const y = x > 0 ? Math.random() * ((a - c) * x / b + c - a) + a : Math.random() * ((c - a) * x / b + c - a) + a;
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    triangleN = new THREE.Line(geometry, material);
    scene.add(triangleN);

    positions = [];
    for (let i = 0; i < vertices; i++){
        const y = Math.random() * 2 * b - b;
        const x = - (y > 0 ? Math.random() * ((a - c) * y / b + c - a) + a : Math.random() * ((c - a) * y / b + c - a) + a);
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    triangleW = new THREE.Line(geometry, material);
    scene.add(triangleW);

    positions = [];
    for (let i = 0; i < vertices; i++){
        const x0 = Math.random() * 2 * b - b;
        const y0 = x0 > 0 ? Math.random() * ((a - c) * x0 / b + c - a) + a : Math.random() * ((c - a) * x0 / b + c - a) + a;
        const x = x0 * Math.cos(Math.PI / 4) - y0 * Math.sin(Math.PI / 4);
        const y = x0 * Math.sin(Math.PI / 4) + y0 * Math.cos(Math.PI / 4);
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    triangleNW = new THREE.Line(geometry, material);
    scene.add(triangleNW);

    positions = [];
    vertices = 100;
    for (let i = 0; i < vertices; i++){
        const x0 = Math.random() * b - b;
        const y0 = Math.random() * ((c - a) * x0 / b + c - a) + a;
        const x = x0 * Math.cos(-Math.PI / 4) - y0 * Math.sin(-Math.PI / 4);
        const y = x0 * Math.sin(-Math.PI / 4) + y0 * Math.cos(-Math.PI / 4);
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    triangleNE = new THREE.Line(geometry, material);
    scene.add(triangleNE);

    positions = [];
    for (let i = 0; i < vertices; i++){
        const x0 = Math.random() * b;
        const y0 = Math.random() * ((a - c) * x0 / b + c - a) + a;
        const x = x0 * Math.cos(3 * Math.PI / 4) - y0 * Math.sin(3 * Math.PI / 4);
        const y = x0 * Math.sin(3 * Math.PI / 4) + y0 * Math.cos(3 * Math.PI / 4);
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    triangleSW = new THREE.Line(geometry, material);
    scene.add(triangleSW);

    positions = [];
    vertices = 125;
    a = 100;
    b = 750;
    c = 50;
    for (let i = 0; i < vertices; i++){
        const x0 = Math.random() * (b - a) + a;
        const y0 = Math.random() * c - c;
        const x = x0 * Math.cos(Math.PI / 4) - y0 * Math.sin(Math.PI / 4);
        const y = x0 * Math.sin(Math.PI / 4) + y0 * Math.cos(Math.PI / 4);
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    material = new THREE.LineBasicMaterial({color: 0x0000ff});
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    branchNE = new THREE.Line(geometry, material);
    scene.add(branchNE);

    positions = [];
    vertices = 200;
    for (let i = 0; i < vertices; i++){
        const x = Math.random() * (b - a) + a;
        const y = Math.random() * 2 * c - c;
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    branchE = new THREE.Line(geometry, material);
    scene.add(branchE);

    positions = [];
    for (let i = 0; i < vertices; i++){
        const x0 = Math.random() * (b - a) + a;
        const y0 = Math.random() * 2 * c - c;
        const x = x0 * Math.cos(-Math.PI / 4) - y0 * Math.sin(-Math.PI / 4);
        const y = x0 * Math.sin(-Math.PI / 4) + y0 * Math.cos(-Math.PI / 4);
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    branchSE = new THREE.Line(geometry, material);
    scene.add(branchSE);

    positions = [];
    for (let i = 0; i < vertices; i++){
        const x0 = Math.random() * (b - a) + a;
        const y0 = Math.random() * 2 * c - c;
        const x = x0 * Math.cos(-Math.PI / 2) - y0 * Math.sin(-Math.PI / 2);
        const y = x0 * Math.sin(-Math.PI / 2) + y0 * Math.cos(-Math.PI / 2);
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    branchS = new THREE.Line(geometry, material);
    scene.add(branchS);

    positions = [];
    vertices = 125;
    for (let i = 0; i < vertices; i++){
        const x0 = Math.random() * (b - a) + a;
        const y0 = Math.random() * c;
        const x = x0 * Math.cos(-3 * Math.PI / 4) - y0 * Math.sin(-3 * Math.PI / 4);
        const y = x0 * Math.sin(-3 * Math.PI / 4) + y0 * Math.cos(-3 * Math.PI / 4);
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    branchSW = new THREE.Line(geometry, material);
    scene.add(branchSW);

    vertices = 400;
    k = 150;
    for (let i = 0; i < vertices; i++) {
        const theta = Math.random() * Math.PI + 5 * Math.PI / 4;
        const r = Math.random() * k;

        const x = Math.cos(theta) * r;
        const y = Math.sin(theta) * r;
        const z = Math.random() * 100 - 50;
        positions.push(x, y, z);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    smallCircle = new THREE.Line(geometry, material);
    scene.add(smallCircle);

    positions = [];
    vertices = 200;
    a = 250;
    b = 400;
    c = 50;
    let d = 330;
    let e = 25;
    for (let i = 0; i < vertices; i++){
        const y0 = Math.random() * 2 * c - c;
        const x0 = Math.random() * (a - y0 + e) + y0 - e;
        const x = x0 + b;
        const y = y0 + d;
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    subBranchNE = new THREE.Line(geometry, material);
    scene.add(subBranchNE);

    positions = [];
    a = 250;
    b = 510;
    c = 50;
    d = -50;
    for (let i = 0; i < vertices; i++){
        const y0 = Math.random() * 2 * c - c;
        const x0 = Math.random() * (a - y0 + e) + y0 - e;
        const x1 = x0 * Math.cos(-Math.PI / 4) - y0 * Math.sin(-Math.PI / 4);
        const y1 = x0 * Math.sin(-Math.PI / 4) + y0 * Math.cos(-Math.PI / 4);
        const x = x1 + b;
        const y = y1 + d;
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    subBranchE1 = new THREE.Line(geometry, material);
    scene.add(subBranchE1);

    positions = [];
    a = 250;
    b = 330;
    c = 50;
    d = -400;
    for (let i = 0; i < vertices; i++){
        const y0 = Math.random() * 2 * c - c;
        const x0 = Math.random() * (a - y0 + e) + y0 - e;
        const x1 = x0 * Math.cos(-Math.PI / 2) - y0 * Math.sin(-Math.PI / 2);
        const y1 = x0 * Math.sin(-Math.PI / 2) + y0 * Math.cos(-Math.PI / 2);
        const x = x1 + b;
        const y = y1 + d;
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    subBranchSE1 = new THREE.Line(geometry, material);
    scene.add(subBranchSE1);

    positions = [];
    a = 250;
    b = -50;
    c = 50;
    d = -510;
    for (let i = 0; i < vertices; i++){
        const y0 = Math.random() * 2 * c - c;
        const x0 = Math.random() * (a - y0 + e) + y0 - e;
        const x1 = x0 * Math.cos(-3 * Math.PI / 4) - y0 * Math.sin(-3 * Math.PI / 4);
        const y1 = x0 * Math.sin(-3 * Math.PI / 4) + y0 * Math.cos(-3 * Math.PI / 4);
        const x = x1 + b;
        const y = y1 + d;
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    subBranchS1 = new THREE.Line(geometry, material);
    scene.add(subBranchS1);

    positions = [];
    a = 250;
    b = -330;
    c = 50;
    d = -400;
    for (let i = 0; i < vertices; i++){
        const y0 = Math.random() * 2 * c - c;
        const x0 = Math.random() * (a + y0 + e) - y0 - e;
        const x1 = x0 * Math.cos(-Math.PI / 2) - y0 * Math.sin(-Math.PI / 2);
        const y1 = x0 * Math.sin(-Math.PI / 2) + y0 * Math.cos(-Math.PI / 2);
        const x = x1 + b;
        const y = y1 + d;
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    subBranchSW = new THREE.Line(geometry, material);
    scene.add(subBranchSW);

    positions = [];
    a = 250;
    b = 50;
    c = 50;
    d = -510;
    for (let i = 0; i < vertices; i++){
        const y0 = Math.random() * 2 * c - c;
        const x0 = Math.random() * (a + y0 + e) - y0 - e;
        const x1 = x0 * Math.cos(-Math.PI / 4) - y0 * Math.sin(-Math.PI / 4);
        const y1 = x0 * Math.sin(-Math.PI / 4) + y0 * Math.cos(-Math.PI / 4);
        const x = x1 + b;
        const y = y1 + d;
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    subBranchS2 = new THREE.Line(geometry, material);
    scene.add(subBranchS2);

    positions = [];
    a = 250;
    b = 400;
    c = 50;
    d = -330;
    for (let i = 0; i < vertices; i++){
        const y0 = Math.random() * 2 * c - c;
        const x0 = Math.random() * (a + y0 + e) - y0 - e;
        const x = x0 + b;
        const y = y0 + d;
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    subBranchSE2 = new THREE.Line(geometry, material);
    scene.add(subBranchSE2);

    positions = [];
    a = 250;
    b = 510;
    c = 50;
    d = 50;
    for (let i = 0; i < vertices; i++){
        const y0 = Math.random() * 2 * c - c;
        const x0 = Math.random() * (a + y0 + e) - y0 - e;
        const x1 = x0 * Math.cos(Math.PI / 4) - y0 * Math.sin(Math.PI / 4);
        const y1 = x0 * Math.sin(Math.PI / 4) + y0 * Math.cos(Math.PI / 4);
        const x = x1 + b;
        const y = y1 + d;
        positions.push(x, y, Math.random() * 100 - 50);
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    subBranchE2 = new THREE.Line(geometry, material);
    scene.add(subBranchE2);

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xffffff));
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth * .5, window.innerWidth * .5, true);
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    container.appendChild(renderer.domElement);

    //fundo transparente?
    renderer.alpha = true;
    renderer.setClearAlpha(0);

    //precisa do onWindowResize?
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    renderer.setSize(window.innerWidth * .5, window.innerWidth * .5, true);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    const rotation = - Date.now() * 0.001;
    circle.rotation.y = rotation;
    triangleN.rotation.y = rotation;
    triangleW.rotation.y = rotation;
    triangleNW.rotation.y = rotation;
    triangleNE.rotation.y = rotation;
    triangleSW.rotation.y = rotation;
    branchNE.rotation.y = rotation;
    branchE.rotation.y = rotation;
    branchSE.rotation.y = rotation;
    branchS.rotation.y = rotation;
    branchSW.rotation.y = rotation;
    smallCircle.rotation.y = rotation;
    subBranchNE.rotation.y = rotation;
    subBranchE1.rotation.y = rotation;
    subBranchSE1.rotation.y = rotation;
    subBranchS1.rotation.y = rotation;
    subBranchSW.rotation.y = rotation;
    subBranchS2.rotation.y = rotation;
    subBranchSE2.rotation.y = rotation;
    subBranchE2.rotation.y = rotation;

    renderer.render(scene, camera);
}

init();
animate();