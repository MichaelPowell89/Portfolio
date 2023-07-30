import React, { useState, useRef, useEffect, useContext } from "react";
import * as THREE from "three";
import NavbarTest from "../components/Navbar";

import ballTextureImg from "../public/images/Ball/ball.png";
import copyConsts from "../copyConsts.json";

function ThreeJSComponent() {
  const canvasRef = useRef(null);
  const ballRef = useRef(null);
  const bottomShadowRef = useRef(null);
  const leftShadowRef = useRef(null);
  const rightShadowRef = useRef(null);
  const mobile = window.innerWidth < 992;
  let bottomDistance;
  let leftDistance;
  let rightDistance;
  let aimShot = false;
  let startingVector;
  let releaseVector;
  let navbarOpen;

  let velocity = { x: 0, y: 0 };
  let gravity = 0.01;
  const sphereRadius = mobile ? 1.25 : 2.5;
  const highScore = 0;
  const yOffset = mobile ? 0.95 : 1;
  const xOffset = mobile ? 0.95 : 1;
  const bottomBound = -window.innerHeight / 50;
  const leftBound = (window.innerWidth / -50) * 1.25;
  const rightBound = (window.innerWidth / 50) * 1.25;

  const [score, setScore] = useState(0);

  function updateScore() {
    setScore((prevScore) => prevScore + 1);
  }

  function distanceBetweenPoints(p1, p2) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function isNavbarOpen() {
    return navbarOpen = document.body.classList.contains('navbar-open');
  }

  useEffect(() => {
    function onMouseClick(event) {
      if (mobile &&
        !isNavbarOpen()) {
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        releaseVector = { x: mouse.x, y: mouse.y };

        const mouseDistance = distanceBetweenPoints(
          { x: ballRef.current.position.x, y: ballRef.current.position.y },
          { x: mouse.x, y: mouse.y }
        );

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);

        const planeIntersection = new THREE.Vector3();
        raycaster.ray.intersectPlane(
          new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
          planeIntersection
        );

        if (mouseDistance !== 0) {
          velocity.x =
            (planeIntersection.x - ballRef.current.position.x) *
            (mouseDistance / 10) *
            -1;
          velocity.y =
            (planeIntersection.y - ballRef.current.position.y) *
            (mouseDistance / 10) *
            -1;

          const velocityLength = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
          velocity.x /= velocityLength;
          velocity.y /= velocityLength;
        }
      }
    }

    function onMouseDown(event) {
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObject(ballRef.current);

      if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;
        if (intersectedObject === ballRef.current) {
          aimShot = true;
          startingVector = { x: mouse.x, y: mouse.y };
          gravity = 0;
          velocity.x = 0;
        }
      }
    }

    function onMouseUp(event) {
      if (aimShot) {
        gravity = 0.01;
        aimShot = false;

        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        releaseVector = { x: mouse.x, y: mouse.y };

        const mouseDistance = distanceBetweenPoints(
          startingVector,
          releaseVector
        );

        console.log("mouse Distance: " + mouseDistance);
        console.log("velocityX: " + velocity.x);

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);

        const planeIntersection = new THREE.Vector3();
        raycaster.ray.intersectPlane(
          new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
          planeIntersection
        );

        if (mouseDistance !== 0) {
          velocity.x =
            (planeIntersection.x - ballRef.current.position.x) *
            mouseDistance *
            -1;
          velocity.y =
            (planeIntersection.y - ballRef.current.position.y) *
            mouseDistance *
            -1;

          const velocityLength = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
          velocity.x /= velocityLength;
          velocity.y /= velocityLength;
        }
      }
    }

    function onMouseOver(event) {
      if (!aimShot) {
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(ballRef.current);

        if (intersects.length > 0) {
          renderer.domElement.style.cursor = "grab";
        } else if (!aimShot) {
          renderer.domElement.style.cursor = "default";
        }
      } else {
        renderer.domElement.style.cursor = "grabbing";
      }
    }

    function handleResize() {
      // Get the updated window width and height
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Update the renderer size
      renderer.setSize(width, height);

      // Update the camera aspect ratio
      camera.left = width / -40;
      camera.right = width / 40;
      camera.top = height / 40;
      camera.bottom = height / -40;
      camera.updateProjectionMatrix();
    }

    function createShadow() {
      // Create shadow
      const shadowGeometry = new THREE.CircleGeometry(sphereRadius / 2, 32, 32);
      const shadowMaterial = new THREE.MeshStandardMaterial({
        color: "black",
        opacity: 0.7,
        transparent: true,
      });

      // Create bottom shadow
      bottomShadowRef.current = new THREE.Mesh(shadowGeometry, shadowMaterial);
      bottomShadowRef.current.rotation.x = 1.5;
      bottomShadowRef.current.position.y = bottomBound + yOffset;
      bottomShadowRef.current.position.z = -1;
      scene.add(bottomShadowRef.current);

      // // Create bottom shadow
      // leftShadowRef.current = new THREE.Mesh(shadowGeometry, shadowMaterial);
      // leftShadowRef.current.rotation.y = 1.5;
      // leftShadowRef.current.position.x = leftBound + xOffset;
      // scene.add(leftShadowRef.current);

      // // Create bottom shadow
      // rightShadowRef.current = new THREE.Mesh(shadowGeometry, shadowMaterial);
      // rightShadowRef.current.rotation.y = 1.5;
      // rightShadowRef.current.position.x = rightBound - xOffset;
      // scene.add(rightShadowRef.current);
    }

    function setShadow() {
      setBottomShadow();
      // setLeftShadow();
      // setRightShadow();
    }

    function setBottomShadow(){
      bottomDistance =
        bottomShadowRef.current.position.y - ballRef.current.position.y;
      bottomShadowRef.current.position.x = ballRef.current.position.x;

      const shadowMaterial = bottomShadowRef.current.material;

      // Calculate opacity based on the distance
      const maxDistance = 20;
      const minOpacity = 0;
      const maxOpacity = 1.0;
      const opacity = THREE.MathUtils.clamp(
        1 - Math.abs(bottomDistance) / maxDistance, // Use Math.abs to get the absolute value
        minOpacity,
        maxOpacity
      );

      // Set the opacity on the shadow material
      shadowMaterial.opacity = opacity;

      // Calculate scale based on the distance
      const maxScale = 1.0;
      const minScale = 0;
      const shadowScale = THREE.MathUtils.clamp(
        1 - Math.abs(bottomDistance) / maxDistance, // Use Math.abs to get the absolute value
        minScale,
        maxScale
      );

      bottomShadowRef.current.scale.set(
        shadowScale * 1.5,
        shadowScale * 1.5,
        shadowScale * 1.5
      );
    }

    function setLeftShadow(){
      leftDistance =
        ballRef.current.position.x - leftShadowRef.current.position.x;
      leftShadowRef.current.position.y = ballRef.current.position.y;

      const shadowMaterial = leftShadowRef.current.material;

      // Calculate opacity based on the distance
      const maxDistance = 20;
      const minOpacity = 0;
      const maxOpacity = 1.0;
      const opacity = THREE.MathUtils.clamp(
        1 - Math.abs(leftDistance) / maxDistance,
        minOpacity,
        maxOpacity
      );

      // Set the opacity on the shadow material
      shadowMaterial.opacity = opacity;

      // Calculate scale based on the distance
      const maxScale = 1.0;
      const minScale = 0;
      const shadowScale = THREE.MathUtils.clamp(
        1 - Math.abs(leftDistance) / maxDistance,
        minScale,
        maxScale
      );

      leftShadowRef.current.scale.set(
        shadowScale * 1.5,
        shadowScale * 1.5,
        shadowScale * 1.5
      );
    }

    function setRightShadow() {
      rightDistance = rightShadowRef.current.position.x - ballRef.current.position.x;
      console.log(rightDistance);
      rightShadowRef.current.position.y = ballRef.current.position.y;
    
      const shadowMaterial = rightShadowRef.current.material;
    
      const maxDistance = 20;
      const minOpacity = 0;
      const maxOpacity = 1.0;
      const opacity = THREE.MathUtils.clamp(
        1 - Math.abs(rightDistance) / maxDistance,
        minOpacity,
        maxOpacity
      );
    
      shadowMaterial.opacity = opacity;
    
      const maxScale = 1.0;
      const minScale = 0;
      const shadowScale = THREE.MathUtils.clamp(
        1 - Math.abs(rightDistance) / maxDistance,
        minScale,
        maxScale
      );
    
      rightShadowRef.current.scale.set(
        shadowScale * 1.5,
        shadowScale * 1.5,
        shadowScale * 1.5
      );
    }
    

    const canvas = canvasRef.current;

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousemove", onMouseOver, false);
    document.addEventListener("mousedown", onMouseDown, false);
    document.addEventListener("click", onMouseClick, false);
    document.addEventListener("mouseup", onMouseUp, false);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -40,
      window.innerWidth / 40,
      window.innerHeight / 40,
      window.innerHeight / -40,
      0.01,
      100
    );
    camera.position.set(0, 0, 10); // Adjust the camera position to focus on the scene

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true; // Enable shadow rendering

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 50);
    scene.add(ambientLight);

    createShadow();

    // Load the ball texture
    const textureLoader = new THREE.TextureLoader();
    const ballTexture = textureLoader.load(ballTextureImg);
    ballTexture.wrapS = THREE.RepeatWrapping;
    ballTexture.wrapT = THREE.RepeatWrapping;
    ballTexture.repeat.set(2.5, 1.25);

    // Create sphere
    const ballGeometry = new THREE.SphereGeometry(sphereRadius, 32, 32);
    const ballMaterial = new THREE.MeshStandardMaterial({ map: ballTexture });
    ballRef.current = new THREE.Mesh(ballGeometry, ballMaterial);
    ballRef.current.name = "Ball";
    scene.add(ballRef.current);

    const animate = () => {
      requestAnimationFrame(animate);

      //Apply rotation
      ballRef.current.rotation.z += velocity.x * -1;

      // Apply gravity
      if (!aimShot) {
        velocity.y -= gravity;
        ballRef.current.position.y += velocity.y;
        ballRef.current.position.x += velocity.x;
      }

      const cameraViewOffset = 1;

      if (
        ballRef.current.position.y <
        bottomBound + sphereRadius + cameraViewOffset
      ) {
        ballRef.current.position.y =
          bottomBound + sphereRadius + cameraViewOffset;
        velocity.y *= -0.8;
      }

      if (
        ballRef.current.position.x <
        leftBound + sphereRadius + cameraViewOffset
      ) {
        ballRef.current.position.x =
          leftBound + sphereRadius + cameraViewOffset;
        velocity.x *= -0.1;
      } else if (
        ballRef.current.position.x >
        rightBound - sphereRadius - cameraViewOffset
      ) {
        ballRef.current.position.x =
          rightBound - sphereRadius - cameraViewOffset;
        velocity.x *= -0.1;
      }

      setShadow();

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mousemove", onMouseOver);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="canvas-container" />
    </>
  );
}

export default ThreeJSComponent;
