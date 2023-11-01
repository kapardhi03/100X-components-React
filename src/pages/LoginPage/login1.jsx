import signupx from '../../assets/images/signup-x.png'
function Header(){
    return (
        <header className="flex justify-center py-3 px-4">
        <img src={signupx} className="w-12 h-auto" />
    </header>
    )
}

function Main(){
    return (
        <main className="flex flex-col px-7 justify-center items-center flex-grow text-neutral-50">
        <section className="flex flex-col self-start">
            <h2 className="text-3xl font-extrabold mb-3">Happening now</h2>
            <h3 className="font-bold">Join today.</h3>
        </section>
        <a href='/' className="my-10 w-full">
            <button className="py-2 px-6 w-full h-9 bg-neutral-50 hover:bg-neutral-200 
font-bold text-center text-black flex justify-center items-center 
rounded-full gap-2.5 shadow-md backdrop-blur-xl disabled:opacity-50
">
                Create account
            </button>
        </a>
        <div className="flex items-center w-full">
            <div className="flex-grow border border-b border-neutral-700" />
            <div className="flex-grow-0 mx-1">or</div>
            <div className="flex-grow border border-b border-neutral-700" />
        </div>
        <div className="self-start mt-10">
            Already have an account?
        </div>
        <button className="py-2 px-6 mt-5 w-full h-9 bg-inherit border border-sign-up-border
font-bold text-center text-twitter-blue flex justify-center items-center 
rounded-full gap-2.5 shadow-md backdrop-blur-xl
">
            Sign in
        </button>
    </main>
    )
}

export default function login1() {
    return (
        <div>
            <Header/>
            <Main />
            
        </div>
    )
}