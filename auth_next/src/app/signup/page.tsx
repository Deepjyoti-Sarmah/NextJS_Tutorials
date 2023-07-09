"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        userName: "",
    });

    const onSignUp = async () => { };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>SignUp</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input
                className="p-2 border border-gray-300       
                    rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                value={user.userName}
                onChange={(e) => setUser({ ...user, userName: e.target.value })}
                placeholder="username"
            />
            <label htmlFor="email">email</label>
            <input
                className="p-2 border border-gray-300 
                    rounded-lg mb-4 focus:outline-none 
                    focus:border-gray-600"
                id="username"
                type="text"
                value={user.email}
                onChange={(e) =>
                    setUser({
                        ...user,
                        email: e.target.value,
                    })
                }
                placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input
                className="p-2 border border-gray-300 
                    rounded-lg mb-4 focus:outline-none 
                    focus:border-gray-600"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) =>
                    setUser({
                        ...user,
                        password: e.target.value,
                    })
                }
                placeholder="password"
            />
            <button
                onClick={onSignUp}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Signup here</button>
            <Link href="/login">Visit login page</Link>
        </div>
    );
}
// hritesh0141@gmail.com