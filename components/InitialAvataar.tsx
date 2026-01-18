type InitialAvatarProps = {
  name: string;
  size?: number; // optional if you want different sizes later
};

const InitialAvatar: React.FC<InitialAvatarProps> = ({ name, size = 64 }) => {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div
      className="rounded-full flex items-center justify-center
        bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF]
        text-white font-semibold border-2 border-[#00E0FF]/50"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.35,
      }}
    >
      {initials}
    </div>
  );
};

export default InitialAvatar;
