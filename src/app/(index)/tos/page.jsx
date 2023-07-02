import BackToTop from "@/components/BackToTop/BackToTop";


export const metadata = {
  title: 'Terms & Conditions | UCode Clinic',
  description: 'UCode Clinic Terms & Conditions Page'
};

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/tos')

  if(!res.ok){
      throw new Error('Something went wrong while fetching data.');
  }

  return res.json();
}
const ToSPage = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div className='max-w-full mx-auto bg-emerald-200'>
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-emerald-900 md:text-5xl lg:text-6xl ">Terms & Conditions</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">UCode School Clinic License</p>
            </div>
        </section>
        <div className='bg-green-200 pt-10'>
          {data.map(item => (
              <div className='max-w-screen-2xl mx-auto pb-10'>
                  <p class="mb-3 text-lg text-gray-500 md:text-xl text-green-500"><strong>{item.title}</strong></p>
                  <p class="text-gray-500">{item.description}</p>
              </div>
          ))}
        </div>
        <BackToTop/>
    </div>
  )
}

export default ToSPage