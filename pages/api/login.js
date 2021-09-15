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
        // const setCookie = [];
        // const serializeCookie = (key, value, hrs) => {
        //   if ('number' == typeof value) value = val.toString();
        //   if ('object' == typeof value) value = JSON.stringify(val);
        //   return cookie.serialize(key, value, { expires: new Date(Date.now() + 7200000), httpOnly: true });
        // };
        // const setMultipleCookies = (res) => {
        //   setCookie.push(serializeCookie('user_id', result.id));
        //   setCookie.push(serializeCookie('user_role', result.role));
        //   setCookie.push(serializeCookie('user_image', result.image));
        //   setCookie.push(serializeCookie('user_isAuth', true));
        //   setCookie.push(serializeCookie('token', result.token));
        //   res.setHeader('Set-Cookie', setCookie);
        // };
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.setHeader('Set-Cookie', [
          cookie.serialize('token', result.token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7200000,
            path: '/'
          }),
          cookie.serialize('user_id', result.id, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7200000,
            path: '/'
          }),
          cookie.serialize('user_role', result.role, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7200000,
            path: '/'
          }),
          cookie.serialize('user_isAuth', true, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7200000,
            path: '/'
          }),
        ])
        // setMultipleCookies(res);
        res.status(200);
        res.json({ data: result });
      })
      .catch((error) => {
        console.log(error, 'erpr');
      });
  }
};
export default login;
