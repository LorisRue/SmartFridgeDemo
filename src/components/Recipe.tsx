
import chili from '../assets/chili.webp'
import lasagne from '../assets/lasagne.webp'
import cinquePi from '../assets/cinquePi.webp'
import flammkuchen from '../assets/flammkuchen.webp'
import HackbällchenCurry from '../assets/HackbällchenCurry.webp'
import hamburger from '../assets/hamburger.webp'
import GhacketsUndHörnli from '../assets/GhacketsUndHörnli.webp'
import MakiSushi from '../assets/MakiSushi.webp'

function Recipe() {
    const recipes = [
        {
            name: 'Chili con carne',
            image: chili,
            url: 'https://www.bettybossi.ch/de/rezepte/rezept/blitz-chili-con-carne-10001947/'
        },
        {
            name: 'Lasagne',
            image: lasagne,
            url: 'https://www.bettybossi.ch/de/rezepte/rezept/lasagne-10002245/'
        },
        {
            name: 'Pasta cinque pi',
            image: cinquePi,
            url: 'https://www.bettybossi.ch/de/rezepte/rezept/penne-alle-cinque-pi-10008746/'
        },
        {
            name: 'Flammkuchen',
            image: flammkuchen,
            url: 'https://www.bettybossi.ch/de/rezepte/rezept/flammkuchen-10005341/'
        },
        {
            name: 'Hackbällchen Curry',
            image: HackbällchenCurry,
            url: 'https://www.bettybossi.ch/de/rezepte/rezept/hackballchen-mit-curry-tomatensauce-10010315/'
        },
        {
            name: 'Hamburger',
            image: hamburger,
            url: 'https://www.bettybossi.ch/de/rezepte/rezept/hamburger-10000169/'
        },
        {
            name: 'Ghackets und Hörnli',
            image: GhacketsUndHörnli,
            url: 'https://www.bettybossi.ch/de/rezepte/rezept/ghackets-und-hornli-mit-apfelkompott-10009162/'
        },
        {
            name: 'Maki Sushi',
            image: MakiSushi,
            url: 'https://www.bettybossi.ch/de/rezepte/rezept/maki-sushi-10009784/'
        },
    ]
    return (
        <>
            <h1 className='font-bold text-xl'>Recipes for you:</h1>
            <div className='grid grid-cols-2 gap-4'>
                {recipes.map((recipe, index) => (
                    <a target='_blank' key={index} href={recipe.url} className='rounded-lg relative aspect-square overflow-hidden flex items-end justify-center px-2'>
                        <img src={recipe.image} alt={recipe.name} className='absolute inset-0 w-full h-full object-cover rounded-md z-0' />
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />
                        <h2 className='font-bold text-white text-xl relative z-20 mb-4'>{recipe.name}</h2>
                    </a>
                ))}
            </div>
        </>
    )
}

export default Recipe
