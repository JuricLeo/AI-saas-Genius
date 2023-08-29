import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative w-72 h-72">
        <p className="text-muted-foreground text-sm text-center">{label}</p>
        <Image alt="Empty" src="/empty.png" fill />
      </div>
    </div>
  );
};
