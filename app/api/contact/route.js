import { db } from "@/lib/firebase";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Name, email, subject, and message are required." },
                { status: 400 }
            );
        }

        // Save to Firestore
        const docRef = await db.collection("contacts").add({
            name,
            email,
            phone: phone || "",
            subject,
            message,
            createdAt: new Date().toISOString(),
            read: false,
        });

        return NextResponse.json(
            { success: true, id: docRef.id },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error saving contact:", error);
        return NextResponse.json(
            { error: "Failed to save message. Please try again." },
            { status: 500 }
        );
    }
}
