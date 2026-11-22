# Computer Graphics — Interactive 3D School Scene

## Project Overview

This project is an interactive real-time 3D scene developed using **Three.js** and **WebGL**. The scene presents a cinematic sequence set around a school environment, combining a classroom, students, teacher, drone, school bus, environmental elements, camera animation, lighting, materials, and object animation.

The project demonstrates how computer graphics concepts can be combined to create a complete real-time animated environment.

## Technologies Used

- **Three.js**
- **JavaScript**
- **WebGL**
- **HTML5**
- **CSS3**
- **Vite**
- **Node.js**

## Main Features

### 3D Environment

The scene contains a complete school environment with:

- School building
- Computer Graphics classroom
- Classroom interior
- Desks and chairs
- Students
- Teacher
- School bus
- Trees and outdoor environment
- Ground and environmental elements

### Real-Time Rendering

The project uses Three.js to render the scene in real time through WebGL.

The scene includes:

- Perspective camera
- Lighting
- Shadows
- Fog
- Materials
- 3D geometry
- Object transformations

### Animation

The project contains a continuous cinematic animation lasting approximately **60 seconds**.

The animation includes:

1. Opening exterior camera movement
2. Drone flight sequence
3. Movement toward the school
4. Teacher movement
5. Classroom lesson sequence
6. Camera movement through the classroom
7. Student interaction
8. Classroom-to-exterior transition
9. Student movement toward the school bus
10. Bus departure
11. Final aerial camera sequence

### Camera Animation

Multiple camera positions and targets are used throughout the sequence to create cinematic movement.

The camera changes perspective during:

- Exterior scene exploration
- Drone sequence
- Classroom approach
- Classroom interior scan
- Student departure
- Final aerial shot

### Materials and Lighting

Different materials are used to distinguish objects and surfaces within the environment.

The project uses materials with different:

- Colors
- Roughness
- Metalness
- Emissive properties

Lighting is used to improve depth, visibility, and realism within the scene.

### User Interaction

The project also provides keyboard controls for interacting with and testing different parts of the scene.

| Key | Function |
|---|---|
| `R` | Reset the cinematic animation |
| `Space` | Jump to the classroom sequence |
| `1` | View the exterior |
| `2` | View the closer exterior scene |
| `3` | View the classroom |

## Computer Graphics Concepts Demonstrated

This project applies several concepts covered in Computer Graphics, including:

- 3D modelling using primitive geometry
- Scene construction
- Coordinate systems
- Translation
- Rotation
- Scaling
- Camera positioning
- Perspective projection
- Real-time rendering
- Lighting
- Materials
- Shadows
- Fog
- Texture/material properties
- Object hierarchy
- Animation
- Camera animation
- User interaction

## Project Structure

```text
Computer Graphics Project/
│
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── public/
│
└── src/
    └── main.js
```

Additional files and assets may be included depending on the final project configuration.

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Enter the project directory

```bash
cd YOUR_PROJECT_FOLDER
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the local application

Open the URL provided by Vite, normally:

```text
http://localhost:5173/
```

## Running the Project

After starting the development server, the scene will load in the browser.

The cinematic sequence begins automatically.

For testing individual scenes, use the keyboard controls described above.

## Learning Outcomes

The project demonstrates the ability to:

- Build a real-time rendered 3D scene using an industry-relevant graphics tool.
- Apply lighting, shading, materials, and environmental effects.
- Apply animation techniques to 3D objects and cameras.
- Construct and manage a multi-object 3D environment.
- Apply transformations to objects in a real-time graphics environment.
- Implement user interaction.
- Work collaboratively to develop and communicate a technical Computer Graphics project.

## Team Project

This project was developed as a collaborative Computer Graphics project.

Team members contributed to different areas including:

- 3D scene construction
- JavaScript and Three.js programming
- Animation
- Camera movement
- Lighting and materials
- Environment design
- Testing and debugging
- Documentation and presentation

## Project Demonstration

The final project demonstrates a complete animated sequence from the initial exterior scene through the classroom sequence, student movement, school bus departure, and final aerial camera shot.

The complete animation is designed as a continuous **60-second cinematic experience**.

## Author

**Computer Graphics Project**

Limkokwing University of Creative Technology  
BSc Software Engineering with Multimedia

## License

This project was created for academic and educational purposes as part of a Computer Graphics course project.