import { FC } from 'react';
import SelectProps from './selectProps';
/**
 * 下拉选择器。
 *
 * ###何时使用
 * - 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
 * - 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。
 */
export declare const Select: FC<SelectProps>;
export default Select;
