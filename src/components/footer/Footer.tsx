import { GithubLogoIcon } from "@phosphor-icons/react"


function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-linear-to-b from-pink-600 via-purple-500 to-purple-600 text-(--charcoal)">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-lg'>Maven Tech Group - Acesse nosso GitHub</p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/MavenTech83" target="blank">
                            <GithubLogoIcon size={48} weight='bold'/>
                        </a>
                     </div>
                    <p className='text-sm'>
                        ShapeFit | Copyright: {data}
                    </p>
                   
                </div>
            </div>
        </>
    )
}

export default Footer