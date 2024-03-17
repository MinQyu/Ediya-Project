import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface ResponseNoticeData {
  index: number;
  title: string;
  content: string;
  registrationDate: string;
}

export interface NoticeData
  extends Omit<ResponseNoticeData, "registrationDate"> {
  registrationDate: Date;
}
