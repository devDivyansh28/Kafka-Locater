
import "dotenv/config"

let services = null;

export const getoidcservices =  async ()=>{
    if(services) return services;
    const response = await fetch(
      `${process.env.AUTH_SERVICE_URL}/.well-known/openid-configuration`,
    );
    services = await response.json();
    return services;
    
}

export const getAccessToken = async(code)=>{
  const services = await getoidcservices();
  // console.log('Token endpoint URL:', services.token_endpoint);
  const token_endpoint = `${services.token_endpoint}?code=${code}&client_id=${process.env.CLIENT_ID}`
 
  const response = await fetch(token_endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({client_secret : "Divyansh@123"}),
  });

  const accessToken = await response.json();
  return accessToken;
}

export const getUserInfo = async (req,res,next) =>{
  const access_token = req.cookies.access_token;
  if(access_token){
    
  }
}