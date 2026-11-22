import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// ============================================================
// SCENE
// ============================================================

const scene = new THREE.Scene();

scene.background =
    new THREE.Color(0x7899ad);

scene.fog =
    new THREE.Fog(
        0x7899ad,
        42,
        105
    );

// ============================================================
// CAMERA
// ============================================================

const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    180
);

camera.position.set(
    38,
    22,
    45
);

// ============================================================
// RENDERER
// ============================================================

const renderer =
    new THREE.WebGLRenderer({
        antialias: true
    });

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    Math.min(
        window.devicePixelRatio,
        2
    )
);

renderer.shadowMap.enabled = true;

renderer.shadowMap.type =
    THREE.PCFSoftShadowMap;

renderer.outputColorSpace =
    THREE.SRGBColorSpace;

renderer.toneMapping =
    THREE.ACESFilmicToneMapping;

renderer.toneMappingExposure = 1.0;

document.body.style.margin = "0";
document.body.style.overflow = "hidden";

document.body.appendChild(
    renderer.domElement
);

// ============================================================
// CONTROLS
// ============================================================

const controls = new OrbitControls(
    camera,
    renderer.domElement
);

controls.enableDamping = true;

controls.target.set(
    0,
    3,
    0
);

// ============================================================
// MATERIALS
// ============================================================

const groundMat =
    new THREE.MeshStandardMaterial({
        color: 0x4b5548,
        roughness: 0.96,
        metalness: 0.0
    });

const wallMat =
    new THREE.MeshStandardMaterial({
        color: 0xc9c1ad,
        roughness: 0.86,
        metalness: 0.0
    });

const roofMat =
    new THREE.MeshStandardMaterial({
        color: 0x4d4641,
        roughness: 0.78,
        metalness: 0.04
    });

const trimMat =
    new THREE.MeshStandardMaterial({
        color: 0x4d5b50,
        roughness: 0.68,
        metalness: 0.04
    });

const woodMat =
    new THREE.MeshStandardMaterial({
        color: 0x805b3f,
        roughness: 0.72,
        metalness: 0.0
    });

const darkWoodMat =
    new THREE.MeshStandardMaterial({
        color: 0x3c2c22,
        roughness: 0.8,
        metalness: 0.0
    });

const metalMat =
    new THREE.MeshStandardMaterial({
        color: 0x555d62,
        metalness: 0.82,
        roughness: 0.25
    });

const blackboardMat =
    new THREE.MeshStandardMaterial({
        color: 0x19342d,
        roughness: 0.9,
        metalness: 0.0
    });

const whiteMat =
    new THREE.MeshStandardMaterial({
        color: 0xe6e1d5,
        roughness: 0.68,
        metalness: 0.0
    });

const blueMat =
    new THREE.MeshStandardMaterial({
        color: 0x405d72,
        roughness: 0.68,
        metalness: 0.05
    });

const redMat =
    new THREE.MeshStandardMaterial({
        color: 0x793d38,
        roughness: 0.72,
        metalness: 0.0
    });

const skinMat =
    new THREE.MeshStandardMaterial({
        color: 0x8f5d42,
        roughness: 0.84,
        metalness: 0.0
    });

const hairMat =
    new THREE.MeshStandardMaterial({
        color: 0x151311,
        roughness: 0.94,
        metalness: 0.0
    });

const glassMat =
    new THREE.MeshPhysicalMaterial({
        color: 0x5d7887,
        transparent: true,
        opacity: 0.34,
        roughness: 0.12,
        metalness: 0.08,
        transmission: 0.15,
        thickness: 0.08
    });

const greenMat =
    new THREE.MeshStandardMaterial({
        color: 0x36583d,
        roughness: 0.94,
        metalness: 0.0
    });

// ============================================================
// REALISTIC CLASSROOM MATERIALS
// ============================================================

const classroomFloorMat =
    new THREE.MeshStandardMaterial({
        color: 0x806b55,
        roughness: 0.78,
        metalness: 0.0
    });

const classroomWallMat =
    new THREE.MeshStandardMaterial({
        color: 0xd7d0bd,
        roughness: 0.9,
        metalness: 0.0
    });

const classroomLowerWallMat =
    new THREE.MeshStandardMaterial({
        color: 0x69766c,
        roughness: 0.86,
        metalness: 0.0
    });

const classroomCeilingMat =
    new THREE.MeshStandardMaterial({
        color: 0xe9e5da,
        roughness: 0.94,
        metalness: 0.0
    });

const classroomFrameMat =
    new THREE.MeshStandardMaterial({
        color: 0x34443e,
        roughness: 0.7,
        metalness: 0.1
    });

const classroomGlassMat =
    new THREE.MeshPhysicalMaterial({
        color: 0x718b93,
        transparent: true,
        opacity: 0.28,
        roughness: 0.16,
        metalness: 0.05,
        transmission: 0.2,
        thickness: 0.08
    });

const classroomLightMat =
    new THREE.MeshStandardMaterial({
        color: 0xf4ead1,
        emissive: 0xffe4a8,
        emissiveIntensity: 1.35,
        roughness: 0.35
    });

const classroomAccentMat =
    new THREE.MeshStandardMaterial({
        color: 0x4d6257,
        roughness: 0.78,
        metalness: 0.0
    });

// ============================================================
// LIGHTING
// ============================================================

const sun =
    new THREE.DirectionalLight(
        0xffe8c2,
        2.8
    );

sun.position.set(
    -25,
    32,
    18
);

sun.castShadow = true;

sun.shadow.mapSize.set(
    2048,
    2048
);

sun.shadow.camera.left = -55;
sun.shadow.camera.right = 55;
sun.shadow.camera.top = 55;
sun.shadow.camera.bottom = -55;

sun.shadow.camera.near = 0.5;
sun.shadow.camera.far = 120;

sun.shadow.bias = -0.00015;
sun.shadow.normalBias = 0.025;

scene.add(sun);

const ambient =
    new THREE.HemisphereLight(
        0xc5d9e3,
        0x252c27,
        1.15
    );

scene.add(ambient);

const fillLight =
    new THREE.DirectionalLight(
        0xa9c4d4,
        0.55
    );

fillLight.position.set(
    25,
    15,
    -20
);

scene.add(fillLight);

// ============================================================
// GROUND
// ============================================================

const ground = new THREE.Mesh(
    new THREE.BoxGeometry(
        100,
        0.5,
        80
    ),
    groundMat
);

ground.position.y = -0.25;

ground.receiveShadow = true;

scene.add(ground);

// ============================================================
// SCHOOL
// ============================================================

const school =
    new THREE.Group();

scene.add(school);

// ============================================================
// MAIN BUILDING
// ============================================================

const building = new THREE.Mesh(
    new THREE.BoxGeometry(
        28,
        10,
        16
    ),
    wallMat
);

building.position.set(
    0,
    5,
    0
);

building.castShadow = true;
building.receiveShadow = true;

school.add(building);

// ============================================================
// EXTERIOR FACADE BANDS
// ============================================================

const facadeBand =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            28.3,
            0.55,
            0.45
        ),
        trimMat
    );

facadeBand.position.set(
    0,
    2.2,
    8.12
);

facadeBand.castShadow = true;

school.add(facadeBand);

const upperFacadeBand =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            28.3,
            0.4,
            0.4
        ),
        trimMat
    );

upperFacadeBand.position.set(
    0,
    7.2,
    8.12
);

school.add(upperFacadeBand);

// ============================================================
// ROOF
// ============================================================

const roof = new THREE.Mesh(
    new THREE.BoxGeometry(
        30,
        1,
        18
    ),
    roofMat
);

roof.position.set(
    0,
    10.5,
    0
);

roof.castShadow = true;
roof.receiveShadow = true;

school.add(roof);

// ============================================================
// FRONT VERANDAH
// ============================================================

const veranda = new THREE.Mesh(
    new THREE.BoxGeometry(
        28,
        0.5,
        4
    ),
    trimMat
);

veranda.position.set(
    0,
    0.25,
    10
);

veranda.receiveShadow = true;

school.add(veranda);

const verandaRoof = new THREE.Mesh(
    new THREE.BoxGeometry(
        29,
        0.5,
        4
    ),
    roofMat
);

verandaRoof.position.set(
    0,
    7.5,
    10
);

verandaRoof.castShadow = true;
verandaRoof.receiveShadow = true;

school.add(verandaRoof);

// ============================================================
// VERANDAH PILLARS
// ============================================================

for (
    let x = -12;
    x <= 12;
    x += 4
) {

    const pillar = new THREE.Mesh(
        new THREE.BoxGeometry(
            0.45,
            7,
            0.45
        ),
        trimMat
    );

    pillar.position.set(
        x,
        3.75,
        10
    );

    pillar.castShadow = true;
    pillar.receiveShadow = true;

    school.add(pillar);
}

// ============================================================
// MAIN ENTRANCE
// ============================================================

const entrance = new THREE.Mesh(
    new THREE.BoxGeometry(
        5,
        7,
        0.5
    ),
    darkWoodMat
);

entrance.position.set(
    0,
    3.5,
    8
);

entrance.castShadow = true;

school.add(entrance);

const entranceGlass = new THREE.Mesh(
    new THREE.BoxGeometry(
        4,
        6,
        0.1
    ),
    glassMat
);

entranceGlass.position.set(
    0,
    3.5,
    7.7
);

school.add(entranceGlass);

// Entrance top trim
const entranceTopTrim =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            5.3,
            0.28,
            0.35
        ),
        trimMat
    );

entranceTopTrim.position.set(
    0,
    7.05,
    7.95
);

school.add(entranceTopTrim);

// ============================================================
// WINDOWS
// ============================================================

for (
    let x = -11;
    x <= 11;
    x += 5.5
) {

    const window = new THREE.Mesh(
        new THREE.BoxGeometry(
            3.5,
            3,
            0.15
        ),
        glassMat
    );

    window.position.set(
        x,
        5,
        8.05
    );

    school.add(window);

    const frameTop = new THREE.Mesh(
        new THREE.BoxGeometry(
            3.8,
            0.15,
            0.25
        ),
        trimMat
    );

    frameTop.position.set(
        x,
        6.55,
        7.95
    );

    school.add(frameTop);

    const frameBottom =
        frameTop.clone();

    frameBottom.position.y = 3.45;

    school.add(frameBottom);

    const verticalFrame =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                0.12,
                3.05,
                0.25
            ),
            trimMat
        );

    verticalFrame.position.set(
        x,
        5,
        7.95
    );

    school.add(verticalFrame);

    const verticalFrame2 =
        verticalFrame.clone();

    verticalFrame2.position.x =
        x + 1.65;

    school.add(verticalFrame2);
}

// ============================================================
// SCHOOL SIGN
// ============================================================

const sign =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            12,
            2.2,
            0.4
        ),
        trimMat
    );

sign.position.set(
    0,
    8.5,
    8
);

sign.castShadow = true;

school.add(sign);

// ============================================================
// SCHOOL SIGN TEXT
// ============================================================

function createSignTexture() {

    const canvas =
        document.createElement("canvas");

    canvas.width = 1024;
    canvas.height = 256;

    const ctx =
        canvas.getContext("2d");

    ctx.fillStyle = "#d9d0bd";

    ctx.fillRect(
        0,
        0,
        1024,
        256
    );

    ctx.fillStyle = "#25352e";

    ctx.font =
        "bold 78px Arial";

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(
        "COMPUTER GRAPHICS",
        512,
        128
    );

    const texture =
        new THREE.CanvasTexture(
            canvas
        );

    texture.colorSpace =
        THREE.SRGBColorSpace;

    texture.anisotropy =
        renderer.capabilities.getMaxAnisotropy();

    return texture;
}

const signText =
    new THREE.Mesh(
        new THREE.PlaneGeometry(
            10.8,
            1.7
        ),
        new THREE.MeshStandardMaterial({
            map: createSignTexture(),
            roughness: 0.62,
            metalness: 0.02
        })
    );

signText.position.set(
    0,
    8.5,
    7.77
);

school.add(signText);

// ============================================================
// CLASSROOM
// ============================================================

const classroom =
    new THREE.Group();

classroom.position.set(
    -7,
    0,
    -3
);

school.add(classroom);

// ============================================================
// REALISTIC CLASSROOM FLOOR
// ============================================================

const classroomFloor =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            12,
            0.18,
            21
        ),
        classroomFloorMat
    );

classroomFloor.position.set(
    0,
    0,
    2
);

classroomFloor.receiveShadow = true;

classroom.add(classroomFloor);

// Floor border
const floorFrontTrim =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            12,
            0.25,
            0.3
        ),
        darkWoodMat
    );

floorFrontTrim.position.set(
    0,
    0.12,
    12.2
);

classroom.add(floorFrontTrim);

const floorBackTrim =
    floorFrontTrim.clone();

floorBackTrim.position.z =
    -8;

classroom.add(floorBackTrim);

// ============================================================
// CLASSROOM WALLS
// ============================================================

const classroomBackWall =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            12,
            8,
            0.25
        ),
        classroomWallMat
    );

classroomBackWall.position.set(
    0,
    4,
    -7.8
);

classroomBackWall.castShadow = true;
classroomBackWall.receiveShadow = true;

classroom.add(classroomBackWall);

// Lower back wall panel
const backLowerPanel =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            12.05,
            1.25,
            0.3
        ),
        classroomLowerWallMat
    );

backLowerPanel.position.set(
    0,
    0.72,
    -7.64
);

classroom.add(backLowerPanel);

// Side walls
for (
    const side of [-1, 1]
) {

    const sideWall =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                0.25,
                8,
                20
            ),
            classroomWallMat
        );

    sideWall.position.set(
        side * 6,
        4,
        2
    );

    sideWall.castShadow = true;
    sideWall.receiveShadow = true;

    classroom.add(sideWall);

    const lowerPanel =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                0.3,
                1.25,
                20
            ),
            classroomLowerWallMat
        );

    lowerPanel.position.set(
        side * 5.84,
        0.72,
        2
    );

    classroom.add(lowerPanel);
}

// ============================================================
// CLASSROOM CEILING
// ============================================================

const classroomCeiling =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            12,
            0.2,
            20
        ),
        classroomCeilingMat
    );

classroomCeiling.position.set(
    0,
    8.1,
    2
);

classroomCeiling.receiveShadow = true;

classroom.add(classroomCeiling);

// ============================================================
// FRONT CLASSROOM WALL / DOOR FRAME
// ============================================================

const frontLeftWall =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            3.2,
            8,
            0.25
        ),
        classroomWallMat
    );

frontLeftWall.position.set(
    -4.4,
    4,
    12
);

classroom.add(frontLeftWall);

const frontRightWall =
    frontLeftWall.clone();

frontRightWall.position.x = 4.4;

classroom.add(frontRightWall);

const frontTopWall =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            5.6,
            3,
            0.25
        ),
        classroomWallMat
    );

frontTopWall.position.set(
    0,
    6.5,
    12
);

classroom.add(frontTopWall);

// Door frame
for (
    const x of [-2.65, 2.65]
) {

    const frame =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                0.18,
                5.8,
                0.3
            ),
            darkWoodMat
        );

    frame.position.set(
        x,
        2.9,
        11.82
    );

    classroom.add(frame);
}

const doorHeader =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            5.45,
            0.18,
            0.3
        ),
        darkWoodMat
    );

doorHeader.position.set(
    0,
    5.8,
    11.82
);

classroom.add(doorHeader);

// Open glass entrance
const classroomEntranceGlass =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            4.9,
            5.5,
            0.06
        ),
        classroomGlassMat
    );

classroomEntranceGlass.position.set(
    0,
    2.8,
    11.72
);

classroom.add(classroomEntranceGlass);

// ============================================================
// CLASSROOM WINDOWS
// ============================================================

function createClassroomWindow(
    x,
    z,
    rotationY = 0
) {

    const windowGroup =
        new THREE.Group();

    windowGroup.position.set(
        x,
        4.8,
        z
    );

    windowGroup.rotation.y =
        rotationY;

    const glass =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                3.0,
                2.5,
                0.08
            ),
            classroomGlassMat
        );

    windowGroup.add(glass);

    const top =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                3.25,
                0.12,
                0.18
            ),
            classroomFrameMat
        );

    top.position.y = 1.35;

    windowGroup.add(top);

    const bottom =
        top.clone();

    bottom.position.y = -1.35;

    windowGroup.add(bottom);

    const left =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                0.12,
                2.7,
                0.18
            ),
            classroomFrameMat
        );

    left.position.x = -1.55;

    windowGroup.add(left);

    const right =
        left.clone();

    right.position.x = 1.55;

    windowGroup.add(right);

    const centre =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                0.08,
                2.5,
                0.18
            ),
            classroomFrameMat
        );

    windowGroup.add(centre);

    const centreHorizontal =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                3.0,
                0.08,
                0.18
            ),
            classroomFrameMat
        );

    windowGroup.add(centreHorizontal);

    classroom.add(windowGroup);
}

createClassroomWindow(
    -5.82,
    -3.2,
    Math.PI / 2
);

createClassroomWindow(
    -5.82,
    1.5,
    Math.PI / 2
);

createClassroomWindow(
    -5.82,
    6.2,
    Math.PI / 2
);

createClassroomWindow(
    5.82,
    -3.2,
    -Math.PI / 2
);

createClassroomWindow(
    5.82,
    1.5,
    -Math.PI / 2
);

createClassroomWindow(
    5.82,
    6.2,
    -Math.PI / 2
);

// ============================================================
// CLASSROOM CEILING LIGHTS
// ============================================================

const classroomLights = [];

for (
    const z of [-4, 1, 6]
) {

    const lightGroup =
        new THREE.Group();

    lightGroup.position.set(
        0,
        7.75,
        z
    );

    const fixture =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                2.5,
                0.12,
                0.42
            ),
            classroomFrameMat
        );

    lightGroup.add(fixture);

    const panel =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                2.1,
                0.05,
                0.28
            ),
            classroomLightMat
        );

    panel.position.y = -0.08;

    lightGroup.add(panel);

    classroom.add(lightGroup);

    const pointLight =
        new THREE.PointLight(
            0xffe5b0,
            0.75,
            8
        );

    pointLight.position.set(
        0,
        7.2,
        z
    );

    classroom.add(pointLight);

    classroomLights.push(
        pointLight
    );
}

// ============================================================
// CLASSROOM WALL DECORATION
// ============================================================

const posterMat =
    new THREE.MeshStandardMaterial({
        color: 0xb6c2b7,
        roughness: 0.82,
        metalness: 0.0
    });

for (
    const x of [-4.7, 4.7]
) {

    const poster =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                0.08,
                1.8,
                1.5
            ),
            posterMat
        );

    poster.position.set(
        x,
        4.7,
        -6.9
    );

    classroom.add(poster);
}

// ============================================================
// BLACKBOARD
// ============================================================

const board = new THREE.Mesh(
    new THREE.BoxGeometry(
        8,
        3.2,
        0.2
    ),
    blackboardMat
);

board.position.set(
    0,
    5.5,
    -6.6
);

board.castShadow = true;

classroom.add(board);

const boardFrame = new THREE.Mesh(
    new THREE.BoxGeometry(
        8.5,
        3.7,
        0.25
    ),
    woodMat
);

boardFrame.position.set(
    0,
    5.5,
    -6.75
);

boardFrame.castShadow = true;

classroom.add(boardFrame);

// ============================================================
// BOARD TEXT
// ============================================================

function createBoardTexture() {

    const canvas =
        document.createElement("canvas");

    canvas.width = 1024;
    canvas.height = 512;

    const ctx =
        canvas.getContext("2d");

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "#ffffff";

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.font =
        "bold 58px Georgia";

    ctx.fillText(
        "How Computer Graphics",
        canvas.width / 2,
        170
    );

    ctx.fillText(
        "should be taught",
        canvas.width / 2,
        285
    );

    const texture =
        new THREE.CanvasTexture(
            canvas
        );

    texture.colorSpace =
        THREE.SRGBColorSpace;

    texture.anisotropy =
        renderer.capabilities
            .getMaxAnisotropy();

    texture.needsUpdate = true;

    return texture;
}

const boardTextMaterial =
    new THREE.MeshBasicMaterial({
        map: createBoardTexture(),
        transparent: true,
        side: THREE.DoubleSide
    });

const boardText = new THREE.Mesh(
    new THREE.PlaneGeometry(
        7.25,
        2.55
    ),
    boardTextMaterial
);

boardText.position.set(
    0,
    5.5,
    -6.42
);

classroom.add(boardText);

// ============================================================
// CLASSROOM NAME PLAQUE
// ============================================================

const classroomNameCanvas =
    document.createElement("canvas");

classroomNameCanvas.width = 1024;
classroomNameCanvas.height = 220;

const classroomNameCtx =
    classroomNameCanvas.getContext("2d");

classroomNameCtx.fillStyle =
    "#e8e0cf";

classroomNameCtx.fillRect(
    0,
    0,
    1024,
    220
);

classroomNameCtx.fillStyle =
    "#263a32";

classroomNameCtx.font =
    "bold 76px Arial";

classroomNameCtx.textAlign =
    "center";

classroomNameCtx.textBaseline =
    "middle";

classroomNameCtx.fillText(
    "COMPUTER GRAPHICS",
    512,
    110
);

const classroomNameTexture =
    new THREE.CanvasTexture(
        classroomNameCanvas
    );

classroomNameTexture.colorSpace =
    THREE.SRGBColorSpace;

const classroomName =
    new THREE.Mesh(
        new THREE.PlaneGeometry(
            5.4,
            1.15
        ),
        new THREE.MeshStandardMaterial({
            map: classroomNameTexture,
            roughness: 0.58,
            metalness: 0.02
        })
    );

classroomName.position.set(
    0,
    6.9,
    -6.82
);

classroom.add(classroomName);

// ============================================================
// TEACHER DESK
// ============================================================

const teacherDesk =
    new THREE.Group();

teacherDesk.position.set(
    0,
    0,
    -3.5
);

classroom.add(teacherDesk);

const teacherTop = new THREE.Mesh(
    new THREE.BoxGeometry(
        3.2,
        0.3,
        1.4
    ),
    darkWoodMat
);

teacherTop.position.y = 1.25;
teacherTop.castShadow = true;

teacherDesk.add(teacherTop);

for (
    const x of [-1.25, 1.25]
) {

    const leg = new THREE.Mesh(
        new THREE.BoxGeometry(
            0.18,
            1.1,
            0.18
        ),
        metalMat
    );

    leg.position.set(
        x,
        0.55,
        0
    );

    leg.castShadow = true;

    teacherDesk.add(leg);
}

// Teacher desk drawer
const teacherDrawer =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            1.3,
            0.45,
            1.1
        ),
        darkWoodMat
    );

teacherDrawer.position.set(
    0,
    0.88,
    0
);

teacherDesk.add(teacherDrawer);

// ============================================================
// STUDENT DESKS
// ============================================================

const desks = [];

for (
    let row = 0;
    row < 3;
    row++
) {

    for (
        let col = 0;
        col < 3;
        col++
    ) {

        const desk =
            new THREE.Group();

        desk.position.set(
            -3.5 + col * 3.5,
            0,
            -1 + row * 3 + 0.8
        );

        const top = new THREE.Mesh(
            new THREE.BoxGeometry(
                2.2,
                0.25,
                1.4
            ),
            woodMat
        );

        top.position.y = 1.45;

        top.castShadow = true;
        top.receiveShadow = true;

        desk.add(top);

        for (
            const x of [-0.8, 0.8]
        ) {

            const leg = new THREE.Mesh(
                new THREE.BoxGeometry(
                    0.15,
                    1.3,
                    0.15
                ),
                metalMat
            );

            leg.position.set(
                x,
                0.65,
                0
            );

            leg.castShadow = true;

            desk.add(leg);
        }

        classroom.add(desk);

        desks.push(desk);

        const chair =
            new THREE.Group();

        const chairSeat =
            new THREE.Mesh(
                new THREE.BoxGeometry(
                    1.2,
                    0.2,
                    1.1
                ),
                darkWoodMat
            );

        chairSeat.position.y = 0.75;

        chair.add(chairSeat);

        const chairBack =
            new THREE.Mesh(
                new THREE.BoxGeometry(
                    1.2,
                    1.1,
                    0.16
                ),
                darkWoodMat
            );

        chairBack.position.set(
            0,
            1.25,
            0.48
        );

        chair.add(chairBack);

        chair.position.set(
            desk.position.x,
            0,
            desk.position.z + 0.65
        );

        chair.castShadow = true;

        classroom.add(chair);
    }
}

// ============================================================
// BOOKS
// ============================================================

function createBook(
    x,
    y,
    z,
    color
) {

    const book = new THREE.Mesh(
        new THREE.BoxGeometry(
            0.7,
            0.15,
            0.9
        ),
        new THREE.MeshStandardMaterial({
            color,
            roughness: 0.82,
            metalness: 0.0
        })
    );

    book.position.set(
        x,
        y,
        z
    );

    book.castShadow = true;

    classroom.add(book);
}

for (
    let i = 0;
    i < desks.length;
    i++
) {

    createBook(
        desks[i].position.x,
        1.72,
        desks[i].position.z,
        i % 2 === 0
            ? 0x405d72
            : 0x744542
    );
}

// ============================================================
// REALISTIC WALL CLOCK
// ============================================================

const clockGroup =
    new THREE.Group();

const clockRimMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x2b2d2f,
        metalness: 0.72,
        roughness: 0.28
    });

const clockInnerRimMaterial =
    new THREE.MeshStandardMaterial({
        color: 0xb6b8b3,
        metalness: 0.35,
        roughness: 0.35
    });

const clockFaceMaterial =
    new THREE.MeshStandardMaterial({
        color: 0xf4f1e8,
        roughness: 0.62,
        metalness: 0.0
    });

const clockMarkerMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x202326,
        roughness: 0.48,
        metalness: 0.05
    });

const clockGlassMaterial =
    new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.13,
        roughness: 0.05,
        metalness: 0.0,
        transmission: 0.08,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        depthWrite: false
    });

const clockFace = new THREE.Mesh(
    new THREE.CylinderGeometry(
        0.65,
        0.65,
        0.15,
        48
    ),
    clockFaceMaterial
);

clockFace.rotation.x =
    Math.PI / 2;

clockFace.position.set(
    6,
    7,
    -7.5
);

clockFace.castShadow = true;
clockFace.receiveShadow = true;

clockGroup.add(clockFace);

const clockOuterRim =
    new THREE.Mesh(
        new THREE.TorusGeometry(
            0.72,
            0.075,
            12,
            48
        ),
        clockRimMaterial
    );

clockOuterRim.position.set(
    6,
    7,
    -7.61
);

clockOuterRim.rotation.x =
    Math.PI / 2;

clockOuterRim.castShadow = true;

clockGroup.add(clockOuterRim);

const clockInnerRim =
    new THREE.Mesh(
        new THREE.TorusGeometry(
            0.61,
            0.025,
            8,
            48
        ),
        clockInnerRimMaterial
    );

clockInnerRim.position.set(
    6,
    7,
    -7.61
);

clockInnerRim.rotation.x =
    Math.PI / 2;

clockGroup.add(clockInnerRim);

for (
    let i = 0;
    i < 12;
    i++
) {

    const angle =
        i * Math.PI / 6;

    const isMajor =
        i % 3 === 0;

    const marker =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                isMajor ? 0.065 : 0.045,
                isMajor ? 0.16 : 0.11,
                0.035
            ),
            clockMarkerMaterial
        );

    marker.position.set(
        6 +
            Math.sin(angle) *
            0.51,
        7 +
            Math.cos(angle) *
            0.51,
        -7.62
    );

    marker.rotation.z =
        -angle;

    marker.castShadow = true;

    clockGroup.add(marker);
}

for (
    let i = 0;
    i < 60;
    i++
) {

    if (i % 5 === 0) {
        continue;
    }

    const angle =
        i * Math.PI / 30;

    const marker =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                0.025,
                0.07,
                0.025
            ),
            clockMarkerMaterial
        );

    marker.position.set(
        6 +
            Math.sin(angle) *
            0.54,
        7 +
            Math.cos(angle) *
            0.54,
        -7.62
    );

    marker.rotation.z =
        -angle;

    clockGroup.add(marker);
}

const clockCenter =
    new THREE.Group();

clockCenter.position.set(
    6,
    7,
    -7.66
);

clockGroup.add(clockCenter);

const hourPivot =
    new THREE.Group();

const minutePivot =
    new THREE.Group();

const secondPivot =
    new THREE.Group();

hourPivot.position.set(
    6,
    7,
    -7.67
);

minutePivot.position.set(
    6,
    7,
    -7.675
);

secondPivot.position.set(
    6,
    7,
    -7.68
);

clockGroup.add(hourPivot);
clockGroup.add(minutePivot);
clockGroup.add(secondPivot);

const hourHand = new THREE.Mesh(
    new THREE.BoxGeometry(
        0.09,
        0.32,
        0.06
    ),
    darkWoodMat
);

hourHand.position.y = 0.16;

hourPivot.add(hourHand);

const minuteHand = new THREE.Mesh(
    new THREE.BoxGeometry(
        0.065,
        0.46,
        0.055
    ),
    darkWoodMat
);

minuteHand.position.y = 0.23;

minutePivot.add(minuteHand);

const secondHand = new THREE.Mesh(
    new THREE.BoxGeometry(
        0.035,
        0.52,
        0.035
    ),
    redMat
);

secondHand.position.y = 0.26;

secondPivot.add(secondHand);

const clockHub =
    new THREE.Mesh(
        new THREE.CylinderGeometry(
            0.075,
            0.075,
            0.07,
            20
        ),
        clockRimMaterial
    );

clockHub.rotation.x =
    Math.PI / 2;

clockHub.position.set(
    6,
    7,
    -7.71
);

clockGroup.add(clockHub);

const clockGlass =
    new THREE.Mesh(
        new THREE.CylinderGeometry(
            0.66,
            0.66,
            0.025,
            48
        ),
        clockGlassMaterial
    );

clockGlass.rotation.x =
    Math.PI / 2;

clockGlass.position.set(
    6,
    7,
    -7.73
);

clockGroup.add(clockGlass);

classroom.add(clockGroup);

// ============================================================
// CLOCK SOUND WAVES
// ============================================================

const clockWaves = [];

for (
    let i = 0;
    i < 4;
    i++
) {

    const wave = new THREE.Mesh(
        new THREE.RingGeometry(
            0.9,
            1.05,
            64
        ),
        new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide,
            depthWrite: false,
            depthTest: true
        })
    );

    wave.position.set(
        6,
        7,
        -7.62
    );

    wave.rotation.x =
        Math.PI / 2;

    wave.scale.setScalar(0.7);

    classroom.add(wave);

    clockWaves.push(wave);
}

// ============================================================
// DIALOGUE
// ============================================================

function createDialogue(
    text,
    width = 430,
    height = 150
) {

    const canvas =
        document.createElement("canvas");

    canvas.width = width;
    canvas.height = height;

    const ctx =
        canvas.getContext("2d");

    ctx.clearRect(
        0,
        0,
        width,
        height
    );

    ctx.fillStyle =
        "rgba(255,255,255,0.96)";

    ctx.strokeStyle =
        "#25313a";

    ctx.lineWidth = 7;

    const radius = 25;

    ctx.beginPath();

    ctx.moveTo(
        radius,
        10
    );

    ctx.lineTo(
        width - radius,
        10
    );

    ctx.quadraticCurveTo(
        width - 10,
        10,
        width - 10,
        radius
    );

    ctx.lineTo(
        width - 10,
        height - 35
    );

    ctx.quadraticCurveTo(
        width - 10,
        height - 10,
        width - 35,
        height - 10
    );

    ctx.lineTo(
        width / 2 + 20,
        height - 10
    );

    ctx.lineTo(
        width / 2,
        height - 2
    );

    ctx.lineTo(
        width / 2 - 5,
        height - 10
    );

    ctx.lineTo(
        35,
        height - 10
    );

    ctx.quadraticCurveTo(
        10,
        height - 10,
        10,
        height - 35
    );

    ctx.lineTo(
        10,
        radius
    );

    ctx.quadraticCurveTo(
        10,
        10,
        radius,
        10
    );

    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    ctx.fillStyle =
        "#172027";

    ctx.font =
        "bold 30px Arial";

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const words =
        text.split(" ");

    const lines = [];

    let currentLine = "";

    const maxWidth =
        width - 60;

    for (
        const word of words
    ) {

        const testLine =
            currentLine
                ? currentLine + " " + word
                : word;

        if (
            ctx.measureText(testLine)
                .width > maxWidth
        ) {

            lines.push(
                currentLine
            );

            currentLine = word;

        } else {

            currentLine = testLine;
        }
    }

    if (currentLine) {
        lines.push(currentLine);
    }

    const lineHeight = 38;

    const startY =
        height / 2 -
        ((lines.length - 1) *
            lineHeight) / 2 -
        12;

    for (
        let i = 0;
        i < lines.length;
        i++
    ) {

        ctx.fillText(
            lines[i],
            width / 2,
            startY + i * lineHeight
        );
    }

    const texture =
        new THREE.CanvasTexture(
            canvas
        );

    texture.colorSpace =
        THREE.SRGBColorSpace;

    const sprite =
        new THREE.Sprite(
            new THREE.SpriteMaterial({
                map: texture,
                transparent: true,
                depthTest: true
            })
        );

    sprite.scale.set(
        3.2,
        1.15,
        1
    );

    sprite.visible = false;

    scene.add(sprite);

    return sprite;
}

// ============================================================
// STUDENT DIALOGUES
// ============================================================

const studentDialogues = [

    createDialogue(
        "We should understand the theory first."
    ),

    createDialogue(
        "We should learn by doing."
    ),

    createDialogue(
        "Visual examples make ideas easier."
    ),

    createDialogue(
        "Projects help us apply what we learn."
    ),

    createDialogue(
        "We should practice and experiment."
    ),

    createDialogue(
        "We need creativity too."
    ),

    createDialogue(
        "Can we build our own graphics?"
    ),

    createDialogue(
        "We should learn from mistakes."
    ),

    createDialogue(
        "Practice makes the concepts clear."
    )
];

// ============================================================
// PERSON
// ============================================================

function createPerson(
    bodyColor,
    x,
    z,
    seated = false
) {

    const person =
        new THREE.Group();

    person.position.set(
        x,
        0,
        z
    );

    const leg1 = new THREE.Mesh(
        new THREE.BoxGeometry(
            0.35,
            1.5,
            0.35
        ),
        darkWoodMat
    );

    leg1.position.set(
        -0.25,
        0.75,
        0
    );

    leg1.castShadow = true;

    person.add(leg1);

    const leg2 =
        leg1.clone();

    leg2.position.x = 0.25;

    person.add(leg2);

    const body = new THREE.Mesh(
        new THREE.BoxGeometry(
            1.1,
            1.5,
            0.65
        ),
        bodyColor
    );

    body.position.y = 2;

    body.castShadow = true;

    person.add(body);

    const head = new THREE.Mesh(
        new THREE.SphereGeometry(
            0.45,
            20,
            20
        ),
        skinMat
    );

    head.position.y = 3.25;

    head.castShadow = true;

    person.add(head);

    const hair = new THREE.Mesh(
        new THREE.SphereGeometry(
            0.46,
            20,
            20
        ),
        hairMat
    );

    hair.scale.set(
        1,
        0.55,
        1
    );

    hair.position.y = 3.58;

    hair.castShadow = true;

    person.add(hair);

    const arm1 = new THREE.Mesh(
        new THREE.BoxGeometry(
            0.25,
            1.2,
            0.25
        ),
        skinMat
    );

    arm1.position.set(
        -0.7,
        2.05,
        0
    );

    arm1.castShadow = true;

    person.add(arm1);

    const arm2 =
        arm1.clone();

    arm2.position.x = 0.7;

    person.add(arm2);

    const seatedParts = [];

    if (seated) {

        leg1.visible = false;
        leg2.visible = false;

        person.position.y = -0.55;

        const thigh1 =
            new THREE.Mesh(
                new THREE.BoxGeometry(
                    0.3,
                    0.3,
                    0.9
                ),
                darkWoodMat
            );

        thigh1.position.set(
            -0.25,
            1.15,
            -0.35
        );

        thigh1.castShadow = true;

        person.add(thigh1);

        seatedParts.push(thigh1);

        const thigh2 =
            thigh1.clone();

        thigh2.position.x = 0.25;

        person.add(thigh2);

        seatedParts.push(thigh2);

        const shin1 =
            new THREE.Mesh(
                new THREE.BoxGeometry(
                    0.3,
                    0.8,
                    0.3
                ),
                darkWoodMat
            );

        shin1.position.set(
            -0.25,
            0.65,
            -0.8
        );

        shin1.castShadow = true;

        person.add(shin1);

        seatedParts.push(shin1);

        const shin2 =
            shin1.clone();

        shin2.position.x = 0.25;

        person.add(shin2);

        seatedParts.push(shin2);
    }

    classroom.add(person);

    return {
        group: person,
        arms: [arm1, arm2],
        legs: [leg1, leg2],
        seatedParts
    };
}

// ============================================================
// EXTERIOR TEACHER
// ============================================================

const teacher =
    createPerson(
        redMat,
        8.5,
        14
    );

// ============================================================
// CLASSROOM TEACHER
// ============================================================

const classroomTeacher =
    createPerson(
        redMat,
        0,
        -5.9
    );

classroomTeacher.group.visible =
    false;

const classroomTeacherAngle =
    Math.PI;

// ============================================================
// STUDENTS
// ============================================================

const students = [];

const studentColors = [

    0x405d72,
    0x744542,
    0x4c654f,
    0x62526f,
    0x80633b,
    0x526b7a,
    0x754b48,
    0x536a57,
    0x685570
];

for (
    let i = 0;
    i < 9;
    i++
) {

    const row =
        Math.floor(i / 3);

    const col =
        i % 3;

    const x =
        -3.5 +
        col * 3.5;

    const z =
        -1 +
        row * 3 +
        0.8 +
        0.65;

    const student =
        createPerson(
            new THREE.MeshStandardMaterial({
                color:
                    studentColors[i],
                roughness: 0.82,
                metalness: 0.0
            }),
            x,
            z,
            true
        );

    student.group.scale.setScalar(
        0.75
    );

    student.startPosition =
        new THREE.Vector3(
            x,
            -0.55,
            z
        );

    students.push(student);
}

// ============================================================
// SCHOOL FLAG
// ============================================================

const flagPole = new THREE.Mesh(
    new THREE.CylinderGeometry(
        0.08,
        0.08,
        7,
        12
    ),
    metalMat
);

flagPole.position.set(
    -14.5,
    3.5,
    11.5
);

flagPole.castShadow = true;

scene.add(flagPole);

const flag = new THREE.Mesh(
    new THREE.BoxGeometry(
        3,
        1.5,
        0.08
    ),
    blueMat
);

flag.position.set(
    -13.1,
    6,
    11.5
);

flag.castShadow = true;

scene.add(flag);

// ============================================================
// TREES
// ============================================================

function createTree(
    x,
    z
) {

    const tree =
        new THREE.Group();

    tree.position.set(
        x,
        0,
        z
    );

    const trunkMat =
        new THREE.MeshStandardMaterial({
            color: 0x49372b,
            roughness: 0.95,
            metalness: 0.0
        });

    const leavesMat =
        new THREE.MeshStandardMaterial({
            color: 0x34543a,
            roughness: 0.96,
            metalness: 0.0
        });

    const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(
            0.35,
            0.45,
            3,
            12
        ),
        trunkMat
    );

    trunk.position.y = 1.5;

    trunk.castShadow = true;
    trunk.receiveShadow = true;

    tree.add(trunk);

    const leaves = new THREE.Mesh(
        new THREE.SphereGeometry(
            2,
            20,
            20
        ),
        leavesMat
    );

    leaves.position.y = 4;

    leaves.scale.set(
        1.05,
        1.15,
        0.95
    );

    leaves.castShadow = true;
    leaves.receiveShadow = true;

    tree.add(leaves);

    scene.add(tree);

    return tree;
}

const trees = [

    createTree(-18, 13),
    createTree(18, 13),
    createTree(-18, -10),
    createTree(18, -10)

];

// ============================================================
// REALISTIC SCHOOL BUS
// ============================================================

const bus =
    new THREE.Group();

bus.position.set(
    -7,
    4,
    19
);

bus.rotation.y = 0;

scene.add(bus);

// ============================================================
// BUS MATERIALS
// ============================================================

const busYellow =
    new THREE.MeshStandardMaterial({
        color: 0xf2b51c,
        roughness: 0.48,
        metalness: 0.12
    });

const busYellowDark =
    new THREE.MeshStandardMaterial({
        color: 0xc98b0b,
        roughness: 0.58,
        metalness: 0.08
    });

const busBlack =
    new THREE.MeshStandardMaterial({
        color: 0x171b20,
        roughness: 0.72,
        metalness: 0.05
    });

const busRubber =
    new THREE.MeshStandardMaterial({
        color: 0x111315,
        roughness: 0.96,
        metalness: 0.0
    });

const busGlass =
    new THREE.MeshPhysicalMaterial({
        color: 0x263d4b,
        roughness: 0.16,
        metalness: 0.25,
        transparent: true,
        opacity: 0.88,
        clearcoat: 1,
        clearcoatRoughness: 0.08
    });

const busChrome =
    new THREE.MeshStandardMaterial({
        color: 0xaeb9bf,
        metalness: 0.9,
        roughness: 0.2
    });

const busWhite =
    new THREE.MeshStandardMaterial({
        color: 0xf2eee4,
        roughness: 0.5,
        metalness: 0.05
    });

const busRedLight =
    new THREE.MeshStandardMaterial({
        color: 0xff1616,
        emissive: 0xaa0000,
        emissiveIntensity: 1.1,
        roughness: 0.28
    });

const busAmberLight =
    new THREE.MeshStandardMaterial({
        color: 0xffa000,
        emissive: 0xaa5500,
        emissiveIntensity: 0.8,
        roughness: 0.3
    });

const busHeadlight =
    new THREE.MeshStandardMaterial({
        color: 0xfff4cf,
        emissive: 0xffd477,
        emissiveIntensity: 1.8,
        roughness: 0.22
    });

const busInterior =
    new THREE.MeshStandardMaterial({
        color: 0x24272a,
        roughness: 0.88,
        metalness: 0.0
    });

// ============================================================
// BUS HELPER
// ============================================================

function busBox(
    name,
    width,
    height,
    depth,
    material,
    x,
    y,
    z
) {

    const mesh =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                width,
                height,
                depth
            ),
            material
        );

    mesh.name = name;

    mesh.position.set(
        x,
        y,
        z
    );

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    bus.add(mesh);

    return mesh;
}

// ============================================================
// MAIN BUS BODY
// ============================================================

busBox(
    "Main yellow bus body",
    8.8,
    3.7,
    3.2,
    busYellow,
    0,
    0,
    0
);

busBox(
    "Lower yellow body skirt",
    8.55,
    0.55,
    3.22,
    busYellowDark,
    0,
    -1.25,
    0
);

busBox(
    "Bus roof",
    8.75,
    0.22,
    3.18,
    busYellowDark,
    0,
    1.96,
    0
);

busBox(
    "Raised roof centre",
    7.8,
    0.18,
    2.35,
    busYellow,
    0,
    2.10,
    0
);

busBox(
    "Black chassis",
    8.2,
    0.35,
    2.9,
    busBlack,
    0,
    -1.85,
    0
);

busBox(
    "Front engine hood",
    1.15,
    1.15,
    3.05,
    busYellow,
    3.8,
    -0.95,
    0
);

busBox(
    "Front hood upper cap",
    0.85,
    0.18,
    2.85,
    busYellowDark,
    3.92,
    -0.32,
    0
);

busBox(
    "Front steel bumper",
    0.35,
    0.48,
    3.5,
    busChrome,
    4.48,
    -1.55,
    0
);

busBox(
    "Rear steel bumper",
    0.35,
    0.48,
    3.5,
    busChrome,
    -4.48,
    -1.55,
    0
);

busBox(
    "Front lower black trim",
    0.16,
    0.35,
    3.15,
    busBlack,
    4.18,
    -1.4,
    0
);

// ============================================================
// FRONT WINDSHIELD
// ============================================================

busBox(
    "Front windshield",
    0.10,
    1.65,
    2.65,
    busGlass,
    3.97,
    0.85,
    0
);

busBox(
    "Windshield center divider",
    0.15,
    1.72,
    0.09,
    busBlack,
    4.04,
    0.85,
    0
);

busBox(
    "Front windshield lower frame",
    0.17,
    0.12,
    2.85,
    busBlack,
    4.05,
    -0.02,
    0
);

busBox(
    "Front windshield upper frame",
    0.17,
    0.12,
    2.85,
    busYellowDark,
    4.05,
    1.72,
    0
);

// ============================================================
// SIDE WINDOWS
// ============================================================

const windowPositions = [
    -3.25,
    -2.05,
    -0.85,
    0.35,
    1.55,
    2.75
];

for (
    const x of windowPositions
) {

    busBox(
        "Left passenger window",
        1.0,
        1.35,
        0.09,
        busGlass,
        x,
        0.85,
        1.61
    );

    busBox(
        "Right passenger window",
        1.0,
        1.35,
        0.09,
        busGlass,
        x,
        0.85,
        -1.61
    );

    for (
        const side of [-1, 1]
    ) {

        busBox(
            "Window upper frame",
            1.08,
            0.09,
            0.13,
            busBlack,
            x,
            1.55,
            side * 1.65
        );

        busBox(
            "Window lower frame",
            1.08,
            0.09,
            0.13,
            busBlack,
            x,
            0.15,
            side * 1.65
        );
    }
}

for (
    const side of [-1, 1]
) {

    for (
        const x of [
            -3.85,
            -2.65,
            -1.45,
            -0.25,
            0.95,
            2.15,
            3.35
        ]
    ) {

        busBox(
            "Window vertical pillar",
            0.09,
            1.5,
            0.14,
            busYellowDark,
            x,
            0.85,
            side * 1.66
        );
    }
}

// ============================================================
// PASSENGER DOOR
// ============================================================

busBox(
    "Passenger door outer frame",
    1.15,
    2.9,
    0.14,
    busYellowDark,
    3.55,
    0.15,
    -1.66
);

busBox(
    "Passenger door glass",
    0.82,
    1.75,
    0.07,
    busGlass,
    3.55,
    0.45,
    -1.75
);

busBox(
    "Passenger door centre divider",
    0.08,
    1.82,
    0.09,
    busBlack,
    3.55,
    0.45,
    -1.82
);

busBox(
    "Passenger door lower panel",
    0.82,
    0.65,
    0.08,
    busYellow,
    3.55,
    -0.8,
    -1.75
);

busBox(
    "Passenger door step",
    1.15,
    0.16,
    0.75,
    busChrome,
    3.55,
    -1.2,
    -1.9
);

busBox(
    "Passenger door handle",
    0.08,
    0.32,
    0.09,
    busChrome,
    3.12,
    -0.05,
    -1.83
);

// ============================================================
// FRONT GRILLE
// ============================================================

busBox(
    "Radiator grille frame",
    0.12,
    0.72,
    1.35,
    busChrome,
    4.08,
    -0.95,
    0
);

busBox(
    "Radiator grille black interior",
    0.08,
    0.58,
    1.18,
    busBlack,
    4.15,
    -0.95,
    0
);

for (
    let i = 0;
    i < 5;
    i++
) {

    busBox(
        "Grille horizontal slat",
        0.10,
        0.045,
        1.1,
        busChrome,
        4.22,
        -1.2 + i * 0.12,
        0
    );
}

// ============================================================
// HEADLIGHTS
// ============================================================

for (
    const side of [-1, 1]
) {

    const headlight =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                0.16,
                0.42,
                0.58
            ),
            busHeadlight
        );

    headlight.position.set(
        4.13,
        -0.75,
        side * 1.15
    );

    headlight.castShadow = true;

    bus.add(headlight);

    const headlightFrame =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                0.18,
                0.52,
                0.68
            ),
            busChrome
        );

    headlightFrame.position.set(
        4.09,
        -0.75,
        side * 1.15
    );

    bus.add(headlightFrame);

    headlight.position.x = 4.15;

    const indicator =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                0.16,
                0.18,
                0.58
            ),
            busAmberLight
        );

    indicator.position.set(
        4.14,
        -1.15,
        side * 1.15
    );

    bus.add(indicator);
}

// ============================================================
// REAR LIGHTS
// ============================================================

for (
    const side of [-1, 1]
) {

    busBox(
        "Rear red tail light",
        0.16,
        0.8,
        0.32,
        busRedLight,
        -4.52,
        -0.75,
        side * 1.18
    );

    busBox(
        "Rear indicator",
        0.17,
        0.22,
        0.32,
        busAmberLight,
        -4.53,
        -1.25,
        side * 1.18
    );
}

busBox(
    "Rear centre reflector",
    0.12,
    0.25,
    0.7,
    busWhite,
    -4.53,
    -1.15,
    0
);

// ============================================================
// REAR EMERGENCY EXIT
// ============================================================

busBox(
    "Rear emergency door",
    0.12,
    2.5,
    1.45,
    busYellowDark,
    -4.48,
    0.35,
    0
);

busBox(
    "Rear emergency window",
    0.10,
    1.0,
    1.2,
    busGlass,
    -4.56,
    0.85,
    0
);

busBox(
    "Rear emergency door divider",
    0.12,
    0.95,
    0.08,
    busBlack,
    -4.62,
    0.85,
    0
);

busBox(
    "Rear emergency door handle",
    0.12,
    0.35,
    0.12,
    busChrome,
    -4.57,
    -0.45,
    0.55
);

// ============================================================
// WHEELS
// ============================================================

const busWheels = [];

for (
    const x of [-2.8, 2.8]
) {

    for (
        const side of [-1, 1]
    ) {

        const wheelGroup =
            new THREE.Group();

        wheelGroup.position.set(
            x,
            -1.45,
            side * 1.55
        );

        bus.add(wheelGroup);

        const tyre =
            new THREE.Mesh(
                new THREE.CylinderGeometry(
                    0.68,
                    0.68,
                    0.38,
                    32
                ),
                busRubber
            );

        tyre.rotation.x =
            Math.PI / 2;

        tyre.castShadow = true;

        wheelGroup.add(tyre);

        const rim =
            new THREE.Mesh(
                new THREE.CylinderGeometry(
                    0.39,
                    0.39,
                    0.405,
                    32
                ),
                busChrome
            );

        rim.rotation.x =
            Math.PI / 2;

        rim.position.z =
            side * 0.015;

        wheelGroup.add(rim);

        const hub =
            new THREE.Mesh(
                new THREE.CylinderGeometry(
                    0.16,
                    0.16,
                    0.43,
                    24
                ),
                busBlack
            );

        hub.rotation.x =
            Math.PI / 2;

        hub.position.z =
            side * 0.025;

        wheelGroup.add(hub);

        for (
            let i = 0;
            i < 8;
            i++
        ) {

            const angle =
                i * Math.PI / 4;

            const bolt =
                new THREE.Mesh(
                    new THREE.SphereGeometry(
                        0.045,
                        8,
                        8
                    ),
                    busWhite
                );

            bolt.position.set(
                Math.sin(angle) * 0.29,
                Math.cos(angle) * 0.29,
                side * 0.23
            );

            wheelGroup.add(bolt);
        }

        busWheels.push(
            wheelGroup
        );
    }
}

// ============================================================
// WHEEL ARCHES
// ============================================================

for (
    const x of [-2.8, 2.8]
) {

    for (
        const side of [-1, 1]
    ) {

        const arch =
            new THREE.Mesh(
                new THREE.TorusGeometry(
                    0.82,
                    0.09,
                    10,
                    32,
                    Math.PI
                ),
                busBlack
            );

        arch.rotation.z =
            Math.PI;

        arch.rotation.y =
            Math.PI / 2;

        arch.position.set(
            x,
            -0.95,
            side * 1.63
        );

        bus.add(arch);

        const fender =
            new THREE.Mesh(
                new THREE.TorusGeometry(
                    0.86,
                    0.045,
                    8,
                    32,
                    Math.PI
                ),
                busYellowDark
            );

        fender.rotation.z =
            Math.PI;

        fender.rotation.y =
            Math.PI / 2;

        fender.position.set(
            x,
            -0.95,
            side * 1.67
        );

        bus.add(fender);
    }
}

// ============================================================
// SIDE MIRRORS
// ============================================================

for (
    const side of [-1, 1]
) {

    busBox(
        "Mirror support",
        0.75,
        0.08,
        0.08,
        busBlack,
        3.5,
        1.2,
        side * 1.85
    );

    busBox(
        "Side mirror housing",
        0.25,
        0.55,
        0.18,
        busBlack,
        3.9,
        1.25,
        side * 2.05
    );

    busBox(
        "Side mirror reflective glass",
        0.08,
        0.42,
        0.14,
        busChrome,
        4.04,
        1.25,
        side * 2.05
    );
}

// ============================================================
// SIDE SAFETY STRIPES
// ============================================================

for (
    const side of [-1, 1]
) {

    busBox(
        "Upper side yellow safety strip",
        8.3,
        0.09,
        0.045,
        busYellowDark,
        0,
        -0.05,
        side * 1.64
    );

    busBox(
        "Lower black safety strip",
        8.3,
        0.13,
        0.06,
        busBlack,
        0,
        -1.35,
        side * 1.65
    );

    busBox(
        "Middle black safety stripe",
        8.2,
        0.08,
        0.05,
        busBlack,
        0,
        0.02,
        side * 1.67
    );
}

// ============================================================
// SIDE BODY DIVIDERS
// ============================================================

for (
    const side of [-1, 1]
) {

    for (
        const x of [-4.1, 3.85]
    ) {

        busBox(
            "Front rear body pillar",
            0.12,
            3.35,
            0.10,
            busYellowDark,
            x,
            0.05,
            side * 1.67
        );
    }
}

// ============================================================
// SCHOOL BUS TEXT
// ============================================================

function createBusText(
    text,
    width,
    height,
    color,
    fontSize
) {

    const canvas =
        document.createElement(
            "canvas"
        );

    canvas.width = 1024;
    canvas.height = 256;

    const ctx =
        canvas.getContext("2d");

    ctx.clearRect(
        0,
        0,
        1024,
        256
    );

    ctx.fillStyle = color;

    ctx.font =
        `bold ${fontSize}px Arial`;

    ctx.textAlign =
        "center";

    ctx.textBaseline =
        "middle";

    ctx.fillText(
        text,
        512,
        128
    );

    const texture =
        new THREE.CanvasTexture(
            canvas
        );

    texture.colorSpace =
        THREE.SRGBColorSpace;

    const material =
        new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            side: THREE.DoubleSide,
            depthWrite: false
        });

    const label =
        new THREE.Mesh(
            new THREE.PlaneGeometry(
                width,
                height
            ),
            material
        );

    return label;
}

for (
    const side of [-1, 1]
) {

    const label =
        createBusText(
            "SCHOOL BUS",
            3.6,
            0.55,
            "#171717",
            115
        );

    label.position.set(
        -0.7,
        1.76,
        side * 1.625
    );

    label.rotation.y =
        side === 1
            ? 0
            : Math.PI;

    bus.add(label);
}

const frontLabel =
    createBusText(
        "SCHOOL",
        1.5,
        0.32,
        "#171717",
        110
    );

frontLabel.position.set(
    4.23,
    0.1,
    0
);

frontLabel.rotation.y =
    Math.PI / 2;

bus.add(frontLabel);

// ============================================================
// ROOF DETAILS
// ============================================================

busBox(
    "Roof emergency hatch",
    1.1,
    0.08,
    1.1,
    busBlack,
    -1.5,
    2.1,
    0
);

for (
    const x of [
        -3.5,
        -2.2,
        2.2,
        3.5
    ]
) {

    const warningLight =
        new THREE.Mesh(
            new THREE.SphereGeometry(
                0.12,
                12,
                12
            ),
            busAmberLight
        );

    warningLight.position.set(
        x,
        2.08,
        0
    );

    bus.add(warningLight);
}

// ============================================================
// FRONT WARNING LIGHTS
// ============================================================

for (
    const side of [-1, 1]
) {

    const warningLight =
        new THREE.Mesh(
            new THREE.SphereGeometry(
                0.13,
                12,
                12
            ),
            busAmberLight
        );

    warningLight.position.set(
        4.1,
        1.82,
        side * 1.05
    );

    bus.add(warningLight);
}

// ============================================================
// REAR WARNING LIGHTS
// ============================================================

for (
    const side of [-1, 1]
) {

    const warningLight =
        new THREE.Mesh(
            new THREE.SphereGeometry(
                0.13,
                12,
                12
            ),
            busAmberLight
        );

    warningLight.position.set(
        -4.1,
        1.82,
        side * 1.05
    );

    bus.add(warningLight);
}

// ============================================================
// DRIVER CABIN INTERIOR
// ============================================================

busBox(
    "Driver seat",
    0.8,
    0.8,
    0.8,
    busInterior,
    3.05,
    -0.65,
    0.45
);

busBox(
    "Driver dashboard",
    0.65,
    0.25,
    1.4,
    busBlack,
    3.7,
    -0.05,
    0
);

const steeringWheel =
    new THREE.Mesh(
        new THREE.TorusGeometry(
            0.22,
            0.045,
            10,
            24
        ),
        busBlack
    );

steeringWheel.position.set(
    3.42,
    0.18,
    -0.52
);

steeringWheel.rotation.x =
    Math.PI / 2;

bus.add(steeringWheel);

// ============================================================
// SIDE STEP RAIL
// ============================================================

for (
    const side of [-1, 1]
) {

    busBox(
        "Side step rail",
        7.4,
        0.10,
        0.12,
        busChrome,
        0,
        -1.62,
        side * 1.73
    );
}

// ============================================================
// REAR SIDE VENTS
// ============================================================

for (
    const side of [-1, 1]
) {

    for (
        let i = 0;
        i < 4;
        i++
    ) {

        busBox(
            "Rear ventilation slot",
            0.08,
            0.10,
            0.55,
            busBlack,
            -3.82,
            -0.15 + i * 0.22,
            side * 1.68
        );
    }
}

// ============================================================
// BUS SHADOWS
// ============================================================

bus.traverse(
    (object) => {

        if (
            object.isMesh
        ) {

            object.castShadow = true;
            object.receiveShadow = true;
        }
    }
);

// ============================================================
// DRONE
// ============================================================

const drone =
    new THREE.Group();

scene.add(drone);

const droneBodyMat =
    new THREE.MeshStandardMaterial({
        color: 0x20242a,
        metalness: 0.88,
        roughness: 0.24
    });

const droneArmMat =
    new THREE.MeshStandardMaterial({
        color: 0x555b63,
        metalness: 0.92,
        roughness: 0.22
    });

const droneAccentMat =
    new THREE.MeshStandardMaterial({
        color: 0x6c4aa5,
        metalness: 0.82,
        roughness: 0.24
    });

const droneLightMat =
    new THREE.MeshStandardMaterial({
        color: 0x8cffb0,
        emissive: 0x32c96b,
        emissiveIntensity: 2.2
    });

const droneBody = new THREE.Mesh(
    new THREE.BoxGeometry(
        2.2,
        0.45,
        1.4
    ),
    droneBodyMat
);

droneBody.castShadow = true;

drone.add(droneBody);

// Purple accent shell
const droneAccent =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            1.45,
            0.08,
            0.72
        ),
        droneAccentMat
    );

droneAccent.position.y =
    0.25;

droneAccent.castShadow = true;

drone.add(droneAccent);

const droneCamera =
    new THREE.Mesh(
        new THREE.BoxGeometry(
            0.65,
            0.45,
            0.55
        ),
        metalMat
    );

droneCamera.position.y =
    -0.45;

drone.add(droneCamera);

const droneLens =
    new THREE.Mesh(
        new THREE.CylinderGeometry(
            0.16,
            0.16,
            0.08,
            24
        ),
        droneLightMat
    );

droneLens.rotation.x =
    Math.PI / 2;

droneLens.position.set(
    0,
    -0.45,
    -0.31
);

drone.add(droneLens);

const armPositions = [

    [-1.35, 0, -0.8],
    [1.35, 0, -0.8],
    [-1.35, 0, 0.8],
    [1.35, 0, 0.8]

];

const rotors = [];

for (
    const position of armPositions
) {

    const arm = new THREE.Mesh(
        new THREE.BoxGeometry(
            1.8,
            0.18,
            0.18
        ),
        droneArmMat
    );

    arm.position.set(
        position[0] * 0.5,
        0,
        position[2] * 0.5
    );

    arm.rotation.y =
        position[2] !== 0
            ? position[0] > 0
                ? -0.55
                : 0.55
            : 0;

    arm.castShadow = true;

    drone.add(arm);

    const motor =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.22,
                0.22,
                0.25,
                16
            ),
            droneArmMat
        );

    motor.position.set(
        position[0],
        0.15,
        position[2]
    );

    motor.castShadow = true;

    drone.add(motor);

    const motorAccent =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.15,
                0.15,
                0.27,
                16
            ),
            droneAccentMat
        );

    motorAccent.position.set(
        position[0],
        0.16,
        position[2]
    );

    drone.add(motorAccent);

    const rotor =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                1.2,
                0.04,
                0.12
            ),
            metalMat
        );

    rotor.position.set(
        position[0],
        0.32,
        position[2]
    );

    rotor.castShadow = true;

    drone.add(rotor);

    rotors.push(rotor);
}

for (
    const z of [-0.5, 0.5]
) {

    const light =
        new THREE.Mesh(
            new THREE.SphereGeometry(
                0.1,
                12,
                12
            ),
            droneLightMat
        );

    light.position.set(
        0,
        0.05,
        z
    );

    drone.add(light);
}

drone.scale.setScalar(0.85);

drone.traverse(
    (object) => {

        if (object.isMesh) {
            object.castShadow = true;
        }
    }
);

// ============================================================
// BLINK
// ============================================================

const blinkScene =
    new THREE.Scene();

const blinkCamera =
    new THREE.OrthographicCamera(
        -1,
        1,
        1,
        -1,
        0,
        1
    );

const blinkMaterial =
    new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0
    });

const blinkPlane =
    new THREE.Mesh(
        new THREE.PlaneGeometry(
            2,
            2
        ),
        blinkMaterial
    );

blinkScene.add(blinkPlane);

// ============================================================
// STATES
// ============================================================

const STATES = {

    START: 0,
    SCAN_LEFT: 1,
    SCAN_CENTER: 2,
    SCAN_RIGHT: 3,
    SCAN_APPROACH: 4,
    TEACHER_APPROACH: 5,
    TEACHER_WALK: 6,
    BLINK_CLOSE: 7,
    BLINK_OPEN: 8,
    CLASSROOM: 9,
    CLASSROOM_EXIT: 10,
    BLINK_OUTSIDE_CLOSE: 11,
    BLINK_OUTSIDE_OPEN: 12,
    OUTSIDE_MARCH: 13,
    BUS_BLINK_CLOSE: 14,
    BUS_BLINK_OPEN: 15,
    BUS_DEPART: 16,
    FINAL_AERIAL: 17,
    FINISHED: 18
};

let state =
    STATES.START;

let cinematicTime = 0;

let blinkTime = 0;

let classroomTime = 0;

let cinematicActive = true;

let time = 0;

let busMoveTime = 0;

// ============================================================
// DRONE FLIGHT POINTS
// ============================================================

const dronePoints = {

    start:
        new THREE.Vector3(
            18,
            16,
            32
        ),

    left:
        new THREE.Vector3(
            -22,
            15,
            25
        ),

    center:
        new THREE.Vector3(
            0,
            16,
            25
        ),

    right:
        new THREE.Vector3(
            22,
            15,
            25
        ),

    approach:
        new THREE.Vector3(
            8,
            12,
            20
        ),

    teacher:
        new THREE.Vector3(
            4,
            9,
            17
        )
};

// ============================================================
// MOVE DRONE
// ============================================================

function moveDrone(
    target,
    speed,
    delta
) {

    const direction =
        new THREE.Vector3()
            .subVectors(
                target,
                drone.position
            );

    const distance =
        direction.length();

    if (distance < 0.15) {

        drone.position.copy(
            target
        );

        return true;
    }

    direction.normalize();

    drone.position.addScaledVector(
        direction,
        Math.min(
            distance,
            speed * delta
        )
    );

    drone.lookAt(
        drone.position.clone()
            .add(direction)
    );

    drone.rotation.z =
        Math.sin(time * 2.5) *
        0.05;

    return false;
}

// ============================================================
// CAMERA FOLLOW DRONE
// ============================================================

function followDrone(target) {

    const desiredCamera =
        drone.position.clone();

    desiredCamera.y += 5.5;
    desiredCamera.z += 11;
    desiredCamera.x += 2;

    camera.position.lerp(
        desiredCamera,
        0.045
    );

    controls.target.lerp(
        target,
        0.055
    );
}

// ============================================================
// TEACHER POSITION
// ============================================================

function getTeacherWorldPosition() {

    const position =
        new THREE.Vector3();

    teacher.group.getWorldPosition(
        position
    );

    return position;
}

// ============================================================
// TEACHER WALK
// ============================================================

function walkTeacher(
    progress
) {

    const startZ = 14;

    const endZ = 11.5;

    teacher.group.position.z =
        THREE.MathUtils.lerp(
            startZ,
            endZ,
            progress
        );

    teacher.group.rotation.y =
        Math.PI;

    const walkSpeed =
        progress * Math.PI * 14;

    teacher.legs[0].rotation.x =
        Math.sin(walkSpeed) * 0.35;

    teacher.legs[1].rotation.x =
        -Math.sin(walkSpeed) * 0.35;

    teacher.arms[0].rotation.x =
        -Math.sin(walkSpeed) * 0.25;

    teacher.arms[1].rotation.x =
        Math.sin(walkSpeed) * 0.25;
}

// ============================================================
// RESET STUDENT
// ============================================================

function resetStudentPose(
    student
) {

    student.group.position.copy(
        student.startPosition
    );

    student.group.rotation.set(
        0,
        0,
        0
    );

    student.group.visible = true;

    student.group.scale.setScalar(
        0.75
    );

    student.legs[0].visible =
        false;

    student.legs[1].visible =
        false;

    for (
        const part of student.seatedParts
    ) {
        part.visible = true;
    }

    student.arms[0].position.set(
        -0.7,
        2.05,
        0
    );

    student.arms[1].position.set(
        0.7,
        2.05,
        0
    );

    student.arms[0].rotation.set(
        0,
        0,
        0
    );

    student.arms[1].rotation.set(
        0,
        0,
        0
    );
}

// ============================================================
// LOWER HAND
// ============================================================

function lowerHand(
    student
) {

    student.arms[0].position.y =
        THREE.MathUtils.lerp(
            student.arms[0].position.y,
            2.05,
            0.12
        );

    student.arms[1].position.y =
        THREE.MathUtils.lerp(
            student.arms[1].position.y,
            2.05,
            0.12
        );

    student.arms[0].rotation.z =
        THREE.MathUtils.lerp(
            student.arms[0].rotation.z,
            0,
            0.12
        );

    student.arms[1].rotation.z =
        THREE.MathUtils.lerp(
            student.arms[1].rotation.z,
            0,
            0.12
        );
}

// ============================================================
// RAISE HAND
// ============================================================

function raiseHand(
    student,
    side = "left",
    amount = 1
) {

    const arm =
        side === "left"
            ? student.arms[0]
            : student.arms[1];

    const x =
        side === "left"
            ? -0.55
            : 0.55;

    arm.position.x = x;

    arm.position.y =
        THREE.MathUtils.lerp(
            arm.position.y,
            2.85 +
                amount * 0.25,
            0.15
        );

    arm.position.z =
        THREE.MathUtils.lerp(
            arm.position.z,
            -0.02,
            0.15
        );

    arm.rotation.z =
        THREE.MathUtils.lerp(
            arm.rotation.z,
            side === "left"
                ? -0.15
                : 0.15,
            0.15
        );
}

// ============================================================
// TEACHER POINT BOARD
// ============================================================

function teacherPointToBoard() {

    classroomTeacher.group.rotation.y =
        classroomTeacherAngle;

    classroomTeacher.arms[0].position.set(
        -0.7,
        2.05,
        0
    );

    classroomTeacher.arms[0].rotation.set(
        0,
        0,
        0
    );

    classroomTeacher.arms[1].position.set(
        0.45,
        2.28,
        -0.12
    );

    classroomTeacher.arms[1].rotation.x =
        THREE.MathUtils.lerp(
            classroomTeacher.arms[1].rotation.x,
            -1.35,
            0.12
        );

    classroomTeacher.arms[1].rotation.y =
        THREE.MathUtils.lerp(
            classroomTeacher.arms[1].rotation.y,
            0,
            0.12
        );

    classroomTeacher.arms[1].rotation.z =
        THREE.MathUtils.lerp(
            classroomTeacher.arms[1].rotation.z,
            0,
            0.12
        );
}

// ============================================================
// TEACHER POINT STUDENT
// ============================================================

function teacherPointToStudent() {

    classroomTeacher.group.rotation.y =
        classroomTeacherAngle;

    classroomTeacher.arms[0].position.set(
        -0.7,
        2.05,
        0
    );

    classroomTeacher.arms[0].rotation.set(
        0,
        0,
        0
    );

    classroomTeacher.arms[1].position.set(
        0.45,
        2.25,
        -0.25
    );

    classroomTeacher.arms[1].rotation.x =
        THREE.MathUtils.lerp(
            classroomTeacher.arms[1].rotation.x,
            -1.0,
            0.12
        );

    classroomTeacher.arms[1].rotation.y =
        THREE.MathUtils.lerp(
            classroomTeacher.arms[1].rotation.y,
            0,
            0.12
        );

    classroomTeacher.arms[1].rotation.z =
        THREE.MathUtils.lerp(
            classroomTeacher.arms[1].rotation.z,
            0,
            0.12
        );
}

// ============================================================
// TEACHER TALK
// ============================================================

function teacherTalk() {

    classroomTeacher.group.rotation.y =
        classroomTeacherAngle;

    classroomTeacher.arms[0].position.set(
        -0.7,
        2.05,
        0
    );

    classroomTeacher.arms[1].position.set(
        0.7,
        2.05,
        0
    );

    classroomTeacher.arms[0].rotation.x =
        0;

    classroomTeacher.arms[1].rotation.x =
        0;

    classroomTeacher.arms[0].rotation.z =
        -0.45 +
        Math.sin(time * 2) *
        0.15;

    classroomTeacher.arms[1].rotation.z =
        0.45 +
        Math.sin(time * 2) *
        0.15;
}

// ============================================================
// TEACHER DISMISS
// ============================================================

function teacherDismissClass() {

    classroomTeacher.group.rotation.y =
        classroomTeacherAngle;

    classroomTeacher.arms[0].position.set(
        -0.7,
        2.05,
        0
    );

    classroomTeacher.arms[1].position.set(
        0.7,
        2.05,
        0
    );

    classroomTeacher.arms[0].rotation.set(
        0,
        0,
        0
    );

    classroomTeacher.arms[1].rotation.set(
        0,
        0,
        0
    );

    classroomTeacher.arms[1].position.y =
        2.45;

    classroomTeacher.arms[1].rotation.z =
        THREE.MathUtils.lerp(
            classroomTeacher.arms[1].rotation.z,
            0.12,
            0.12
        );
}

// ============================================================
// DIALOGUE HELPERS
// ============================================================

function positionDialogue(
    sprite,
    position,
    scale = 1
) {

    sprite.position.copy(
        position
    );

    sprite.scale.set(
        3.2 * scale,
        1.15 * scale,
        1
    );
}

function hideAllDialogues() {

    for (
        const dialogue of studentDialogues
    ) {
        dialogue.visible = false;
    }
}


function showStudentDialogue(
    index
) {

    hideAllDialogues();

    const student =
        students[index];

    const position =
        new THREE.Vector3();

    student.group.getWorldPosition(
        position
    );

    position.y += 3.8;

    position.z += 0.1;

    positionDialogue(
        studentDialogues[index],
        position,
        0.78
    );

    studentDialogues[index].visible =
        true;
}

// ============================================================
// PREPARE STUDENTS FOR MARCH
// ============================================================

function prepareStudentsForMarch() {

    const exitX = -7;

    const doorInsideZ = 6.8;

    for (
        let i = 0;
        i < students.length;
        i++
    ) {

        const student =
            students[i];

        scene.attach(
            student.group
        );

        student.group.visible =
            false;

        student.group.position.set(
            exitX,
            0,
            doorInsideZ -
                i * 0.9
        );

        student.group.rotation.set(
            0,
            Math.PI,
            0
        );

        student.group.scale.setScalar(
            0.75
        );

        for (
            const part of student.seatedParts
        ) {
            part.visible = false;
        }

        student.legs[0].visible = true;
        student.legs[1].visible = true;

        student.arms[0].position.set(
            -0.7,
            2.05,
            0
        );

        student.arms[1].position.set(
            0.7,
            2.05,
            0
        );

        student.arms[0].rotation.set(
            0,
            0,
            0
        );

        student.arms[1].rotation.set(
            0,
            0,
            0
        );
    }
}

// ============================================================
// RESTORE STUDENTS
// ============================================================

function restoreStudentsToClassroom() {

    for (
        const student of students
    ) {

        classroom.attach(
            student.group
        );

        resetStudentPose(
            student
        );
    }
}

// ============================================================
// STUDENT MARCH
// ============================================================

function marchStudentsToBus(
    progress
) {

    const exitX = -7;

    const doorZ = 7.0;

    const busStopZ = 17.5;

    for (
        let i = 0;
        i < students.length;
        i++
    ) {

        const student =
            students[i];

        const spacing =
            i * 1.05;

        const startZ =
            doorZ - spacing;

        const targetZ =
            busStopZ - spacing;

        const individualProgress =
            THREE.MathUtils.clamp(
                progress -
                    i * 0.055,
                0,
                1
            );

        const z =
            THREE.MathUtils.lerp(
                startZ,
                targetZ,
                individualProgress
            );

        student.group.position.x =
            exitX;

        student.group.position.z =
            z;

        student.group.position.y =
            Math.abs(
                Math.sin(
                    time * 7 + i
                )
            ) * 0.035;

        student.group.rotation.y =
            Math.PI;

        const hasReachedDoor =
            individualProgress > 0.10;

        student.group.visible =
            hasReachedDoor;

        if (hasReachedDoor) {

            const walkSpeed =
                time * 8 + i;

            student.legs[0].rotation.x =
                Math.sin(
                    walkSpeed
                ) * 0.35;

            student.legs[1].rotation.x =
                -Math.sin(
                    walkSpeed
                ) * 0.35;

            student.arms[0].rotation.x =
                -Math.sin(
                    walkSpeed
                ) * 0.18;

            student.arms[1].rotation.x =
                Math.sin(
                    walkSpeed
                ) * 0.18;
        }
    }
}

// ============================================================
// CLASSROOM EXIT CAMERA
// ============================================================

function moveClassroomCameraToExit(
    progress
) {

    const startPosition =
        new THREE.Vector3(
            -7,
            7.6,
            7.8
        );

    const leftPosition =
        new THREE.Vector3(
            -11.8,
            5.7,
            1.8
        );

    const centerPosition =
        new THREE.Vector3(
            -2.0,
            6.2,
            1.0
        );

    const exitPosition =
        new THREE.Vector3(
            -7,
            6.2,
            10.6
        );

    const startTarget =
        new THREE.Vector3(
            -7,
            3.3,
            -2.5
        );

    const leftTarget =
        new THREE.Vector3(
            -8.5,
            3.2,
            2.8
        );

    const centerTarget =
        new THREE.Vector3(
            -3.5,
            3.1,
            4.0
        );

    const exitTarget =
        new THREE.Vector3(
            -7,
            3.1,
            8.7
        );

    if (
        progress < 0.34
    ) {

        const p =
            THREE.MathUtils.smoothstep(
                progress / 0.34,
                0,
                1
            );

        camera.position.lerpVectors(
            startPosition,
            leftPosition,
            p
        );

        controls.target.lerpVectors(
            startTarget,
            leftTarget,
            p
        );

    } else if (
        progress < 0.68
    ) {

        const p =
            THREE.MathUtils.smoothstep(
                (progress - 0.34) / 0.34,
                0,
                1
            );

        camera.position.lerpVectors(
            leftPosition,
            centerPosition,
            p
        );

        controls.target.lerpVectors(
            leftTarget,
            centerTarget,
            p
        );

    } else {

        const p =
            THREE.MathUtils.smoothstep(
                (progress - 0.68) / 0.32,
                0,
                1
            );

        camera.position.lerpVectors(
            centerPosition,
            exitPosition,
            p
        );

        controls.target.lerpVectors(
            centerTarget,
            exitTarget,
            p
        );
    }
}

// ============================================================
// OUTSIDE CAMERA
// ============================================================

function activateOutsideCamera() {

    drone.visible = true;

    drone.position.set(
        -14,
        13,
        15
    );

    drone.lookAt(
        new THREE.Vector3(
            -7,
            3,
            9
        )
    );

    camera.position.set(
        -16,
        9,
        19
    );

    controls.target.set(
        -7,
        3,
        9
    );
}

// ============================================================
// POST-CLASS AERIAL CAMERA
// ============================================================

function followMarchDrone(
    target
) {

    const desiredCamera =
        drone.position.clone();

    desiredCamera.x += 2;

    desiredCamera.y -= 3.5;

    desiredCamera.z -= 7;

    camera.position.lerp(
        desiredCamera,
        0.055
    );

    controls.target.lerp(
        target,
        0.045
    );
}

// ============================================================
// FINAL AERIAL CAMERA
// ============================================================

function followFinalDrone(
    target
) {

    const desiredCamera =
        drone.position.clone();

    desiredCamera.x += 3;

    desiredCamera.y -= 4;

    desiredCamera.z -= 8;

    camera.position.lerp(
        desiredCamera,
        0.045
    );

    controls.target.lerp(
        target,
        0.035
    );
}

// ============================================================
// DRONE CAMERA-VIEW POSITION
// ============================================================

function positionDroneRelativeToCamera(
    target
) {

    const offset =
        new THREE.Vector3(
            7,
            2,
            -12
        );

    offset.applyQuaternion(
        camera.quaternion
    );

    drone.position.copy(
        camera.position
    ).add(offset);

    const lookDirection =
        new THREE.Vector3()
            .subVectors(
                target,
                drone.position
            )
            .normalize();

    if (
        lookDirection.lengthSq() > 0
    ) {

        drone.lookAt(
            target
        );
    }

    drone.rotation.z =
        Math.sin(time * 2.5) *
        0.025;
}

// ============================================================
// CLASSROOM LESSON
// ============================================================

function animateClassroomLesson() {

    const t =
        classroomTime;

    if (t < 2) {

        teacherPointToBoard();

        hideAllDialogues();

        for (
            const student of students
        ) {
            lowerHand(student);
        }

    } else if (t < 4) {

        teacherPointToStudent();

        showStudentDialogue(0);

        raiseHand(
            students[0],
            "left",
            1
        );

        for (
            let i = 0;
            i < students.length;
            i++
        ) {

            if (i !== 0) {
                lowerHand(
                    students[i]
                );
            }
        }

    } else if (t < 6) {

        teacherPointToStudent();

        showStudentDialogue(4);

        raiseHand(
            students[4],
            "right",
            1
        );

        for (
            let i = 0;
            i < students.length;
            i++
        ) {

            if (i !== 4) {
                lowerHand(
                    students[i]
                );
            }
        }

    } else if (t < 8) {

        teacherPointToStudent();

        showStudentDialogue(7);

        raiseHand(
            students[7],
            "left",
            1
        );

        for (
            let i = 0;
            i < students.length;
            i++
        ) {

            if (i !== 7) {
                lowerHand(
                    students[i]
                );
            }
        }

    } else if (t < 10) {

        teacherPointToStudent();

        showStudentDialogue(6);

        raiseHand(
            students[6],
            "right",
            1
        );

        for (
            let i = 0;
            i < students.length;
            i++
        ) {

            if (i !== 6) {
                lowerHand(
                    students[i]
                );
            }
        }

    } else if (t < 12) {

        teacherPointToStudent();

        showStudentDialogue(2);

        raiseHand(
            students[2],
            "left",
            1
        );

        for (
            let i = 0;
            i < students.length;
            i++
        ) {

            if (i !== 2) {
                lowerHand(
                    students[i]
                );
            }
        }

    } else if (t < 13) {

        teacherTalk();

        showStudentDialogue(1);

        raiseHand(
            students[1],
            "left",
            1
        );

        for (
            let i = 0;
            i < students.length;
            i++
        ) {

            if (i !== 1) {
                lowerHand(
                    students[i]
                );
            }
        }

    } else {

        teacherDismissClass();

        hideAllDialogues();

        for (
            const student of students
        ) {

            lowerHand(student);

            student.group.rotation.y =
                THREE.MathUtils.lerp(
                    student.group.rotation.y,
                    0,
                    0.2
                );
        }

    }
}

// ============================================================
// CLOCK DISMISSAL + VISIBLE SOUND RIPPLES
// ============================================================

// ============================================================
// NORMAL CLOCK
// ============================================================

function animateNormalClock() {

    if (
        classroomTime >= 13 &&
        classroomTime < 15
    ) {
        return;
    }

    clockFace.rotation.x =
        Math.PI / 2;

    clockFace.rotation.z = 0;

    hourPivot.rotation.z =
        -time * 0.025;

    minutePivot.rotation.z =
        -time * 0.25;

    secondPivot.rotation.z =
        -time * 1.5;
}

// ============================================================
// SHOW CLASSROOM
// ============================================================

function showClassroomScene() {

    school.children.forEach(
        (object) => {

            if (
                object !== classroom
            ) {

                object.visible = false;
            }
        }
    );

    classroom.visible = true;

    teacher.group.visible =
        false;

    classroomTeacher.group.visible =
        true;

    drone.visible = false;

    ground.visible = false;

    flagPole.visible = false;

    flag.visible = false;

    for (
        const tree of trees
    ) {
        tree.visible = false;
    }

    bus.visible = false;

    hideAllDialogues();
}

// ============================================================
// SHOW EXTERIOR
// ============================================================

function showExteriorScene() {

    school.visible = true;

    school.children.forEach(
        (object) => {

            object.visible = true;
        }
    );

    classroom.visible = true;

    teacher.group.visible =
        true;

    classroomTeacher.group.visible =
        false;

    ground.visible = true;

    flagPole.visible = true;

    flag.visible = true;

    for (
        const tree of trees
    ) {
        tree.visible = true;
    }

    bus.visible = true;

    hideAllDialogues();
}

// ============================================================
// CLASSROOM CAMERA
// ============================================================

function moveToClassroom() {

    const desiredCamera =
        new THREE.Vector3(
            -7,
            8,
            8
        );

    camera.position.lerp(
        desiredCamera,
        0.04
    );

    const target =
        new THREE.Vector3(
            -7,
            2.7,
            -2
        );

    controls.target.lerp(
        target,
        0.04
    );
}

// ============================================================
// RESET
// ============================================================

function resetCinematic() {

    state =
        STATES.START;

    cinematicTime = 0;

    classroomTime = 0;

    blinkTime = 0;

    cinematicActive = true;

    controls.enabled = false;

    busMoveTime = 0;

    bus.position.set(
        -7,
        2.15,
        19
    );

    bus.rotation.y = 0;

    restoreStudentsToClassroom();

    showExteriorScene();

    drone.visible = true;

    drone.position.copy(
        dronePoints.start
    );

    drone.rotation.set(
        0,
        0,
        0
    );

    teacher.group.position.set(
        8.5,
        0,
        14
    );

    teacher.group.rotation.set(
        0,
        Math.PI,
        0
    );

    teacher.group.visible =
        true;

    classroomTeacher.group.position.set(
        0,
        0,
        -5.9
    );

    classroomTeacher.group.rotation.set(
        0,
        classroomTeacherAngle,
        0
    );

    classroomTeacher.group.visible =
        false;

    camera.position.set(
        40,
        23,
        47
    );

    controls.target.set(
        0,
        5,
        5
    );

    blinkMaterial.opacity = 0;

    hideAllDialogues();

    clockCenter.rotation.set(
        0,
        0,
        0
    );

    clockFace.rotation.set(
        Math.PI / 2,
        0,
        0
    );

    hourPivot.rotation.set(
        0,
        0,
        0
    );

    minutePivot.rotation.set(
        0,
        0,
        0
    );

    secondPivot.rotation.set(
        0,
        0,
        0
    );

    for (
        const wave of clockWaves
    ) {

        wave.visible = false;

        wave.material.opacity = 0;

        wave.scale.setScalar(
            0.7
        );
    }

    classroomTeacher.arms[0].position.set(
        -0.7,
        2.05,
        0
    );

    classroomTeacher.arms[1].position.set(
        0.7,
        2.05,
        0
    );

    classroomTeacher.arms[0].rotation.set(
        0,
        0,
        0
    );

    classroomTeacher.arms[1].rotation.set(
        0,
        0,
        0
    );
}

// ============================================================
// CINEMATIC
// ============================================================

function animateCinematic(
    delta
) {

    cinematicTime += delta;

    if (
        state === STATES.START
    ) {

        drone.visible = true;

        moveDrone(
            dronePoints.start,
            8,
            delta
        );

        followDrone(
            new THREE.Vector3(
                0,
                5,
                5
            )
        );

        if (
            cinematicTime > 2.5
        ) {

            cinematicTime = 0;

            state =
                STATES.SCAN_LEFT;
        }

    } else if (
        state === STATES.SCAN_LEFT
    ) {

        moveDrone(
            dronePoints.left,
            8,
            delta
        );

        const sweep =
            Math.sin(
                cinematicTime * 1.2
            );

        followDrone(
            new THREE.Vector3(
                -8 +
                    sweep * 3,
                5,
                8
            )
        );

        if (
            cinematicTime > 3.5
        ) {

            cinematicTime = 0;

            state =
                STATES.SCAN_CENTER;
        }

    } else if (
        state === STATES.SCAN_CENTER
    ) {

        moveDrone(
            dronePoints.center,
            7,
            delta
        );

        const sweep =
            Math.sin(
                cinematicTime * 1.1
            );

        followDrone(
            new THREE.Vector3(
                sweep * 13,
                5.5,
                8
            )
        );

        if (
            cinematicTime > 4
        ) {

            cinematicTime = 0;

            state =
                STATES.SCAN_RIGHT;
        }

    } else if (
        state === STATES.SCAN_RIGHT
    ) {

        moveDrone(
            dronePoints.right,
            8,
            delta
        );

        const sweep =
            Math.sin(
                cinematicTime * 1.2
            );

        followDrone(
            new THREE.Vector3(
                8 +
                    sweep * 4,
                5,
                8
            )
        );

        if (
            cinematicTime > 3.5
        ) {

            cinematicTime = 0;

            state =
                STATES.SCAN_APPROACH;
        }

    } else if (
        state === STATES.SCAN_APPROACH
    ) {

        moveDrone(
            dronePoints.approach,
            6,
            delta
        );

        followDrone(
            new THREE.Vector3(
                0,
                4,
                8
            )
        );

        if (
            cinematicTime > 2.5
        ) {

            cinematicTime = 0;

            state =
                STATES.TEACHER_APPROACH;
        }

    } else if (
        state === STATES.TEACHER_APPROACH
    ) {

        moveDrone(
            dronePoints.teacher,
            5,
            delta
        );

        const teacherWorld =
            getTeacherWorldPosition();

        followDrone(
            new THREE.Vector3(
                teacherWorld.x,
                3,
                teacherWorld.z
            )
        );

        if (
            cinematicTime > 2.5
        ) {

            cinematicTime = 0;

            state =
                STATES.TEACHER_WALK;
        }

    } else if (
        state === STATES.TEACHER_WALK
    ) {

        const walkDuration = 4.0;

        const progress =
            Math.min(
                cinematicTime /
                    walkDuration,
                1
            );

        walkTeacher(
            progress
        );

        if (
            cinematicTime >= 4.0
        ) {

            blinkTime = 0;

            state =
                STATES.BLINK_CLOSE;
        }

    } else if (
        state === STATES.BLINK_CLOSE
    ) {

        blinkTime += delta;

        blinkMaterial.opacity =
            Math.min(
                1,
                blinkTime / 0.35
            );

        if (
            blinkTime >= 0.35
        ) {

            showClassroomScene();

            camera.position.set(
                -7,
                8,
                8
            );

            controls.target.set(
                -7,
                2.7,
                -2
            );

            classroomTeacher.group.position.set(
                0,
                0,
                -5.9
            );

            classroomTeacher.group.rotation.set(
                0,
                classroomTeacherAngle,
                0
            );

            classroomTime = 0;

            blinkTime = 0;

            state =
                STATES.BLINK_OPEN;
        }

    } else if (
        state === STATES.BLINK_OPEN
    ) {

        blinkTime += delta;

        blinkMaterial.opacity =
            Math.max(
                0,
                1 -
                    blinkTime / 0.65
            );

        if (
            blinkTime >= 0.65
        ) {

            blinkMaterial.opacity = 0;

            cinematicTime = 0;

            classroomTime = 0;

            state =
                STATES.CLASSROOM;
        }

    } else if (
        state === STATES.CLASSROOM
    ) {

        showClassroomScene();

        classroomTime += delta;

        if (
            classroomTime < 15
        ) {

            moveToClassroom();

            animateClassroomLesson();

        } else {

            cinematicTime = 0;

            teacher.group.visible =
                false;

            classroomTeacher.group.visible =
                true;

            for (
                const student of students
            ) {

                student.group.visible =
                    true;

                student.group.rotation.set(
                    0,
                    0,
                    0
                );

                lowerHand(student);
            }

            hideAllDialogues();

            state =
                STATES.CLASSROOM_EXIT;
        }

    } else if (
        state === STATES.CLASSROOM_EXIT
    ) {

        showClassroomScene();

        teacher.group.visible =
            false;

        classroomTeacher.group.visible =
            true;

        for (
            const student of students
        ) {

            student.group.visible =
                true;

            student.group.rotation.set(
                0,
                0,
                0
            );

            lowerHand(student);
        }

        const exitDuration = 3.0;

        const progress =
            THREE.MathUtils.clamp(
                cinematicTime /
                    exitDuration,
                0,
                1
            );

        moveClassroomCameraToExit(
            progress
        );

        // Blink during the interior scan.
        const blinkStart = 1.05;
        const blinkClose = 0.30;
        const blinkOpen = 0.45;

        if (
            cinematicTime >= blinkStart &&
            cinematicTime <
                blinkStart + blinkClose
        ) {

            const blinkProgress =
                (cinematicTime -
                    blinkStart) /
                blinkClose;

            blinkMaterial.opacity =
                Math.min(
                    1,
                    blinkProgress
                );

        } else if (
            cinematicTime >=
                blinkStart + blinkClose &&
            cinematicTime <
                blinkStart +
                blinkClose +
                blinkOpen
        ) {

            const blinkProgress =
                (
                    cinematicTime -
                    blinkStart -
                    blinkClose
                ) /
                blinkOpen;

            blinkMaterial.opacity =
                Math.max(
                    0,
                    1 - blinkProgress
                );

        } else {

            blinkMaterial.opacity = 0;
        }

        if (
            cinematicTime >=
            exitDuration
        ) {

            blinkMaterial.opacity = 0;

            cinematicTime = 0;

            blinkTime = 0;

            state =
                STATES.BLINK_OUTSIDE_CLOSE;
        }

    } else if (
        state ===
        STATES.BLINK_OUTSIDE_CLOSE
    ) {

        blinkTime += delta;

        blinkMaterial.opacity =
            Math.min(
                1,
                blinkTime / 0.4
            );

        if (
            blinkTime >= 0.4
        ) {

            teacher.group.visible =
                false;

            showExteriorScene();

            teacher.group.visible =
                false;

            prepareStudentsForMarch();

            activateOutsideCamera();

            blinkTime = 0;

            state =
                STATES.BLINK_OUTSIDE_OPEN;
        }

    } else if (
        state ===
        STATES.BLINK_OUTSIDE_OPEN
    ) {

        blinkTime += delta;

        blinkMaterial.opacity =
            Math.max(
                0,
                1 -
                    blinkTime / 0.6
            );

        teacher.group.visible =
            false;

        if (
            blinkTime >= 0.6
        ) {

            blinkMaterial.opacity = 0;

            cinematicTime = 0;

            state =
                STATES.OUTSIDE_MARCH;
        }

    } else if (
        state === STATES.OUTSIDE_MARCH
    ) {

        showExteriorScene();

        teacher.group.visible =
            false;

        drone.visible = true;

        const marchDuration = 6.5;

        const progress =
            THREE.MathUtils.clamp(
                cinematicTime /
                    marchDuration,
                0,
                1
            );

        marchStudentsToBus(
            progress
        );

        const aerialProgress =
            THREE.MathUtils.smoothstep(
                progress,
                0,
                1
            );

        const droneStart =
            new THREE.Vector3(
                -14,
                13,
                15
            );

        const droneEnd =
            new THREE.Vector3(
                -5,
                38,
                34
            );

        drone.position.lerpVectors(
            droneStart,
            droneEnd,
            aerialProgress
        );

        const aerialTarget =
            new THREE.Vector3(
                -7,
                3.5,
                13
            );

        drone.lookAt(
            aerialTarget
        );

        drone.rotation.z =
            Math.sin(time * 2.5) *
            0.035;

        followMarchDrone(
            aerialTarget
        );

        const finalTarget =
            new THREE.Vector3(
                -7,
                THREE.MathUtils.lerp(
                    3,
                    6,
                    aerialProgress
                ),
                13
            );

        controls.target.lerp(
            finalTarget,
            0.035
        );

        if (
            progress >= 1
        ) {

            for (
                const student of students
            ) {

                student.legs[0].rotation.x = 0;
                student.legs[1].rotation.x = 0;

                student.arms[0].rotation.x = 0;
                student.arms[1].rotation.x = 0;

                student.group.position.y = 0;
            }

            if (
                cinematicTime >=
                marchDuration + 1.0
            ) {

                blinkTime = 0;

                state =
                    STATES.BUS_BLINK_CLOSE;
            }
        }

    } else if (
        state === STATES.BUS_BLINK_CLOSE
    ) {

        blinkTime += delta;

        blinkMaterial.opacity =
            Math.min(
                1,
                blinkTime / 0.5
            );

        if (
            blinkTime >= 0.5
        ) {

            for (
                const student of students
            ) {

                student.group.visible =
                    false;
            }

            blinkTime = 0;

            state =
                STATES.BUS_BLINK_OPEN;
        }

    } else if (
        state === STATES.BUS_BLINK_OPEN
    ) {

        blinkTime += delta;

        blinkMaterial.opacity =
            Math.max(
                0,
                1 -
                    blinkTime / 0.5
            );

        teacher.group.visible =
            false;

        drone.visible = true;

        if (
            blinkTime >= 0.5
        ) {

            blinkMaterial.opacity = 0;

            cinematicTime = 0;

            busMoveTime = 0;

            state =
                STATES.BUS_DEPART;
        }

    } else if (
        state === STATES.BUS_DEPART
    ) {

        teacher.group.visible =
            false;

        drone.visible = true;

        for (
            const student of students
        ) {

            student.group.visible =
                false;
        }

        const busDepartureSpeed = 3.5;

        bus.position.y = 2.15;

        bus.position.z = 19;

        if (
            busMoveTime < 5
        ) {

            busMoveTime += delta;

            bus.position.x -=
                delta *
                busDepartureSpeed;

            if (
                busMoveTime >= 5
            ) {

                busMoveTime = 5;
            }
        }

        if (
            busMoveTime >= 5
        ) {

            cinematicTime = 0;

            state =
                STATES.FINAL_AERIAL;
        }

    } else if (
        state === STATES.FINAL_AERIAL
    ) {

        teacher.group.visible =
            false;

        drone.visible = true;

        for (
            const student of students
        ) {

            student.group.visible =
                false;
        }

        const aerialDuration = 4;

        const progress =
            THREE.MathUtils.clamp(
                cinematicTime /
                    aerialDuration,
                0,
                1
            );

        const smoothProgress =
            THREE.MathUtils.smoothstep(
                progress,
                0,
                1
            );

        const cameraStart =
            new THREE.Vector3(
                -2,
                40,
                27
            );

        const cameraEnd =
            new THREE.Vector3(
                7,
                66,
                8
            );

        camera.position.lerpVectors(
            cameraStart,
            cameraEnd,
            smoothProgress
        );

        const finalTarget =
            new THREE.Vector3(
                -7,
                THREE.MathUtils.lerp(
                    3,
                    7,
                    smoothProgress
                ),
                THREE.MathUtils.lerp(
                    30,
                    12,
                    smoothProgress
                )
            );

        controls.target.lerp(
            finalTarget,
            0.06
        );

        positionDroneRelativeToCamera(
            finalTarget
        );

        if (
            cinematicTime >=
            aerialDuration
        ) {

            state =
                STATES.FINISHED;

            cinematicActive =
                false;

            controls.enabled = true;
        }

    } else if (
        state === STATES.FINISHED
    ) {

        teacher.group.visible =
            false;

        drone.visible = true;

        for (
            const student of students
        ) {

            student.group.visible =
                false;
        }

        const finalTarget =
            new THREE.Vector3(
                -7,
                2,
                15
            );

        controls.target.lerp(
            finalTarget,
            0.015
        );
    }
}

// ============================================================
// GENERAL ANIMATION
// ============================================================

function animateScene(
    delta
) {

    time += delta;

    for (
        let i = 0;
        i < trees.length;
        i++
    ) {

        trees[i].rotation.z =
            Math.sin(
                time * 1.2 + i
            ) * 0.025;
    }

    flag.rotation.y =
        Math.sin(time * 3) *
        0.15;

    animateNormalClock();

    if (
        state !== STATES.BUS_DEPART &&
        state !== STATES.FINAL_AERIAL
    ) {

        bus.position.x = -7;
    }

    if (drone.visible) {

        for (
            const rotor of rotors
        ) {

            rotor.rotation.y +=
                delta * 25;
        }

        if (
            state !==
            STATES.OUTSIDE_MARCH &&
            state !==
            STATES.BUS_BLINK_CLOSE &&
            state !==
            STATES.BUS_BLINK_OPEN &&
            state !==
            STATES.BUS_DEPART &&
            state !==
            STATES.FINAL_AERIAL
        ) {

            drone.position.y +=
                Math.sin(
                    time * 4
                ) *
                delta *
                0.08;
        }
    }


    for (
        const dialogue of studentDialogues
    ) {

        if (
            dialogue.visible
        ) {

            dialogue.lookAt(
                camera.position
            );
        }
    }
}

// ============================================================
// KEYBOARD
// ============================================================

window.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key.toLowerCase() === "r"
        ) {

            resetCinematic();

            return;
        }

        if (
            event.code === "Space"
        ) {

            restoreStudentsToClassroom();

            state =
                STATES.CLASSROOM;

            cinematicActive = true;

            classroomTime = 0;

            cinematicTime = 0;

            showClassroomScene();

            blinkMaterial.opacity = 0;

            classroomTeacher.group.position.set(
                0,
                0,
                -5.9
            );

            classroomTeacher.group.rotation.set(
                0,
                classroomTeacherAngle,
                0
            );

            classroomTeacher.group.visible =
                true;

            teacher.group.visible =
                false;

            camera.position.set(
                -7,
                8,
                8
            );

            controls.target.set(
                -7,
                2.7,
                -2
            );

            return;
        }

        if (
            event.key === "1"
        ) {

            restoreStudentsToClassroom();

            cinematicActive = false;

            controls.enabled = true;

            showExteriorScene();

            drone.visible = true;

            camera.position.set(
                22,
                15,
                25
            );

            controls.target.set(
                0,
                3,
                0
            );
        }

        if (
            event.key === "2"
        ) {

            restoreStudentsToClassroom();

            cinematicActive = false;

            controls.enabled = true;

            showExteriorScene();

            drone.visible = true;

            camera.position.set(
                3,
                8,
                20
            );

            controls.target.set(
                0,
                4,
                8
            );
        }

        if (
            event.key === "3"
        ) {

            restoreStudentsToClassroom();

            cinematicActive = false;

            controls.enabled = true;

            showClassroomScene();

            classroomTeacher.group.position.set(
                0,
                0,
                -5.9
            );

            classroomTeacher.group.rotation.set(
                0,
                classroomTeacherAngle,
                0
            );

            camera.position.set(
                -7,
                8,
                8
            );

            controls.target.set(
                -7,
                2.7,
                -2
            );

            classroomTime = 0;
        }
    }
);

// ============================================================
// RESIZE
// ============================================================

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);

// ============================================================
// START
// ============================================================

resetCinematic();

// ============================================================
// LOOP
// ============================================================

const clockTimer =
    new THREE.Clock();

function animate() {

    requestAnimationFrame(
        animate
    );

    const delta =
        Math.min(
            clockTimer.getDelta(),
            0.05
        );

    animateScene(delta);

    if (
        cinematicActive
    ) {

        controls.enabled = false;

        animateCinematic(delta);
    }

    controls.update();

    renderer.render(
        scene,
        camera
    );

    if (
        blinkMaterial.opacity > 0
    ) {

        renderer.autoClear = false;

        renderer.render(
            blinkScene,
            blinkCamera
        );

        renderer.autoClear = true;
    }
}

animate();