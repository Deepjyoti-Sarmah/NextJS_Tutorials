"use client"

import axios from "axios";
import exp from "constants";
import Link from "next/link";
import React, {useState, useEffect} from "react";

export default function verifyEmailPage() {

    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post('/api/users/verifyemail', {token});
            setVerified(true);
        } catch (error: any) {
            setError(true);
            console.log(error.response.data);
            
        }
    }

    useEffect(() => {
        
    }, [])

    useEffect(() => {
        if(token.length > 0) {
            verifyUserEmail();
        }
    },[token]);
}