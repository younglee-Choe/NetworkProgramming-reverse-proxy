import React from 'react'
import * as THREEAR from 'threear'
import * as THREE from 'three'
import '../css/basic.css'

class Basic extends React.Component {

  render() {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({
      // antialias	: true,
      alpha: true
    })

		renderer.setClearColor(new THREE.Color('lightgrey'), 0)
    renderer.setSize( window.innerWidth, window.innerHeight )
    renderer.domElement.style.position = 'absolute'
		renderer.domElement.style.top = '0px'
		renderer.domElement.style.left = '0px'
    document.body.appendChild( renderer.domElement )

    var markerGroup = new THREE.Group()
		scene.add(markerGroup)

    var source = new THREEAR.Source({ renderer, camera })

    THREEAR.initialize({ source: source }).then((controller) => {
      var geometry = new THREE.BoxGeometry( 1, 1, 1 )
      var material = new THREE.MeshNormalMaterial()
      var cube = new THREE.Mesh( geometry, material )
      scene.add( cube )
      markerGroup.add(cube)
      var path = './data/patt.hiro'
      var patternMarker = new THREEAR.PatternMarker({
        patternUrl: path,
        markerObject: markerGroup
      })
      controller.trackMarker(patternMarker)

      requestAnimationFrame(function animate(nowMsec){
        // measure time
				var lastTimeMsec = lastTimeMsec || nowMsec-(1000/60)
				var deltaMsec = Math.min(200, nowMsec - lastTimeMsec)
				lastTimeMsec = nowMsec
	      renderer.render( scene, camera )
        controller.update( source.domElement )
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        // keep looping
			  requestAnimationFrame( animate )
      })
    })

    return (
      <div id="basic-container">

      </div>
    )
  }
}

export default Basic
