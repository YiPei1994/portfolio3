type SkillIconProps = {
  name: string;
  style: string;
};

function SkillIcon({ name, style }: SkillIconProps) {
  return (
    <div className={style}>
      <img
        className="w-full h-auto"
        src={`/techsImages/${name}.png`}
        alt={`icon_${name}`}
      />
    </div>
  );
}

export default SkillIcon;
