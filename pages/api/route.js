export default async function handler(req, res) {
  const jsonBody = req.body;
  
  if(jsonBody.req === 'en10') { //en10 mağaza ürün liste

      /* console.log(jsonBody.data); */

      const response = await en10_all(jsonBody.data);
      /* console.log("userKey - response: ", response); */
      if(response == "hoodini") {
          res.status(500).send(false);
      }
      else {
          res.status(200).json(response);
      }
     
  } 
}

async function en10_all(req) {
    
  const { t, ...rest } = req;
  const url = "http://localhost:3131/en10_" + t;

  const returnFromNode = await fetch(url, {
      method: 'POST', // HTTP yöntemi
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          ...rest
      })
  })
  .then(async(response) => {
      if (!response.ok) {
          //throw new Error('Ağ yanıtı hatası oldu');
          /* console.log(response); */
          return "hoodini";
      }
      return await response.json();
  })
  .then(data => {
      return data;
  })
  .catch(error => {
      console.error('Hata:', error);
  });

  /* const data = await returnFromNode.json();
  console.log("data: ", data); */

  return returnFromNode;
}
