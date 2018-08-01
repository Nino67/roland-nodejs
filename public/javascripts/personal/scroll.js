


// window.onLoad = function() {

  // init controller
  var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "100%"}});

  //////////////////////////////////////////////////////////////////////////////
  // build #scenes-0
  new ScrollMagic.Scene({triggerElement: "#scene-0"})
    //.setTween("#scene-0 > div", {y: "0%", ease: Linear.easeNone})
    .addIndicators(
      {
        name:"scene-0"
      }
    )
    .addTo(controller);
    TweenMax.to("#content-scene-0", 10, {opacity:1});
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////
// build #scenes-1
  new ScrollMagic.Scene({triggerElement: "#scene-1"})
    .setTween("#scene-1 > div", {y: "0%", ease: Linear.easeNone})
    .addIndicators(
      {
        name:"scene-1"
      }
    )
    .addTo(controller);
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////


  //////////////////////////////////////////////////////////////////////////////
  // build #scenes-0
  new ScrollMagic.Scene({triggerElement: "#scene-2"})
    // .setTween("#scene-2 > div", {y: "0%", ease: Linear.easeNone})
    .addIndicators(
      {
        name:"scene-2"
      }
    )
    .addTo(controller);

    // Status viewer
    var stats = new Stats();
    stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.getElementById("scene-2").appendChild( stats.dom );


    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("scene-2").appendChild(renderer.domElement);

    // controls = new THREE.OrbitControls(camera, renderer.domElement);

    var geometry = new THREE.TorusGeometry( 10, 3, 16, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
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
    TweenMax.to("#scene-2", 10, {opacity:1});
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////




// }; /* end of window.onLoad */
