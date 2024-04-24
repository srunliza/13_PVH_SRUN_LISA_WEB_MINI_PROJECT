"use server"
import { registerService } from "@/service/auth.service";
import { redirect } from "next/navigation";

// server action for register
export async function handleRegister(userInfo) {
  const newUserInfo = {
    firstname: userInfo.get("firstname"),
    lastname: userInfo.get("lastname"),
    gender: userInfo.get("gender"),
    email: userInfo.get("email"),
    password: userInfo.get("password"),
  };
  const res = await registerService(newUserInfo);
  if (res.status === 200) {
    redirect("/login");
  }
}