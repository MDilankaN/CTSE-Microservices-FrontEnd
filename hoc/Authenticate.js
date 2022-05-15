import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function privateRoute(ComposedComponent, roles = [""]) {
  const Authentication = (props) => {
    const [loaded, setLoaded] = useState(false);
    const { isAuthenticated } = useSelector((store) => store?.user);
    const router = useRouter();

    useEffect(() => {
      _checkAndRedirect();
    }, [isAuthenticated]);

    const _checkAndRedirect = async () => {
      if (isAuthenticated) {
        setLoaded(true);
        return;
      }
      if (isAuthenticated === false) {
        setLoaded(true);
        router.push(`/login`); ///login
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
        {loaded && isAuthenticated ? <ComposedComponent {...props} /> : null}
      </div>
    );
  };
  return Authentication;
}
