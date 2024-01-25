import type {Metadata} from "next";
//METADATA PARA PODER REALIZAR UNA MEJOR INDEXACION Y SER SEO FRENDLY
export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords: ['About Page', 'Kevin', 'Informacion']
}
export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}