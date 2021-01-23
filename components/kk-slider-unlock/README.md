#KKSliderUnlock
KKSliderUnlock是一个React滑动解锁的组件，封装的比较简单，后续会慢慢进行改进。


安装方法：
```sh
npm install kk-slider-unlock
or
yarn add kk-slider-unlock
```

使用：
```sh
import React, {Component} from 'react'
import { KKSliderUnlock } from 'kk-slider-unlock'

class Demo extends Component {
  
  sliderSuccess = () => {
    console.log('success')
  }
  render() {
    return (
      <KKSliderUnlock sliderSuccess={this.sliderSuccess} backColor="#7ac23d" sliderWidth={300} />
    )
  }
}
```

解锁成功后会执行sliderSuccess这个方法。

另外两个属性

backColor：string     //  主题色

sliderWidth：number   //  宽度



[Demo](https://www.asni.cn/demo/demo11)

*该组件依赖lodash和react