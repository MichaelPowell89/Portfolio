import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";

import ballTextureImg from "../public/images/Games/Web/Centr.png";
import ringTextureImg from "../public/images/Ball/ring.png";
import hoopTextureImg from "../public/images/Ball/hoop.png";

import copyConsts from "../copyConsts.json";

function ThreeJSComponent() {
  const canvasRef = useRef(null);
  const mobile = window.innerWidth < 992;
  let sphere;
  let shadow;
  let distance;
  let leftBackboard;
  let rightBackboard;
  let rightBackboardTop;
  let rightBackboardBottom;
  let leftBackboardBoundingBox;
  let rightBackboardBoundingBox;
  let rightBackboardTopBoundingBox;
  let rightBackboardBottomBoundingBox;
  let rightRingLeftScoringBoundingBox;
  let rightRingMiddleScoringBoundingBox;
  let rightRingRightScoringBoundingBox;
  let collisionOccurred = false;
  let aimShot = false;
  let startingVector;
  let releaseVector;

  let velocity = { x: 0, y: 0 };
  let gravity = 0.01;
  let scoreCollision = false;
  const sphereRadius = mobile ? 1.25 : 2.5;
  const highScore = 0;
  const yOffset = mobile ? 0.95 : 1;
  const bottomBound = -window.innerHeight / 50;

  const [score, setScore] = useState(0);

  function updateScore() {
    setScore((prevScore) => prevScore + 1);
  }

  useEffect(() => {
    const scene = new THREE.Scene();
    // const camera = new THREE.OrthographicCamera(
    //   window.innerWidth / -40,
    //   window.innerWidth / 40,
    //   window.innerHeight / 40,
    //   window.innerHeight / -40,
    //   0.1,
    //   1000
    // );
    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      .1,
      400
    );
    // camera.rotation.z = 20;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 20);
    scene.add(ambientLight);

    // // Add a directional light to the scene
    // const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    // directionalLight.position.set(1, 1, 1).normalize();
    // directionalLight.castShadow = true;
    // scene.add(directionalLight);

    // Create shadow
    const shadowGeometry = new THREE.CircleGeometry(sphereRadius / 2, 32, 32);
    const shadowMaterial = new THREE.MeshStandardMaterial({
      color: "black",
      opacity: 0.7,
      transparent: true,
    });

    shadow = new THREE.Mesh(shadowGeometry, shadowMaterial);
    shadow.rotation.x = 1.5;
    shadow.position.y = bottomBound + yOffset;
    shadow.position.z = -1;
    scene.add(shadow);

    // Load the ball texture
    const textureLoader = new THREE.TextureLoader();
    const ballTexture = textureLoader.load(ballTextureImg);
    ballTexture.wrapS = THREE.RepeatWrapping;
    ballTexture.wrapT = THREE.RepeatWrapping;
    ballTexture.repeat.set(6, 4);

    // Create sphere
    const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({ map: ballTexture });
    sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.name = "Ball";
    scene.add(sphere);

    const ballBoundingBox = new THREE.Box3().setFromObject(sphere);

    if (!mobile) {
      // Load the ring post texture
      const ringTexture = textureLoader.load(ringTextureImg);
      ringTexture.transparent = true;
      ringTexture.flipX = false;

      // Load the ring hoop texture
      const hoopTexture = textureLoader.load(hoopTextureImg);
      hoopTexture.transparent = true;
      hoopTexture.flipX = false;

      // Create left ring
      const leftPostGeometry = new THREE.PlaneGeometry(20, 30);
      const leftPostMaterial = new THREE.MeshStandardMaterial({
        map: ringTexture,
        transparent: true,
      });
      const leftPost = new THREE.Mesh(leftPostGeometry, leftPostMaterial);
      leftPost.position.x = window.innerWidth / -50;
      leftPost.position.y = -window.innerHeight / 100;
      scene.add(leftPost);

      //Create left backboard
      const leftBackboardGeometry = new THREE.BoxGeometry(1, 20, 5);
      const leftBackboardMaterial = new THREE.MeshStandardMaterial({
        color: "black",
      });
      leftBackboard = new THREE.Mesh(
        leftBackboardGeometry,
        leftBackboardMaterial
      );
      leftBackboard.position.x =
        leftPost.position.x + leftPost.geometry.parameters.width / 2;
      leftBackboard.position.y =
        leftPost.position.y + leftPost.geometry.parameters.height / 1.5; //(-window.innerHeight / 100);
      leftBackboard.position.z = 1;
      scene.add(leftBackboard);

      leftBackboardBoundingBox = new THREE.Box3().setFromObject(leftBackboard);

      //Create left ring
      const leftRingGeometry = new THREE.PlaneGeometry(12.5, 2.5);
      const leftRingMaterial = new THREE.MeshStandardMaterial({
        map: hoopTexture,
        transparent: true,
      });
      const leftRing = new THREE.Mesh(leftRingGeometry, leftRingMaterial);
      leftRing.position.x = leftBackboard.position.x + 6;
      leftRing.position.y =
        leftBackboard.position.y - leftBackboard.geometry.parameters.height / 3; //(-window.innerHeight / 100);
      leftRing.position.z = 1;
      scene.add(leftRing);

      // Create right post
      const rightPostGeometry = new THREE.PlaneGeometry(20, 30);
      const rightPostMaterial = new THREE.MeshStandardMaterial({
        map: ringTexture.clone(),
        transparent: true,
      });
      rightPostMaterial.map.wrapS = THREE.RepeatWrapping;
      rightPostMaterial.map.repeat.x = -1;
      const rightPost = new THREE.Mesh(rightPostGeometry, rightPostMaterial);
      rightPost.position.x = window.innerWidth / 50;
      rightPost.position.y = -window.innerHeight / 100;
      scene.add(rightPost);

      //Create right backboard
      const rightBackboardGeometry = new THREE.BoxGeometry(1, 20, 5);
      const rightBackboardMaterial = new THREE.MeshStandardMaterial({
        color: "black",
      });
      rightBackboard = new THREE.Mesh(
        rightBackboardGeometry,
        rightBackboardMaterial
      );
      rightBackboard.position.x =
        rightPost.position.x - rightPost.geometry.parameters.width / 2;
      rightBackboard.position.y =
        rightPost.position.y + rightPost.geometry.parameters.height / 1.5; //(-window.innerHeight / 100);
      rightBackboard.position.z = 1;
      scene.add(rightBackboard);

      rightBackboardBoundingBox = new THREE.Box3().setFromObject(
        rightBackboard
      );

      //Create right backboard collision top
      const rightBackboardTopGeometry = new THREE.BoxGeometry(1, 1, 5);
      const rightBackboardTopMaterial = new THREE.MeshStandardMaterial({
        color: "red",
      });
      rightBackboardTop = new THREE.Mesh(
        rightBackboardTopGeometry,
        rightBackboardTopMaterial
      );
      rightBackboardTop.position.x = rightBackboard.position.x;
      rightBackboardTop.position.y =
        rightBackboard.position.y + rightPost.geometry.parameters.height / 3;
      rightBackboardTop.position.z = 1;
      scene.add(rightBackboardTop);

      rightBackboardTopBoundingBox = new THREE.Box3().setFromObject(
        rightBackboardTop
      );

      //Create right backboard collision top
      const rightBackboardBottomGeometry = new THREE.BoxGeometry(1, 1, 5);
      const rightBackboardBottomMaterial = new THREE.MeshStandardMaterial({
        color: "red",
      });
      rightBackboardBottom = new THREE.Mesh(
        rightBackboardBottomGeometry,
        rightBackboardBottomMaterial
      );
      rightBackboardBottom.position.x = rightBackboard.position.x;
      rightBackboardBottom.position.y =
        rightBackboard.position.y - rightPost.geometry.parameters.height / 3;
      rightBackboardBottom.position.z = 1;
      scene.add(rightBackboardBottom);

      rightBackboardBottomBoundingBox = new THREE.Box3().setFromObject(
        rightBackboardBottom
      );

      //Create right ring
      const rightRingGeometry = new THREE.PlaneGeometry(12.5, 2.5);
      const rightRingMaterial = new THREE.MeshStandardMaterial({
        map: hoopTexture.clone(),
        transparent: true,
      });
      rightRingMaterial.map.wrapS = THREE.RepeatWrapping;
      rightRingMaterial.map.repeat.x = -1;
      const rightRing = new THREE.Mesh(rightRingGeometry, rightRingMaterial);
      rightRing.position.x = rightBackboard.position.x - 6;
      rightRing.position.y =
        rightBackboard.position.y -
        rightBackboard.geometry.parameters.height / 3; //(-window.innerHeight / 100);
      scene.add(rightRing);

      //Create left scoring box
      const leftScoringGeometry = new THREE.BoxGeometry(0.5, 0.5);
      const leftScoringMaterial = new THREE.MeshStandardMaterial({
        color: "red",
      });
      const leftScoringBox = new THREE.Mesh(
        leftScoringGeometry,
        leftScoringMaterial
      );
      leftScoringBox.position.x =
        rightRing.position.x - rightRing.geometry.parameters.width / 2;
      leftScoringBox.position.y = rightRing.position.y + 1;
      scene.add(leftScoringBox);

      rightRingLeftScoringBoundingBox = new THREE.Box3().setFromObject(
        leftScoringBox
      );

      //Create middle scoring box
      const middleScoringGeometry = new THREE.BoxGeometry(8.5, 2);
      const middleScoringMaterial = new THREE.MeshStandardMaterial({
        color: "green",
      });
      const middleScoringBox = new THREE.Mesh(
        middleScoringGeometry,
        middleScoringMaterial
      );
      middleScoringBox.position.x = rightRing.position.x - 1.75;
      middleScoringBox.position.y = rightRing.position.y;
      scene.add(middleScoringBox);

      rightRingMiddleScoringBoundingBox = new THREE.Box3().setFromObject(
        middleScoringBox
      );

      //Create right scoring box
      const rightScoringGeometry = new THREE.BoxGeometry(3, 0.5);
      const rightScoringMaterial = new THREE.MeshStandardMaterial({
        color: "red",
      });
      const rightScoringBox = new THREE.Mesh(
        rightScoringGeometry,
        rightScoringMaterial
      );
      rightScoringBox.position.x = rightRing.position.x + 4;
      rightScoringBox.position.y = rightRing.position.y + 1;
      scene.add(rightScoringBox);

      rightRingRightScoringBoundingBox = new THREE.Box3().setFromObject(
        rightScoringBox
      );
    }

    camera.position.set(0, 0, 50);
    // camera.rotation.set(-90, 0, 180)
    camera.lookAt(0, 0, 0);

    function distanceBetweenPoints(p1, p2) {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      return Math.sqrt(dx * dx + dy * dy);
    }

    document.addEventListener("mousemove", onMouseOver, false);
    document.addEventListener("mousedown", onMouseDown, false);
    document.addEventListener("mouseup", onMouseUp, false);

    function onMouseDown(event) {
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const sphere = scene.getObjectByName("Ball");

      const intersects = raycaster.intersectObjects(
        scene.children.name == "Ball",
        true
      );

      if (sphere) {
        const intersects = raycaster.intersectObject(sphere);

        if (intersects.length > 0) {
          const intersectedObject = intersects[0].object;
          if (intersectedObject === sphere) {
            renderer.domElement.style.cursor = "grabbing";

            aimShot = true;
            startingVector = { x: mouse.x, y: mouse.y };
            gravity = 0;
            velocity.x = 0;
          }
        }
      }
    }

    function onMouseUp(event) {
      if (aimShot) {
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        releaseVector = { x: mouse.x, y: mouse.y };

        const mouseDistance = distanceBetweenPoints(
          startingVector,
          releaseVector
        );

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);

        const planeIntersection = new THREE.Vector3();
        raycaster.ray.intersectPlane(
          new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
          planeIntersection
        );

        if (mouseDistance !== 0)
        {
          velocity.x =
          (planeIntersection.x - sphere.position.x) * mouseDistance * 10;
        velocity.y =
          (planeIntersection.y - sphere.position.y) * mouseDistance * 10;
        // velocity.z = -1000;

        const velocityLength = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
        velocity.x /= velocityLength;
        velocity.y /= velocityLength;
        }
        gravity = 0.01;
        aimShot = false;
      }
    }

    function onMouseOver(event) {
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObject(sphere);

      if (intersects.length > 0) {
        renderer.domElement.style.cursor = "grab";
      } else {
        renderer.domElement.style.cursor = "default";
      }
    }

    const animate = () => {
      requestAnimationFrame(animate);

      //Apply rotation
      sphere.rotation.z += velocity.x * -1;

      // Apply gravity
      if (!aimShot) {
        velocity.y -= gravity;
        sphere.position.y += velocity.y;
        sphere.position.x += velocity.x;
        sphere.position.z += velocity.y;
      }

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const screenAspect = (screenWidth / screenHeight) * 1.25;
      const cameraFovRad = THREE.MathUtils.degToRad(camera.fov);
      const cameraViewOffset = 1; 

      const leftBound = (window.innerWidth / -50) * 1.25;
      const rightBound = (window.innerWidth / 50) * 1.25;

      if (sphere.position.y < bottomBound + sphereRadius + cameraViewOffset) {
        sphere.position.y = bottomBound + sphereRadius + cameraViewOffset;
        velocity.y *= -0.8; 
      }

      if (sphere.position.x < leftBound + sphereRadius + cameraViewOffset) {
        sphere.position.x = leftBound + sphereRadius + cameraViewOffset;
        velocity.x *= -0.1;
      } else if (
        sphere.position.x >
        rightBound - sphereRadius - cameraViewOffset
      ) {
        sphere.position.x = rightBound - sphereRadius - cameraViewOffset;
        velocity.x *= -0.1;
      }

      // Calculate the distance between the ball and the shadow plane
      distance = sphere.position.y - shadow.position.y;
      shadow.position.x = sphere.position.x;

      // Calculate opacity based on the distance
      const maxDistance = 20; // Adjust this value based on the desired range
      const minOpacity = 0; // Minimum opacity
      const maxOpacity = 1.0; // Maximum opacity
      const opacity = THREE.MathUtils.clamp(
        1 - distance / maxDistance,
        minOpacity,
        maxOpacity
      );

      // Set the opacity on the shadow material
      shadowMaterial.opacity = opacity;

      // Calculate scale based on the distance
      const maxScale = 1.0; // Adjust this value based on the desired maximum scale
      const minScale = 0.2; // Adjust this value based on the desired minimum scale
      const shadowScale = THREE.MathUtils.clamp(
        1 - distance / maxDistance,
        minScale, // The smaller scale value (minScale) should be provided here
        maxScale // The larger scale value (maxScale) should be provided here
      );

      ballBoundingBox.setFromObject(sphere);

      if (!aimShot) {
        if (
          (!collisionOccurred && ballBoundingBox.intersectsBox(rightBackboardTopBoundingBox)) ||
          (!collisionOccurred && ballBoundingBox.intersectsBox(rightBackboardBottomBoundingBox)) ||
          (!collisionOccurred && ballBoundingBox.intersectsBox(rightRingLeftScoringBoundingBox)) ||
          (!collisionOccurred && ballBoundingBox.intersectsBox(rightRingRightScoringBoundingBox))
        ) {
          velocity.y *= -0.8;
          velocity.x *= -0.8;
          // gravity = 0;
          collisionOccurred = true; // Set the flag to true
        } else if (
          (!collisionOccurred &&
          ballBoundingBox.intersectsBox(leftBackboardBoundingBox)) ||
          ballBoundingBox.intersectsBox(rightBackboardBoundingBox)
        ) {
          velocity.x *= -0.8;
          gravity = 0;
          collisionOccurred = true; // Set the flag to true
        } else gravity = 0.01;

        if (
          ballBoundingBox.intersectsBox(rightRingMiddleScoringBoundingBox) &&
          velocity.y < -10 &&
          scoreCollision == false
        ) {
          scoreCollision = true;
          updateScore();
        } 
        
        scoreCollision = false;
        collisionOccurred = false;
      }

      shadow.scale.set(shadowScale * 1.5, shadowScale * 1.5, shadowScale * 1.5);

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          width: "100vw",
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      {mobile ? (
        <div className="homeContent">
          <h1 style={{ color: "#353535", fontSize: "3em", fontWeight: 500 }}>
            {copyConsts.welcomeTitle}
          </h1>
          <h1 style={{ fontWeight: 500 }}>Score: {score}</h1>
        </div>
      ) : (
        <div className="homeContent">
          <h1 style={{ color: "#353535", fontSize: "4em", fontWeight: 500 }}>
            {copyConsts.welcomeTitle}
          </h1>
          <p style={{ color: "#353535", fontSize: "2.5em", fontWeight: 500 }}>
            {copyConsts.welcomeMessage}
          </p>
          <h1 style={{ fontWeight: 500 }}>HighScore: {highScore}</h1>
          <h1 style={{ fontWeight: 500 }}>Score: {score}</h1>
        </div>
      )}
    </>
  );
}

export default ThreeJSComponent;
