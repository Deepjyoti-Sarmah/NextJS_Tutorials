
"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function ForgotPasswordPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onForgotPassword = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/forgotPassword", user);
            console.log("Email sent", response.data);
            // toast.success("Login success");
            // router.push("/profile");
        } catch (error: any) {
            // console.log("Login failed", error.message);
            // toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? "Processing" : "Forgot Password"}</h1>
            <hr />

            <label htmlFor="email">email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />
            <button
                onClick={onForgotPassword}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Submit</button>
            {/* <Link href="/signup">Visit Signup page</Link> */}
        </div>
    )

}