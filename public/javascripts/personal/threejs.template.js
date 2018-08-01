

//
// <script src="/javascripts/three.js" type="text/javascript"></script>
// <script src="/javascripts/OrbitControls.js" type="text/javascript"></script>
// <script src="/javascripts/stats.min.js" type="text/javascript"></script>
// 

<script>

  // Status viewer
  var stats = new Stats();
  stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
  document.body.appendChild( stats.dom );



  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);


  controls = new THREE.OrbitControls(camera, renderer.domElement);

  var geometry = new THREE.TorusGeometry( 10, 3, 16, 32 );
  var material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );
  var torus = new THREE.Mesh( geometry, material );
  scene.add( torus );

  camera.position.z = 25;


  window.addEventListener("resize", function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = (width / height);
    camera.updateProjectionMatrix();
  });


  // Game logic
  var update = function() {
     torus.rotation.x += 0.01;
     torus.rotation.y += 0.005;
  };


  // update Scene
  var render = function() {
    renderer.render(scene, camera);
  };


  // Game Loop (update, render, repeat)
  var GameLoop = function() {

    requestAnimationFrame(GameLoop);

    stats.begin();
      update();
      render();
    stats.end();

  };

  GameLoop();
