cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
        this.direction = cc.v2(0, 0);
        //获取刚体
        this.rigidbody = this.node.getComponent(cc.RigidBody);
    },

    //更新箭头的旋转角度
    updateArrowAngle(touchPos) {
        //转化成世界坐标系
        let touchPosWorld = this.node.parent.convertToNodeSpaceAR(touchPos);
        //向量减法，并返回新结果。
        posWorld = touchPosWorld.sub(this.node.position);
        //归一化向量
        console.log(posWorld);
        this.direction = posWorld.normalize();
        console.log(this.direction);
        //将方向向量转换为弧度，signAngle方法返回带方向(有负号)的夹角弧度，angle方法返回不带方向的夹角弧度
        //方向向量转换为角度，需要认清一个隐含变量，就是这个角度的基准是 X 轴正方向。 使用向量来表示就是 (1,0)。
        let radian = posWorld.signAngle(cc.v2(1, 0));
        //设定箭头的旋转角度，rotation属性官方已不建议使用，而使用angle，使用angle需要带-
        // this.node.rotation = radian * 180 / Math.PI;
        this.node.angle = - (radian * 180 / Math.PI);
        //弧度 = 弧长/半径 周长 = 2π*半径  所以当角度是180度时，弧长是半圆的长度(π*半径)，对应的弧度就π弧度
    },

    arrowShoot() {
        //设置刚体类型  Static, Kinematic, Dynamic or Animated.
        this.rigidbody.type = 2;
        //设置刚体在世界坐标下的线性速度
        this.rigidbody.linearVelocity = this.direction.mulSelf(1800);
    },

    // start () {},

    // update (dt) {},
});
