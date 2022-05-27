import React from 'react';
import Header from '../Header';
import LeftBar from '../LeftBar';
import RightBar from '../RightBar';

type Props = {
  children: JSX.Element | string;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <div className="p-4 flex flex-col gap-y-4">
      <Header />
      <div className="flex gap-x-2">
        <LeftBar className="w-[250px]" />
        <main className="flex-1 bg-[#f9fafb] rounded-lg p-8">{children}</main>
        <RightBar className="w-1/6" />
      </div>
    </div>
  );
}
export function LayoutWithoutRightBar({ children }: Props) {
  return (
    <div className="p-4 flex flex-col gap-y-4">
      <Header />
      <div className="flex gap-x-2">
        <LeftBar className="w-[250px]" />
        <main className="flex-1 bg-[#f9fafb] rounded-lg p-8">{children}</main>
      </div>
    </div>
  );
}
