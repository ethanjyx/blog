import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl tracking-tighter">
        Ethan Jiang
      </h1>
      <p className="mb-4">
        {`I'm founder of `}
        <a href="https://tight.studio/" className="underline">Tight Studio</a>
        {`, an AI native screen recorder to help people make product demos easily.`}
      </p>
      <br/>
      <p className="mb-2">Previously:</p>
      <ul className="mb-4 list-disc list-inside">
        <li>Founding engineer and eng manager at Klarity.ai (raised $70m series B from NFDG)</li>
        <li>Founding engineer at Covariant.ai (acqui-hired by Amazon)</li>
        <li>Software engineer at Meta</li>
      </ul>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
