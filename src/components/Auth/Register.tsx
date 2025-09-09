import { Button } from "../buttons/Button"


export const Register = () => {
  return (
    <div className="bg-[url(/public/homepage-hero.png)] bg-cover h-[90vh] bg-no-repeat bg-center">
        <div className='container mx-auto h-[90vh] flex items-center justify-center'>
            <div className="bg-black w-full max-w-[450px] p-12 rounded-sm flex items-center justify-center gap-2 flex-col uppercase">
                <h3 className="text-white text-4xl">Register</h3>
                <input className="border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" type="text" placeholder="Name..." />
                <input className="border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" type="email" placeholder="Email..." />
                <input className="border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" type="Password" placeholder="Password..." />
                <Button type="warning">Sign In</Button>
                <p className="text-white">or</p>
                <Button type="tertiary">Register</Button>
            </div>
        </div>
    </div>
  )
}