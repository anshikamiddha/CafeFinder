import React from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { House, Eraser,FileText,Hash,Image,Scissors,SquarePen,Users } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: '/ai', label: 'Dashboard', Icon: House },
  { to: '/ai/WriteArticle', label: 'Write Article', Icon: SquarePen },
  { to: '/ai/BlogTitles', label: 'Blog Titles', Icon: Hash },
  { to: '/ai/generateImage', label: 'Generate Images', Icon: Image },
  { to: '/ai/Removebackground', label: 'Remove Background', Icon: Eraser },
  { to: '/ai/RemoveObject', label: 'Remove Object', Icon: Scissors },
  { to: '/ai/ReviewResume', label: 'Review Resume', Icon: FileText },
  { to: '/ai/Community', label: 'Community', Icon: Users },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user, isSignedIn, isLoaded } = useUser();
  const { signOut, openUserProfile } = useClerk();

  if (!isLoaded) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${
        sidebar ? "translate-x-0" : "max-sm:-translate-x-full"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="my-7 w-full text-center">
        {isSignedIn ? (
          <>
            <img
              src={user.imageUrl}
              alt="user avatar"
              className="w-20 h-20 rounded-full mx-auto cursor-pointer"
            />
            <h1 className="mt-2 text-lg font-semibold">{user.fullName}</h1>
          </>
        ) : (
          <p className="text-gray-500">Not signed in</p>
        )}
        <div className="px-6 mt-5 text-sm text-gray-600 font-medium">
      {navItems.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}

          end={to === '/ai'}
          onClick={() => setSidebar(false)}
          className={({ isActive }) =>
            `px-3.5 py-2.5 flex items-center gap-3 rounded 
            ${isActive ? 'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white' : ''}`
          }
        >
          {({ isActive }) => (
            <>
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : ''}`} />
              {label}
            </>
          )}
        </NavLink>
      ))}
    </div>
      </div>

      {isSignedIn && (
        <div className="w-full px-4 pb-4">
          <button
            onClick={() => openUserProfile()}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded mb-2"
          >
            Profile
          </button>
          <button
            onClick={() => signOut()}
            className="w-full bg-primary hover:bg-red-600 text-white py-2 rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
