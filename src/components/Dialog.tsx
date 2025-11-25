import { IoCloseCircle } from "react-icons/io5";

type Props = {
  toggleDialog: (event: React.MouseEvent) => void;
  children: React.ReactNode;
}

export const Dialog = ({ toggleDialog, children }: Props) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-40">
      <div className="relative bg-black w-full max-w-[450px] p-12 rounded-sm flex items-center justify-center gap-2 flex-col uppercase">
        <div className="absolute -top-4 -right-4 cursor-pointer">
          <IoCloseCircle onClick={toggleDialog} size={30} className="text-white" />
        </div>
        {children}
      </div>
    </div>
  );
};
