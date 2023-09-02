import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Welcome() {
    return (
        <div className="bg-[url('/Assets/Images/bg.png')] bg-contain bg-repeat">
            <div className='w-full h-40 shadow-xl fixed bg-cyan-950'>
            </div>
            <div className="h-screen py-12 bg-transparent">
                <div className="container h-full flex flex-col relative mx-auto shadow-lg rounded bg-slate-300">
                    <div id="header" className='flex items-center w-full p-4'>
                        <aside className='basis-1/4 p-2'>
                            <TextInput className='w-full' placeholder="cari ....."/>
                        </aside>
                        <div className='w-full p-2 flex'>
                            <div className='flex justify-between w-full items-center'>
                                <span className='bg-slate-500 w-8 h-8 rounded-full shadow-lg flex items-center justify-around cursor-pointer text-white'>
                                    L
                                </span>
                                <span>
                                    adfafsadf
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id='body' className='flex w-full overflow-hidden  h-fit pl-4'>
                        <div className="basis-1/4 px-2">
                            <div className='flex w-full bg-lime-600 mb-1 p-2 rounded items-center cursor-pointer'>
                                <span className='bg-slate-100 w-8 h-8 rounded-full'>
                                </span>
                                <div className='basis-4/5 px-2 flex flex-col'>
                                    <div className='font-bold'>JKL</div>
                                    <small className='text-white'>aldfkjadkklj ....</small>
                                </div>
                                <span className='text-amber-700'>4</span>
                            </div>
                            <div className='flex w-full bg-slate-400 mb-1 p-2 rounded items-center cursor-pointer'>
                                <span className='bg-slate-100 w-8 h-8 rounded-full'>
                                </span>
                                <div className='basis-4/5 px-2 flex flex-col'>
                                    <div className='font-bold'>JKL</div>
                                    <small className='text-white'>aldfkjadkklj ....</small>
                                </div>
                                <span className='text-amber-700'>4</span>
                            </div>
                            <div className='flex w-full bg-slate-400 mb-1 p-2 rounded items-center cursor-pointer'>
                                <span className='bg-slate-100 w-8 h-8 rounded-full'>
                                </span>
                                <div className='basis-4/5 px-2 flex flex-col'>
                                    <div className='font-bold'>JKL</div>
                                    <small className='text-white'>aldfkjadkklj ....</small>
                                </div>
                                <span className='text-amber-700'>4</span>
                            </div>
                            <div className='flex w-full bg-slate-400 mb-1 p-2 rounded items-center cursor-pointer'>
                                <span className='bg-slate-100 w-8 h-8 rounded-full'>
                                </span>
                                <div className='basis-4/5 px-2 flex flex-col'>
                                    <div className='font-bold'>JKL</div>
                                    <small className='text-white'>aldfkjadkklj ....</small>
                                </div>
                                <span className='text-amber-700'>4</span>
                            </div>
                        </div>
                        <div className="w-full p-6 flex flex-col border bg-white rounded p-2">
                            <div id="messageContainer" 
                                className='
                                    w-full
                                    h-full py-8 rounded 
                                    shadow-[inset_0px_20px_12px_-16px_#eee]
                                    overflow-y-scroll
                                    box-content
                            '>
                                <div className='flex items-start gap-2 m-2'>
                                    <div id="avatar">
                                        <span className='bg-slate-500 w-8 h-8 rounded-full shadow-lg flex items-center justify-around cursor-pointer text-white'>
                                            L
                                        </span>
                                    </div>
                                    <div id="message">
                                        <div className="
                                            before:content-['']
                                            before:absolute
                                            before:border
                                            before:border-8
                                            before:border-solid
                                            before:border-indigo-900
                                            before:border-r-transparent
                                            before:border-t-transparent
                                            before:border-b-transparent
                                            before:rotate-90
                                            before:top-0
                                            before:left-0
                                            before:-ml-2
                                            bg-indigo-900
                                            px-6 py-2 
                                            max-w-sm 
                                            text-white 
                                            rounded-r-lg 
                                            rounded-bl-lg
                                            relative"
                                        >
                                            adfsads ldfkjas dkaklj asdflkjas dl
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='flex items-start gap-2 m-2'>
                                    <div id="avatar">
                                        <span className='bg-slate-500 w-8 h-8 rounded-full shadow-lg flex items-center justify-around cursor-pointer text-white'>
                                            L
                                        </span>
                                    </div>
                                    <div id="message">
                                        <div className="
                                            before:content-['']
                                            before:absolute
                                            before:border
                                            before:border-8
                                            before:border-solid
                                            before:border-indigo-900
                                            before:border-r-transparent
                                            before:border-t-transparent
                                            before:border-b-transparent
                                            before:rotate-90
                                            before:top-0
                                            before:left-0
                                            before:-ml-2
                                            bg-indigo-900
                                            px-6 py-2 
                                            max-w-sm 
                                            text-white 
                                            rounded-r-lg 
                                            rounded-bl-lg
                                            relative"
                                        >
                                            adfsads ldfkjas dkaklj asdflkjas dl
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-start gap-2 m-2 flex-row-reverse'>
                                    <div id="avatar">
                                        <span className='bg-slate-500 w-8 h-8 rounded-full shadow-lg flex items-center justify-around cursor-pointer text-white'>
                                            B
                                        </span>
                                    </div>
                                    <div id="message">

                                        <div className="
                                            before:content-['']
                                            before:absolute
                                            before:border
                                            before:border-8
                                            before:border-solid
                                            before:border-blue-600
                                            before:border-r-transparent
                                            before:border-t-transparent
                                            before:border-b-transparent
                                            before:rotate-90
                                            before:top-0
                                            before:right-0
                                            before:-mr-2
                                            bg-blue-600
                                            px-6 py-2
                                            mb-1
                                            max-w-sm 
                                            text-white 
                                            rounded-l-lg 
                                            rounded-br-lg
                                            relative"
                                        >
                                            adfsads ldfkjas dkaklj asdflkjas dl
                                            afdfakfjhkadfhakdfjhkj\ akjhfdkjahf
                                        </div>

                                        <div className="
                                            bg-blue-600
                                            px-6 py-2 
                                            mb-1
                                            max-w-sm 
                                            text-white 
                                            rounded-lg
                                            relative"
                                        >
                                            adfsads ldfkjas dkaklj asdflkjas dl
                                            afdfakfjhkadfhakdfjhkj\ akjhfdkjahf
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-start gap-2 m-2 flex-row-reverse'>
                                    <div id="avatar">
                                        <span className='bg-slate-500 w-8 h-8 rounded-full shadow-lg flex items-center justify-around cursor-pointer text-white'>
                                            B
                                        </span>
                                    </div>
                                    <div id="message">

                                        <div className="
                                            before:content-['']
                                            before:absolute
                                            before:border
                                            before:border-8
                                            before:border-solid
                                            before:border-blue-600
                                            before:border-r-transparent
                                            before:border-t-transparent
                                            before:border-b-transparent
                                            before:rotate-90
                                            before:top-0
                                            before:right-0
                                            before:-mr-2
                                            bg-blue-600
                                            px-6 py-2
                                            mb-1
                                            max-w-sm 
                                            text-white 
                                            rounded-l-lg 
                                            rounded-br-lg
                                            relative"
                                        >
                                            adfsads ldfkjas dkaklj asdflkjas dl
                                            afdfakfjhkadfhakdfjhkj\ akjhfdkjahf
                                        </div>

                                        <div className="
                                            bg-blue-600
                                            px-6 py-2 
                                            mb-1
                                            max-w-sm 
                                            text-white 
                                            rounded-lg
                                            relative"
                                        >
                                            adfsads ldfkjas dkaklj asdflkjas dl
                                            afdfakfjhkadfhakdfjhkj\ akjhfdkjahf
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-start gap-2 m-2 flex-row-reverse'>
                                    <div id="avatar">
                                        <span className='bg-slate-500 w-8 h-8 rounded-full shadow-lg flex items-center justify-around cursor-pointer text-white'>
                                            B
                                        </span>
                                    </div>
                                    <div id="message">

                                        <div className="
                                            before:content-['']
                                            before:absolute
                                            before:border
                                            before:border-8
                                            before:border-solid
                                            before:border-blue-600
                                            before:border-r-transparent
                                            before:border-t-transparent
                                            before:border-b-transparent
                                            before:rotate-90
                                            before:top-0
                                            before:right-0
                                            before:-mr-2
                                            bg-blue-600
                                            px-6 py-2
                                            mb-1
                                            max-w-sm 
                                            text-white 
                                            rounded-l-lg 
                                            rounded-br-lg
                                            relative"
                                        >
                                            adfsads ldfkjas dkaklj asdflkjas dl
                                            afdfakfjhkadfhakdfjhkj\ akjhfdkjahf
                                        </div>

                                        <div className="
                                            bg-blue-600
                                            px-6 py-2 
                                            mb-1
                                            max-w-sm 
                                            text-white 
                                            rounded-lg
                                            relative"
                                        >
                                            adfsads ldfkjas dkaklj asdflkjas dl
                                            afdfakfjhkadfhakdfjhkj\ akjhfdkjahf
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-start gap-2 m-2 flex-row-reverse'>
                                    <div id="avatar">
                                        <span className='bg-slate-500 w-8 h-8 rounded-full shadow-lg flex items-center justify-around cursor-pointer text-white'>
                                            B
                                        </span>
                                    </div>
                                    <div id="message">

                                        <div className="
                                            before:content-['']
                                            before:absolute
                                            before:border
                                            before:border-8
                                            before:border-solid
                                            before:border-blue-600
                                            before:border-r-transparent
                                            before:border-t-transparent
                                            before:border-b-transparent
                                            before:rotate-90
                                            before:top-0
                                            before:right-0
                                            before:-mr-2
                                            bg-blue-600
                                            px-6 py-2
                                            mb-1
                                            max-w-sm 
                                            text-white 
                                            rounded-l-lg 
                                            rounded-br-lg
                                            relative"
                                        >
                                            adfsads ldfkjas dkaklj asdflkjas dl
                                            afdfakfjhkadfhakdfjhkj\ akjhfdkjahf
                                        </div>

                                        <div className="
                                            bg-blue-600
                                            px-6 py-2 
                                            mb-1
                                            max-w-sm 
                                            text-white 
                                            rounded-lg
                                            relative"
                                        >
                                            adfsads ldfkjas dkaklj asdflkjas dl
                                            afdfakfjhkadfhakdfjhkj\ akjhfdkjahf
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-start gap-2 m-2 flex-row-reverse'>
                                    <div id="avatar">
                                        <span className='bg-slate-500 w-8 h-8 rounded-full shadow-lg flex items-center justify-around cursor-pointer text-white'>
                                            B
                                        </span>
                                    </div>
                                    <div id="message">

                                        <div className="
                                            before:content-['']
                                            before:absolute
                                            before:border
                                            before:border-8
                                            before:border-solid
                                            before:border-blue-600
                                            before:border-r-transparent
                                            before:border-t-transparent
                                            before:border-b-transparent
                                            before:rotate-90
                                            before:top-0
                                            before:right-0
                                            before:-mr-2
                                            bg-blue-600
                                            px-6 py-2
                                            mb-1
                                            max-w-sm 
                                            text-white 
                                            rounded-l-lg 
                                            rounded-br-lg
                                            relative"
                                        >
                                            adfsads ldfkjas dkaklj asdflkjas dl
                                            afdfakfjhkadfhakdfjhkj\ akjhfdkjahf
                                        </div>

                                        <div className="
                                            bg-blue-600
                                            px-6 py-2 
                                            mb-1
                                            max-w-sm 
                                            text-white 
                                            rounded-lg
                                            relative"
                                        >
                                            adfsads ldfkjas dkaklj asdflkjas dl
                                            afdfakfjhkadfhakdfjhkj\ akjhfdkjahf
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="inputMessagContainer" className='h-20 w-3/4 mx-auto flex items-center justify-around'>
                                <TextInput placeholder="tulis pesan ......" className="rounded-full px-8 bg-slate-100 shadow-lg w-11/12" />
                                <span className='bg-slate-500 w-10 h-10 rounded-full shadow-lg flex items-center justify-around cursor-pointer text-white'>
                                    >
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );s
}
