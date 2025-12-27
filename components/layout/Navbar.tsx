"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="fixed left-64 right-0 top-0 z-30 h-20 border-b border-gray-200 bg-white">
      <div className="flex h-full items-center justify-between px-8">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900">Scolarité</h1>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un étudiant, une UE..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 pl-10 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* User Profile & Notifications */}
        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <button className="relative rounded-full p-2 text-gray-600 hover:bg-gray-100">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            {/* Notification Badge */}
            <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
              {session?.user?.name
                ? session.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2)
                : "SG"}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900">
                {session?.user?.name || "S. Modou GUEYE"}
              </span>
              <span className="text-xs text-gray-500">Administrateur</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
