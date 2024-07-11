/* eslint-disable @next/next/no-img-element */
export interface ProductCardProps {
      id: number;
      brand: string;
      description: string;
      price: number;
      image: string;
  }

export default function CardMovie(props: ProductCardProps) {
    return (
        <article className="flex w-1/3 gap-2 pb-10">
            <h1>{props.description}</h1>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href={`movies/${props.image}`}>
                    <img className="rounded-t-lg" src={props.image} alt="" />
                </a>
                <div className="p-5">
                    <a href={`movies/${props.id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.description} ({props.price})</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">diretor: {props.brand}</p>
                    <a href={`movies/${props.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white duration-500 bg-indigo-600 rounded-lg hover:bg-black focus:outline-none">
                        Ler mais
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

        </article>
    )
}