import React, { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        let mouse = { x: null, y: null, targetX: width / 2, targetY: height / 2 };

        const handleMouseMove = (e) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        // Fewer, cleaner particles for a professional look
        const particles = Array.from({ length: 100 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.6, // Slow, elegant drift
            vy: (Math.random() - 0.5) * 0.6,
            size: Math.random() * 2 + 1.5,
        }));

        const render = () => {
            mouse.x += (mouse.targetX - mouse.x) * 0.05;
            mouse.y += (mouse.targetY - mouse.y) * 0.05;

            // 1. Base background
            ctx.fillStyle = '#f8faf8';
            ctx.fillRect(0, 0, width, height);

            // 2. Top-right radial gradient accent
            const gradientX = width * 0.80;
            const gradientY = height * 0.06;
            const maxRadius = Math.max(width, height) * 0.34;
            const bgRadial = ctx.createRadialGradient(gradientX, gradientY, 0, gradientX, gradientY, maxRadius);
            bgRadial.addColorStop(0, 'rgba(54, 180, 71, 0.18)');
            bgRadial.addColorStop(1, 'transparent');
            ctx.fillStyle = bgRadial;
            ctx.fillRect(0, 0, width, height);

            // 3. Mouse interactive cursor glow
            const cursorGlow = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, 150);
            cursorGlow.addColorStop(0, 'rgba(54, 180, 70, 0.12)');
            cursorGlow.addColorStop(1, 'transparent');
            ctx.fillStyle = cursorGlow;
            ctx.fillRect(0, 0, width, height);

            // 4. Update and draw particles & connecting web lines
            particles.forEach((p, index) => {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges smoothly
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Mouse interaction (gentle push)
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    const force = (120 - dist) / 120;
                    p.x -= (dx / dist) * force * 1.5;
                    p.y -= (dy / dist) * force * 1.5;
                }

                // Draw particle node
                ctx.fillStyle = 'rgba(54, 180, 71, 0.31)';
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Connect particles with lines if they are close to each other (Constellation effect)
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const ndx = p.x - p2.x;
                    const ndy = p.y - p2.y;
                    const nDist = Math.sqrt(ndx * ndx + ndy * ndy);

                    if (nDist < 100) {
                        ctx.strokeStyle = `rgba(54, 180, 71, ${1 * (1 - nDist / 100)})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
}