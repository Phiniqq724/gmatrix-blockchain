"use client";
import { AdminSidebar, UserSidebar } from "@/app/components/Sidebar";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const disablePathName = ["/admin/login", "/admin/addBooks", "/admin/adminDashboard", "/admin/bookData", "/admin/userData"];

export function AdminDisablePathName() {
  const pathname = usePathname();
  return <>{!disablePathName.includes(pathname) ? <UserSidebar /> : <AdminSidebar />}</>;
}
