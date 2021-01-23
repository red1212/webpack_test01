
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description: 滑动解锁
 * @Author: webzhi
 * @Date: 2020-08-25 21:54:36
 */
var react_1 = __importStar(require("react"));
// 用于判断是否需要计算滑动，当鼠标点击滑块后开始移动计算
var isElementItem = false;
// 当前鼠标单坐标
var pageX = 0;
// 每次滑动前滑块位置
var initSiderLeft = 0;
var isGoFun = true;
var KKSliderUnlock = function (props) {
    var _a = react_1.useState(0), sliderLeft = _a[0], setsliderLeft = _a[1];
    /**定义样式 */
    // 滑动条宽度
    var sliderWidth = props.sliderWidth ? props.sliderWidth : 260;
    //提示文案
    var text = props.text ? props.text : '按住滑块，拖到右方';
    let successText = props.successText ? props.successText : '验证成功';
    //滑过的背景色
    var moveColor = props.moveColor ? props.moveColor : '#7ac23d';

    //设置高度
    var height = props.height ? props.height : '40px';

    //滑块按钮的宽度
    var sliderBlockWidth = props.sliderBlockWidth ? props.sliderBlockWidth : '40px'

    //滑块的背景颜色
    var sliderBlockBg = props.sliderBlockBg ? props.sliderBlockBg : '#fff'
    var onMouseDown = function (e) {
        e.preventDefault();
        if (sliderLeft > 0) {
            return;
        }
        isElementItem = true;
        initSiderLeft = sliderLeft;
        // 获取点击点的坐标
        pageX = e.pageX || (e.clientX + document.body.scrollLeft - document.body.clientLeft);
    };
    var onMouseMove = react_1.useCallback(function (e) {
        e.preventDefault();
        if (isElementItem) {
            // 获取移动后最新的鼠标点坐标
            var newPageX = e.pageX || (e.clientX + document.body.scrollLeft - document.body.clientLeft);
            // 计算出当前Sider的坐标
            var SiderLeft = initSiderLeft + newPageX - pageX;
            if (SiderLeft < 0) {
                setsliderLeft(0);
            }
            else if (SiderLeft >= sliderWidth) {
                isElementItem = false;
                setsliderLeft(sliderWidth);
                typeof props.sliderSuccess === 'function' && props.sliderSuccess();
                isGoFun = false;
            }
            else {
                setsliderLeft(SiderLeft);
            }
        }
    }, [props, sliderWidth]);
    var onMouseUps = react_1.useCallback(function () {
        isElementItem = false;
        var newsliderLeft = sliderLeft;
        if (sliderLeft <= sliderWidth * 0.8) {
            var timerAdd_1 = setInterval(function () {
                newsliderLeft = newsliderLeft - 6;
                if (newsliderLeft <= 0) {
                    clearInterval(timerAdd_1);
                    setsliderLeft(0);
                }
                else {
                    setsliderLeft(newsliderLeft);
                }
            }, 0.1);
        }
        else {
            var timerReduce_1 = setInterval(function () {
                ++newsliderLeft;
                if (newsliderLeft >= sliderWidth) {
                    clearInterval(timerReduce_1);
                    setsliderLeft(sliderWidth);
                    isGoFun && typeof props.sliderSuccess === 'function' && props.sliderSuccess();
                    isGoFun = false;
                }
                else {
                    setsliderLeft(newsliderLeft);
                }
            }, 0.1);
        }
    }, [props, sliderWidth, sliderLeft]);
    react_1.useEffect(function () {
        window.addEventListener('mousemove', onMouseMove);
        return function () {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, [onMouseMove]);
    react_1.useEffect(function () {
        window.addEventListener('mouseup', onMouseUps);
        return function () {
            window.removeEventListener('mouseup', onMouseUps);
        };
    }, [sliderLeft, onMouseUps]);
    return (react_1.default.createElement("div", {
        className: "kkui-slider-unlock",
        style: {
            width: sliderWidth + 50,
            backgroundColor: props.backColor ? props.backColor : '#F1F3F6',
            color: props.textColor ? props.textColor : '',
            height: height,
            lineHeight: height,
            borderColor: props.borderColor ? props.borderColor : ''
        }
    },
        text,

        react_1.default.createElement("div", {
            className: "kkui-slider-unlock-item",
            style: {
                width: sliderLeft + 50,
                background: moveColor,
                height: height,
                lineHeight: height,
                color: '#000'
            }
        }, sliderLeft === sliderWidth ? successText : ''),

        react_1.default.createElement("div", {
            className: sliderLeft === sliderWidth ? 'kkui-slider-unlock-bg-success' : 'kkui-slider-unlock-bg',
            style: {
                left: sliderLeft,
                height: height,
                lineHeight: height,
                width: sliderBlockWidth,
                background:sliderBlockBg
            }, onMouseDown: onMouseDown
        },
        react_1.default.createElement("span", { }))));
};
exports.default = KKSliderUnlock;
