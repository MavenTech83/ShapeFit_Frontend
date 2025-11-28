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
                    <p className='text-lg'>Acesse nosso GitHub</p>
                    <div className='flex gap-2'>

                        <GithubLogoIcon size={48} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer