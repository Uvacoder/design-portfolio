/**
 * First Main Load
 */
export default (context, duration) => {
  return new Promise((resolve, reject) => {
    context.$anime
      .timeline({
        // duration: 1500,
        easing: 'easeOutExpo'
      })
      // .add({
      //   delay: 1000
      // })
      .add({
        targets: context.$refs.main,
        opacity: [0, 1],
        complete() {
          context.$refs.main.classList.remove('await-animation')
        }
      })
      .add({
        targets: [
          context.$refs.Header.$refs.siteName,
          context.$refs.Header.$refs.siteActionBtn,
          context.$refs.Header.$refs.siteMenu.$refs.siteMenuButton
        ],
        duration: duration || 500,
        translateY: [-30, 0],
        opacity: [0, 1],
        // easing: 'easeOutExpo',
        // easing: 'linear',
        delay: context.$anime.stagger(150)
      })
      // Side Social Link
      .add(
        {
          targets: context.$refs.Social.$refs.socialMediaLinks.children,
          translateY: [-35, 0],
          opacity: [0, 1],
          duration: duration || 500,
          // easing: 'easeOutExpo',
          // easing: 'linear',
          delay: context.$anime.stagger(150)
        },
        '-=400'
      )
      // Footer Controls
      .add({
        targets: context.$refs.Controls.$refs.footerControls,
        duration: duration || 500,
        opacity: 1,
        translateY: [100, 0],
        easing: 'linear',
        // delay: context.$anime.stagger(150),
        complete: () =>
          context.$refs.Controls.$refs.footerControls.classList.remove(
            'animate'
          )
      })
      // Controller Counter
      .add(
        {
          targets: context.$refs.Controls.$refs.footerControlsCounter,
          duration: duration || 500,
          opacity: [0, 1],
          translateY: [100, 0]
        },
        '-=150'
      )
      // Controller Progressbar
      .add(
        {
          targets: context.$refs.Controls.$refs.footerControlsProgress,
          duration: duration || 500,
          opacity: [0, 1],
          translateY: [100, 0],
          width: [0, '100%']
        },
        '-=200'
      )
      // Controller Progressbar wrapper
      .add(
        {
          targets: context.$refs.Controls.$refs.footerControlsProgressWrapper,
          duration: duration || 500,
          width: [0, '100%']
        },
        '-=250'
      )
      // Controller Up/Down Buttons
      .add(
        {
          targets: [
            context.$refs.Controls.$refs.footerControlsButtonsUp,
            context.$refs.Controls.$refs.footerControlsButtonsPlay,
            context.$refs.Controls.$refs.footerControlsButtonsDown
          ],
          duration: duration || 500,
          // easing: 'linear',
          easing: 'easeInOutSine',
          opacity: 1,
          translateY: [100, 0],
          delay: context.$anime.stagger(150),
          complete: () => resolve()
        },
        '-=500'
      )
    // ShareButton
    // .add(
    //   {
    //     targets: context.$refs.ShareButton.$refs.Button,
    //     duration: duration || 800,
    //     opacity: [0, 1],
    //     translateY: [30, 0],
    //     complete: () => resolve()
    //   },
    //   '-=100'
    // )
  })
}
