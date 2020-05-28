cc.Class({
    extends: cc.Component,

    properties: {
        arrowPrefab: {
            default: null,
            type: cc.Prefab
        },
        targetPrefab: {
            default: null,
            type: cc.Prefab
        }
    },

    onLoad() {
        this.physics = cc.director.getPhysicsManager();
        this.physics.enabled = true;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    },

    //onLoad之后，第一次update之前执行
    start () {
        this.newArrow();
    },

    onTouchStart(event) {
        this.arrowJs.updateArrowAngle(event.getLocation());
    },

    onTouchMove(event) {
        this.arrowJs.updateArrowAngle(event.getLocation());
    },

    onTouchEnd() {
        this.arrowJs.arrowShoot();
    },

    newArrow() {
        let arrowNode = cc.instantiate(this.arrowPrefab);
        this.node.addChild(arrowNode);
        arrowNode.setPosition(cc.v2(-300, -200));
        this.arrowJs = arrowNode.getComponent('arrow');
    }

    // update (dt) {},
});
