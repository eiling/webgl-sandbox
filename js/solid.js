let container;
let camera, scene, renderer;
let circle, triangleN, triangleW, triangleNW, triangleNE, triangleSW;
let branchNESW, branchE, branchSE, branchS;
let subBranchNE, subBranchE1, subBranchSE1, subBranchS1;
let subBranchSW, subBranchE2, subBranchSE2, subBranchS2;

function init() {
    container = document.getElementById('container');

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    camera = new THREE.PerspectiveCamera(27, 1, 1, 4500);
    camera.position.z = 3500;
    scene.add(camera);

    let light = new THREE.PointLight(0xffffff, 1);
    camera.add(light);

    let positions = [];

    let n = 36;
    let k = 420;
    for (let i = 0; i < n; i++) {
        const theta = i * Math.PI / n + Math.PI / 4;
        const phi = (i + 1) * Math.PI / n + Math.PI / 4;
        const r = k;

        positions.push(0, 0, 50);
        positions.push(Math.cos(theta) * r, Math.sin(theta) * r, 50);
        positions.push(Math.cos(phi) * r, Math.sin(phi) * r, 50);

        positions.push(Math.cos(theta) * r, Math.sin(theta) * r, 50);
        positions.push(Math.cos(theta) * r, Math.sin(theta) * r, -50);
        positions.push(Math.cos(phi) * r, Math.sin(phi) * r, 50);

        positions.push(Math.cos(phi) * r, Math.sin(phi) * r, 50);
        positions.push(Math.cos(theta) * r, Math.sin(theta) * r, -50);
        positions.push(Math.cos(phi) * r, Math.sin(phi) * r, -50);

        positions.push(0, 0, -50);
        positions.push(Math.cos(phi) * r, Math.sin(phi) * r, -50);
        positions.push(Math.cos(theta) * r, Math.sin(theta) * r, -50);
    }

    let normals = [];
    for(let i = 0; i < 36; i++){
        const theta = i * Math.PI / n + Math.PI / 4;
        const phi = (i + 1) * Math.PI / n + Math.PI / 4;

        normals.push(0, 0, 1);
        normals.push(0, 0, 1);
        normals.push(0, 0, 1);

        normals.push(Math.cos(theta), Math.sin(theta), 0);
        normals.push(Math.cos(theta), Math.sin(theta), 0);
        normals.push(Math.cos(phi), Math.sin(phi), 0);
        normals.push(Math.cos(phi), Math.sin(phi), 0);
        normals.push(Math.cos(theta), Math.sin(theta), 0);
        normals.push(Math.cos(phi), Math.sin(phi), 0);

        normals.push(0, 0, -1);
        normals.push(0, 0, -1);
        normals.push(0, 0, -1);
    }

    let geometry = new THREE.BufferGeometry();
    let material = new THREE.MeshStandardMaterial({color: 0xffc600});
    // let material = new THREE.MeshPhongMaterial({color: 0xffc600});
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.addAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    circle = new THREE.Mesh(geometry, material);
    scene.add(circle);

    positions = [];

    positions.push(-100, 470, 50);
    positions.push(100, 470, 50);
    positions.push(0, 770, 50);

    positions.push(100, 470, 50);
    positions.push(100, 470, -50);
    positions.push(0, 770, -50);

    positions.push(100, 470, 50);
    positions.push(0, 770, -50);
    positions.push(0, 770, 50);

    positions.push(-100, 470, -50);
    positions.push(-100, 470, 50);
    positions.push(0, 770, -50);

    positions.push(-100, 470, 50);
    positions.push(0, 770, 50);
    positions.push(0, 770, -50);

    positions.push(100, 470, -50);
    positions.push(-100, 470, -50);
    positions.push(0, 770, -50);

    positions.push(-100, 470, -50);
    positions.push(100, 470, 50);
    positions.push(-100, 470, 50);

    positions.push(100, 470, -50);
    positions.push(100, 470, 50);
    positions.push(-100, 470, -50);

    normals = [];

    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);

    normals.push(300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);

    normals.push(-300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(-300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(-300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(-300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(-300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(-300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);

    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);

    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);

    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.addAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    triangleN = new THREE.Mesh(geometry, material);
    scene.add(triangleN);

    triangleW = new THREE.Mesh(geometry, material);
    triangleW.rotation.z = Math.PI / 2;
    scene.add(triangleW);

    triangleNW = new THREE.Mesh(geometry, material);
    triangleNW.rotation.z = Math.PI / 4;
    scene.add(triangleNW);

    positions = [];

    positions.push(-100, 470, 50);
    positions.push(0, 470, 50);
    positions.push(0, 770, 50);

    positions.push(-100, 470, -50);
    positions.push(-100, 470, 50);
    positions.push(0, 770, -50);

    positions.push(-100, 470, 50);
    positions.push(0, 770, 50);
    positions.push(0, 770, -50);

    positions.push(0, 470, -50);
    positions.push(-100, 470, -50);
    positions.push(0, 770, -50);

    positions.push(-100, 470, -50);
    positions.push(0, 470, 50);
    positions.push(-100, 470, 50);

    positions.push(0, 470, -50);
    positions.push(0, 470, 50);
    positions.push(-100, 470, -50);

    normals = [];

    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);

    normals.push(-300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(-300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(-300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(-300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(-300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(-300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);

    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);

    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);

    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.addAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    triangleNE = new THREE.Mesh(geometry, material);
    triangleNE.rotation.z = -Math.PI / 4;
    scene.add(triangleNE);

    positions = [];

    positions.push(0, 470, 50);
    positions.push(100, 470, 50);
    positions.push(0, 770, 50);

    positions.push(100, 470, 50);
    positions.push(100, 470, -50);
    positions.push(0, 770, -50);

    positions.push(100, 470, 50);
    positions.push(0, 770, -50);
    positions.push(0, 770, 50);

    positions.push(100, 470, -50);
    positions.push(0, 470, -50);
    positions.push(0, 770, -50);

    positions.push(0, 470, -50);
    positions.push(100, 470, 50);
    positions.push(0, 470, 50);

    positions.push(100, 470, -50);
    positions.push(100, 470, 50);
    positions.push(0, 470, -50);

    normals = [];

    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);

    normals.push(300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);
    normals.push(300 / Math.sqrt(100000), 100 / Math.sqrt(100000), 0);

    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);

    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);

    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.addAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    triangleSW = new THREE.Mesh(geometry, material);
    triangleSW.rotation.z = Math.PI * 3 / 4;
    scene.add(triangleSW);

    positions = [];

    positions.push(-770, -50, 50);
    positions.push(770, -50, 50);
    positions.push(-770, 0, 50);

    positions.push(-770, 0, 50);
    positions.push(770, -50, 50);
    positions.push(770, 0, 50);

    positions.push(770, -50, -50);
    positions.push(-770, -50, -50);
    positions.push(-770, 0, -50);

    positions.push(770, -50, -50);
    positions.push(-770, 0, -50);
    positions.push(770, 0, -50);

    positions.push(-770, -50, 50);
    positions.push(-770, -50, -50);
    positions.push(770, -50, 50);

    positions.push(770, -50, 50);
    positions.push(-770, -50, -50);
    positions.push(770, -50, -50);

    positions.push(-770, -50, -50);
    positions.push(-770, -50, 50);
    positions.push(-770, 0, 50);

    positions.push(-770, -50, -50);
    positions.push(-770, 0, 50);
    positions.push(-770, 0, -50);

    positions.push(770, -50, 50);
    positions.push(770, -50, -50);
    positions.push(770, 0, 50);

    positions.push(770, 0, 50);
    positions.push(770, -50, -50);
    positions.push(770, 0, -50);

    positions.push(420, 0, -50);
    positions.push(420, 0, 50);
    positions.push(470, 0, 50);

    positions.push(420, 0, -50);
    positions.push(470, 0, 50);
    positions.push(470, 0, -50);

    positions.push(-420, 0, 50);
    positions.push(-420, 0, -50);
    positions.push(-470, 0, 50);

    positions.push(-470, 0, 50);
    positions.push(-420, 0, -50);
    positions.push(-470, 0, -50);

    normals = [];

    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);

    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);

    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);

    normals.push(-1, 0, 0);
    normals.push(-1, 0, 0);
    normals.push(-1, 0, 0);
    normals.push(-1, 0, 0);
    normals.push(-1, 0, 0);
    normals.push(-1, 0, 0);

    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);

    normals.push(0, 1, 0);
    normals.push(0, 1, 0);
    normals.push(0, 1, 0);
    normals.push(0, 1, 0);
    normals.push(0, 1, 0);
    normals.push(0, 1, 0);

    normals.push(0, 1, 0);
    normals.push(0, 1, 0);
    normals.push(0, 1, 0);
    normals.push(0, 1, 0);
    normals.push(0, 1, 0);
    normals.push(0, 1, 0);

    geometry = new THREE.BufferGeometry();
    material = new THREE.MeshStandardMaterial({color: 0x05c3ff});
    // material = new THREE.MeshPhongMaterial({color: 0x05c3ff});
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.addAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    branchNESW = new THREE.Mesh(geometry, material);
    branchNESW.rotation.z = Math.PI / 4;
    scene.add(branchNESW);

    positions = [];

    let x1 = 50 * Math.sqrt(2);
    let x2 = 50 * (Math.sqrt(2) + 1);

    positions.push(x1, 0, 50);
    positions.push(770, -50, 50);
    positions.push(770, 50, 50);

    positions.push(x1, 0, 50);
    positions.push(x2, -50, 50);
    positions.push(770, -50, 50);

    positions.push(x1, 0, 50);
    positions.push(770, 50, 50);
    positions.push(x2, 50, 50);

    positions.push(770, -50, -50);
    positions.push(x1, 0, -50);
    positions.push(770, 50, -50);

    positions.push(x2, -50, -50);
    positions.push(x1, 0, -50);
    positions.push(770, -50, -50);

    positions.push(770, 50, -50);
    positions.push(x1, 0, -50);
    positions.push(x2, 50, -50);

    positions.push(x2, 50, 50);
    positions.push(770, 50, 50);
    positions.push(770, 50, -50);

    positions.push(x2, 50, 50);
    positions.push(770, 50, -50);
    positions.push(x2, 50, -50);

    positions.push(770, -50, 50);
    positions.push(x2, -50, 50);
    positions.push(770, -50, -50);

    positions.push(770, -50, -50);
    positions.push(x2, -50, 50);
    positions.push(x2, -50, -50);

    positions.push(770, -50, 50);
    positions.push(770, -50, -50);
    positions.push(770, 50, -50);

    positions.push(770, -50, 50);
    positions.push(770, 50, -50);
    positions.push(770, 50, 50);

    normals = [];

    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);

    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);

    normals.push(0, 1, 0);
    normals.push(0, 1, 0);
    normals.push(0, 1, 0);
    normals.push(0, 1, 0);
    normals.push(0, 1, 0);
    normals.push(0, 1, 0);

    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);

    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);

    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.addAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    branchE = new THREE.Mesh(geometry, material);
    scene.add(branchE);

    branchS = new THREE.Mesh(geometry, material);
    branchS.rotation.z = -Math.PI / 2;
    scene.add(branchS);

    positions = [];

    positions.push(50, -50, 50);
    positions.push(770, -50, 50);
    positions.push(770, 50, 50);

    positions.push(50, -50, 50);
    positions.push(770, 50, 50);
    positions.push(50, 50, 50);

    positions.push(770, -50, -50);
    positions.push(50, -50, -50);
    positions.push(770, 50, -50);

    positions.push(770, 50, -50);
    positions.push(50, -50, -50);
    positions.push(50, 50, -50);

    positions.push(770, -50, 50);
    positions.push(770, -50, -50);
    positions.push(770, 50, -50);

    positions.push(770, -50, 50);
    positions.push(770, 50, -50);
    positions.push(770, 50, 50);

    positions.push(50, 50, 50);
    positions.push(770, 50, 50);
    positions.push(770, 50, -50);

    positions.push(50, 50, 50);
    positions.push(770, 50, -50);
    positions.push(50, 50, -50);

    positions.push(770, -50, 50);
    positions.push(50, -50, 50);
    positions.push(770, -50, -50);

    positions.push(770, -50, -50);
    positions.push(50, -50, 50);
    positions.push(50, -50, -50);

    normals = [];

    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);

    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);

    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);

    normals.push(0, 1, 0);
    normals.push(0, 1, 0);
    normals.push(0, 1, 0);
    normals.push(0, 1, 0);
    normals.push(0, 1, 0);
    normals.push(0, 1, 0);

    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);

    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.addAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    branchSE = new THREE.Mesh(geometry, material);
    branchSE.rotation.z = -Math.PI / 4;
    scene.add(branchSE);

    positions = [];

    x1 = 445 / Math.sqrt(2) - 50;
    let y1 = Math.sqrt(2) * (-445 - 100) / 2 + 50;
    x2 = x1 + 100;
    let y2 = y1 - 100;
    let y3 = 325 + 445 / Math.sqrt(2);
    y3 = -y3;

    positions.push(x1, y1, 50);
    positions.push(x1, y3, 50);
    positions.push(x2, y3, 50);

    positions.push(x1, y1, 50);
    positions.push(x2, y3, 50);
    positions.push(x2, y2, 50);

    positions.push(x1, y3, -50);
    positions.push(x1, y1, -50);
    positions.push(x2, y3, -50);

    positions.push(x2, y3, -50);
    positions.push(x1, y1, -50);
    positions.push(x2, y2, -50);

    positions.push(x1, y3, 50);
    positions.push(x1, y1, 50);
    positions.push(x1, y3, -50);

    positions.push(x1, y3, -50);
    positions.push(x1, y1, 50);
    positions.push(x1, y1, -50);

    positions.push(x2, y2, 50);
    positions.push(x2, y3, 50);
    positions.push(x2, y3, -50);

    positions.push(x2, y2, 50);
    positions.push(x2, y3, -50);
    positions.push(x2, y2, -50);

    positions.push(x2, y3, 50);
    positions.push(x1, y3, 50);
    positions.push(x2, y3, -50);

    positions.push(x1, y3, 50);
    positions.push(x1, y3, -50);
    positions.push(x2, y3, -50);

    normals = [];

    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);

    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);

    normals.push(-1, 0, 0);
    normals.push(-1, 0, 0);
    normals.push(-1, 0, 0);
    normals.push(-1, 0, 0);
    normals.push(-1, 0, 0);
    normals.push(-1, 0, 0);

    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);

    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);

    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.addAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    subBranchNE = new THREE.Mesh(geometry, material);
    subBranchNE.rotation.z = Math.PI / 2;
    scene.add(subBranchNE);

    subBranchE1 = new THREE.Mesh(geometry, material);
    subBranchE1.rotation.z = Math.PI / 4;
    scene.add(subBranchE1);

    subBranchSE1 = new THREE.Mesh(geometry, material);
    scene.add(subBranchSE1);

    subBranchS1 = new THREE.Mesh(geometry, material);
    subBranchS1.rotation.z = -Math.PI / 4;
    scene.add(subBranchS1);

    positions = [];

    x1 = -x1;
    x2 = -x2;

    positions.push(x1, y3, 50);
    positions.push(x1, y1, 50);
    positions.push(x2, y3, 50);

    positions.push(x2, y3, 50);
    positions.push(x1, y1, 50);
    positions.push(x2, y2, 50);

    positions.push(x1, y1, -50);
    positions.push(x1, y3, -50);
    positions.push(x2, y3, -50);

    positions.push(x1, y1, -50);
    positions.push(x2, y3, -50);
    positions.push(x2, y2, -50);

    positions.push(x1, y1, 50);
    positions.push(x1, y3, 50);
    positions.push(x1, y3, -50);

    positions.push(x1, y1, 50);
    positions.push(x1, y3, -50);
    positions.push(x1, y1, -50);

    positions.push(x2, y3, 50);
    positions.push(x2, y2, 50);
    positions.push(x2, y3, -50);

    positions.push(x2, y3, -50);
    positions.push(x2, y2, 50);
    positions.push(x2, y2, -50);

    positions.push(x1, y3, 50);
    positions.push(x2, y3, 50);
    positions.push(x2, y3, -50);

    positions.push(x1, y3, -50);
    positions.push(x1, y3, 50);
    positions.push(x2, y3, -50);

    normals = [];

    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);

    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);
    normals.push(0, 0, -1);

    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);
    normals.push(1, 0, 0);

    normals.push(-1, 0, 0);
    normals.push(-1, 0, 0);
    normals.push(-1, 0, 0);
    normals.push(-1, 0, 0);
    normals.push(-1, 0, 0);
    normals.push(-1, 0, 0);

    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);
    normals.push(0, -1, 0);

    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.addAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    subBranchSW = new THREE.Mesh(geometry, material);
    scene.add(subBranchSW);

    subBranchS2 = new THREE.Mesh(geometry, material);
    subBranchS2.rotation.z = Math.PI / 4;
    scene.add(subBranchS2);

    subBranchSE2 = new THREE.Mesh(geometry, material);
    subBranchSE2.rotation.z = Math.PI / 2;
    scene.add(subBranchSE2);

    subBranchE2 = new THREE.Mesh(geometry, material);
    subBranchE2.rotation.z = Math.PI * 3 / 4;
    scene.add(subBranchE2);

    positions = [];

    positions.push(-1500, -1500, -1000);
    positions.push(1500, -1500, -1000);
    positions.push(1500, 1500, -1000);
    positions.push(-1500, -1500, -1000);
    positions.push(1500, 1500, -1000);
    positions.push(-1500, 1500, -1000);

    normals = [];

    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);

    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.addAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    material = new THREE.MeshBasicMaterial({color: 0xffffff});
    let plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    const size = Math.min(window.innerWidth, window.innerHeight);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor(new THREE.Color(0xffffff));
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(size, size, true);
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    container.appendChild(renderer.domElement);

    //precisa do onWindowResize?
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    const size = Math.min(window.innerWidth, window.innerHeight);
    renderer.setSize(size, size, true);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function rotate(rotation) {
    circle.rotation.y = rotation;
    triangleN.rotation.y = rotation;
    triangleW.rotation.y = rotation;
    triangleNW.rotation.y = rotation;
    triangleNE.rotation.y = rotation;
    triangleSW.rotation.y = rotation;
    branchNESW.rotation.y = rotation;
    branchE.rotation.y = rotation;
    branchSE.rotation.y = rotation;
    branchS.rotation.y = rotation;
    subBranchNE.rotation.y = rotation;
    subBranchE1.rotation.y = rotation;
    subBranchSE1.rotation.y = rotation;
    subBranchS1.rotation.y = rotation;
    subBranchSW.rotation.y = rotation;
    subBranchS2.rotation.y = rotation;
    subBranchSE2.rotation.y = rotation;
    subBranchE2.rotation.y = rotation;
}

function render() {
    const rotation = -Date.now() * 0.0005;
    rotate(rotation);

    renderer.render(scene, camera);
}

init();
animate();