"use client"

import { useEffect, useState } from "react"

import Image from 'next/image';

export default function Navigation() {
    return (
        <div className="flex justify-between items-center bg-[#000000]">
            <Image
                src="/Logo.png" // Pfad relativ zum `public`-Ordner
                alt="Beschreibung des Bildes"
                width={150} // Breite des Bildes
                height={150} // Höhe des Bildes
            />

            <button
                className="text-[14px] font-bold mr-12
                p-2 px-4 rounded-md text-[#ededed]
                border-2 border-[#242424]"
            >Get Started</button>
        </div> 
    )
}
