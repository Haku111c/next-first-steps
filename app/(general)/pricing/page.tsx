import type {Metadata} from "next";

export const metadata: Metadata = {
    title:'SEO Title Princing',
    description:'SEO Description Princing',
    keywords:['Princing Page', 'Kevin', 'Informacion']
}
export default function PrincingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}