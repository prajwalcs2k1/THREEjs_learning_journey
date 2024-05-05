import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * AxesHelper
 * AxesHelpers can be added to scene as well as objects in the scene
 */

const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper)
mesh.add(axesHelper)

/**
 * Scales
 * Scales are applied to objects
 */
// mesh.scale.x = 1
// mesh.scale.y = 2
// mesh.scale.z = 3
mesh.scale.set(1,2,3)


/**
 * Rotations
 */
mesh.rotation.reorder("YXZ") //this specifies the order in which the object has to rotate
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = 2.5


/**
 * Sizes
*/
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(2,-2,5)
scene.add(camera)

/**
 * lookAt()
 */
camera.lookAt(mesh.position)



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)