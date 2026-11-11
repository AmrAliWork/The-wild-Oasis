import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1 load auth user
  const { isAuthenticated, isPending } = useUser();

  // 2 if there is no user redirect to login
  useEffect(
    function () {
      if (!isAuthenticated && !isPending) return navigate("/login");
    },
    [isAuthenticated, isPending, navigate],
  );

  // if isLoading return spin
  if (isPending)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  //if isAuth redirect to app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
