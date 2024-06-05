import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

export default function RevealPasword({
  revealPassword,
  setRevealPassword,
}: {
  revealPassword: boolean;
  setRevealPassword: any;
}) {
  return (
    <div
      className="absolute top-9 right-3"
      onClick={() =>
        setRevealPassword((revealPassword: boolean) => !revealPassword)
      }
    >
      {revealPassword ? (
        <IoMdEye className="text-blue-500 text-2xl" />
      ) : (
        <IoMdEyeOff className="text-blue-500 text-2xl" />
      )}
    </div>
  );
}
