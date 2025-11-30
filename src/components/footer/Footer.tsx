import { GithubLogoIcon } from "@phosphor-icons/react"


function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-violet-700 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        ShapeFit | Copyright: {data}
                    </p>
                    <p className='text-lg'>Maven Tech Group - Acesse nosso GitHub</p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/MavenTech83" target="blank">
                            <GithubLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer