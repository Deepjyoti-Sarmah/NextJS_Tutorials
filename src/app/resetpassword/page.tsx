"use client"
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ResetPasswordPage() {

    return (
        <div>
            <h1>Reset Password</h1>
            <label htmlFor="password">New Password</label>
            <input type="text" />
            <label htmlFor="password">Confirm Password</label>
            <input type="text" />
            <button>Set New Password</button>

        </div>
    )
}