import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ROUTES } from "../../shared/constants";

export default function privateRoute(ComposedComponent, roles = [""]) {
  const Authentication = (props) => {
    const [loaded, setLoaded] = useState(false);
    const { authenticated, user } = useSelector((store) => store?.user);
    const router = useRouter();

    useEffect(() => {
      _checkAndRedirect();
    }, [authenticated]);

    const _checkAndRedirect = async () => {
      if (authenticated) {
        setLoaded(true);
        return;
      }
      if (authenticated === false) {
        setLoaded(true);
        router.push(`/${ROUTES.LOGIN}`); ///login
        return;
      }
    };
    return (
      <div>
        {!loaded && (
          <div className="h-screen flex">
            <div className="m-auto">loading</div>
          </div>
        )}
        {loaded && authenticated ? <ComposedComponent {...props} /> : null}
      </div>
    );
  };
  return Authentication;
}
