import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface NoticeData {
  index: number;
  title: string;
  content: string;
  registrationDate: Date;
}
