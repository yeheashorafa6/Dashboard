import Link from "next/link";
import React from "react";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold , PiExam } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { MdOutlineSubject , MdPlayLesson , MdAssignment ,MdDriveFileRenameOutline } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUserCheck , FaHome  } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { TbMessage2 } from "react-icons/tb";
import { GrAnnounce } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings , IoIosLogOut  } from "react-icons/io";
import { role } from "@/lib/data";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <FaHome size={25}/>,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <GiTeacher size={25}/>,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <PiStudentBold size={25}/>,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: <RiParentFill size={25}/>,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: <MdOutlineSubject size={25}/>,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: <SiGoogleclassroom size={25}/>,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: <MdPlayLesson size={25}/>,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: <PiExam size={25}/>,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdAssignment size={25}/>,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdDriveFileRenameOutline size={25}/>,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaUserCheck size={25}/>,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <IoCalendarOutline size={25}/>,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <TbMessage2 size={25}/>,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <GrAnnounce size={25}/>,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <CgProfile size={25}/>,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <IoIosSettings size={25}/>,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <IoIosLogOut size={25}/>,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

function Menu() {
  return (
    <div className="mt-4 text-sm md:text-md">
      {menuItems.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <span className="font-medium text-gray-500 my-4">{item.title}</span>
          <div>
              {item.items.map((subItem, subIndex) => {
                if (subItem.visible.includes(role)) {
                  return (
                      <Link href={subItem.href} key={subIndex} className="flex items-center justify-center lg:justify-start text-gray-500 py-2 md:px-2 gap-4 rounded-md hover:bg-skyight">
                        <span className="text-[#fae27c]">{subItem.icon}</span>
                        <span className="text-gray-700 my-2 hidden lg:block">{subItem.label}</span>
                      </Link>
                    
                  )
                }
                })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
