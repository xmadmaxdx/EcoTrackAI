import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });


export const createUser = async (newUserEmail, otherUserData) => {
  try {
    const normalizedEmail = newUserEmail.trim().toLowerCase();

    // Debug: Log existing users with the same email
    const existingUser = await db.users.findFirst({
      where: { email: normalizedEmail },
    });

    console.log("Existing User Check:", existingUser);

    if (existingUser) {
      return { success: true, message: "User already exists", user: existingUser };
    }

    // Debug: Log before creating user
    console.log("Creating new user:", normalizedEmail);

    const createdUser = await db.users.create({
      data: {
        email: normalizedEmail,
        ...otherUserData,
      },
    });

    return { success: true, message: "User created successfully", user: createdUser };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, message: error.message };
  }
};


