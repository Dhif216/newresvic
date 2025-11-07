"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// Component ported from https://codepen.io/JuanFuentes/full/rgXKGQ
const react_1 = __importStar(require("react"));
require("./GooeyNav.css");
// 2. COMPONENT IMPLEMENTATION
const GooeyNav = ({ items, animationTime = 600, particleCount = 15, particleDistances = [90, 10], particleR = 100, timeVariance = 300, colors = [1, 2, 3, 1, 2, 3, 1, 4], initialActiveIndex = 0 }) => {
    // Use HTML element types for refs
    const containerRef = (0, react_1.useRef)(null);
    const navRef = (0, react_1.useRef)(null);
    const filterRef = (0, react_1.useRef)(null);
    const textRef = (0, react_1.useRef)(null);
    const [activeIndex, setActiveIndex] = (0, react_1.useState)(initialActiveIndex);
    // Helper function for randomized values
    const noise = (n = 1) => n / 2 - Math.random() * n;
    const getXY = (distance, pointIndex, totalPoints) => {
        const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
        return [distance * Math.cos(angle), distance * Math.sin(angle)];
    };
    const createParticle = (i, t, d, r) => {
        let rotate = noise(r / 10);
        return {
            start: getXY(d[0], particleCount - i, particleCount),
            end: getXY(d[1] + noise(7), particleCount - i, particleCount),
            time: t,
            scale: 1 + noise(0.2),
            color: colors[Math.floor(Math.random() * colors.length)],
            rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
        };
    };
    const makeParticles = (element) => {
        const d = particleDistances;
        const r = particleR;
        const bubbleTime = animationTime * 2 + timeVariance;
        element.style.setProperty('--time', `${bubbleTime}ms`);
        for (let i = 0; i < particleCount; i++) {
            const t = animationTime * 2 + noise(timeVariance * 2);
            const p = createParticle(i, t, d, r);
            element.classList.remove('active');
            setTimeout(() => {
                const particle = document.createElement('span');
                const point = document.createElement('span');
                particle.classList.add('particle');
                particle.style.setProperty('--start-x', `${p.start[0]}px`);
                particle.style.setProperty('--start-y', `${p.start[1]}px`);
                particle.style.setProperty('--end-x', `${p.end[0]}px`);
                particle.style.setProperty('--end-y', `${p.end[1]}px`);
                particle.style.setProperty('--time', `${p.time}ms`);
                particle.style.setProperty('--scale', `${p.scale}`);
                particle.style.setProperty('--color', `var(--color-${p.color})`);
                particle.style.setProperty('--rotate', `${p.rotate}deg`);
                point.classList.add('point');
                particle.appendChild(point);
                element.appendChild(particle);
                requestAnimationFrame(() => {
                    element.classList.add('active');
                });
                setTimeout(() => {
                    try {
                        // Safely remove the particle after its animation time
                        if (element.contains(particle)) {
                            element.removeChild(particle);
                        }
                    }
                    catch {
                        // Do nothing if particle is already gone
                    }
                }, t + 50);
            }, 30);
        }
    };
    const updateEffectPosition = (element) => {
        if (!containerRef.current || !filterRef.current || !textRef.current)
            return;
        // Get the rects relative to the viewport
        const containerRect = containerRef.current.getBoundingClientRect();
        const pos = element.getBoundingClientRect();
        // Calculate position relative to the container for absolute positioning
        const styles = {
            left: `${pos.x - containerRect.x}px`,
            top: `${pos.y - containerRect.y}px`,
            width: `${pos.width}px`,
            height: `${pos.height}px`
        };
        // Apply styles to filter and text elements
        Object.assign(filterRef.current.style, styles);
        Object.assign(textRef.current.style, styles);
        // Ensure text element has the right content
        textRef.current.innerText = element.innerText;
    };
    const handleClick = (e, index) => {
        e.preventDefault();
        const liEl = e.currentTarget.parentElement;
        // Get the target ID from the anchor link
        const targetId = e.currentTarget.getAttribute('href');
        if (!liEl)
            return;
        // --- 1. SMOOTH SCROLL LOGIC (New Addition) ---
        if (targetId && targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Scrolls to the top of the element
                });
            }
        }
        // ---------------------------------------------
        // --- 2. GOOEY ANIMATION LOGIC ---
        // FIX: Only update state if the index is actually changing.
        if (activeIndex !== index) {
            setActiveIndex(index);
        }
        // DOM manipulation updates MUST happen regardless of state change to trigger the animation
        updateEffectPosition(liEl);
        if (filterRef.current) {
            // Clear existing particles before new burst
            const particles = filterRef.current.querySelectorAll('.particle');
            particles.forEach(p => filterRef.current.removeChild(p));
        }
        if (textRef.current) {
            textRef.current.classList.remove('active');
            void textRef.current.offsetWidth; // Force reflow for animation restart
            textRef.current.classList.add('active');
        }
        if (filterRef.current) {
            makeParticles(filterRef.current);
        }
    };
    const handleKeyDown = (e, index) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            // Simulate click event data for the handler
            handleClick({ currentTarget: e.currentTarget }, index);
        }
    };
    // This effect handles initial placement and resize updates.
    // It's clean because ResizeObserver disconnects on cleanup.
    (0, react_1.useEffect)(() => {
        if (!navRef.current || !containerRef.current)
            return;
        // Find the initially active list item
        const activeLi = navRef.current.querySelector(`li:nth-child(${initialActiveIndex + 1})`);
        if (activeLi) {
            // Add active class for initial rendering
            activeLi.classList.add('active');
            updateEffectPosition(activeLi);
            textRef.current?.classList.add('active');
        }
        // Observer for responsive changes
        const resizeObserver = new ResizeObserver(() => {
            // Find the currently active element when resizing
            const currentActiveLi = navRef.current?.querySelector('li.active');
            if (currentActiveLi) {
                updateEffectPosition(currentActiveLi);
            }
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, [initialActiveIndex]); // Runs only when initialActiveIndex changes
    return ((0, jsx_runtime_1.jsxs)("div", { className: "gooey-nav-container", ref: containerRef, children: [(0, jsx_runtime_1.jsx)("nav", { children: (0, jsx_runtime_1.jsx)("ul", { ref: navRef, children: items.map((item, index) => (
                    // Ensure the active class is set by state
                    (0, jsx_runtime_1.jsx)("li", { className: activeIndex === index ? 'active' : '', children: (0, jsx_runtime_1.jsx)("a", { href: item.href, onClick: e => handleClick(e, index), onKeyDown: e => handleKeyDown(e, index), children: item.label }) }, item.href))) }) }), (0, jsx_runtime_1.jsx)("span", { className: "effect filter", ref: filterRef }), (0, jsx_runtime_1.jsx)("span", { className: "effect text", ref: textRef })] }));
};
exports.default = GooeyNav;
//# sourceMappingURL=GooeyNav.js.map