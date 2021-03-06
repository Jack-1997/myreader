import React from 'react';
import styles from './style.less';

// 高斯模糊组件（一种滤镜功能）
export default ({
  children,
  src,
  animation = false,
  filter = 25,
}) => (<div className={styles.gaussian}>
  {children}
  <div
    style={{
      backgroundImage: `url(${src})`,
      animation: animation ? `${styles.run} 25s ease-in-out` : 'none',
      backgroundSize: animation ? '100%' : '100% 100%',
      filter: `blur(${filter}px)`,
    }}
    className={styles.bg}
  />
</div>);
