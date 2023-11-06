import {
  CustomerReviews,
  Footer,
  Hero,
  Navbar,
  PopularProdcuts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from './sections';
const App = () =>(
  <main className="relative">
  <Navbar/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProdcuts/>
     <section/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
      </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews/>
      </section>
    <section className="padding-x sm:py-32 py-16 w-full">
     <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t">
      <Footer/>
    </section>
  </main>
)
export default App;