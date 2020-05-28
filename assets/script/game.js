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
    start() {
        this.newArrow();
        this.schedule(function () {
            this.newTarget();
        }, 2);
    },

    onTouchStart(event) {
        this.arrowJs.updateArrowAngle(event.getLocation());
    },

    onTouchMove(event) {
        this.arrowJs.updateArrowAngle(event.getLocation());
    },

    onTouchEnd() {
        if (this.arrowJs) {
            this.arrowJs.arrowShoot();
            this.arrowJs = null;
        }
        this.scheduleOnce(function () {
            this.newArrow();
        }, 0.5);
    },

    //生成新箭头
    newArrow() {
        let arrowNode = cc.instantiate(this.arrowPrefab);
        this.node.addChild(arrowNode);
        arrowNode.setPosition(cc.v2(-400, -200));
        this.arrowJs = arrowNode.getComponent('arrow');
    },

    //生成新标靶
    newTarget() {
        let targetNode = cc.instantiate(this.targetPrefab);
        this.node.addChild(targetNode);
        targetNode.setPosition(cc.v2(300, -300));
    },

    // update (dt) {},
});
