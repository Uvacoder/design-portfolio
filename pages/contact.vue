<template>
  <div>
    <Section id="contactHeader" class="head space--bottom">
      <b-container>
        <b-row>
          <b-col>
            <h1>Contact</h1>
            <p class="lead">
              Have any questions?
            </p>
          </b-col>
        </b-row>
      </b-container>
    </Section>
    <Section class="space--bottom">
      <b-container>
        <b-row>
          <b-col :cols="12" :lg="6" class="mb-5">
            <ContactForm />
          </b-col>

          <b-col>
            <b-row class="justify-content-center">
              <b-col :cols="12" :md="6" :lg="6">
                <div
                  class="d-flex align-items-baseline justify-content-center mb-4"
                >
                  <p class="mb-0 mr-2">
                    <span class="sr-only">Address </span>
                    <unicon name="map-marker" fill="currentColor" />
                  </p>
                  <div
                    itemprop="address"
                    itemscope
                    itemtype="http://schema.org/PostalAddress"
                  >
                    <span itemprop="streetAddress">
                      332 Arrowood Drive
                    </span>
                    <br />
                    <span itemprop="addressLocality">Jacksonville</span>,
                    <span itemprop="addressRegion">FL</span>
                    <span itemprop="postalCode">32258</span>
                  </div>
                </div>
              </b-col>

              <b-col :cols="12" :md="6" :lg="6">
                <div
                  class="d-flex align-items-baseline justify-content-center mb-4"
                >
                  <p class="mb-0 mr-2">
                    <span class="sr-only">Phone</span>
                    <unicon name="phone" fill="currentColor" />
                  </p>
                  <div itemscope itemtype="http://schema.org/LocalBusiness">
                    <p class="mb-0">
                      <span itemprop="telephone">
                        <a href="tel:+18506484200">850-100-2030</a>
                      </span>
                    </p>
                    <p class="mb-0">
                      <span itemprop="telephone">
                        <a href="tel:+19045377356">850-100-2032</a>
                      </span>
                    </p>
                  </div>
                </div>
              </b-col>

              <b-col :cols="12" :md="6" :lg="6">
                <div
                  class="d-flex align-items-baseline justify-content-center mb-4"
                >
                  <p class="mb-0 mr-2">
                    <span class="sr-only">Opening hours</span>
                    <unicon name="store" fill="currentColor" />
                  </p>
                  <div>
                    <p>
                      <b>Mo-Fr</b> 10AM - 7PM <br />
                      <b>Sa-Su</b> 12AM - 7PM <br />
                    </p>
                    <meta itemprop="openingHours" content="Mo-Fr 10:00-19:00" />
                    <meta itemprop="openingHours" content="Sa 12:00-19:00" />
                    <meta itemprop="openingHours" content="Su 12:00-19:00" />
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col :cols="12">
                <SocialMediaLinksInline class="mb-5 mb-lg-0" />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </Section>
  </div>
</template>
<script>
const smImage = () => import('~/assets/images/contact-socialmedia.jpg')
export default {
  name: 'Contact',
  layout: 'main',
  transition: 'fade',
  components: {
    // LazyImage: () => import('~/components/LazyImage.vue'),
    Section: () => import('~/components/Section.vue'),
    ContactForm: () => import('~/components/ContactForm.vue'),
    SocialMediaLinksInline: () =>
      import('~/components/SocialMediaLinksInline.vue')
  },
  async asyncData(ctx) {
    const socialMediaImage = await smImage().then(
      (m) => m.images.slice(-1).pop().path
    )
    return { socialMediaImage }
  },
  data() {
    return {
      pageTitle: 'Contact',
      pageDescription: 'Have any questions?'
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
          content: this.socialMediaImage
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
          content: this.socialMediaImage
        }
      ]
    }
  }
}
</script>
<style lang="sass" scoped>
a
  @include media-breakpoint-down(sm)
    line-height: 2
</style>
