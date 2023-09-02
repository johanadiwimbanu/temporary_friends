import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Welcome() {
    const handleCreateRoom = () => {{
        const username = document.getElementById('username').value
        if(!username){
            return
        }
    }}
    return (
        <div className='w-full h-screen flex flex-col gap-16 bg-slate-300 p-24 text-center'>
            <ApplicationLogo className='mx-auto w-80' />
            <h1 className='text-yellow-800 font-bold font-size text-7xl'>
                Your Temporary Friends
            </h1>
            <TextInput className="w-60 mx-auto" placeholder="pick username ..." id="username"/>
            <Link>
                <PrimaryButton className='w-40 mx-auto' onClick={handleCreateRoom}>
                    Create Room
                </PrimaryButton>
            </Link>
        </div>
    );
}
