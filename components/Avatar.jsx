import { forwardRef } from 'react';
import { cls } from '../helper/cls';
const classes = {
    base: 'align-middle rounded-full',
    size: {
        small: 'w-10 h-10',
        normal: 'w-20 h-20',
        large: 'w-36 h-36'
    }
}
export default forwardRef(({ imgUrl = "/ava.png", size = "small" }, ref) => {

    return (
        <img
            ref={ref}
            src={imgUrl}
            className={cls(`
                ${classes.base}
                ${classes.size[size]}
        `)} />
    )
})