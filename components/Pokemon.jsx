import Image from 'next/image';
import Link from 'next/link';

const Pokemon = ({ pokemon }) => {
  const { name, sprites:imageSrc } = pokemon;
  // const imageSrc = sprites?.other?.dream_world?.front_default ?? null;
  
  return (
    <div className="pokemon-card bg-white rounded-xl overflow-y-hidden">
      <Link href={`/pokemon/${name}`} className='flex flex-col h-full'>
        <div className='pokemon-card__cover text-center p-4 flex items-center justify-center flex-1'>
          <Image
            src={imageSrc ?? null}
            width={150}
            height={150}
            className='inline-block'
            alt={name}
          />
        </div>
        <div className='pokemon-card__details flex flex-col justify-between p-4 sm:p-6 bg-gray-200 min-h-24 sm:min-h-40'>
          <h2 className="capitalize font-semibold">{name}</h2>
          <span className='text-primary'>Details &#8594;</span>
        </div>
      </Link>
    </div>
  )
}

export default Pokemon