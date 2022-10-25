// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: 'Galaxy Library',
    description: 'A library for the Galaxy community',
    version: '0.0.1',
    guided_by: 'Abhishek Kushwaha',
    created_by: 'Codedamn Team',
    github_link: 'https://github.com/Abbhiishek/galaxy-library'
  })
}
