function AboutMe() {
    return (
        <>
          <div className ="bg-white rounded-lg shadow-md lg:col-span-2">
          <img
            src="https://hbr.org/resources/images/article_assets/2014/10/Mar20_05_1187745190.jpg"
            alt=""
            className="object-cover w-full rounded-t-lg h-80"
          />
          <div className="p-8">
           <h2 className = "font-mont font-bold text-4xl color text-slate-600 text-center"> About Me</h2>
            <div className="rounded-lg bg-slate-300 p-4 shadow-2xl sm:flex" id = "AboutMe">
              <div className="flex justify-items-center gap-2">
                <img
                  className="h-15 w-15 rounded-full object-cover p-3"
                  src="https://image.shutterstock.com/image-vector/stream-binary-matrix-code-on-600w-1043394892.jpg"
                />
                <span> D.A.Lederman </span>
              </div>
              <div className="mt-4">
                <p
                  className="italic font-thin mt-2 flex flex-col justify-between py-6 space-y-6 md:pr-10"
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Asperiores, voluptatibus corrupti quod similique, doloribus
                  culpa delectus reprehenderit voluptatum perspiciatis assumenda
                  quaerat. Autem, tenetur. Animi officia, inventore modi obcaecati
                  maiores ipsa."
                </p>
                <span className="text-sm text-emerald-900">Jiriaya Sensei</span>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}




export default AboutMe;