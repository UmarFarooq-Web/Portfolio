import React, { useEffect, useRef } from 'react'

const ParticleBackground = ({}) => {
    const canvasRef = useRef(null);
    let ParticleCount = 0;


    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return

        const ctx = canvas.getContext('2d');

        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if(window.innerWidth <= 640){
                ParticleCount = 30;
            }else if(window.innerWidth <= 768){
                ParticleCount = 60
            }
            else{
                ParticleCount = 100
            }
            
        }

        resizeCanvas();

        window.addEventListener('resize', resizeCanvas);


        const Particles = [];

        const createParticle = () => {

            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: (Math.random() * 2) + 0.5,
                life: 0,
                maxLife: Math.random() * 200 + 100
            }

        }

        for (let i = 0; i < ParticleCount; i++) {
            Particles.push(createParticle());
        }


        const animate = () => {
            ctx.fillStyle = 'rgba(10, 15, 35, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            Particles.forEach((particle, index) => {
                particle.x += particle.vx
                particle.y += particle.vy
                particle.life++


                if (particle.x < 0) particle.x = 0;
                if (particle.x > canvas.width) particle.x = canvas.width;
                if (particle.y < 0) particle.y = 0;
                if (particle.y > canvas.height) particle.y = canvas.height;


                const opacity = 1 - (particle.life / particle.maxLife)


                const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 3)

                gradient.addColorStop(0, `rgba(0, 255, 255, ${opacity * 0.8})`);
                gradient.addColorStop(0.5, `rgba(191, 0, 255, ${opacity * 0.4})`);
                gradient.addColorStop(1, `rgba(0, 255, 255, 0)`);

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
                ctx.fill();


                if (particle.life >= particle.maxLife) Particles[index] = createParticle()
            })

            for (let i = 0; i < Particles.length; i++) {
                for (let j = 0; j < Particles.length; j++) {

                    const dx = Particles[i].x - Particles[j].x
                    const dy = Particles[i].y - Particles[j].y

                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < ParticleCount) {
                        const opacity = (1 - distance / ParticleCount) * 0.2;
                        ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(Particles[i].x, Particles[i].y);
                        ctx.lineTo(Particles[j].x, Particles[j].y);
                        ctx.stroke();
                    }


                }
            }



            requestAnimationFrame(animate)
        }

        animate();


    }, [])



    return (
        <canvas ref={canvasRef} className='fixed inset-0 pointer-events-none z-0' />
    )
}

export default ParticleBackground