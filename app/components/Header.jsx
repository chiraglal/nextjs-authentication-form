import Link from 'next/link'
import { auth } from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs';
const Header = () => {
    const { userId } = auth();
    console.log(userId)
    return (
        <>
            <nav className="bg-blue-700 py-4 px-6 flex items-center justify-between mb-5">
                <div className="flex items-center">
                    <Link href="/">
                        <div className="text-lg uppercase font-bold text-white">Clerk App</div>
                    </Link>
                </div>
                <div className="text-white flex items-center">
                    {!userId && (
                        <>
                            <Link href='sign-in' className='text-gray-300 mr-4 hover:text-white'>Sign In</Link>
                            <Link href='sign-up' className='text-gray-300 mr-4 hover:text-white'>Sign Up</Link>
                        </>
                    )}
                    {userId && (
                        <Link href='profile' className='text-gray-300 hover:text-white mr-4'>Profile</Link>
                    )}
                    <div className="ml-auto"><UserButton afterSignOutUrl='/' /></div>
                </div>
            </nav>
        </>
    )
}

export default Header