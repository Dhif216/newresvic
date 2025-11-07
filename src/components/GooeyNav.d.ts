import React from 'react';
import './GooeyNav.css';
interface NavItem {
    href: string;
    label: string;
}
interface GooeyNavProps {
    items: NavItem[];
    animationTime?: number;
    particleCount?: number;
    particleDistances?: [number, number];
    particleR?: number;
    timeVariance?: number;
    colors?: number[];
    initialActiveIndex?: number;
}
declare const GooeyNav: React.FC<GooeyNavProps>;
export default GooeyNav;
//# sourceMappingURL=GooeyNav.d.ts.map