export default {
  title: 'Photography is the story I fail to put into words',
  lead:
    'Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.',
  preview: () => require('~/assets/images/blog/image-2.jpg'),
  body:
    '<p>To me, photography is an art of observation. It’s about finding something interesting in an ordinary place… I’ve found it has little to do with the things you see and everything to do with the way you see them. — Elliott Erwitt</p><p><span>Integer legentibus erat a ante historiarum dapibus.</span> <span>Etiam habebis sem dicantur magna mollis euismod.</span> <span>Quo usque tandem abutere, Catilina, patientia nostra?</span></p><p><span>Nihil hic munitissimus habendi senatus locus, nihil horum?</span> <span>Quae vero auctorem tractata ab fiducia dicuntur.</span> <span>Idque Caesaris facere voluntate liceret: sese habere.</span></p>',
  author: {
    name: 'Mathew Carter',
    info:
      'Excepteur sint obcaecat cupiditat non proident culpa. Ut enim ad minim veniam, quis nostrud exercitation. Sed haec quis possit intrepidus aestimare tellus.',
    links: [
      {
        title: 'Twitter',
        icon: 'twitter',
        color: '#1da1f2',
        url: 'https://twitter.com/'
      },
      {
        title: 'Facebook',
        icon: 'facebook',
        color: '#3b5998',
        url: 'https://facebook.com'
      },
      {
        title: 'Instagram',
        icon: 'instagram',
        color: '#c13584',
        url: 'https://instagram.com'
      }
    ],
    image: () => require('~/assets/images/blog/author.jpg')
  },
  images: [
    {
      id: '106a76df-7e38-4fbd-9dd1-bfd13e14894b',
      title: 'Hong Kong',
      description: 'Photography by Sean Foley',
      image: () => require('~/assets/images/blog/post-image-1.jpg')
    }
  ],
  gallery: [
    {
      id: 'c4bc3d3b-83c8-419a-9c39-4b5f0d99e1ce',
      title: 'Hong Kong Space Museum',
      description: 'Photo by Michael Rivera',
      image: () => require('~/assets/images/blog/gallery-1.jpg')
    },
    {
      id: '89b5f40f-23f8-4cc2-8fc5-9e25ebdec42e',
      title: 'Busy night in Hongkong',
      description: 'Photo by Florian Wehde',
      image: () => require('~/assets/images/blog/gallery-2.jpg')
    },
    {
      id: 'eb56286e-10ab-4f05-bac2-41aa2565c384',
      title: 'Tokyo, Japan',
      description: 'Photo by Simon Zhu',
      image: () => require('~/assets/images/blog/gallery-3.jpg')
    }
  ],
  comments: [
    {
      id: '3de134b0-d8c5-4355-9c1a-d63eb9b79e4c',
      user: {
        image: () => require('~/assets/images/user1.jpg'),
        thumb: () => require('~/assets/images/user1.jpg?size=80'),
        name: 'Travis Martinez'
      },
      body:
        'Curabitur blandit tempus ardua ridiculus sed magna. A communi observantia non est recedendum. Nihil hic munitissimus habendi senatus locus, nihil horum?',
      created: '2020-06-20T18:30:40+03:00'
    },
    {
      id: 'c803c9c8-16d3-491f-b426-969c15cac6c4',
      user: {
        image: () => require('~/assets/images/user2.jpg'),
        thumb: () => require('~/assets/images/user2.jpg?size=80'),
        name: 'Scott Bronson'
      },
      body:
        'Quam temere in vitiis, legem sancimus haerentia. Nihil hic munitissimus habendi senatus locus, nihil horum? Cum ceteris in veneratione tui montes, nascetur mus.',
      created: '2020-06-21T21:21:00+03:00',
      comments: [
        {
          id: '7cb9c6c3-f44d-4416-9fdd-f8612e2c98c1',
          user: {
            image: () => require('~/assets/images/user3.jpg'),
            thumb: () => require('~/assets/images/user3.jpg?size=80'),
            name: 'Cindy Baker'
          },
          body:
            'Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cum sociis natoque penatibus et magnis dis parturient.',
          created: '2020-06-22T10:11:30+08:00'
        }
      ]
    },
    {
      id: '296e031c-f7aa-4ccc-a39a-f956eafb403f',
      user: {
        image: () => require('~/assets/images/user4.jpg'),
        thumb: () => require('~/assets/images/user4.jpg?size=80'),
        name: 'Julianne Lemond'
      },
      body:
        'Praeterea iter est quasdam res quas ex communi. Cum ceteris in veneratione tui montes, nascetur mus. Curabitur est gravida et libero vitae dictum. Gallia est omnis divisa in partes tres, quarum. Quam temere in vitiis, legem sancimus haerentia. Qui ipsorum lingua Celtae, nostra Galli appellantur.',
      created: '2020-06-23T01:10:23+09:00'
    }
  ]
}
