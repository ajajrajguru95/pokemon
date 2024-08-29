import Link from "next/link"

const Breadcrumbs = ({pathName}) => {
  return (
    <ul className="breadcrumbs flex gap-2 mt-4 md:mt-8">
        <li><Link href="/" className="underline">Home</Link></li>
        <li>&#8594;</li>
        {pathName && (<li className="text-gray-500 capitalize">{pathName}</li>)}
    </ul>
  )
}

export default Breadcrumbs