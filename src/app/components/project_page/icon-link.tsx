import dynamic from "next/dynamic";

const IconLink = ({ icon }: { icon: string }) => {
  const Icon = dynamic(
    () => import(`@/app/components/ui/icons/${icon}-button.tsx`)
  );
  return <div>{<Icon />}</div>;
};

export default IconLink;
