import cookies from "next-cookies";

export function privateRouteAdmin(getServerSideProps) {
  return async (ctx) => {
    const req = ctx;
    const isAuth = cookies(req).user_isAuth;
    const role = cookies(req).user_role;
    if (isAuth !== "true") {
      return {
        redirect: {
          permanent: false,
          destination: `/auth/login`,
        },
      };
    } else if (isAuth === "true" && role === "custommer") {
      return {
        redirect: {
          permanent: false,
          destination: `/product`,
        },
      };
    }
    return await getServerSideProps(ctx);
  };
}
