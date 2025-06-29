"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ src, width, height, index} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const imageVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.8, 
            y: 20 
        },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: {
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    }

    const hoverVariants = {
        hover: {
            scale: 1.1,
            y: -5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            whileHover="hover"
            className="relative group cursor-pointer"
        >
            <motion.div
                variants={hoverVariants}
                className="relative p-4 rounded-2xl bg-gradient-to-br from-surface/30 to-surface/10 backdrop-blur-sm border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
                <Image
                    src={src}
                    width={width}
                    height={height}
                    alt='skill image'
                    className="transition-all duration-300 group-hover:drop-shadow-2xl"
                />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
        </motion.div>
    )
}

export default SkillDataProvider