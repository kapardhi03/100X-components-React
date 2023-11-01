export function Home (){
    return (
        <div>
  <header className="py-3 px-4 flex items-center justify-between border-b border-neutral-700">
    <a href>
      <img src="../../public/images/user-avatars/user-avatar-2.png" className="w-9 h-auto rounded-full" />
    </a>
    <span className="flex-grow flex justify-center items-center">
      <img src="../../public/images/logo.svg" className="w-11" />
    </span>
  </header>
  <main className="pb-16 relative">
    <section className="w-full">
      <div className="flex w-full border-b border-neutral-700">
        <div className="flex flex-col items-center justify-center hover:bg-neutral-800 w-2/4 text-center cursor-pointer relative">
          <div className="flex items-end py-4 text-neutral-50 font-medium text-16">
            For you
          </div>
          <div className="bg-twitter-blue w-14 rounded-full h-1 absolute bottom-0" />
        </div>
        <div className="flex flex-col items-center justify-center hover:bg-neutral-800 w-2/4 text-center cursor-pointer relative">
          <div className="flex items-end py-4 text-neutral-400 font-medium text-16">
            Following
          </div>
          <div className="w-20 rounded-full h-1 absolute bottom-0" />
        </div>
      </div>
    </section>
    <section>
      <article className="flex text-neutral-50 border-b border-neutral-700 w-full px-4 py-2 bg-black round">
        <img src="../../public/images/user-avatars/user-avatar-1.png" className="w-12 h-12 mt-1 rounded-full" />
        <div className="ml-4 w-full">
          <div className="flex p-0">
            <div className="mr-2 font-semibold">Name</div>
            <div className="mr-1 text-neutral-500">@handle</div>
            <div className="mr-1 text-neutral-500">•</div>
            <div className="mr-1 text-neutral-500">32min</div>
          </div>
          <p className="text-15 mb-2">
            Don't wish for it, work for it.
          </p>
          {/* Actions */}
          <div className="flex w-full justify-between my-4">
            <div className="flex items-center gap-1">
              <button>
                <img src="../../public/images/tweet-actions/comment.svg" className="w-3.5 h-auto" />
              </button>
              <div className="text-sm text-neutral-500">11</div>
            </div>
            <div className="flex items-center gap-1">
              <button>
                <img src="../../public/images/tweet-actions/rt.svg" className="w-4 h-auto" />
              </button>
              <div className="text-sm text-neutral-500">270</div>
            </div>
            <div className="flex items-center gap-1">
              <button>
                <img src="../../public/images/tweet-actions/heart.svg" className="w-3.5 h-auto" />
              </button>
              <div className="text-sm text-neutral-500">1,869</div>
            </div>
            <div className="flex items-start gap-1">
              <button>
                <img src="../../public/images/tweet-actions/stats.svg" className="w-3.5 h-auto" />
              </button>
              <div className="mt-0.5 text-sm self-end text-neutral-500">99.6k</div>
            </div>
            <div className="flex items-center">
              <button>
                <img src="../../public/images/tweet-actions/share.svg" className="w-3.5 h-auto" />
              </button>
            </div>
          </div>
        </div>
      </article>
      <article className="flex text-neutral-50 border-b border-neutral-700 w-full px-4 py-2 bg-black round">
        <img src="../../public/images/user-avatars/user-avatar-3.png" className="w-12 h-12 mt-1 rounded-full" />
        <div className="ml-4 w-full">
          <div className="flex p-0">
            <div className="mr-2 font-semibold">Name</div>
            <div className="mr-1 text-neutral-500">@handle</div>
            <div className="mr-1 text-neutral-500">•</div>
            <div className="mr-1 text-neutral-500">10h</div>
          </div>
          <p className="text-15 mb-2">
            i've seen people absolutely despise auto layout in figma but i think it's a lifesaver-
            <br /> 
            1. tidies everything nice and compact 
            <br />
            2. makes responsive design effortless 
            <br />
            3. no manual adjustments post any tweaks
            <br /> 
            4. saves a tonnn of time
          </p><p className="mt-3">sorry, but will stay an auto layout maxi all life.</p>
          <p />
          {/* Actions */}
          <div className="flex w-full justify-between my-4">
            <div className="flex items-center gap-1">
              <button>
                <img src="../../public/images/tweet-actions/comment.svg" className="w-3.5 h-auto" />
              </button>
              <div className="text-sm text-neutral-500">11</div>
            </div>
            <div className="flex items-center gap-1">
              <button>
                <img src="../../public/images/tweet-actions/rt.svg" className="w-4 h-auto" />
              </button>
              <div className="text-sm text-neutral-500">270</div>
            </div>
            <div className="flex items-center gap-1">
              <button>
                <img src="../../public/images/tweet-actions/heart.svg" className="w-3.5 h-auto" />
              </button>
              <div className="text-sm text-neutral-500">1,869</div>
            </div>
            <div className="flex items-start gap-1">
              <button>
                <img src="../../public/images/tweet-actions/stats.svg" className="w-3.5 h-auto" />
              </button>
              <div className="mt-0.5 text-sm self-end text-neutral-500">99.6k</div>
            </div>
            <div className="flex items-center">
              <button>
                <img src="../../public/images/tweet-actions/share.svg" className="w-3.5 h-auto" />
              </button>
            </div>
          </div>
        </div>
      </article>
      <article className="flex text-neutral-50 border-b border-neutral-700 w-full px-4 py-2 bg-black round">
        <img src="../../public/images/user-avatars/user-avatar-1.png" className="w-12 h-12 mt-1 rounded-full" />
        <div className="ml-4 w-full">
          <div className="flex p-0">
            <div className="mr-2 font-semibold">Name</div>
            <div className="mr-1 text-neutral-500">@handle</div>
            <div className="mr-1 text-neutral-500">•</div>
            <div className="mr-1 text-neutral-500">10h</div>
          </div>
          <p className="text-15 mb-2">
            Writing gets easier after the first sentence.
          </p><p className="mt-3">Lifting gets easier after the first set.</p>
          <p className="mt-3">People think and think and think until they finally decide to act. 
            Their attention shifts from internal to external, and the difficulty they created in their mind vanishes.
          </p>
          <p />
          {/* Actions */}
          <div className="flex w-full justify-between my-4">
            <div className="flex items-center gap-1">
              <button>
                <img src="../../public/images/tweet-actions/comment.svg" className="w-3.5 h-auto" />
              </button>
              <div className="text-sm text-neutral-500">11</div>
            </div>
            <div className="flex items-center gap-1">
              <button>
                <img src="../../public/images/tweet-actions/rt.svg" className="w-4 h-auto" />
              </button>
              <div className="text-sm text-neutral-500">270</div>
            </div>
            <div className="flex items-center gap-1">
              <button>
                <img src="../../public/images/tweet-actions/heart.svg" className="w-3.5 h-auto" />
              </button>
              <div className="text-sm text-neutral-500">1,869</div>
            </div>
            <div className="flex items-start gap-1">
              <button>
                <img src="../../public/images/tweet-actions/stats.svg" className="w-3.5 h-auto" />
              </button>
              <div className="mt-0.5 text-sm self-end text-neutral-500">99.6k</div>
            </div>
            <div className="flex items-center">
              <button>
                <img src="../../public/images/tweet-actions/share.svg" className="w-3.5 h-auto" />
              </button>
            </div>
          </div>
        </div>
      </article>
      <article className="flex text-neutral-50 border-b border-neutral-700 w-full px-4 py-2 bg-black round">
        <img src="../../public/images/user-avatars/user-avatar-3.png" className="w-12 h-12 mt-1 rounded-full" />
        <div className="ml-4 w-full">
          <div className="flex p-0">
            <div className="mr-2 font-semibold">Name</div>
            <div className="mr-1 text-neutral-500">@handle</div>
            <div className="mr-1 text-neutral-500">•</div>
            <div className="mr-1 text-neutral-500">10h</div>
          </div>
          <p className="text-15 mb-2">
            i've seen people absolutely despise auto layout in figma but i think it's a lifesaver-
            <br /> 
            1. tidies everything nice and compact 
            <br />
            2. makes responsive design effortless 
            <br />
            3. no manual adjustments post any tweaks
            <br /> 
            4. saves a tonnn of time
          </p><p className="mt-3">sorry, but will stay an auto layout maxi all life.</p>
          <p />
          {/* Actions */}
          <div className="flex w-full justify-between my-4">
            <div className="flex items-center gap-1">
              <button>
                <img src="../../public/images/tweet-actions/comment.svg" className="w-3.5 h-auto" />
              </button>
              <div className="text-sm text-neutral-500">11</div>
            </div>
            <div className="flex items-center gap-1">
              <button>
                <img src="../../public/images/tweet-actions/rt.svg" className="w-4 h-auto" />
              </button>
              <div className="text-sm text-neutral-500">270</div>
            </div>
            <div className="flex items-center gap-1">
              <button>
                <img src="../../public/images/tweet-actions/heart.svg" className="w-3.5 h-auto" />
              </button>
              <div className="text-sm text-neutral-500">1,869</div>
            </div>
            <div className="flex items-start gap-1">
              <button>
                <img src="../../public/images/tweet-actions/stats.svg" className="w-3.5 h-auto" />
              </button>
              <div className="mt-0.5 text-sm self-end text-neutral-500">99.6k</div>
            </div>
            <div className="flex items-center">
              <button>
                <img src="../../public/images/tweet-actions/share.svg" className="w-3.5 h-auto" />
              </button>
            </div>
          </div>
        </div>
      </article>
      <article className="flex text-neutral-50 border-b border-neutral-700 w-full px-4 py-2 bg-black round">
        <img src="../../public/images/user-avatars/user-avatar-3.png" className="w-12 h-12 mt-1 rounded-full" />
        <div className="ml-4 w-full">
          <div className="flex p-0">
            <div className="mr-2 font-semibold">Name</div>
            <div className="mr-1 text-neutral-500">@handle</div>
            <div className="mr-1 text-neutral-500">•</div>
            <div className="mr-1 text-neutral-500">10h</div>
          </div>
          <p className="text-15 mb-2">
            i've seen people absolutely despise auto layout in figma but i think it's a lifesaver-
            <br /> 
            1. tidies everything nice and compact 
            <br />
            2. makes responsive design effortless 
            <br />
            3. no manual adjustments post any tweaks
            <br /> 
            4. saves a tonnn of time
          </p><p className="mt-3">sorry, but will stay an auto layout maxi all life.</p>
          <p />
          {/* Actions */}
          <div className="flex w-full justify-between my-4">
            <div className="flex items-center gap-1">
              <button>
                <img src="../../public/images/tweet-actions/comment.svg" className="w-3.5 h-auto" />
              </button>
              <div className="text-sm text-neutral-500">11</div>
            </div>
            <div className="flex items-center gap-1">
              <button>
                <img src="../../public/images/tweet-actions/rt.svg" className="w-4 h-auto" />
              </button>
              <div className="text-sm text-neutral-500">270</div>
            </div>
            <div className="flex items-center gap-1">
              <button>
                <img src="../../public/images/tweet-actions/heart.svg" className="w-3.5 h-auto" />
              </button>
              <div className="text-sm text-neutral-500">1,869</div>
            </div>
            <div className="flex items-start gap-1">
              <button>
                <img src="../../public/images/tweet-actions/stats.svg" className="w-3.5 h-auto" />
              </button>
              <div className="mt-0.5 text-sm self-end text-neutral-500">99.6k</div>
            </div>
            <div className="flex items-center">
              <button>
                <img src="../../public/images/tweet-actions/share.svg" className="w-3.5 h-auto" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  </main>
  {/* <div class="w-full fixed bottom-16 ">
  <div class="text-neutral-50 text-15 w-fit my-3 mx-auto p-4 bg-search-bar-fill rounded-full">
      Copied to clipboard
  </div>
    </div> */}
  <a href="../../src/ComposeTweet/Compose.html" className="mx-3 my-3 fixed bottom-16 right-0 p-4 rounded-full bg-twitter-blue">
    <img src="../../public/images/home-screen/add.svg" />
  </a>
  <footer className="fixed bottom-0 py-4 px-6 bg-black w-full border-t border-neutral-800">
    <nav>
      <ul className="flex justify-center gap-10">
        <li>
          <a href>
            <button>
              <img src="../../public/images/home-screen/home-icon.svg" />
            </button>
          </a>
        </li>
        <li>
          <a href="../../src/User Profile/Frontpage.html">
            <button className>
              <img src="../../public/images/home-screen/profile.svg" className="p-1" />
            </button>
          </a>
        </li>
      </ul>
    </nav>
  </footer>
</div>

    )
}