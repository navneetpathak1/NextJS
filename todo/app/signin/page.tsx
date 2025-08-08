"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSignin = async () => {
        try {
            await axios.post("http://localhost:3000/api/v1/signin", {
                name,
                password
            });
            router.push("/signup");
        } catch (error) {
            console.error("Signin failed:", error);
        }
    };

    return (
        <div className="flex flex-col border items-center justify-center gap-2 p-4 w-full max-w-sm mx-auto">
            <input
                className="border p-2 w-full"
                type="text"
                placeholder="Username"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <input
                className="border p-2 w-full"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={handleSignin}
            >
                Signin
            </button>
            </div>
    );
}
