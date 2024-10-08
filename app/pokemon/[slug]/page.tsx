import Link from 'next/link'
import Image from 'next/image';
import {fetchPokemonDetails} from "../../../lib/requests";
import Breadcrumbs from "../../../components/Breadcrumbs";
import {PokemonDetailProps} from "../../../typings/Pokemon";


/**
 * DetailPage component
 *
 * This component displays the details of a Pokémon, including its name, type, stats, abilities, and moves.

 * Example:
 * ```
 * <DetailPage params={{ slug bulbasaur }} />
 * ```
 */

const DetailPage = async ({ params }: {params: { slug: string }}) => {
  const pokemonDetails = await fetchPokemonDetails(params.slug);
  
  const { name,
     sprites: imageSrc,
     types,
     stats,
     abilities,
     moves } = pokemonDetails;

  const pokemonInfo = {
    Name: name,
    Type: types.map((type) => type).join(', '),
    Stats: stats.map((stat) => stat).join(', '),
    Abilities: abilities.map((ability) => ability).join(', '),
    'Some Moves': moves.map((move) => move).join(', '),
  };


  return (
    <div className='container mx-auto bg-gray-100 py-4 px-6 sm:px-28  fade-in flex flex-col gap-2'>

      <Link href="/" className='text-primary font-semibold text-base md:text-lg'> &lt; Back</Link>

      {/* Breadcrumbs component */}
      <Breadcrumbs pathName={name} />

      <section className='pokemon-detail min-h-[84vh] sm:min-h-[86vh] grid place-items-center'>
        {/* SR only tag */}
        <h1 className='section-detail sr-only'>Pokemon Detail for {name}</h1>

        <div className="pokemon-detail__card sm:max-w-[500px] bg-secondary rounded-2xl overflow-y-hidden">
          <div className='pokemon-detail__cover flex items-center justify-center p-4 sm:p-6'>
            <Image
              src={imageSrc ?? ''}
              width={200}
              height={200}
              className='inline-block'
              alt={name}
            />
          </div>
          <div className='pokemon-detail__content bg-tertiary p-4 sm:p-6'>

            <ul className="flex flex-col gap-1 sm:gap-2">
              {Object.entries(pokemonInfo).map(([key, value]) => (
                <li key={key} className="capitalize text-sm sm:text-base">
                  <strong>{key}: </strong>
                  <span>{value}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>
    </div>
  )
}

export default DetailPage