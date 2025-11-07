"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// Component ported from https://codepen.io/JuanFuentes/full/rgXKGQ
const react_1 = require("react");
const TextPressure = ({ text = 'Compressa', fontFamily = 'Compressa VF', fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2', width = true, weight = true, italic = true, alpha = false, flex = true, stroke = false, scale = false, textColor = '#FFFFFF', strokeColor = '#FF0000', className = '', minFontSize = 24 }) => {
    const containerRef = (0, react_1.useRef)(null);
    const titleRef = (0, react_1.useRef)(null);
    const spansRef = (0, react_1.useRef)([]);
    const mouseRef = (0, react_1.useRef)({ x: 0, y: 0 });
    const cursorRef = (0, react_1.useRef)({ x: 0, y: 0 });
    const [fontSize, setFontSize] = (0, react_1.useState)(minFontSize);
    const [scaleY, setScaleY] = (0, react_1.useState)(1);
    const [lineHeight, setLineHeight] = (0, react_1.useState)(1);
    const chars = text.split('');
    const dist = (a, b) => {
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    (0, react_1.useEffect)(() => {
        const handleMouseMove = (e) => {
            cursorRef.current.x = e.clientX;
            cursorRef.current.y = e.clientY;
        };
        const handleTouchMove = (e) => {
            const t = e.touches[0];
            cursorRef.current.x = t.clientX;
            cursorRef.current.y = t.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        if (containerRef.current) {
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();
            mouseRef.current.x = left + width / 2;
            mouseRef.current.y = top + height / 2;
            cursorRef.current.x = mouseRef.current.x;
            cursorRef.current.y = mouseRef.current.y;
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);
    const setSize = () => {
        if (!containerRef.current || !titleRef.current)
            return;
        const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();
        let newFontSize = containerW / (chars.length / 2);
        newFontSize = Math.max(newFontSize, minFontSize);
        setFontSize(newFontSize);
        setScaleY(1);
        setLineHeight(1);
        requestAnimationFrame(() => {
            if (!titleRef.current)
                return;
            const textRect = titleRef.current.getBoundingClientRect();
            if (scale && textRect.height > 0) {
                const yRatio = containerH / textRect.height;
                setScaleY(yRatio);
                setLineHeight(yRatio);
            }
        });
    };
    (0, react_1.useEffect)(() => {
        setSize();
        window.addEventListener('resize', setSize);
        return () => window.removeEventListener('resize', setSize);
    }, [scale, text]);
    (0, react_1.useEffect)(() => {
        let rafId;
        const animate = () => {
            mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
            mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;
            if (titleRef.current) {
                const titleRect = titleRef.current.getBoundingClientRect();
                const maxDist = titleRect.width / 2;
                spansRef.current.forEach(span => {
                    if (!span)
                        return;
                    const rect = span.getBoundingClientRect();
                    const charCenter = {
                        x: rect.x + rect.width / 2,
                        y: rect.y + rect.height / 2
                    };
                    const d = dist(mouseRef.current, charCenter);
                    const getAttr = (distance, minVal, maxVal) => {
                        const val = maxVal - Math.abs((maxVal * distance) / maxDist);
                        return Math.max(minVal, val + minVal);
                    };
                    const wdth = width ? Math.floor(getAttr(d, 5, 200)) : 100;
                    const wght = weight ? Math.floor(getAttr(d, 100, 900)) : 400;
                    const italVal = italic ? getAttr(d, 0, 1).toFixed(2) : 0;
                    const alphaVal = alpha ? getAttr(d, 0, 1).toFixed(2) : 1;
                    span.style.opacity = alphaVal.toString();
                    span.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;
                });
            }
            rafId = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(rafId);
    }, [width, weight, italic, alpha, chars.length]);
    const dynamicClassName = [className, flex ? 'flex' : '', stroke ? 'stroke' : ''].filter(Boolean).join(' ');
    return ((0, jsx_runtime_1.jsxs)("div", { ref: containerRef, style: {
            position: 'relative',
            width: '100%',
            height: '100%',
            background: 'transparent'
        }, children: [(0, jsx_runtime_1.jsx)("style", { children: `
        @font-face {
          font-family: '${fontFamily}';
          src: url('${fontUrl}');
          font-style: normal;
        }

        .flex {
          display: flex;
          justify-content: space-between;
        }

        .stroke span {
          position: relative;
          color: ${textColor};
        }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: ${strokeColor};
        }

        .text-pressure-title {
          color: ${textColor};
        }
      ` }), (0, jsx_runtime_1.jsx)("h1", { ref: titleRef, className: `text-pressure-title ${dynamicClassName}`, style: {
                    fontFamily,
                    textTransform: 'uppercase',
                    fontSize: fontSize,
                    lineHeight,
                    transform: `scale(1, ${scaleY})`,
                    transformOrigin: 'center top',
                    margin: 0,
                    textAlign: 'center',
                    userSelect: 'none',
                    whiteSpace: 'nowrap',
                    fontWeight: 100,
                    width: '100%'
                }, children: chars.map((char, i) => ((0, jsx_runtime_1.jsx)("span", { ref: el => {
                        spansRef.current[i] = el;
                    }, "data-char": char, style: {
                        display: 'inline-block',
                        color: stroke ? undefined : textColor
                    }, children: char }, i))) })] }));
};
exports.default = TextPressure;
//# sourceMappingURL=TextPressure.js.map