import cookies from "next-cookies";

export function privateRoute(getServerSideProps) {
  return async (ctx) => {
      const  req  = ctx;
    const isAuth = cookies(req).user_isAuth;
    if (isAuth !== "true") {
      return {
        redirect: {
          permanent: false,
          destination: `/login`,
        },
      };
    }
    return await getServerSideProps(ctx)
  }
}
