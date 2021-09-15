// import axios from 'axios';
import backendApi from '../../configs/api/backendApi';
import cookie from 'cookie';
const login = (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const data = {
      email,
      password,
    };
    backendApi
      .post('/login', data)
      .then((response) => {
        console.log(response, ' respone login');
        const result = response.data.user;
        const setCookie = [];
        const serializeCookie = (key, value, hrs) => {
          if ('number' == typeof value) value = val.toString();
          if ('object' == typeof value) value = JSON.stringify(val);
          return cookie.serialize(key, value, { expires: new Date(Date.now() + 1000 * 3600 * hrs), httpOnly: true });
        };
        const setMultipleCookies = (res) => {
          setCookie.push(serializeCookie('token', result.token, 24));
          setCookie.push(serializeCookie('user_id', result.user_id, 24));
          setCookie.push(serializeCookie('user_role', result.user_role, 24));
          setCookie.push(serializeCookie('user_image', result.user_image, 24));
          setCookie.push(serializeCookie('user_isAuth', true, 24));
          res.setHeader('Set-Cookie', setCookie);
        };
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        setMultipleCookies();
        res.status(200);
        res.json({ data: result });
      })
      .catch((error) => {
        console.log(error, 'erpr');
      });
  }
};
export default login;
