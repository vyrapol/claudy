import { supabase } from '../../src/utils/supabase.js';

export default async (req, res) => {
  if (req.method === 'GET') {
    let { data, error } = await supabase.from('posts').select();
    res.json({
      method: 'GET',
      message: 'Howdy, watchu doing here lil bro ?',
      query: req.query,
      parent: 'https://khemarak-lyrics.vercel.app/',
      page: 'https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p',
      official_site: 'https://sourcemusic.com/artist/profile/LE%20SSERAFIM',
      results: data,
      error,
    });
  } else if (req.method === 'POST') {
    const { name, tag, description } = req.body;
    if (!name || !tag || !description) {
      return res.status(400).json({
        error:
          'One of these fields is required [ name ] or [ tag ] or [ description ]',
      });
    }
    let { data, error, statusText } = await supabase
      .from('posts')
      .insert([{ ...req.body }])
      .select();
    res.json({
      method: 'POST',
      results: data,
      error,
      statusText,
    });
  } else {
    res.json({
      error: 'Method not supported',
      redirectUrl: 'https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p',
    });
  }
};
