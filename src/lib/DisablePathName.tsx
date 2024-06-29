"use client";
import { AdminSidebar, UserSidebar } from "@/app/components/Sidebar";
import { usePathname } from "next/navigation";
import React from "react";

const disablePathName = ["/admin/login", "/admin/addBooks", "/admin/adminDashboard", "/admin/bookData", "/admin/userData"];

const bookDetailPathPattern = /^\/admin\/bookData\/book\/\d+$/;
const userDetailPathPattern = /^\/admin\/userData\/user\/\d+$/;

export function AdminDisablePathName() {
  const pathname = usePathname();

  const isDisabledPath = disablePathName.includes(pathname) || bookDetailPathPattern.test(pathname) || userDetailPathPattern.test(pathname);

  return <>{isDisabledPath ? <AdminSidebar /> : <UserSidebar />}</>;
}
