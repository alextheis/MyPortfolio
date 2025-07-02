import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false); // New state to track dark mode

    useEffect(() => {
        // Function to check if dark mode is active
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        };

        // Initial check on component mount
        checkDarkMode();

        // Observe changes to the 'class' attribute of the html element
        // This is crucial for reacting to theme changes (e.g., from ThemeToggle)
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        // Cleanup observer when component unmounts
        return () => observer.disconnect();
    }, []); // Empty dependency array means this effect runs once on mount

    useEffect(() => {
        generateStars();
        // Generate meteors only if in dark mode, otherwise clear them
        if (isDarkMode) {
            generateMeteors();
        } else {
            setMeteors([]); // Clear meteors if not in dark mode
        }

        const handleResize = () => {
            generateStars();
            // Re-generate meteors on resize only if in dark mode
            if (isDarkMode) {
                generateMeteors();
            } else {
                setMeteors([]);
            }
        };

        window.addEventListener('resize', handleResize);
        // Cleanup resize listener
        return () => window.removeEventListener('resize', handleResize);
    }, [isDarkMode]); // This effect re-runs when isDarkMode changes

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = Array.from({ length: numberOfStars }, (_, i) => ({
            id: `star-${i}`,
            size: Math.random() * 3 + 1,
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 4 + 2,
        }));

        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 8; // You can adjust this number

        const newMeteors = Array.from({ length: numberOfMeteors }, (_, i) => ({
            id: `meteor-${i}`,
            size: Math.random() * 2 + 1,
            x: Math.random() * 100,
            y: Math.random() * 20, // Meteors typically appear from the top
            delay: Math.random() * 10,
            animationDuration: Math.random() * 2 + 4,
        }));

        setMeteors(newMeteors);
    };

    return (
        <>
            <style>{`
                @keyframes twinkle {
                    0% { opacity: 0.3; }
                    50% { opacity: 1; }
                    100% { opacity: 0.3; }
                }

                @keyframes meteor {
                    0% {
                        transform: translateX(-100px) translateY(-100px) rotate(215deg);
                        opacity: 1;
                    }
                    70% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(100vw) translateY(100vh) rotate(215deg);
                        opacity: 0;
                    }
                }

                .star {
                    position: absolute;
                    background: white;
                    border-radius: 50%;
                    box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
                    animation: twinkle 3s ease-in-out infinite;
                }

                /* The .meteor class will only be applied if meteors are generated and rendered */
                .meteor {
                    position: absolute;
                    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.8), transparent);
                    border-radius: 50px;
                    box-shadow: 0 0 10px rgba(139, 92, 246, 0.6);
                    opacity: 0; /* Initial opacity for the animation to fade in */
                }

                .meteor::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    width: 80px;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.8), transparent);
                }

                .meteor::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 4px;
                    height: 4px;
                    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 70%);
                    border-radius: 50%;
                }
            `}</style>

            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {/* Render stars always */}
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="star"
                        style={{
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            opacity: star.opacity,
                            animationDuration: `${star.animationDuration}s`,
                        }}
                    />
                ))}

                {/* Conditionally render meteors only if isDarkMode is true */}
                {isDarkMode && meteors.map((meteor) => (
                    <div
                        key={meteor.id}
                        className="meteor"
                        style={{
                            width: `${meteor.size * 50}px`,
                            height: `${meteor.size * 2}px`,
                            left: `${meteor.x}%`,
                            top: `${meteor.y}%`,
                            animation: `meteor ${meteor.animationDuration}s linear infinite`,
                            animationDelay: `${meteor.delay}s`,
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default StarBackground;