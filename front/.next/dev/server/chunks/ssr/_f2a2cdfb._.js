module.exports = [
"[project]/components/home/hero-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane.js [app-ssr] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
"use client";
;
;
;
;
;
;
const heroImages = [
    "/iguazu-falls-waterfall-jungle-argentina.jpg",
    "/purmamarca-seven-colors-mountain-jujuy-argentina.jpg",
    "/cafayate-vineyards-wine-region-salta-argentina.jpg"
];
function HeroSection() {
    const [currentImage, setCurrentImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>{
            setCurrentImage((prev)=>(prev + 1) % heroImages.length);
        }, 5000);
        return ()=>clearInterval(timer);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-[90vh] flex items-center overflow-hidden",
        children: [
            heroImages.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 transition-opacity duration-1000 ${idx === currentImage ? "opacity-100" : "opacity-0"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: img || "/placeholder.svg",
                            alt: "Paisaje argentino",
                            fill: true,
                            className: "object-cover",
                            priority: idx === 0
                        }, void 0, false, {
                            fileName: "[project]/components/home/hero-section.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/80"
                        }, void 0, false, {
                            fileName: "[project]/components/home/hero-section.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, img, true, {
                    fileName: "[project]/components/home/hero-section.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-[family-name:var(--font-barrio)] text-5xl md:text-7xl text-background mb-4 animate-fade-up",
                            children: "Sendero Sur"
                        }, void 0, false, {
                            fileName: "[project]/components/home/hero-section.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-serif text-2xl md:text-4xl text-background/90 mb-6 animate-fade-up",
                            style: {
                                animationDelay: "0.1s"
                            },
                            children: "Rutas Turísticas de Argentina"
                        }, void 0, false, {
                            fileName: "[project]/components/home/hero-section.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-background/80 max-w-xl mb-8 animate-fade-up",
                            style: {
                                animationDelay: "0.2s"
                            },
                            children: "Descubrí los paisajes más impresionantes del país con rutas diseñadas para que viajes sin preocupaciones. Aeropuerto en el inicio y fin de cada ruta, domos ecológicos en cada parada."
                        }, void 0, false, {
                            fileName: "[project]/components/home/hero-section.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-4 mb-12 animate-fade-up",
                            style: {
                                animationDelay: "0.3s"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/rutas",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        className: "bg-primary text-primary-foreground hover:bg-primary/90 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/hero-section.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this),
                                            "Explorar Rutas"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/hero-section.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/hero-section.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#como-funciona",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        variant: "outline",
                                        className: "border-background/50 text-background hover:bg-background/10 gap-2 bg-transparent",
                                        children: "Cómo Funciona"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/hero-section.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/hero-section.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/hero-section.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-6 text-background/80 text-sm animate-fade-up",
                            style: {
                                animationDelay: "0.4s"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
                                            className: "h-5 w-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/hero-section.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Aeropuerto al inicio y fin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/hero-section.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/hero-section.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "h-5 w-5 text-accent"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/hero-section.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Domos ecológicos incluidos"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/hero-section.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/hero-section.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "h-5 w-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/hero-section.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Máximo 5hs entre destinos"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/hero-section.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/hero-section.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/hero-section.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/hero-section.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/hero-section.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "#como-funciona",
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-background/60 hover:text-background transition-colors animate-bounce",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-8 w-8"
                }, void 0, false, {
                    fileName: "[project]/components/home/hero-section.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/hero-section.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/hero-section.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "accommodations",
    ()=>accommodations,
    "cities",
    ()=>cities,
    "getAccommodation",
    ()=>getAccommodation,
    "getAccommodationsByRoute",
    ()=>getAccommodationsByRoute,
    "getCity",
    ()=>getCity,
    "getRoute",
    ()=>getRoute,
    "routes",
    ()=>routes
]);
const cities = [
    // Ruta Costera Atlántica
    {
        id: "mar-del-plata",
        name: "Mar del Plata",
        province: "Buenos Aires",
        description: "Ciudad costera con gran infraestructura turística, surf, gastronomía y vida nocturna.",
        attractions: [
            "Playas",
            "Puerto",
            "Casino",
            "Teatro Colón"
        ],
        activities: [
            "Surf",
            "Gastronomía",
            "Vida nocturna",
            "Cultura costera"
        ],
        image: "https://ik.imagekit.io/ankxi835d/rutasimg/mardel.jpg?updatedAt=1763239749658",
        hasAirport: true
    },
    {
        id: "las-grutas",
        name: "Las Grutas",
        province: "Río Negro",
        description: "Aguas cálidas, acantilados y turismo familiar en la costa patagónica.",
        attractions: [
            "Playas de aguas cálidas",
            "Acantilados",
            "Reservas naturales"
        ],
        activities: [
            "Buceo",
            "Kayak",
            "Avistaje de fauna"
        ],
        image: "https://ik.imagekit.io/ankxi835d/rutasimg/Las-Grutas-Playa.webp?updatedAt=1763066851942"
    },
    {
        id: "playas-doradas",
        name: "Playas Doradas",
        province: "Río Negro",
        description: "Playas vírgenes ideales para desconexión total y experiencias ecológicas.",
        attractions: [
            "Playas vírgenes",
            "Tranquilidad absoluta"
        ],
        activities: [
            "Desconexión",
            "Caminatas",
            "Observación de estrellas"
        ],
        image: "/playas-doradas-virgin-beach-argentina.jpg"
    },
    {
        id: "puerto-piramides",
        name: "Puerto Pirámides",
        province: "Chubut",
        description: "Puerta de entrada a Península Valdés, hogar de ballenas y fauna marina.",
        attractions: [
            "Península Valdés",
            "Ballenas francas",
            "Lobos marinos"
        ],
        activities: [
            "Avistaje de ballenas",
            "Buceo",
            "Kayak"
        ],
        image: "/puerto-piramides-whales-peninsula-valdes-argentina.jpg"
    },
    {
        id: "camarones",
        name: "Camarones",
        province: "Chubut",
        description: "Pueblo costero con naturaleza pura, pesca y senderismo.",
        attractions: [
            "Costa virgen",
            "Pingüinera",
            "Historia de Saint-Exupéry"
        ],
        activities: [
            "Pesca",
            "Senderismo",
            "Avistaje de pingüinos"
        ],
        image: "/camarones-coastal-town-patagonia-argentina.jpg"
    },
    {
        id: "puerto-deseado",
        name: "Puerto Deseado",
        province: "Santa Cruz",
        description: "Reserva natural con fauna marina e historia de exploradores.",
        attractions: [
            "Ría Deseado",
            "Isla Pingüino",
            "Darwin Expedition"
        ],
        activities: [
            "Navegación",
            "Fauna marina",
            "Historia"
        ],
        image: "/puerto-deseado-nature-reserve-patagonia-argentina.jpg",
        hasAirport: true
    },
    // Ruta Andina Norte
    {
        id: "purmamarca",
        name: "Purmamarca",
        province: "Jujuy",
        description: "Pueblo al pie del Cerro de los Siete Colores con artesanías y cultura andina.",
        attractions: [
            "Cerro de los Siete Colores",
            "Feria artesanal",
            "Paseo de los Colorados"
        ],
        activities: [
            "Trekking",
            "Compra de artesanías",
            "Fotografía"
        ],
        image: "/purmamarca-seven-colors-mountain-jujuy-argentina.jpg",
        hasAirport: true
    },
    {
        id: "cachi",
        name: "Cachi",
        province: "Salta",
        description: "Arquitectura colonial entre cerros nevados y cultura calchaquí.",
        attractions: [
            "Iglesia San José",
            "Museo Arqueológico",
            "Nevado de Cachi"
        ],
        activities: [
            "Paseos",
            "Cultura",
            "Fotografía"
        ],
        image: "/cachi-colonial-town-salta-argentina-mountains.jpg"
    },
    {
        id: "cafayate",
        name: "Cafayate",
        province: "Salta",
        description: "Capital del vino torrontés con bodegas de altura y paisajes únicos.",
        attractions: [
            "Bodegas",
            "Quebrada de las Conchas",
            "Anfiteatro"
        ],
        activities: [
            "Enoturismo",
            "Catas",
            "Senderismo"
        ],
        image: "/cafayate-vineyards-wine-region-salta-argentina.jpg"
    },
    {
        id: "fiambala",
        name: "Fiambalá",
        province: "Catamarca",
        description: "Termas naturales, dunas y la famosa Ruta del Adobe.",
        attractions: [
            "Termas",
            "Dunas de Tatón",
            "Ruta del Adobe"
        ],
        activities: [
            "Wellness",
            "Sandboard",
            "Cultura"
        ],
        image: "/fiambala-hot-springs-dunes-catamarca-argentina.jpg"
    },
    {
        id: "antofagasta-sierra",
        name: "Antofagasta de la Sierra",
        province: "Catamarca",
        description: "Paisajes lunares, volcanes y el mejor astroturismo del país.",
        attractions: [
            "Campo de Piedra Pómez",
            "Volcán Galán",
            "Salar de Antofalla"
        ],
        activities: [
            "Astroturismo",
            "Aventura 4x4",
            "Fotografía"
        ],
        image: "/antofagasta-sierra-pumice-field-volcanic-landscape.jpg",
        hasAirport: true
    },
    // Ruta Litoral
    {
        id: "puerto-iguazu",
        name: "Puerto Iguazú",
        province: "Misiones",
        description: "Cataratas del Iguazú, selva misionera y triple frontera.",
        attractions: [
            "Cataratas del Iguazú",
            "Selva misionera",
            "Triple frontera"
        ],
        activities: [
            "Paseos",
            "Avistaje",
            "Aventura"
        ],
        image: "/iguazu-falls-waterfall-jungle-argentina.jpg",
        hasAirport: true
    },
    {
        id: "san-ignacio",
        name: "San Ignacio",
        province: "Misiones",
        description: "Ruinas jesuíticas Patrimonio de la Humanidad y cultura guaraní.",
        attractions: [
            "Ruinas de San Ignacio Miní",
            "Río Paraná",
            "Casa de Quiroga"
        ],
        activities: [
            "Historia",
            "Cultura guaraní",
            "Navegación"
        ],
        image: "/san-ignacio-jesuit-ruins-misiones-argentina.jpg"
    },
    {
        id: "colonia-pellegrini",
        name: "Colonia Pellegrini",
        province: "Corrientes",
        description: "Portal de los Esteros del Iberá, paraíso de fauna autóctona.",
        attractions: [
            "Esteros del Iberá",
            "Laguna Iberá",
            "Fauna silvestre"
        ],
        activities: [
            "Safari fotográfico",
            "Kayak",
            "Avistaje de yacarés"
        ],
        image: "/ibera-wetlands-wildlife-corrientes-argentina.jpg"
    },
    {
        id: "clorinda",
        name: "Clorinda",
        province: "Formosa",
        description: "Ciudad fronteriza con río Pilcomayo y cultura ribereña.",
        attractions: [
            "Río Pilcomayo",
            "Frontera con Paraguay",
            "Cultura ribereña"
        ],
        activities: [
            "Pesca",
            "Navegación",
            "Gastronomía"
        ],
        image: "/clorinda-river-formosa-argentina-border.jpg"
    },
    {
        id: "formosa-capital",
        name: "Formosa",
        province: "Formosa",
        description: "Costanera sobre el río Paraguay con lagunas y artesanías.",
        attractions: [
            "Costanera",
            "Lagunas",
            "Artesanías wichí"
        ],
        activities: [
            "Paseos",
            "Cultura",
            "Gastronomía"
        ],
        image: "/placeholder.svg?height=600&width=800",
        hasAirport: true
    },
    // Ruta Patagónica
    {
        id: "el-calafate",
        name: "El Calafate",
        province: "Santa Cruz",
        description: "Puerta de entrada al Glaciar Perito Moreno y Lago Argentino.",
        attractions: [
            "Glaciar Perito Moreno",
            "Lago Argentino",
            "Glaciarium"
        ],
        activities: [
            "Navegación",
            "Trekking sobre hielo",
            "Astroturismo"
        ],
        image: "/placeholder.svg?height=600&width=800",
        hasAirport: true
    },
    {
        id: "el-chalten",
        name: "El Chaltén",
        province: "Santa Cruz",
        description: "Capital nacional del trekking con vistas al Fitz Roy.",
        attractions: [
            "Cerro Fitz Roy",
            "Laguna de los Tres",
            "Glaciar Viedma"
        ],
        activities: [
            "Trekking",
            "Escalada",
            "Fotografía"
        ],
        image: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "los-antiguos",
        name: "Los Antiguos",
        province: "Santa Cruz",
        description: "Lago Buenos Aires, cerezas y frontera con Chile.",
        attractions: [
            "Lago Buenos Aires",
            "Chacras de cerezas",
            "Cueva de las Manos"
        ],
        activities: [
            "Kayak",
            "Pesca",
            "Agroturismo"
        ],
        image: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "esquel",
        name: "Esquel",
        province: "Chubut",
        description: "Parque Nacional Los Alerces y el histórico tren La Trochita.",
        attractions: [
            "Parque Los Alerces",
            "La Trochita",
            "Lago Futalaufquen"
        ],
        activities: [
            "Senderismo",
            "Navegación",
            "Cultura galesa"
        ],
        image: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "bariloche",
        name: "San Carlos de Bariloche",
        province: "Río Negro",
        description: "Ciudad de los lagos, chocolate y deportes de montaña.",
        attractions: [
            "Lago Nahuel Huapi",
            "Cerro Catedral",
            "Circuito Chico"
        ],
        activities: [
            "Kayak",
            "Esquí",
            "Cervecerías artesanales"
        ],
        image: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "villa-traful",
        name: "Villa Traful",
        province: "Neuquén",
        description: "Lago cristalino, bosque sumergido y tranquilidad absoluta.",
        attractions: [
            "Lago Traful",
            "Bosque sumergido",
            "Mirador del Traful"
        ],
        activities: [
            "Pesca",
            "Kayak",
            "Contemplación"
        ],
        image: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "san-martin-andes",
        name: "San Martín de los Andes",
        province: "Neuquén",
        description: "Elegante villa de montaña junto al Lago Lácar.",
        attractions: [
            "Lago Lácar",
            "Cerro Chapelco",
            "Centro histórico"
        ],
        activities: [
            "Senderismo",
            "Navegación",
            "Gastronomía"
        ],
        image: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "volcan-lanin",
        name: "Volcán Lanín",
        province: "Neuquén",
        description: "Imponente volcán nevado y cultura mapuche.",
        attractions: [
            "Volcán Lanín",
            "Lago Huechulafquen",
            "Parque Nacional Lanín"
        ],
        activities: [
            "Trekking",
            "Pesca",
            "Cultura mapuche"
        ],
        image: "/placeholder.svg?height=600&width=800",
        hasAirport: true
    },
    // Ruta Viñedos
    {
        id: "mendoza",
        name: "Mendoza",
        province: "Mendoza",
        description: "Capital del vino argentino con bodegas de clase mundial.",
        attractions: [
            "Bodegas de Maipú",
            "Luján de Cuyo",
            "Parque San Martín"
        ],
        activities: [
            "Enoturismo",
            "Catas",
            "City tour"
        ],
        image: "/placeholder.svg?height=600&width=800",
        hasAirport: true
    },
    {
        id: "potrerillos",
        name: "Potrerillos",
        province: "Mendoza",
        description: "Embalse con deportes acuáticos y vistas a la cordillera.",
        attractions: [
            "Embalse Potrerillos",
            "Cordillera de los Andes",
            "Termas de Cacheuta"
        ],
        activities: [
            "Kayak",
            "Trekking",
            "Rafting"
        ],
        image: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "calingasta",
        name: "Calingasta (Barreal)",
        province: "San Juan",
        description: "Valle con vinos de altura, cielos limpios y observatorio astronómico.",
        attractions: [
            "Parque El Leoncito",
            "Pampa del Leoncito",
            "Bodegas de altura"
        ],
        activities: [
            "Astroturismo",
            "Cabalgatas",
            "Carrovelismo"
        ],
        image: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "san-juan",
        name: "San Juan",
        province: "San Juan",
        description: "Vinos Syrah, ruta del olivo y cultura cuyana.",
        attractions: [
            "Bodegas",
            "Ruta del Olivo",
            "Dique Ullum"
        ],
        activities: [
            "Enoturismo",
            "City tour",
            "Gastronomía"
        ],
        image: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "huaco",
        name: "Huaco (Jáchal)",
        province: "San Juan",
        description: "Quebrada histórica, arquitectura colonial y paisajes rocosos.",
        attractions: [
            "Quebrada de Huaco",
            "Molinos harineros",
            "Museo"
        ],
        activities: [
            "Senderismo",
            "Fotografía",
            "Historia"
        ],
        image: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "villa-union",
        name: "Villa Unión",
        province: "La Rioja",
        description: "Puerta de entrada al Parque Nacional Talampaya.",
        attractions: [
            "Talampaya",
            "Valle de la Luna",
            "Formaciones rocosas"
        ],
        activities: [
            "Excursiones",
            "Astroturismo",
            "Geoturismo"
        ],
        image: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "la-rioja",
        name: "La Rioja",
        province: "La Rioja",
        description: "Ruta del Torrontés, termas y cultura riojana.",
        attractions: [
            "Bodegas de Chilecito",
            "Termas Santa Teresita",
            "Centro histórico"
        ],
        activities: [
            "Enoturismo",
            "Termas",
            "City tour"
        ],
        image: "/placeholder.svg?height=600&width=800",
        hasAirport: true
    }
];
const accommodations = [
    // Ruta Costera
    {
        id: "domo-mar-plata",
        name: "Domo Atlántico",
        cityId: "mar-del-plata",
        city: "Mar del Plata",
        type: "domo",
        description: "Domo con vista panorámica al océano Atlántico, perfecto para surfistas.",
        amenities: [
            "Vista al mar",
            "WiFi",
            "Desayuno",
            "Estacionamiento",
            "Tabla de surf"
        ],
        pricePerNight: 85,
        rating: 4.8,
        reviewCount: 124,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/mardel.jpg?updatedAt=1763239749658"
        ],
        maxGuests: 4
    },
    {
        id: "domo-grutas",
        name: "Domo Aguas Cálidas",
        cityId: "las-grutas",
        city: "Las Grutas",
        type: "domo",
        description: "Domo ecológico cerca de las playas de aguas más cálidas de Argentina.",
        amenities: [
            "Cerca de la playa",
            "WiFi",
            "Cocina",
            "Parrilla"
        ],
        pricePerNight: 75,
        rating: 4.7,
        reviewCount: 89,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/Las-Grutas-Playa.webp?updatedAt=1763066851942"
        ],
        maxGuests: 3
    },
    {
        id: "domo-doradas",
        name: "Domo Silvestre",
        cityId: "playas-doradas",
        city: "Playas Doradas",
        type: "domo",
        description: "Desconexión total en playas vírgenes, ideal para contemplación.",
        amenities: [
            "Aislamiento",
            "Fogón",
            "Observación de estrellas"
        ],
        pricePerNight: 65,
        rating: 4.9,
        reviewCount: 56,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/playas-doradas-rio-negro.jpg?updatedAt=1763065075128"
        ],
        maxGuests: 2
    },
    {
        id: "domo-piramides",
        name: "Domo Ballenas",
        cityId: "puerto-piramides",
        city: "Puerto Pirámides",
        type: "domo",
        description: "Vista al mar desde donde podrás avistar ballenas en temporada.",
        amenities: [
            "Vista al mar",
            "Calefacción",
            "WiFi",
            "Tours incluidos"
        ],
        pricePerNight: 120,
        rating: 4.9,
        reviewCount: 203,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/ballena-paisaje-hotel-peninsula-valdes-puerto-madryn-chubut-argentina.jpeg?updatedAt=1763067101439"
        ],
        maxGuests: 4
    },
    {
        id: "domo-camarones",
        name: "Domo Pingüinero",
        cityId: "camarones",
        city: "Camarones",
        type: "domo",
        description: "Experiencia rústica cerca de la pingüinera de Cabo Dos Bahías.",
        amenities: [
            "Rústico",
            "Fogón",
            "Excursiones"
        ],
        pricePerNight: 55,
        rating: 4.6,
        reviewCount: 34,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/pinguinos.jpg?updatedAt=1763065075126"
        ],
        maxGuests: 2
    },
    {
        id: "domo-deseado",
        name: "Domo Explorador",
        cityId: "puerto-deseado",
        city: "Puerto Deseado",
        type: "domo",
        description: "Domo ecológico con enfoque en la historia de exploradores.",
        amenities: [
            "Ecológico",
            "WiFi",
            "Tours a la ría",
            "Biblioteca"
        ],
        pricePerNight: 70,
        rating: 4.7,
        reviewCount: 67,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/PtoDeseado27-secTurismo-1024x691-1.jpeg?updatedAt=1763239749483"
        ],
        maxGuests: 3
    },
    // Ruta Andina Norte
    {
        id: "domo-purmamarca",
        name: "Domo Siete Colores",
        cityId: "purmamarca",
        city: "Purmamarca",
        type: "domo",
        description: "Domo ecológico con vista panorámica al Cerro de los Siete Colores.",
        amenities: [
            "Vista al cerro",
            "Calefacción",
            "Desayuno andino",
            "WiFi"
        ],
        pricePerNight: 95,
        rating: 4.9,
        reviewCount: 187,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/cerroSieteColores.jpg?updatedAt=1763065075237"
        ],
        maxGuests: 4
    },
    {
        id: "domo-cachi",
        name: "Domo Calchaquí",
        cityId: "cachi",
        city: "Cachi",
        type: "domo",
        description: "Estilo rústico-montaña con vistas a los cerros nevados.",
        amenities: [
            "Vista a montañas",
            "Calefacción",
            "Fogón"
        ],
        pricePerNight: 80,
        rating: 4.8,
        reviewCount: 92,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/cachi.jpg?updatedAt=1763393475709"
        ],
        maxGuests: 3
    },
    {
        id: "domo-cafayate",
        name: "Domo del Vino",
        cityId: "cafayate",
        city: "Cafayate",
        type: "domo",
        description: "Integrado a viñedos con catas incluidas y gastronomía regional.",
        amenities: [
            "En viñedo",
            "Cata de vinos",
            "Gastronomía",
            "Piscina"
        ],
        pricePerNight: 130,
        rating: 4.9,
        reviewCount: 245,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/cafayate.jpg?updatedAt=1763393475742"
        ],
        maxGuests: 4
    },
    {
        id: "domo-fiambala",
        name: "Domo Termal",
        cityId: "fiambala",
        city: "Fiambalá",
        type: "domo",
        description: "Wellness y relax con acceso exclusivo a termas naturales.",
        amenities: [
            "Acceso a termas",
            "Spa",
            "Masajes",
            "Yoga"
        ],
        pricePerNight: 110,
        rating: 4.8,
        reviewCount: 156,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/fiambala.jpg?updatedAt=1763393475932"
        ],
        maxGuests: 2
    },
    {
        id: "domo-antofagasta",
        name: "Domo Lunar",
        cityId: "antofagasta-sierra",
        city: "Antofagasta de la Sierra",
        type: "domo",
        description: "Aventura extrema y astroturismo en paisajes lunares únicos.",
        amenities: [
            "Aislamiento total",
            "Telescopio",
            "Tours 4x4",
            "Guía"
        ],
        pricePerNight: 150,
        rating: 5.0,
        reviewCount: 78,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/antofagasta-de-la-sierra-6.jpg?updatedAt=1763393475697"
        ],
        maxGuests: 2
    },
    // Ruta Litoral
    {
        id: "domo-iguazu",
        name: "Domo Selva",
        cityId: "puerto-iguazu",
        city: "Puerto Iguazú",
        type: "domo",
        description: "Premium selvático con actividades de avistaje y gastronomía regional.",
        amenities: [
            "En la selva",
            "Pileta",
            "Tours Cataratas",
            "Spa"
        ],
        pricePerNight: 180,
        rating: 4.9,
        reviewCount: 312,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/cataratas1.jpg?updatedAt=1763065074428"
        ],
        maxGuests: 4
    },
    {
        id: "domo-san-ignacio",
        name: "Domo Jesuita",
        cityId: "san-ignacio",
        city: "San Ignacio",
        type: "domo",
        description: "Rústico cultural con experiencias históricas y talleres artesanales.",
        amenities: [
            "Tour ruinas",
            "Talleres",
            "Cultura guaraní"
        ],
        pricePerNight: 70,
        rating: 4.7,
        reviewCount: 89,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/ruinas-san-ignacio-misiones-28122021in5-2.jpg?updatedAt=1765076299659"
        ],
        maxGuests: 3
    },
    {
        id: "domo-ibera",
        name: "Domo Esteros",
        cityId: "colonia-pellegrini",
        city: "Colonia Pellegrini",
        type: "domo",
        description: "Ecológico elevado con vista a los esteros y actividades de naturaleza.",
        amenities: [
            "Vista a esteros",
            "Safari fotográfico",
            "Kayak",
            "Guía"
        ],
        pricePerNight: 140,
        rating: 4.9,
        reviewCount: 178,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/esterosibera.jpg?updatedAt=1763093784020"
        ],
        maxGuests: 4
    },
    {
        id: "domo-clorinda",
        name: "Domo Ribereño",
        cityId: "clorinda",
        city: "Clorinda",
        type: "domo",
        description: "Estilo ribereño con pesca deportiva y navegación.",
        amenities: [
            "Pesca",
            "Navegación",
            "Gastronomía local"
        ],
        pricePerNight: 60,
        rating: 4.5,
        reviewCount: 45,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/pn_rio_pilcomayo_ecosistema_ph_parquesnacionales.jpg?updatedAt=1763093783575"
        ],
        maxGuests: 3
    },
    {
        id: "domo-formosa",
        name: "Domo Urbano Eco",
        cityId: "formosa-capital",
        city: "Formosa",
        type: "domo",
        description: "Urbano ecológico con integración a circuitos culturales.",
        amenities: [
            "Céntrico",
            "Tours culturales",
            "WiFi",
            "AC"
        ],
        pricePerNight: 65,
        rating: 4.6,
        reviewCount: 52,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/portada-formosa-2.jpg?updatedAt=1765076405613"
        ],
        maxGuests: 2
    },
    // Ruta Patagónica
    {
        id: "domo-calafate",
        name: "Domo Glaciar",
        cityId: "el-calafate",
        city: "El Calafate",
        type: "domo",
        description: "Estilo glaciar con vista al lago y calefacción eficiente.",
        amenities: [
            "Vista al lago",
            "Calefacción",
            "Tours glaciar",
            "Desayuno"
        ],
        pricePerNight: 160,
        rating: 4.9,
        reviewCount: 289,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/calafate2.jpg?updatedAt=1763579749158"
        ],
        maxGuests: 4
    },
    {
        id: "domo-chalten",
        name: "Domo Fitz Roy",
        cityId: "el-chalten",
        city: "El Chaltén",
        type: "domo",
        description: "Aventura alpina con servicios para senderistas exigentes.",
        amenities: [
            "Vista Fitz Roy",
            "Equipo trekking",
            "Desayuno energético"
        ],
        pricePerNight: 140,
        rating: 4.9,
        reviewCount: 234,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/elchanten.webp?updatedAt=1763579562890"
        ],
        maxGuests: 3
    },
    {
        id: "domo-antiguos",
        name: "Domo Lago Buenos Aires",
        cityId: "los-antiguos",
        city: "Los Antiguos",
        type: "domo",
        description: "Lacustre con vista al lago más grande de Argentina.",
        amenities: [
            "Vista al lago",
            "Pesca",
            "Kayak",
            "Cerezas"
        ],
        pricePerNight: 85,
        rating: 4.7,
        reviewCount: 67,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/entrada-los-antiguos.webp?updatedAt=1763579562695"
        ],
        maxGuests: 3
    },
    {
        id: "domo-esquel",
        name: "Domo Alerces",
        cityId: "esquel",
        city: "Esquel",
        type: "domo",
        description: "Ecológico en bosque andino cerca del Parque Los Alerces.",
        amenities: [
            "En bosque",
            "Senderismo",
            "La Trochita"
        ],
        pricePerNight: 90,
        rating: 4.8,
        reviewCount: 112,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/esquel.jpg?updatedAt=1763579562652"
        ],
        maxGuests: 4
    },
    {
        id: "domo-bariloche",
        name: "Domo Nahuel Huapi",
        cityId: "bariloche",
        city: "San Carlos de Bariloche",
        type: "domo",
        description: "Estilo alpino integrado al bosque con vista al lago.",
        amenities: [
            "Vista lago",
            "Chocolate",
            "Cerveza artesanal",
            "Ski"
        ],
        pricePerNight: 170,
        rating: 4.9,
        reviewCount: 356,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/Cerro-catedral-san-carlos-de-Bariloche.jpeg?updatedAt=1763579562860"
        ],
        maxGuests: 4
    },
    {
        id: "domo-traful",
        name: "Domo Silencio",
        cityId: "villa-traful",
        city: "Villa Traful",
        type: "domo",
        description: "Contemplación y desconexión total junto al lago cristalino.",
        amenities: [
            "Silencio absoluto",
            "Bosque sumergido",
            "Kayak"
        ],
        pricePerNight: 100,
        rating: 5.0,
        reviewCount: 89,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/Playa-del-lago-Traful-1024x576.jpg?updatedAt=1763579562703"
        ],
        maxGuests: 2
    },
    {
        id: "domo-san-martin",
        name: "Domo Lácar",
        cityId: "san-martin-andes",
        city: "San Martín de los Andes",
        type: "domo",
        description: "Boutique de montaña con vista al lago y gastronomía patagónica.",
        amenities: [
            "Vista lago Lácar",
            "Gastronomía",
            "Spa",
            "Ski"
        ],
        pricePerNight: 155,
        rating: 4.9,
        reviewCount: 198,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/sanmartin2.jpg?updatedAt=1763579562659"
        ],
        maxGuests: 4
    },
    {
        id: "domo-lanin",
        name: "Domo Volcán",
        cityId: "volcan-lanin",
        city: "Junín de los Andes",
        type: "domo",
        description: "Aventura y astroturismo con vista al imponente Volcán Lanín.",
        amenities: [
            "Vista volcán",
            "Trekking",
            "Cultura mapuche",
            "Pesca"
        ],
        pricePerNight: 120,
        rating: 4.8,
        reviewCount: 145,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/sanmartin.jpg?updatedAt=1763579562845"
        ],
        maxGuests: 3
    },
    // Ruta Viñedos
    {
        id: "domo-mendoza",
        name: "Domo Malbec",
        cityId: "mendoza",
        city: "Mendoza",
        type: "domo",
        description: "En viñedos con spa y vista espectacular a la cordillera.",
        amenities: [
            "En viñedo",
            "Spa",
            "Catas",
            "Vista cordillera"
        ],
        pricePerNight: 200,
        rating: 4.9,
        reviewCount: 412,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/vacaciones-invierno-que-hacer-mendoza-vinedos-y-montana.webp?updatedAt=1763067641238"
        ],
        maxGuests: 4
    },
    {
        id: "domo-potrerillos",
        name: "Domo Embalse",
        cityId: "potrerillos",
        city: "Potrerillos",
        type: "domo",
        description: "Lacustre con orientación al embalse y deportes acuáticos.",
        amenities: [
            "Vista embalse",
            "Kayak",
            "Rafting",
            "Trekking"
        ],
        pricePerNight: 110,
        rating: 4.8,
        reviewCount: 156,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/potrerillos-y-como-ir-al-dique-de-mendoza_18294_202505121950310.jpg?updatedAt=1765077510424"
        ],
        maxGuests: 4
    },
    {
        id: "domo-barreal",
        name: "Domo Astronómico",
        cityId: "calingasta",
        city: "Calingasta",
        type: "domo",
        description: "Desértico y astronómico con cielos más limpios del país.",
        amenities: [
            "Telescopio",
            "Observatorio",
            "Cabalgatas",
            "Vino altura"
        ],
        pricePerNight: 130,
        rating: 5.0,
        reviewCount: 98,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/caliangasta.jpg?updatedAt=1765077509609"
        ],
        maxGuests: 2
    },
    {
        id: "domo-san-juan",
        name: "Domo Syrah",
        cityId: "san-juan",
        city: "San Juan",
        type: "domo",
        description: "Desértico moderno integrado al paisaje árido con enoturismo.",
        amenities: [
            "Moderno",
            "Bodegas",
            "Olivos",
            "Piscina"
        ],
        pricePerNight: 95,
        rating: 4.7,
        reviewCount: 78,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/sanmjuan.jpg?updatedAt=1765077510578"
        ],
        maxGuests: 3
    },
    {
        id: "domo-huaco",
        name: "Domo Colonial",
        cityId: "huaco",
        city: "Huaco",
        type: "domo",
        description: "Rústico cultural integrado al entorno histórico de la quebrada.",
        amenities: [
            "Histórico",
            "Senderismo",
            "Fotografía"
        ],
        pricePerNight: 55,
        rating: 4.6,
        reviewCount: 34,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/huaco.jpg?updatedAt=1765077510561"
        ],
        maxGuests: 2
    },
    {
        id: "domo-talampaya",
        name: "Domo Cañón",
        cityId: "villa-union",
        city: "Villa Unión",
        type: "domo",
        description: "Estilo desértico con orientación a formaciones rocosas de Talampaya.",
        amenities: [
            "Tours Talampaya",
            "Astroturismo",
            "Geoturismo"
        ],
        pricePerNight: 100,
        rating: 4.8,
        reviewCount: 123,
        images: [
            "https://ik.imagekit.io/ankxi835d/rutasimg/villaunion.jpg?updatedAt=1765077509398"
        ],
        maxGuests: 3
    },
    {
        id: "domo-rioja",
        name: "Domo Torrontés",
        cityId: "la-rioja",
        city: "La Rioja",
        type: "domo",
        description: "Urbano ecológico con integración a circuitos del vino y termas.",
        amenities: [
            "Céntrico",
            "Bodegas",
            "Termas",
            "WiFi"
        ],
        pricePerNight: 80,
        rating: 4.7,
        reviewCount: 89,
        images: [
            "/placeholder.svg?height=400&width=600"
        ],
        maxGuests: 3
    }
];
const routes = [
    {
        id: "costera-atlantica",
        name: "Ruta Costera Atlántica",
        slug: "costera-atlantica",
        description: "Recorré la costa atlántica argentina desde Mar del Plata hasta Puerto Deseado, descubriendo playas vírgenes, aguas cálidas y fauna marina única.",
        theme: "Naturaleza y costa",
        duration: "10-12 días",
        totalDistance: "1760 km",
        image: "/placeholder.svg?height=800&width=1200",
        highlights: [
            "Avistaje de ballenas",
            "Playas vírgenes",
            "Fauna marina",
            "Pingüineras"
        ],
        packPrice: 650,
        stops: [
            {
                cityId: "mar-del-plata",
                city: "Mar del Plata",
                province: "Buenos Aires",
                distanceFromPrevious: "Inicio",
                timeFromPrevious: "-",
                accommodationId: "domo-mar-plata",
                order: 1
            },
            {
                cityId: "las-grutas",
                city: "Las Grutas",
                province: "Río Negro",
                distanceFromPrevious: "880 km",
                timeFromPrevious: "10 h",
                accommodationId: "domo-grutas",
                order: 2
            },
            {
                cityId: "playas-doradas",
                city: "Playas Doradas",
                province: "Río Negro",
                distanceFromPrevious: "130 km",
                timeFromPrevious: "2 h",
                accommodationId: "domo-doradas",
                order: 3
            },
            {
                cityId: "puerto-piramides",
                city: "Puerto Pirámides",
                province: "Chubut",
                distanceFromPrevious: "180 km",
                timeFromPrevious: "3 h",
                accommodationId: "domo-piramides",
                order: 4
            },
            {
                cityId: "camarones",
                city: "Camarones",
                province: "Chubut",
                distanceFromPrevious: "270 km",
                timeFromPrevious: "3 h 30 min",
                accommodationId: "domo-camarones",
                order: 5
            },
            {
                cityId: "puerto-deseado",
                city: "Puerto Deseado",
                province: "Santa Cruz",
                distanceFromPrevious: "300 km",
                timeFromPrevious: "3 h 30 min",
                accommodationId: "domo-deseado",
                order: 6
            }
        ]
    },
    {
        id: "andina-norte",
        name: "Ruta Andina Norte",
        slug: "andina-norte",
        description: "Desde el colorido Purmamarca hasta los paisajes lunares de Antofagasta, atravesando valles calchaquíes, viñedos de altura y termas naturales.",
        theme: "Cultura andina y paisajes",
        duration: "8-10 días",
        totalDistance: "850 km",
        image: "/placeholder.svg?height=800&width=1200",
        highlights: [
            "Cerro de los Siete Colores",
            "Vinos de altura",
            "Termas naturales",
            "Astroturismo"
        ],
        packPrice: 720,
        stops: [
            {
                cityId: "purmamarca",
                city: "Purmamarca",
                province: "Jujuy",
                distanceFromPrevious: "Inicio",
                timeFromPrevious: "-",
                accommodationId: "domo-purmamarca",
                order: 1
            },
            {
                cityId: "cachi",
                city: "Cachi",
                province: "Salta",
                distanceFromPrevious: "250 km",
                timeFromPrevious: "5 h",
                accommodationId: "domo-cachi",
                order: 2
            },
            {
                cityId: "cafayate",
                city: "Cafayate",
                province: "Salta",
                distanceFromPrevious: "160 km",
                timeFromPrevious: "3 h",
                accommodationId: "domo-cafayate",
                order: 3
            },
            {
                cityId: "fiambala",
                city: "Fiambalá",
                province: "Catamarca",
                distanceFromPrevious: "300 km",
                timeFromPrevious: "5 h",
                accommodationId: "domo-fiambala",
                order: 4
            },
            {
                cityId: "antofagasta-sierra",
                city: "Antofagasta de la Sierra",
                province: "Catamarca",
                distanceFromPrevious: "200 km",
                timeFromPrevious: "4 h",
                accommodationId: "domo-antofagasta",
                order: 5
            }
        ]
    },
    {
        id: "litoral",
        name: "Ruta Litoral",
        slug: "litoral",
        description: "Cataratas del Iguazú, ruinas jesuíticas, esteros del Iberá y ríos majestuosos. Una inmersión en la naturaleza más exuberante de Argentina.",
        theme: "Selva y humedales",
        duration: "9-11 días",
        totalDistance: "1100 km",
        image: "/placeholder.svg?height=800&width=1200",
        highlights: [
            "Cataratas del Iguazú",
            "Esteros del Iberá",
            "Ruinas jesuíticas",
            "Fauna silvestre"
        ],
        packPrice: 780,
        stops: [
            {
                cityId: "puerto-iguazu",
                city: "Puerto Iguazú",
                province: "Misiones",
                distanceFromPrevious: "Inicio",
                timeFromPrevious: "-",
                accommodationId: "domo-iguazu",
                order: 1
            },
            {
                cityId: "san-ignacio",
                city: "San Ignacio",
                province: "Misiones",
                distanceFromPrevious: "250 km",
                timeFromPrevious: "3 h",
                accommodationId: "domo-san-ignacio",
                order: 2
            },
            {
                cityId: "colonia-pellegrini",
                city: "Colonia Pellegrini",
                province: "Corrientes",
                distanceFromPrevious: "400 km",
                timeFromPrevious: "5 h",
                accommodationId: "domo-ibera",
                order: 3
            },
            {
                cityId: "clorinda",
                city: "Clorinda",
                province: "Formosa",
                distanceFromPrevious: "380 km",
                timeFromPrevious: "6 h",
                accommodationId: "domo-clorinda",
                order: 4
            },
            {
                cityId: "formosa-capital",
                city: "Formosa",
                province: "Formosa",
                distanceFromPrevious: "120 km",
                timeFromPrevious: "1 h",
                accommodationId: "domo-formosa",
                order: 5
            }
        ]
    },
    {
        id: "patagonica",
        name: "Ruta Patagónica",
        slug: "patagonica",
        description: "La aventura definitiva desde los glaciares hasta el Volcán Lanín, atravesando la Ruta de los Siete Lagos y los paisajes más impresionantes del mundo.",
        theme: "Aventura y glaciares",
        duration: "14-18 días",
        totalDistance: "2200 km",
        image: "/placeholder.svg?height=800&width=1200",
        highlights: [
            "Glaciar Perito Moreno",
            "Fitz Roy",
            "Ruta de los Siete Lagos",
            "Volcán Lanín"
        ],
        packPrice: 1250,
        stops: [
            {
                cityId: "el-calafate",
                city: "El Calafate",
                province: "Santa Cruz",
                distanceFromPrevious: "Inicio",
                timeFromPrevious: "-",
                accommodationId: "domo-calafate",
                order: 1
            },
            {
                cityId: "el-chalten",
                city: "El Chaltén",
                province: "Santa Cruz",
                distanceFromPrevious: "220 km",
                timeFromPrevious: "3 h",
                accommodationId: "domo-chalten",
                order: 2
            },
            {
                cityId: "los-antiguos",
                city: "Los Antiguos",
                province: "Santa Cruz",
                distanceFromPrevious: "580 km",
                timeFromPrevious: "10 h",
                accommodationId: "domo-antiguos",
                order: 3
            },
            {
                cityId: "esquel",
                city: "Esquel",
                province: "Chubut",
                distanceFromPrevious: "450 km",
                timeFromPrevious: "6 h",
                accommodationId: "domo-esquel",
                order: 4
            },
            {
                cityId: "bariloche",
                city: "San Carlos de Bariloche",
                province: "Río Negro",
                distanceFromPrevious: "290 km",
                timeFromPrevious: "3 h",
                accommodationId: "domo-bariloche",
                order: 5
            },
            {
                cityId: "villa-traful",
                city: "Villa Traful",
                province: "Neuquén",
                distanceFromPrevious: "80 km",
                timeFromPrevious: "2 h",
                accommodationId: "domo-traful",
                order: 6
            },
            {
                cityId: "san-martin-andes",
                city: "San Martín de los Andes",
                province: "Neuquén",
                distanceFromPrevious: "100 km",
                timeFromPrevious: "2 h",
                accommodationId: "domo-san-martin",
                order: 7
            },
            {
                cityId: "volcan-lanin",
                city: "Volcán Lanín",
                province: "Neuquén",
                distanceFromPrevious: "60 km",
                timeFromPrevious: "45 min",
                accommodationId: "domo-lanin",
                order: 8
            }
        ]
    },
    {
        id: "vinedos",
        name: "Ruta de los Viñedos",
        slug: "vinedos",
        description: "Del Malbec mendocino al Torrontés riojano, pasando por bodegas de altura, observatorios astronómicos y el impresionante Talampaya.",
        theme: "Enoturismo y cordillera",
        duration: "10-12 días",
        totalDistance: "1100 km",
        image: "/placeholder.svg?height=800&width=1200",
        highlights: [
            "Bodegas de Mendoza",
            "Talampaya",
            "Astroturismo",
            "Termas"
        ],
        packPrice: 850,
        stops: [
            {
                cityId: "mendoza",
                city: "Mendoza",
                province: "Mendoza",
                distanceFromPrevious: "Inicio",
                timeFromPrevious: "-",
                accommodationId: "domo-mendoza",
                order: 1
            },
            {
                cityId: "potrerillos",
                city: "Potrerillos",
                province: "Mendoza",
                distanceFromPrevious: "70 km",
                timeFromPrevious: "1 h",
                accommodationId: "domo-potrerillos",
                order: 2
            },
            {
                cityId: "calingasta",
                city: "Barreal",
                province: "San Juan",
                distanceFromPrevious: "230 km",
                timeFromPrevious: "4 h",
                accommodationId: "domo-barreal",
                order: 3
            },
            {
                cityId: "san-juan",
                city: "San Juan",
                province: "San Juan",
                distanceFromPrevious: "180 km",
                timeFromPrevious: "3 h",
                accommodationId: "domo-san-juan",
                order: 4
            },
            {
                cityId: "huaco",
                city: "Huaco",
                province: "San Juan",
                distanceFromPrevious: "160 km",
                timeFromPrevious: "2 h 30 min",
                accommodationId: "domo-huaco",
                order: 5
            },
            {
                cityId: "villa-union",
                city: "Villa Unión",
                province: "La Rioja",
                distanceFromPrevious: "120 km",
                timeFromPrevious: "2 h",
                accommodationId: "domo-talampaya",
                order: 6
            },
            {
                cityId: "la-rioja",
                city: "La Rioja",
                province: "La Rioja",
                distanceFromPrevious: "270 km",
                timeFromPrevious: "4 h",
                accommodationId: "domo-rioja",
                order: 7
            }
        ]
    }
];
function getRoute(slug) {
    return routes.find((r)=>r.slug === slug);
}
function getAccommodation(id) {
    return accommodations.find((a)=>a.id === id);
}
function getCity(id) {
    return cities.find((c)=>c.id === id);
}
function getAccommodationsByRoute(routeSlug) {
    const route = getRoute(routeSlug);
    if (!route) return [];
    return route.stops.map((stop)=>getAccommodation(stop.accommodationId)).filter(Boolean);
}
}),
"[project]/components/home/routes-carousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoutesCarousel",
    ()=>RoutesCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane.js [app-ssr] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const routeImages = {
    "costera-atlantica": "/puerto-piramides-whales-peninsula-valdes-argentina.jpg",
    "andina-norte": "/purmamarca-seven-colors-mountain-jujuy-argentina.jpg",
    litoral: "/iguazu-falls-waterfall-jungle-argentina.jpg",
    patagonica: "https://ik.imagekit.io/ankxi835d/rutasimg/glaciares.jpg?updatedAt=1763065075199",
    vinedos: "/cafayate-vineyards-wine-region-salta-argentina.jpg"
};
function RoutesCarousel() {
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToIndex = (index)=>{
        const newIndex = Math.max(0, Math.min(index, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routes"].length - 1));
        setActiveIndex(newIndex);
        if (carouselRef.current) {
            const cardWidth = carouselRef.current.scrollWidth / __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routes"].length;
            carouselRef.current.scrollTo({
                left: cardWidth * newIndex,
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-end justify-between mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-serif text-3xl md:text-4xl text-foreground mb-2",
                                    children: "Nuestras Rutas"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/routes-carousel.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground",
                                    children: "5 experiencias únicas para descubrir Argentina"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/routes-carousel.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/routes-carousel.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "icon",
                                    onClick: ()=>scrollToIndex(activeIndex - 1),
                                    disabled: activeIndex === 0,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/routes-carousel.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/routes-carousel.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "icon",
                                    onClick: ()=>scrollToIndex(activeIndex + 1),
                                    disabled: activeIndex === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routes"].length - 1,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/routes-carousel.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/routes-carousel.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/routes-carousel.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/routes-carousel.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: carouselRef,
                    className: "flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4",
                    style: {
                        scrollbarWidth: "none",
                        msOverflowStyle: "none"
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routes"].map((route, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] snap-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[480px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: routeImages[route.slug] || "/placeholder.svg?height=600&width=400",
                                                alt: route.name,
                                                fill: true,
                                                className: "object-cover transition-transform duration-500 group-hover:scale-105"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/routes-carousel.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/routes-carousel.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/routes-carousel.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex flex-col justify-end p-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-primary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/routes-carousel.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: "Aeropuerto disponible"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/routes-carousel.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/routes-carousel.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-serif text-2xl text-background",
                                                    children: route.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/routes-carousel.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-background/80 text-sm line-clamp-2",
                                                    children: route.description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/routes-carousel.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-4 text-background/70 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/routes-carousel.tsx",
                                                                    lineNumber: 94,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        route.stops.length,
                                                                        " destinos"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/home/routes-carousel.tsx",
                                                                    lineNumber: 95,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/home/routes-carousel.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/routes-carousel.tsx",
                                                                    lineNumber: 98,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: route.duration
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/routes-carousel.tsx",
                                                                    lineNumber: 99,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/home/routes-carousel.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/routes-carousel.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between pt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-background/60 text-sm",
                                                                    children: "Pack desde"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/routes-carousel.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-accent font-serif text-2xl",
                                                                    children: [
                                                                        "USD ",
                                                                        route.packPrice
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/home/routes-carousel.tsx",
                                                                    lineNumber: 106,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/home/routes-carousel.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/rutas/${route.slug}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                className: "bg-primary text-primary-foreground hover:bg-primary/90",
                                                                children: "Explorar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home/routes-carousel.tsx",
                                                                lineNumber: 109,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/routes-carousel.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/routes-carousel.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/routes-carousel.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/routes-carousel.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/routes-carousel.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this)
                        }, route.id, false, {
                            fileName: "[project]/components/home/routes-carousel.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/routes-carousel.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-2 mt-6 md:hidden",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routes"].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>scrollToIndex(index),
                            className: `w-2 h-2 rounded-full transition-colors ${index === activeIndex ? "bg-primary" : "bg-border"}`
                        }, index, false, {
                            fileName: "[project]/components/home/routes-carousel.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/routes-carousel.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/routes-carousel.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/routes-carousel.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_f2a2cdfb._.js.map