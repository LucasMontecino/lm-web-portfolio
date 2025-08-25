import Image from 'next/image';

const ShowIcon = ({ name }: { name: string }) => {
  return (
    <Image
      src={`/skill-icons--${name}.svg`}
      alt={`icon-${name}`}
      width={42}
      height={42}
      title={name}
      className='tech-icon'
    />
  );
};

export default ShowIcon;
