<template>
  <div>
    <Section id="AboutIntro" class="head space--bottom">
      <transition name="fade" appear>
        <b-container>
          <b-row>
            <b-col class="mx-auto" cols="12" lg="10">
              <article class="content">
                <h1 class="mb-4">About</h1>
                <p class="lead mb-4">
                  Welcome to PhotoScope, your number one source for all things
                  premium photography. We are committed to providing you with
                  the best stock photography focused on reliability, customer
                  service and customer satisfaction.
                </p>
              </article>
            </b-col>
          </b-row>
        </b-container>
      </transition>
    </Section>

    <transition name="fade" appear style="transition-delay: 350ms;">
      <Section id="AboutHero">
        <b-container fluid>
          <b-row>
            <b-col :cols="12">
              <figure :style="{ position: 'relative', paddingTop: paddingTop }">
                <lazy-image
                  alt="Team image"
                  class="position-absolute"
                  style="top: 0; left: 0;"
                  :lazy-srcset="image.srcSet"
                  :placeholder="image.placeholder"
                  :lazy-src="image.src"
                  :width="image.width"
                  :height="image.height"
                />
                <figcaption>
                  <p class="text-center text-muted font-weight-light">
                    <small>
                      <i>
                        Kimberly Henderson, Founder of PhotoScope
                      </i>
                    </small>
                  </p>
                </figcaption>
              </figure>
            </b-col>
          </b-row>
        </b-container>
      </Section>
    </transition>

    <transition name="fade" style="transition-delay: 350ms;">
      <Section id="AboutInfo" class="space--top--half">
        <b-container>
          <b-row>
            <b-col class="mx-auto" cols="12" lg="10">
              <article class="content">
                <p>
                  We're working to turn our passion for photography into a
                  booming online store. We hope you enjoy our products as much
                  as we enjoy offering them to you.
                </p>

                <blockquote class="blockquote">
                  <p class="mb-2">
                    Photography is a way of feeling, of touching, of loving.
                    What you have caught on film is captured forever… It
                    remembers little things, long after you have forgotten
                    everything.
                  </p>
                  <footer class="blockquote-footer">
                    Famous Photographer,
                    <cite title="Aaron Siskind">Aaron Siskind</cite>
                  </footer>
                </blockquote>

                <p>
                  Praeterea iter est quasdam res quas ex communi. Cras mattis
                  iudicium purus sit amet fermentum. Hi omnes lingua,
                  institutis, legibus inter se differunt. Unam incolunt Belgae,
                  aliam Aquitani, tertiam. Magna pars studiorum, prodita
                  quaerimus. Quo usque tandem abutere, Catilina, patientia
                  nostra? Cum sociis natoque penatibus et magnis dis parturient.
                </p>
              </article>
            </b-col>
          </b-row>
        </b-container>
      </Section>
    </transition>

    <transition name="fade" style="transition-delay: 950ms;">
      <Section id="AboutClients" class="space--top--half space--bottom">
        <b-container>
          <div class="content">
            <p class="text-center mb-4">
              <i>
                You can see some of our partners below, would you like to join
                us?
              </i>
            </p>
          </div>
          <clients-logo />
        </b-container>
      </Section>
    </transition>

    <Section id="AboutTestimonials" class="bg-light space--top space--bottom">
      <b-container class="py-4">
        <b-row class="mb-3 pb-2">
          <b-col class="text-center">
            <h2 class="h5">Trusted by Users All Over the World</h2>
          </b-col>
        </b-row>
        <Testimonials :testimonials="testimonials" />
      </b-container>
    </Section>

    <!-- <section id="WorkingProcess" class="mt-4 pt-4">
      <b-container>
        <WorkingProcess />
      </b-container>
    </section> -->

    <Section id="contactForm" class="space">
      <b-container>
        <b-row class="my-4">
          <b-col :cols="12" :offset="0" :lg="6" :offset-lg="3">
            <div class="mb-4">
              <h3 class="h2">Get in Touch</h3>
              <p class="lead">Have any questions?</p>
            </div>
            <ContactForm />
          </b-col>
        </b-row>
      </b-container>
    </Section>
  </div>
</template>
<script>
const PhotoOne = () => import('~/assets/images/persone-1.jpg')

export default {
  name: 'About',
  layout: 'main',
  components: {
    LazyImage: () => import('~/components/LazyImage.vue'),
    // WorkingProcess: () => import('~/components/WorkingProcess.vue'),
    ClientsLogo: () => import('~/components/ClientsLogo.vue'),
    Testimonials: () => import('~/components/Testimonials.vue'),
    ContactForm: () => import('~/components/ContactForm.vue'),
    Section: () => import('~/components/Section.vue')
  },
  async asyncData(context) {
    const image = await PhotoOne().then((M) => M)
    const paddingTop = `calc(${image.height} / ${image.width} * 100%)`
    // const logos = await Logos().then((L) => L)
    // console.log('logos', logos)
    return { image, paddingTop }
  },
  data() {
    return {
      pageTitle: 'About',
      pageDescription:
        'Welcome to PhotoScope, your number one source for all things premium photography. We are committed to providing you with the best stock photography focused on reliability, customer service and customer satisfaction.',
      testimonials: [
        {
          name: 'Michael Hunter',
          image: () => require('~/assets/images/client3.jpg'),
          company: 'Netflix',
          occupation: 'Sales Manager',
          body:
            "Stock photography has really helped our business. I have gotten at least 50 times the value from stock. It's all good. You can be sure that Stock photography is an industry where you get your money's worth."
        },
        {
          name: 'Mary Garcia',
          image: () => require('~/assets/images/client1.jpg'),
          company: 'Umbrella Inc.',
          occupation: 'Sales Engineer',
          body:
            "It's incredible. No matter where you go, Photography is the coolest, most happening thing around! Without photography, it would not be possible to grow our business so much."
        },
        {
          name: 'Lucille McCraney',
          image: () => require('~/assets/images/client2.jpg'),
          company: 'ACME',
          occupation: 'Founder',
          body:
            "Custom photography is the most valuable business resource we have evet purchased. It's just amazing. You won't regret it."
        }
      ]
    }
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.pageDescription
        },
        { hid: 'og:title', name: 'og:title', content: this.pageTitle },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.pageDescription
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.image.images.slice(-1).pop().path || ''
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.pageTitle
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.pageDescription
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image.images.slice(-1).pop().path || ''
        }
      ]
    }
  }
}
</script>
