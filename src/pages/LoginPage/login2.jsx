import signupx from '../../assets/images/signup-x.png'
function Header() {
    return (
        <header className="flex justify-start py-3 px-4 mb-3">
            <a href="../../src/LoginScreen/Login1.html">
                <img src={signupx} className="mr-5" />
            </a>
            <span className="font-bold text-neutral-50"> Step 1 of 4 </span>
        </header>
    )
}

function Main(){
    return (
        <main className="flex flex-col flex-grow px-4 justify-start items-start">
        <h1 className="text-2xl font-bold mb-5">Create Your Account</h1>
        <form>
            <fieldset className="w-full px-3 py-2 border border-neutral-500 rounded focus-within:border-twitter-blue group">
                <legend className="text-neutral-500 text-xs font-medium group-focus-within:text-twitter-blue">
                    <div className="px-0.5  group-focus-within:px-1">
                        Name
                    </div>
                </legend>
                <div className="flex justify-around">
                    <input type="text" placeholder="Name" className="w-full text-xl peer bg-inherit focus:outline-none 
  text-neutral-50 placeholder:text-neutral-500" />
                </div>
            </fieldset>
            <fieldset className="my-8 w-full px-3 py-2 border border-neutral-500 rounded focus-within:border-twitter-blue group">
                <legend className="text-neutral-500 text-xs font-medium group-focus-within:text-twitter-blue">
                    <div className="px-0.5  group-focus-within:px-1">
                        Email
                    </div>
                </legend>
                <div className="flex justify-around">
                    <input type="email" placeholder="Email" className="w-full text-xl peer bg-inherit focus:outline-none 
  text-neutral-50 placeholder:text-neutral-500" />
                </div>
            </fieldset>
            <section className="mb-8">
                <h2 className="font-bold">Date of birth</h2>
                <p className="text-sm text-dob-text">This will not be shown publicly. Confirm your own age, even if this account is for a
                    business, a pet, or something else.</p>
            </section>
            <section className="flex">
                <fieldset className="w-full mr-3 px-3 py-2 border border-neutral-500 rounded focus-within:border-twitter-blue group">
                    <legend className="text-neutral-500 text-xs font-medium group-focus-within:text-twitter-blue">
                        <div className="px-0.5  group-focus-within:px-1">
                            Month
                        </div>
                    </legend>
                    <div className="flex justify-around w-full">
                        <select name="Month" className="w-full bg-inherit focus:outline-none focus:ring-0">
                            <option selected value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset className="w-min mr-3 px-3 py-2 border border-neutral-500 rounded focus-within:border-twitter-blue group">
                    <legend className="text-neutral-500 text-xs font-medium group-focus-within:text-twitter-blue">
                        <div className="px-0.5  group-focus-within:px-1">
                            Day
                        </div>
                    </legend>
                    <div className="flex justify-around">
                        <select name="Month" className="bg-inherit focus:outline-none focus:ring-0">
                            <option selected value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                            <option value={21}>21</option>
                            <option value={22}>22</option>
                            <option value={23}>23</option>
                            <option value={24}>24</option>
                            <option value={25}>25</option>
                            <option value={26}>26</option>
                            <option value={27}>27</option>
                            <option value={28}>28</option>
                            <option value={29}>29</option>
                            <option value={30}>30</option>
                            <option value={31}>31</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset className="w-min px-3 py-2 border border-neutral-500 rounded focus-within:border-twitter-blue group">
                    <legend className="text-neutral-500 text-xs font-medium group-focus-within:text-twitter-blue">
                        <div className="px-0.5  group-focus-within:px-1">
                            Year
                        </div>
                    </legend>
                    <div className="flex justify-around">
                        <select name="Month" className="bg-inherit focus:outline-none focus:ring-0">
                            <option value={2015}>2015</option>
                            <option value={2014}>2014</option>
                            <option value={2013}>2013</option>
                            <option value={2012}>2012</option>
                            <option value={2011}>2011</option>
                            <option value={2010}>2010</option>
                            <option value={2009}>2009</option>
                            <option value={2008}>2008</option>
                            <option value={2007}>2007</option>
                            <option value={2006}>2006</option>
                            <option value={2005}>2005</option>
                            <option value={2004}>2004</option>
                            <option value={2003}>2003</option>
                            <option value={2002}>2002</option>
                            <option value={2001}>2001</option>
                            <option value={2000}>2000</option>
                        </select>
                    </div>
                </fieldset>
            </section>
        </form>
    </main>
    )
}


function CreateAcc(){
    return (
        <section className="flex flex-col mx-4 my-5 px-5 justify-end">
                <a href="../../src/LoginScreen/Login3.html">
                    <button className="py-2 px-6 w-full h-11 bg-neutral-50 hover:bg-neutral-200 
      font-bold text-center text-black flex justify-center items-center 
      rounded-full gap-2.5 shadow-md backdrop-blur-xl disabled:opacity-50
      ">
                        Create account
                    </button>
                </a>
            </section>
    )
}
export default function login2() {
    return (
        <div>
            <Header/>
            <Main/>
            <CreateAcc/>
        </div>

    )
}