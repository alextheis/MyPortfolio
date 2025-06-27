import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
    const[stars, setStars] = useState([])
    const[meteors, setMeteors] = useState([])

    useEffect(() => {
        generateStars();
        generateMeteors();
    }, [])

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        )

        const newStars = []

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: `star-${i}`, // Unique ID with prefix
                size: Math.random() * 3 + 1, 
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }

        setStars(newStars)
    }

    const generateMeteors = () => {
        const numberOfMeteors = 8
        const newMeteors = []

        // Fixed: Changed numberOfStars to numberOfMeteors
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: `meteor-${i}`, // Unique ID with prefix
                size: Math.random() * 2 + 1, 
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 10, // Reduced delay range
                animationDuration: Math.random() * 2 + 4, // Longer duration for smoother movement
            })
        }

        setMeteors(newMeteors)
    }

    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0"> 
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: star.size + "px", 
                height: star.size + "px", 
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",

            }}/>
        ))}

        {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor" style={{
                width: meteor.size * 50 + "px", 
                height: meteor.size * 2 + "px", 
                left: meteor.x + "%",
                top: meteor.y + "%",
                transform: 'rotate(215deg)', // Ensure all meteors are tilted
                animation: `meteor ${meteor.animationDuration}s linear infinite ${meteor.delay}s`,
            }}/>
        ))}
    </div>;
}