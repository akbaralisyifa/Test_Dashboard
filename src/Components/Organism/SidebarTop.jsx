import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import ParagrafHead from '../Atoms/ParagrafHead';

export default function SidebarTop() {
  return (
    <div className="flex flex-col gap-8">
      <ParagrafHead text={'S.'} />
      <button className="bg-orange-200 p-2 mt-5 rounded-full">
        <HiOutlineChatBubbleLeftRight className="w-6 h-6 " />
      </button>
    </div>
  );
}
