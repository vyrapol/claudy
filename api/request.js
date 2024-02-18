export default (req, res) => {
    res.json({
      message: 'Howdy, watchu doing here lil bro ?',
      query: req.query,
      parent: 'https://khemarak-lyrics.vercel.app/',
      page: 'https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p',
      official_site: 'https://sourcemusic.com/artist/profile/LE%20SSERAFIM'
    })
  }