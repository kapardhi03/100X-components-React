import singup from '../../assets/images/signup-x.png'
import valid from '../../assets/images/input-components/valid.png'
function Header() {
    return (
        <header className="flex justify-start py-3 px-4 mb-3">
            <a href="../../src/LoginScreen/Login1.html">
                <img src={singup} className="mr-5" />
            </a>
            <span className="font-bold text-neutral-50"> Step 2 of 4 </span>
        </header>
    )
}

function Main() {
    return (
        <main className="flex flex-col flex-grow px-4 justify-start items-start">
            <h1 className="text-2xl font-bold mb-5">Create Your Account</h1>
            <fieldset className="w-full px-3 py-2 border border-neutral-500 rounded focus-within:border-twitter-blue group">
                <legend className="text-neutral-500 text-xs font-medium group-focus-within:text-twitter-blue">
                    <div className="px-0.5  group-focus-within:px-1">
                        Name
                    </div>
                </legend>
                <div className="flex justify-around">
                    <input type="text" placeholder="Name" className="w-full text-xl peer bg-inherit focus:outline-none 
              text-neutral-50 placeholder:text-neutral-500" />
                    <img src={valid} className="invisible peer-valid:visible peer-invalid:invisible" />
                </div>
            </fieldset>
            <fieldset className="mt-8 w-full px-3 py-2 border border-neutral-500 rounded focus-within:border-twitter-blue group">
                <legend className="text-neutral-500 text-xs font-medium group-focus-within:text-twitter-blue">
                    <div className="px-0.5  group-focus-within:px-1">
                        Email
                    </div>
                </legend>
                <div className="flex justify-around items-center">
                    <input type="email" placeholder="Email" className="w-full text-xl peer bg-inherit focus:outline-none 
              text-neutral-50 placeholder:text-neutral-500" />
                    <img src={valid} className="invisible peer-valid:visible peer-invalid:invisible" />
                </div>
            </fieldset>
            <fieldset className="mt-8 w-full px-3 py-2 border border-neutral-500 rounded focus-within:border-twitter-blue group">
                <legend className="text-neutral-500 text-xs font-medium group-focus-within:text-twitter-blue">
                    <div className="px-0.5  group-focus-within:px-1">
                        Date of birth
                    </div>
                </legend>
                <div className="flex justify-around">
                    <input type="email" placeholder="Date of birth" className="w-full text-xl peer bg-inherit focus:outline-none 
              text-neutral-50 placeholder:text-neutral-500" />
                    <img src={valid} className="invisible peer-valid:visible peer-invalid:invisible" />
                </div>
            </fieldset>
        </main>
    )
}

function SignUp() {
    return (
        <section className="flex flex-col mx-4 my-5 px-5 justify-end">
            <a href="../../src/LoginScreen/Login4.html">
                <button className="
              bg-twitter-blue p-5 w-full h-15 rounded-full text-neutral-50 font-bold gap-2.5 
              flex justify-center items-center text-center hover:bg-twitter-blue-hover disabled:opacity-50">
                    Sign up
                </button>
            </a>
        </section>
    )
}
export default function login3() {
    return (
        <div>
            <Header />
            <Main />
            <SignUp />

        </div>

    )
}