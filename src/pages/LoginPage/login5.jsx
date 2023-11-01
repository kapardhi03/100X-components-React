import signupx from '../../assets/images/signup-x.png'
import eye from '../../assets/images/eye.svg'

function Header() {
    return (
        <header className="flex justify-start py-3 px-4 mb-3">
            <a href="./LoginScreen1.html">
                <img src={signupx} className="mr-5" />
            </a>
            <span className="font-bold text-neutral-50"> Step 4 of 4 </span>
        </header>
    )
}


function Main() {
    return (
        <main className="flex flex-col flex-grow px-4 justify-start items-start">
            <h1 className="text-2xl font-bold mb-2">You’ll need a password</h1>
            <p className="text-sm text-dob-text mb-10">Make sure it’s 8 characters or more</p>
            <fieldset className="w-full px-3 py-2 border border-neutral-500 rounded focus-within:border-twitter-blue group">
                <legend className="text-neutral-500 text-xs font-medium group-focus-within:text-twitter-blue">
                    <div className="px-0.5  group-focus-within:px-1">
                        Password
                    </div>
                </legend>
                <div className="flex justify-around">
                    <input type="password" placeholder="Password" className="w-full text-xl peer bg-inherit focus:outline-none 
              text-neutral-50 placeholder:text-neutral-500" />
                    <img src={eye} />
                </div>
            </fieldset>
        </main>
    )
}


function Next() {
    return (
        <section className="flex flex-col mx-4 my-5 justify-end">
            <a href="../../src/HomePage/Home.html">
                <button className="py-3 px-6 w-full h-10.5 bg-neutral-50 hover:bg-neutral-200 
          font-bold text-center text-black flex justify-center items-center 
          rounded-full gap-2.5 shadow-md backdrop-blur-xl disabled:opacity-50
          ">
                    Next
                </button>
            </a>
        </section>

    )
}
export default function login5() {
    return (
        <div>
            <Header />
            <Main />
            <Next />

        </div>

    )
}