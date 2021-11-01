const apiList = []

export default function handler(req, res) {
  if (req.method === 'POST' ) {
    const { listItem } = req.body
    apiList.push(listItem)
    res.status(201).json(apiList)
    }

  else if (req.method === 'GET') {
    res.status(200).json(apiList)
  }

  else{
    res.status(400)
  }
}