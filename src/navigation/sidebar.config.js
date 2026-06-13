import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  Medal,
  BarChart3,
  MessageSquare,
  Award,
  NotebookPen,
  Bookmark,
  Users,
} from "lucide-react";

export const sidebarItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    id: "practice",
    label: "Practice Arena",
    path: "/practice",
    icon: BookOpen,
  },

  {
    id: "contest",
    label: "Contest Arena",
    path: "/contests",
    icon: Trophy,
  },

  {
    id: "leaderboard",
    label: "Leaderboards",
    path: "/leaderboard",
    icon: Medal,
  },

  {
    id: "performance",
    label: "Performance",
    path: "/performance",
    icon: BarChart3,
  },

  {
    id: "doubts",
    label: "Doubt Forum",
    path: "/doubts",
    icon: MessageSquare,
  },

  {
    id: "badges",
    label: "Badges",
    path: "/badges",
    icon: Award,
  },

  {
    id: "notes",
    label: "Notes",
    path: "/notes",
    icon: NotebookPen,
  },

  {
    id: "bookmarks",
    label: "Bookmarks",
    path: "/bookmarks",
    icon: Bookmark,
  },

  {
    id: "friends",
    label: "Friends",
    path: "/friends",
    icon: Users,
  },
];