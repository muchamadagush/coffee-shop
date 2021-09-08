import cookies from "next-cookies";

export function publicRoute(getServerSideProps) {
  return async (ctx) => {
      const  req  = ctx;
    const isAuth = cookies(req).user_isAuth;
    const role = cookies(req).user_role;
    if (isAuth !== "true") {
      return {
        redirect: {
          permanent: false,
          destination: `/auth/login`,
        },
      };
    }
    return await getServerSideProps(ctx)
  }
}
