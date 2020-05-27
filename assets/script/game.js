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
        this.newArrow();
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    },

    onTouchStart(event) {
        console.log(event.getLocation());
        this.arrowJs.updateArrowRotate();
    },

    onTouchMove() {

    },

    onTouchEnd() {

    },

    newArrow() {
        let arrowNode = cc.instantiate(this.arrowPrefab);
        this.node.addChild(arrowNode);
        arrowNode.setPosition(cc.v2(-300, -200));
        this.arrowJs = arrowNode.getComponent('arrow');
    }

    // start () {},

    // update (dt) {},
});
