import backendApi from '../../configs/api/backendApi';
import cookie from 'cookie';
const logout = (req, res) => {
  if (req.method === 'GET') {
    backendApi
      .get('logout')
      .then(() => {
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.setHeader('Set-Cookie', [
          cookie.serialize('token', '', {
            // httpOnly: true,
            // secure: true,
            // sameSite: 'strict',
            maxAge: 0,
            path: '/',
          }),
          cookie.serialize('user_id', '', {
            // httpOnly: true,
            // secure: true,
            // sameSite: 'strict',
            maxAge: 0,
            path: '/',
          }),
          cookie.serialize('user_role', '', {
            // httpOnly: true,
            // secure: true,
            // sameSite: 'strict',
            maxAge: 0,
            path: '/',
          }),
          cookie.serialize('user_isAuth', '', {
            // httpOnly: true,
            // secure: true,
            // sameSite: 'strict',
            maxAge: 0,
            path: '/',
          }),
        ]);

        res.status(200);
        res.json({ success: true });
      })
      .catch((error) => {
        console.log(error, 'error logout');
      });
  }
};
export default logout;
