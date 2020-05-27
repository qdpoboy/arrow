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
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.newArrow();
    },

    onTouchStart() {

    },

    onTouchMove() {

    },

    onTouchEnd() {

    },

    newArrow() {
        let arrowNode = cc.instantiate(this.arrowPrefab);
        this.node.addChild(arrowNode);
        arrowNode.setPosition(cc.v2(-300, -200));
    }

    // start () {},

    // update (dt) {},
});
