import { useEffect, useRef } from 'react';
import styles from '../../styles/SwirlMouseEffect.module.css';

const SwirlMouseEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    let hue = 0;

    const mouse = {
      x: undefined,
      y: undefined,
    };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
      for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle());
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 20 + 5;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${hue}, 100%, 50%)`;
        this.history = [{ x: this.x, y: this.y }];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > 10) {
          this.history.shift();
        }
        this.size -= 0.05;
      }
      draw() {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size;
        ctx.beginPath();
        for (let i = 0; i < this.history.length - 1; i++) {
          ctx.moveTo(this.history[i].x, this.history[i].y);
          ctx.lineTo(this.history[i + 1].x, this.history[i + 1].y);
        }
        ctx.stroke();
      }
    }

    const handleParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].size <= 0.3) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      hue += 2;
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas}></canvas>;
};

export default SwirlMouseEffect;
