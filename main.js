AFRAME.registerComponent('cloak-component', {
    init: function () {
        // make sure the model is loaded first
        this.el.addEventListener('model-loaded', e => {
            console.log("HERE")
            let mesh = this.el.getObject3D('mesh') // grab the mesh
            if (mesh === undefined) return;        // return if no mesh :(
            mesh.traverse(function (node) {         // traverse through and apply settings
                if (node.isMesh && node.material) {  // make sure the element can be a cloak
                    console.log("HERETOO")
                    node.material.colorWrite = false
                    node.material.needsUpdate = true;
                }
            });
        })
    }
})