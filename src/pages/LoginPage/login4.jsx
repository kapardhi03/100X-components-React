import signupx from '../../assets/images/signup-x.png'
function Header() {
    return (
        <header className="flex justify-start py-3 px-4 mb-3">
            <a href="../../src/LoginScreen/Login1.html">
                <img src={signupx} className="mr-5" />
            </a>
            <span className="font-bold text-neutral-50"> Step 3 of 4 </span>
        </header>
    )
}


function Main() {
    return (
        <main className="flex flex-col flex-grow px-4 justify-start items-start">
            <h1 className="text-2xl font-bold mb-2">We sent you a code</h1>
            <p className="text-sm text-dob-text mb-10">Enter it below to verify janedoe@gmail.com</p>
            <fieldset className="w-full px-3 py-2 border border-neutral-500 rounded focus-within:border-twitter-blue group">
                <legend className="text-neutral-500 text-xs font-medium group-focus-within:text-twitter-blue">
                    <div className="px-0.5  group-focus-within:px-1">
                        Verification Code
                    </div>
                </legend>
                <div className="flex justify-around">
                    <input type="text" placeholder="Verification Code" className="w-full text-xl peer bg-inherit focus:outline-none 
              text-neutral-50 placeholder:text-neutral-500" />
                </div>
            </fieldset>
            <div className="text-twitter-blue mt-3 self-end text-sm">
                Didn't receive a code?
            </div>
        </main>
    )
}

function Next() {
    return (
        <section className="flex flex-col mx-4 my-5 justify-end">
            <a href="../../src/LoginScreen/Login5.html">
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
export default function login4() {
    return (
        <div>
            <Header />
            <Main />
            <Next />


        </div>

    )
}